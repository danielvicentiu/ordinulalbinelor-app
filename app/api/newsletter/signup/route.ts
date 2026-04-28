import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createServiceClient } from "@/lib/supabase/server";
import { newsletterSignupSchema } from "@/lib/validators";
import { ConfirmEmail } from "@/lib/email-templates/confirm";
import { randomUUID } from "crypto";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = newsletterSignupSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.errors[0]?.message || "Date invalide.";
      return NextResponse.json({ ok: false, error: firstError }, { status: 400 });
    }

    const { email, prenume_parinte, copii, consimtamant_gdpr } = parsed.data;

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      null;
    const userAgent = request.headers.get("user-agent") || null;

    const supabase = createServiceClient();
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://ordinulalbinelor.ro";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "staroste@ordinulalbinelor.ro";
    const fromName =
      process.env.RESEND_FROM_NAME || "Ordinul Albinelor";

    const resend = new Resend(process.env.RESEND_API_KEY);

    const normalizedEmail = email.toLowerCase().trim();

    const { data: existing, error: lookupError } = await supabase
      .from("newsletter_subscribers")
      .select("id, status, prenume_parinte")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (lookupError) {
      console.error("DB lookup error:", lookupError);
      return NextResponse.json(
        { ok: false, error: "Pergamentul s-a împotmolit. Încearcă peste un minut." },
        { status: 500 }
      );
    }

    // Already confirmed
    if (existing?.status === "confirmed") {
      return NextResponse.json(
        { ok: true, message: "Ești deja în Ordin. Scrisorile vin către tine." },
        { status: 200 }
      );
    }

    const newToken = randomUUID();
    const confirmUrl = `${siteUrl}/confirma/${newToken}`;

    if (existing?.status === "pending") {
      // Regenerate token and resend
      const { error: updateError } = await supabase
        .from("newsletter_subscribers")
        .update({
          confirm_token: newToken,
          prenume_parinte,
          copii: copii ?? [],
        })
        .eq("id", existing.id);

      if (updateError) {
        console.error("DB update error:", updateError);
        return NextResponse.json(
          { ok: false, error: "Pergamentul s-a împotmolit. Încearcă peste un minut." },
          { status: 500 }
        );
      }

      await resend.emails.send({
        from: `${fromName} <${fromEmail}>`,
        to: normalizedEmail,
        subject: "Sigiliul tău așteaptă — confirmă pergamentul",
        react: ConfirmEmail({ prenume: prenume_parinte, confirmUrl }),
      });

      return NextResponse.json(
        {
          ok: true,
          message: "Ți-am trimis din nou pergamentul de confirmare. Verifică.",
        },
        { status: 200 }
      );
    }

    if (existing?.status === "unsubscribed") {
      // Re-subscribe: update existing row
      const { error: updateError } = await supabase
        .from("newsletter_subscribers")
        .update({
          prenume_parinte,
          copii: copii ?? [],
          status: "pending",
          confirm_token: newToken,
          consimtamant_gdpr,
          consimtamant_data: new Date().toISOString(),
          ip_signup: ip,
          user_agent: userAgent,
          confirmed_at: null,
          unsubscribed_at: null,
        })
        .eq("id", existing.id);

      if (updateError) {
        console.error("DB resubscribe error:", updateError);
        return NextResponse.json(
          { ok: false, error: "Pergamentul s-a împotmolit. Încearcă peste un minut." },
          { status: 500 }
        );
      }

      await resend.emails.send({
        from: `${fromName} <${fromEmail}>`,
        to: normalizedEmail,
        subject: "Sigiliul tău așteaptă — confirmă pergamentul",
        react: ConfirmEmail({ prenume: prenume_parinte, confirmUrl }),
      });

      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // New subscriber
    const { error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email: normalizedEmail,
        prenume_parinte,
        copii: copii ?? [],
        status: "pending",
        confirm_token: newToken,
        consimtamant_gdpr,
        consimtamant_data: new Date().toISOString(),
        ip_signup: ip,
        user_agent: userAgent,
        source: "qr-atelier-clasa-pregatitoare",
      });

    if (insertError) {
      console.error("DB insert error:", insertError);
      return NextResponse.json(
        { ok: false, error: "Pergamentul s-a împotmolit. Încearcă peste un minut." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: normalizedEmail,
      subject: "Sigiliul tău așteaptă — confirmă pergamentul",
      react: ConfirmEmail({ prenume: prenume_parinte, confirmUrl }),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Signup route error:", err);
    return NextResponse.json(
      { ok: false, error: "Pergamentul s-a împotmolit. Încearcă peste un minut." },
      { status: 500 }
    );
  }
}
