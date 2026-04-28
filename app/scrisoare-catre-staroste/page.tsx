import type { Metadata } from "next";
import HexagonSeal from "@/components/ornaments/HexagonSeal";

export const metadata: Metadata = {
  title: "Scrisoare către Staroste",
  description: "Scrie-i Starostelui Daniel. Răspund la fiecare pergament.",
};

export default function ScriseoareCatreStarostePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-cardo text-4xl sm:text-5xl font-bold text-gold tracking-wider mb-4">
          Scrisoare către Staroste
        </h1>
        <div className="w-24 h-px bg-gold/40 mx-auto" />
      </div>

      {/* Pergament card */}
      <div className="bg-parchment rounded-xl border-2 border-gold/30 p-8 sm:p-12 shadow-sm">
        <div className="flex justify-center mb-8">
          <HexagonSeal size={64} withBee={true} />
        </div>

        <div className="font-inter text-ink-soft leading-[1.9] space-y-5 text-center">
          <p>
            Dacă ai o întrebare, o poveste de copil, o vorbă bună sau una grea, scrie-mi.
          </p>
          <p>
            Eu citesc fiecare pergament.
            Răspund la toate, deși uneori îmi ia câteva zile,
            căci stupii cer atenție și pădurea își are toanele ei.
          </p>
          <p className="font-cardo text-ink italic">
            Pergamentele se trimit la:
          </p>
        </div>

        {/* Email */}
        <div className="my-8 text-center">
          <a
            href="mailto:staroste@ordinulalbinelor.ro"
            className="font-cardo text-2xl sm:text-3xl text-gold font-bold hover:text-gold-dark transition-colors underline underline-offset-4 decoration-gold/40"
          >
            staroste@ordinulalbinelor.ro
          </a>
        </div>

        <div className="font-inter text-ink-soft leading-[1.9] space-y-4 text-center">
          <p>
            Dacă ești copil, roagă-l pe părinte să apese pe sigiliu.
            Dacă ești părinte, scrie ce vrei.
            Dacă ești învățător, învățătoare, bunic sau bunică —
            îmi e drag de toți. Ordinul nu face deosebire.
          </p>
        </div>

        <p className="font-cardo text-ink-soft italic mt-8 text-right text-lg">
          — Starostele Daniel
        </p>
      </div>
    </div>
  );
}
