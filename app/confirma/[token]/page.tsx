import type { Metadata } from "next";
import Link from "next/link";
import { Resend } from "resend";
import { createServiceClient } from "@/lib/supabase/server";
import { WelcomeEmail } from "@/lib/email-templates/welcome";
import HexagonSeal from "@/components/ornaments/HexagonSeal";

export const metadata: Metadata = {
  title: "Confirmare Ordin",
  description: "Confirmare intrare în Ordinul Albinelor.",
};

export const dynamic = "force-dynamic";

interface ConfirmaPageProps {
  params: { token: string };
}

type ConfirmState = "success" | "already" | "invalid";

export default async function ConfirmaPage({ params }: ConfirmaPageProps) {
  const { token } = params;

  let state: ConfirmState = "invalid";

  try {
    const supabase = createServiceClient();

    const { data: subscriber, error } = await supabase
      .from("newsletter_subscribers")
      .select("id, email, prenume_parinte, status")
      .eq("confirm_token", token)
      .maybeSingle();

    if (error) {
      console.error("DB lookup error:", error);
      state = "invalid";
    } else if (!subscriber) {
      state = "invalid";
    } else if (subscriber.status === "confirmed") {
      state = "already";
    } else if (subscriber.status === "pending") {
      const { error: updateError } = await supabase
        .from("newsletter_subscribers")
        .update({
          status: "confirmed",
          confirmed_at: new Date().toISOString(),
        })
        .eq("id", subscriber.id);

      if (updateError) {
        console.error("DB confirm error:", updateError);
        state = "invalid";
      } else {
        state = "success";

        const siteUrl =
          process.env.NEXT_PUBLIC_SITE_URL || "https://ordinulalbinelor.ro";
        const fromEmail =
          process.env.RESEND_FROM_EMAIL || "staroste@ordinulalbinelor.ro";
        const fromName =
          process.env.RESEND_FROM_NAME || "Ordinul Albinelor";

        const resend = new Resend(process.env.RESEND_API_KEY);

        const unsubscribeUrl = `${siteUrl}/dezabonare?email=${encodeURIComponent(subscriber.email)}`;

        await resend.emails.send({
          from: `${fromName} <${fromEmail}>`,
          to: subscriber.email,
          subject: "Bine ai venit în Ordinul Albinelor",
          react: WelcomeEmail({
            prenume: subscriber.prenume_parinte,
            siteUrl,
            unsubscribeUrl,
          }),
        });
      }
    } else {
      // unsubscribed or anything else
      state = "invalid";
    }
  } catch (err) {
    console.error("Confirm page error:", err);
    state = "invalid";
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full text-center">
        {state === "success" && (
          <>
            <div className="flex justify-center mb-8 animate-glow-pulse">
              <HexagonSeal size={120} withBee={true} glow={true} />
            </div>
            <h1 className="font-cardo text-4xl sm:text-5xl font-bold text-gold tracking-wider mb-6">
              Bine ai venit în Ordin
            </h1>
            <div className="font-inter text-ink-soft leading-[1.9] space-y-3 mb-10">
              <p className="text-xl font-cardo italic text-ink">Sigiliul tău e aprins.</p>
              <p>Prima scrisoare sosește la sfârșitul săptămânii.</p>
              <p>
                Până atunci, citește Codul Ordinului și Legenda Cetății de Ceară.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/codul-ordinului"
                className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-white font-cardo text-base px-8 py-3 rounded-md tracking-wide transition-colors"
              >
                Citește Codul →
              </Link>
              <Link
                href="/legenda"
                className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-white font-cardo text-base px-8 py-3 rounded-md tracking-wide transition-colors"
              >
                Citește Legenda →
              </Link>
            </div>
          </>
        )}

        {state === "already" && (
          <>
            <div className="flex justify-center mb-8">
              <HexagonSeal size={120} withBee={true} glow={true} />
            </div>
            <h1 className="font-cardo text-4xl sm:text-5xl font-bold text-gold tracking-wider mb-6">
              Ești deja în Ordin
            </h1>
            <p className="font-inter text-ink-soft text-lg leading-relaxed">
              Sigiliul tău era deja aprins.
              Continuă să primești scrisorile Starostelui —
              prima sau următoarea sosește la sfârșitul săptămânii.
            </p>
          </>
        )}

        {state === "invalid" && (
          <>
            <div className="flex justify-center mb-8" aria-hidden="true">
              <div style={{ transform: "rotate(20deg)", opacity: 0.6 }}>
                <HexagonSeal size={100} withBee={false} />
              </div>
            </div>
            <h1 className="font-cardo text-4xl sm:text-5xl font-bold text-gold tracking-wider mb-6">
              Pergamentul nu mai e valid
            </h1>
            <div className="font-inter text-ink-soft leading-[1.9] space-y-3 mb-10">
              <p>Sigiliul s-a stins înainte să apuci să-l atingi.</p>
              <p>
                Trimite-ne din nou semnul, din pagina de început,
                și Starostele te va primi.
              </p>
            </div>
            <Link
              href="/"
              className="inline-block bg-gold hover:bg-gold-dark text-white font-cardo text-lg px-10 py-4 rounded-md tracking-wide transition-colors shadow-md"
            >
              Înapoi la pagina de început →
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
