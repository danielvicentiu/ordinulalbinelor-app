import type { Metadata } from "next";
import Link from "next/link";
import StarosteBadge from "@/components/ornaments/StarosteBadge";
import HexagonSeal from "@/components/ornaments/HexagonSeal";

export const metadata: Metadata = {
  title: "Despre Ordin",
  description: "Cuvântul Starostelui Daniel despre rostul Ordinului.",
};

const deceCards = [
  {
    titlu: "Pentru că haosul nu mai e de ajuns.",
    text: "Copiii noștri cresc între ecrane care nu cer nimic și nu dau nimic. Ordinul cere. Ordinul dă.",
  },
  {
    titlu: "Pentru că lumea are nevoie de cavaleri.",
    text: "Nu cu sabia, ci cu polenul. Nu împotriva cuiva, ci pentru toți. Albina e cavalerul de care lumea are cea mai mare nevoie.",
  },
  {
    titlu: "Pentru că poveștile salvează.",
    text: "Salvează atenția, salvează blândețea, salvează curiozitatea. Iar fără ele, copilăria e doar o vârstă.",
  },
];

export default function DespreOrdinPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-cardo text-4xl sm:text-5xl font-bold text-gold tracking-wider mb-4">
          Despre Ordin
        </h1>
        <div className="w-24 h-px bg-gold/40 mx-auto" />
      </div>

      {/* Staroste Badge */}
      <div className="flex justify-center mb-12">
        <StarosteBadge size={220} />
      </div>

      {/* Cuvântul Starostelui */}
      <section className="mb-16">
        <h2 className="font-cardo text-2xl sm:text-3xl font-bold text-ink mb-8 text-center">
          Cuvântul Starostelui
        </h2>

        <div className="bg-parchment/70 rounded-xl border border-gold/20 p-6 sm:p-10">
          <div className="font-inter text-ink-soft leading-[1.9] space-y-4">
            <p className="drop-cap">
              Eu sunt Starostele Daniel, păstrătorul stupilor și scribul Ordinului.
            </p>
            <p>
              Ascultă, oaspete, povestea acelora care zboară pe aripi de aur
              și clădesc cetăți de ceară. Sunt cavalerii cei mai vechi ai Pământului.
              Au fost aici înainte de noi, oamenii. Vor fi aici, dacă-i lăsăm, după ce noi vom fi pulbere.
            </p>
            <p>
              Albinele nu cunosc trândăvia. Nu cunosc minciuna. Nu cunosc trădarea cetății.
              Ele cunosc Codul, Legea și Misiunea. Și asta-i tot ce le trebuie.
            </p>
            <p>
              Ordinul Albinelor s-a născut dintr-o întrebare simplă:
              ce-ar fi dacă noi, oamenii, am învăța din nou de la ele?
              Nu cum să facem mierea — asta o știu numai ele.
              Ci cum să trăim. Cum să fim cetate, nu turmă.
              Cum să dăm fără să cerem. Cum să muncim fără să ne plângem.
            </p>
            <p>
              Pe acest pământ digital am așezat sigiliul Ordinului.
              Aici vin copiii și învață. Aici vin părinții și-și aduc aminte.
              Aici scriem pergamente despre Regina-Mamă, despre Cavalerul Guardian,
              despre Floricica și prietenii ei.
            </p>
            <p>
              Dacă citești aceste rânduri, ești deja chemat.
              Tot ce-ți rămâne e să răspunzi.
            </p>
          </div>
          <p className="font-cardo text-ink-soft italic mt-8 text-right text-lg">
            — Starostele Daniel, păstrătorul Cetății de Ceară
          </p>
        </div>
      </section>

      {/* De ce un Ordin */}
      <section className="mb-16">
        <h2 className="font-cardo text-2xl sm:text-3xl font-bold text-ink mb-8 text-center">
          De ce un Ordin?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deceCards.map((card) => (
            <div
              key={card.titlu}
              className="parchment-card p-6 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <HexagonSeal size={36} withBee={false} />
                <h3 className="font-cardo text-base font-bold text-ink leading-snug">
                  {card.titlu}
                </h3>
              </div>
              <p className="font-inter text-sm text-ink-soft leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/#newsletter"
          className="inline-block bg-gold hover:bg-gold-dark text-white font-cardo text-lg px-10 py-4 rounded-md tracking-wide transition-colors shadow-md"
        >
          Intră în Ordin →
        </Link>
      </div>
    </div>
  );
}
