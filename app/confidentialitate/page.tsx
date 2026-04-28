import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confidențialitate",
  description: "Cum protejăm datele tale și ale copiilor tăi.",
};

export default function ConfidentialityPage() {
  const deployDate = "28 aprilie 2026";

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-cardo text-4xl sm:text-5xl font-bold text-gold tracking-wider mb-4">
          Confidențialitate
        </h1>
        <div className="w-24 h-px bg-gold/40 mx-auto" />
      </div>

      <div className="space-y-10 font-inter text-ink-soft leading-[1.8]">
        {/* Operator */}
        <section>
          <h2 className="font-cardo text-xl font-bold text-ink mb-3">Operator</h2>
          <div className="parchment-card p-5 space-y-1">
            <p>Operator de date cu caracter personal:</p>
            <p className="font-semibold text-ink">
              {process.env.NEXT_PUBLIC_OPERATOR_NAME || "Daniel Vicențiu"} — persoană fizică
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:staroste@ordinulalbinelor.ro"
                className="text-gold hover:underline"
              >
                staroste@ordinulalbinelor.ro
              </a>
            </p>
          </div>
        </section>

        {/* Date colectate */}
        <section>
          <h2 className="font-cardo text-xl font-bold text-ink mb-3">Date colectate</h2>
          <p className="mb-3">
            Colectăm strict datele necesare pentru a-ți trimite scrisorile Ordinului:
          </p>
          <ul className="space-y-1 pl-5 list-disc">
            <li>Adresa de email</li>
            <li>Prenumele tău (părinte)</li>
            <li>Opțional: prenumele și vârsta copiilor (dacă vrei povești adaptate)</li>
            <li>
              Adresa IP și agentul browserului la momentul înscrierii (pentru evidență
              consimțământ)
            </li>
          </ul>
        </section>

        {/* Scop */}
        <section>
          <h2 className="font-cardo text-xl font-bold text-ink mb-3">Scop</h2>
          <p className="mb-3">
            Trimiterea unui newsletter ceremonial cu povești pentru copii,
            maximum 2 (două) trimiteri pe lună.
          </p>
          <p>
            Nu vindem, nu cedăm și nu împărtășim datele tale cu nimeni.
            Nu folosim datele copiilor pentru profiling sau publicitate.
          </p>
        </section>

        {/* Temei legal */}
        <section>
          <h2 className="font-cardo text-xl font-bold text-ink mb-3">Temei legal</h2>
          <p>
            Articolul 6 alineatul (1) litera (a) din Regulamentul (UE) 2016/679 (GDPR) —
            consimțământul tău explicit, confirmat prin double opt-in
            (apăsarea pe sigiliul din emailul de confirmare).
          </p>
        </section>

        {/* Drepturi */}
        <section>
          <h2 className="font-cardo text-xl font-bold text-ink mb-3">Drepturile tale</h2>
          <p className="mb-3">Conform GDPR, ai dreptul:</p>
          <ul className="space-y-1 pl-5 list-disc mb-4">
            <li>de acces la datele tale</li>
            <li>de rectificare</li>
            <li>de ștergere (dreptul de a fi uitat)</li>
            <li>de opoziție</li>
            <li>de retragere a consimțământului oricând</li>
          </ul>
          <p className="mb-2">
            Te poți dezabona instant cu un click din fiecare scrisoare a Ordinului.
          </p>
          <p>
            Pentru orice cerere, scrie la:{" "}
            <a
              href="mailto:staroste@ordinulalbinelor.ro"
              className="text-gold hover:underline"
            >
              staroste@ordinulalbinelor.ro
            </a>
            <br />
            Răspundem în maximum 30 de zile.
          </p>
        </section>

        {/* Stocare */}
        <section>
          <h2 className="font-cardo text-xl font-bold text-ink mb-3">Stocare și procesare</h2>
          <ul className="space-y-2 pl-5 list-disc">
            <li>
              Datele de înscriere: Supabase (server în Frankfurt, Germania, UE)
            </li>
            <li>Trimiterea emailurilor: Resend (server în Irlanda, UE)</li>
            <li>
              Retenție: până la dezabonarea ta. După dezabonare, ștergem complet
              datele.
            </li>
            <li>
              Cookies: NU folosim cookies de tracking. Nici Google Analytics, nici
              Facebook Pixel, nici altele.
            </li>
          </ul>
        </section>

        {/* Plângeri */}
        <section>
          <h2 className="font-cardo text-xl font-bold text-ink mb-3">Plângeri</h2>
          <p className="mb-3">
            Dacă crezi că-ți încălcăm drepturile, ai dreptul să te plângi la:
          </p>
          <div className="parchment-card p-4 space-y-1 text-sm">
            <p className="font-semibold text-ink">
              Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter
              Personal (ANSPDCP)
            </p>
            <p>B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București</p>
            <p>
              Email:{" "}
              <a href="mailto:anspdcp@dataprotection.ro" className="text-gold hover:underline">
                anspdcp@dataprotection.ro
              </a>
            </p>
            <p>Web: www.dataprotection.ro</p>
          </div>
        </section>

        {/* Modificări */}
        <section>
          <h2 className="font-cardo text-xl font-bold text-ink mb-3">Modificări</h2>
          <p>
            Această politică poate fi actualizată. Versiunea curentă a fost publicată
            la {deployDate}.
          </p>
        </section>
      </div>
    </div>
  );
}
