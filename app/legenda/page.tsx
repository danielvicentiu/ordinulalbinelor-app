import type { Metadata } from "next";
import HexagonSeal from "@/components/ornaments/HexagonSeal";
import HoneycombDivider from "@/components/ornaments/HoneycombDivider";

export const metadata: Metadata = {
  title: "Legenda Cetății de Ceară",
  description: "Cum a întemeiat starostele Velian Ordinul Albinelor.",
};

export default function LegendaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-cardo text-4xl sm:text-5xl font-bold text-gold tracking-wider mb-4">
          Legenda Cetății de Ceară
        </h1>
        <div className="w-24 h-px bg-gold/40 mx-auto" />
      </div>

      <HoneycombDivider />

      {/* Text narativ */}
      <article className="prose-custom">
        <div className="font-inter text-ink-soft leading-[1.9] space-y-6">
          <p className="drop-cap">
            În vremurile când oamenii încă vorbeau cu pădurea și cu apa,
            trăia la marginea unui sat un staroste bătrân pe nume Velian.
            Nu era nici bogat, nici numeros la moșii.
            Avea însă un dar: înțelegea limba albinelor.
          </p>
          <p>
            Într-o seară de iunie, când soarele se oprise jos peste lunca de la cotul râului,
            Velian s-a așezat lângă stupii lui și a auzit, pentru prima dată, un cuvânt limpede:
          </p>
        </div>

        <HoneycombDivider />

        <div className="font-inter text-ink-soft leading-[1.9] space-y-4 bg-parchment/60 rounded-lg border border-gold/20 p-6 my-6">
          <p className="font-cardo text-ink text-lg italic">
            — Stăpâne, a zis vocea cea subțire, Cetatea moare.
          </p>
          <p>
            Era Regina-Mamă a stupilor lui.
            Vorbea încet, cum vorbesc cei foarte bătrâni sau foarte răniți.
          </p>
          <p className="font-cardo text-ink text-lg italic">
            — De ce, Mamă? a întrebat Velian.
          </p>
          <p>
            — Pentru că oamenii au uitat. Au uitat că noi suntem cavalerii Pământului.
            Au uitat Codul. Au uitat Legea. Au uitat că fără noi nu mai cresc florile,
            fără flori nu mai crește pâinea, fără pâine nu mai sunt copii.
          </p>
          <p>
            Velian a îngenuncheat.
            Era pentru întâia oară când îngenunchea în fața unei vietăți mai mici decât pumnul lui.
          </p>
          <p className="font-cardo text-ink text-lg italic">
            — Ce să fac, Mamă?
          </p>
          <p>
            — Întemeiază un Ordin. Adună copiii. Spune-le poveștile. Învață-i Codul.
            Pune-le sigiliul nostru pe inimă.
            Cât timp un copil va ști cine suntem, vom mai trăi.
          </p>
        </div>

        <HoneycombDivider />

        <div className="font-inter text-ink-soft leading-[1.9] space-y-6">
          <p>
            A doua zi, Velian a luat un fagure și l-a apăsat în ceară curată.
            Așa s-a născut Sigiliul Ordinului — hexagonul de aur cu albina la mijloc.
          </p>
          <p>
            Au trecut sute de ani. Velian s-a făcut pulbere.
            Stupii lui s-au mutat în alte locuri.
            Dar Ordinul a rămas. Trece din staroste în staroste. Din pergament în pergament.
            Acum a ajuns la mine, Starostele Daniel.
          </p>
          <p className="font-cardo text-ink text-xl italic text-center py-4">
            Și-acum ajunge la tine.
          </p>
          <p className="font-cardo text-gold text-2xl italic text-center font-bold">
            Dacă citești asta — ești chemat.
          </p>
        </div>
      </article>

      <HoneycombDivider />

      {/* Sigiliu la final */}
      <div className="flex justify-center mt-8">
        <HexagonSeal size={72} withBee={true} glow={true} />
      </div>
    </div>
  );
}
