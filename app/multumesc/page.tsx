import type { Metadata } from "next";
import HexagonSeal from "@/components/ornaments/HexagonSeal";

export const metadata: Metadata = {
  title: "Pergamentul a fost trimis",
  description: "Verifică emailul și apasă sigiliul pentru a intra în Ordin.",
};

export default function MultumescPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full text-center">
        {/* Sigiliu cu glow */}
        <div className="flex justify-center mb-8 animate-glow-pulse">
          <HexagonSeal size={120} withBee={true} glow={true} />
        </div>

        <h1 className="font-cardo text-4xl sm:text-5xl font-bold text-gold tracking-wider mb-6">
          Pergamentul a fost trimis
        </h1>

        <div className="font-inter text-ink-soft leading-[1.9] space-y-4 mb-10">
          <p className="text-lg">
            Verifică-ți cutia de scrisori.
            <br />
            Starostele așteaptă confirmarea ta.
          </p>
          <p className="font-cardo text-xl italic text-ink">
            Apasă pe sigiliul din email pentru a închide cercul Ordinului.
          </p>
        </div>

        <div className="bg-parchment/70 rounded-lg border border-gold/20 p-5 text-sm text-ink-soft/70 font-inter italic">
          <p>
            Dacă scrisoarea nu sosește în 5 minute, uită-te în &bdquo;spam&rdquo; sau &bdquo;promoții&rdquo; —
            pergamentele moderne se rătăcesc uneori printre reclame.
          </p>
          <p className="mt-2">
            Dacă tot nu o găsești, scrie-mi:{" "}
            <a
              href="mailto:staroste@ordinulalbinelor.ro"
              className="text-gold hover:underline not-italic"
            >
              staroste@ordinulalbinelor.ro
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
