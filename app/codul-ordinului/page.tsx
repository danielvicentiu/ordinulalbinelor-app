import type { Metadata } from "next";
import HexagonSeal from "@/components/ornaments/HexagonSeal";
import HoneycombDivider from "@/components/ornaments/HoneycombDivider";

export const metadata: Metadata = {
  title: "Codul Ordinului",
  description:
    "Disciplină, Sacrificiu, Comuniune, Misiune. Codul cavalerilor cu aripi de aur.",
};

const piloni = [
  {
    titluRO: "DISCIPLINĂ",
    titluLatin: "Disciplina",
    text: "În stup, fiecare știe ce are de făcut. Doica îngrijește, Cercetașul caută, Zidarul clădește, Apărătorul stă la poartă. Nimeni nu se laudă. Nimeni nu se plânge. Așa ne învață cavalerii cu aripi de aur.",
  },
  {
    titluRO: "SACRIFICIU",
    titluLatin: "Sacrificium",
    text: 'Cavalerul-Albină pune cetatea înaintea sa. Apărătorul moare apărând. Culegătoarea zboară până cade. În Ordin nu există „eu” mai mare decât „noi”.',
  },
  {
    titluRO: "COMUNIUNE",
    titluLatin: "Communio",
    text: "Singură, albina nu trăiește o zi. Împreună, fac cetatea care trăiește o mie de ani. Așa și omul: singur — nimic, împreună — minune.",
  },
  {
    titluRO: "MISIUNE",
    titluLatin: "Missio",
    text: "Albina nu strânge mierea pentru sine. Polenizează lumea, hrănește florile, dă viață câmpurilor. Cine intră în Ordin primește o misiune: să dea, înainte să ceară.",
  },
];

const legi = [
  "Cinstește-o pe Regina-Mamă, căci ea e izvorul cetății.",
  "Apără cetatea cu prețul vieții tale, căci fără cetate ești nimic.",
  "Împarte-ți mierea cu fratele tău cavaler, căci ce e al tău e și al lui.",
  "Lucrează în zorii zilei și odihnește-te în zorii nopții, căci așa e legea soarelui.",
  "Caută florile și nu păstra pentru tine ce-ai cules, căci aurul polenului trece prin tine, nu rămâne.",
  "Vorbește prin dans, nu prin strigăt, căci vocea cea mai înaltă nu e cea mai dreaptă.",
  "Lasă-ți urma în lume polenizând tot ce atingi, căci asta-i toată misiunea cavalerului.",
];

const ranguri = [
  { nr: "1", rang: "Regina-Mamă", latin: "Apium Regina", cine: "Mama întregii cetăți. Una singură. Ea dă viață." },
  { nr: "2", rang: "Cavaler Guardian", latin: "Eques Custodis", cine: "Stă la poarta stupului. Apără. Moare apărând." },
  { nr: "3", rang: "Cercetaș", latin: "Exploratorius", cine: "Pleacă întâi. Caută florile. Aduce vestea." },
  { nr: "4", rang: "Culegător de Miere", latin: "Collector Mellis", cine: "Zboară mii de zboruri. Adună aurul florilor." },
  { nr: "5", rang: "Zidarul de Ceară", latin: "Faber Cerae", cine: "Clădește hexagoanele cetății. Geometru născut." },
  { nr: "6", rang: "Doica", latin: "Nutrix", cine: "Îngrijește puii. Hrănește generația care vine." },
  { nr: "7", rang: "Ucenicul", latin: "Tirocinium", cine: "Învață. Toți încep aici. Nimeni n-a sărit treapta asta." },
  { nr: "8", rang: "Ventilatorul", latin: "Ventilator Aulae", cine: "Răcorește cetatea cu aripile. Munca cea tăcută." },
  { nr: "9", rang: "Aparul", latin: "Aquarius", cine: "Aduce apă. Fără el, cetatea piere de sete." },
  { nr: "10", rang: "Prinții", latin: "Principes Otiosi", cine: "Stau pe pernă, până într-o zi când zboară spre soare." },
];

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII"];

export default function CodulOrdinuluiPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="font-cardo text-4xl sm:text-5xl font-bold text-gold tracking-wider mb-4">
          Codul Ordinului
        </h1>
        <p className="font-inter text-ink-soft text-lg italic leading-relaxed max-w-xl mx-auto">
          Acesta este Codul. Cine intră în Ordin îl învață pe de rost.
          Cine îl învață, îl trăiește.
        </p>
      </div>

      <HoneycombDivider />

      {/* Cei Patru Piloni */}
      <section className="mb-16">
        <h2 className="font-cardo text-2xl sm:text-3xl font-bold text-ink text-center mb-10">
          Cei Patru Piloni
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {piloni.map((p) => (
            <div
              key={p.titluRO}
              className="parchment-card p-6 sm:p-8 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <HexagonSeal size={56} withBee={false} />
                <div>
                  <h3 className="font-cardo text-xl font-bold text-gold tracking-widest">
                    {p.titluRO}
                  </h3>
                  <p className="font-cardo text-sm text-ink-soft italic">
                    {p.titluLatin}
                  </p>
                </div>
              </div>
              <p className="font-inter text-ink-soft leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <HoneycombDivider />

      {/* Cele Șapte Legi */}
      <section className="mb-16">
        <h2 className="font-cardo text-2xl sm:text-3xl font-bold text-ink text-center mb-10">
          Cele Șapte Legi ale Ordinului
        </h2>
        <ol className="space-y-4 max-w-3xl mx-auto">
          {legi.map((lege, i) => (
            <li key={i} className="flex gap-5 p-4 bg-parchment/60 rounded-lg border border-gold/15">
              <span className="font-cardo text-gold text-xl font-bold shrink-0 w-8 text-right">
                {romanNumerals[i]}.
              </span>
              <p className="font-inter text-ink-soft leading-relaxed">{lege}</p>
            </li>
          ))}
        </ol>
      </section>

      <HoneycombDivider />

      {/* Jurământul */}
      <section className="mb-16">
        <h2 className="font-cardo text-2xl sm:text-3xl font-bold text-ink text-center mb-10">
          Jurământul Cavalerului-Albină
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-parchment rounded-xl border-2 border-gold/50 p-8 sm:p-12 text-center shadow-inner">
            <div className="flex justify-center mb-6">
              <HexagonSeal size={56} withBee={true} glow={true} />
            </div>
            <blockquote className="font-cardo text-ink text-lg sm:text-xl italic leading-[1.9] whitespace-pre-line">
              {`Eu, oaspete chemat la sigiliul de aur,
jur pe pâinea Reginei și pe ceara cetății
să țin Codul Ordinului —
Disciplină, Sacrificiu, Comuniune, Misiune.

Voi munci în zori,
voi împărți mierea,
voi apăra stupul,
voi poleniza tot ce voi atinge.

Așa să-mi ajute florile,
aurul soarelui
și Regina-Mamă a Cetății de Ceară.`}
            </blockquote>
          </div>
        </div>
      </section>

      <HoneycombDivider />

      {/* Cele Zece Ranguri */}
      <section>
        <h2 className="font-cardo text-2xl sm:text-3xl font-bold text-ink text-center mb-10">
          Cele Zece Ranguri
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gold/30">
                <th className="text-left p-3 font-cardo text-gold text-sm tracking-wider">#</th>
                <th className="text-left p-3 font-cardo text-gold text-sm tracking-wider">Rang</th>
                <th className="text-left p-3 font-cardo text-gold text-sm tracking-wider italic">Latin</th>
                <th className="text-left p-3 font-cardo text-gold text-sm tracking-wider">Cine este</th>
              </tr>
            </thead>
            <tbody>
              {ranguri.map((r, i) => (
                <tr
                  key={r.nr}
                  className={`border-b border-gold/10 ${i % 2 === 0 ? "bg-parchment/30" : ""}`}
                >
                  <td className="p-3 font-cardo text-gold font-bold">{r.nr}</td>
                  <td className="p-3 font-cardo text-ink font-semibold">{r.rang}</td>
                  <td className="p-3 font-cardo text-ink-soft italic text-sm">{r.latin}</td>
                  <td className="p-3 font-inter text-ink-soft text-sm leading-relaxed">{r.cine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-3">
          {ranguri.map((r) => (
            <div key={r.nr} className="parchment-card p-4 flex gap-4">
              <div className="flex flex-col items-center">
                <span className="font-cardo text-gold text-xl font-bold">{r.nr}</span>
              </div>
              <div>
                <p className="font-cardo text-ink font-semibold">{r.rang}</p>
                <p className="font-cardo text-ink-soft italic text-xs mb-1">{r.latin}</p>
                <p className="font-inter text-ink-soft text-sm leading-relaxed">{r.cine}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
