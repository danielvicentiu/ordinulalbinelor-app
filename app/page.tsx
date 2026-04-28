import type { Metadata } from "next";
import Link from "next/link";
import HexagonSeal from "@/components/ornaments/HexagonSeal";
import BeeFlight from "@/components/ornaments/BeeFlight";
import NewsletterForm from "@/components/newsletter/NewsletterForm";

export const metadata: Metadata = {
  title: "Ordinul Albinelor — Povești pentru copii din Cetatea de Ceară",
  description:
    "Univers narativ apicol pentru copii. Scrisori ceremoniale de la Starostele Daniel.",
};

const codCards = [
  { num: 1, titlu: "DISCIPLINĂ", text: "Fiecare albină știe ce are de făcut. Și o face." },
  { num: 2, titlu: "SACRIFICIU", text: "Cavalerul-albină dă totul pentru cetate." },
  { num: 3, titlu: "COMUNIUNE", text: "Singură, albina nu e nimic. Împreună, sunt minune." },
  { num: 4, titlu: "MISIUNE", text: "Polenizăm lumea. Asta e darul nostru." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 text-center overflow-hidden">
        {/* Background decorative hexagons */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 left-10 opacity-10">
            <HexagonSeal size={120} withBee={false} />
          </div>
          <div className="absolute bottom-10 right-10 opacity-10">
            <HexagonSeal size={100} withBee={false} />
          </div>
          <div className="absolute top-1/2 right-8 opacity-5 -translate-y-1/2">
            <HexagonSeal size={200} withBee={false} />
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <HexagonSeal size={96} glow={true} withBee={true} />
            <div className="ml-2">
              <BeeFlight />
            </div>
          </div>

          <h1 className="font-cardo text-5xl sm:text-7xl font-bold text-gold tracking-wider mb-4">
            Ordinul Albinelor
          </h1>
          <h2 className="font-cardo text-2xl sm:text-3xl text-ink-soft italic mb-8">
            Povești pentru copii din Cetatea de Ceară
          </h2>
          <p className="font-inter text-lg text-ink-soft leading-relaxed mb-10 max-w-xl mx-auto">
            Aici se țes povești despre cei mai harnici cavaleri ai Pământului — albinele.
            Despre Regina-Mamă, despre străjerii care apără cetatea,
            despre culegătoarele care zboară în lume după aurul florilor.
          </p>
          <Link
            href="#newsletter"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-cardo text-lg px-10 py-4 rounded-md tracking-wide transition-colors shadow-md"
          >
            Primește scrisorile Starostelui
          </Link>
        </div>
      </section>

      {/* ── CINE SUNTEM ── */}
      <section className="bg-parchment py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cardo text-3xl font-bold text-ink mb-6">Cine suntem</h2>
          <p className="font-inter text-lg text-ink-soft leading-relaxed mb-8">
            Suntem un Ordin de povestitori. Adunăm legendele Cetății de Ceară
            și le trimitem, prin pergament electronic, copiilor curioși de pretutindeni.
            Pentru fiecare copil care intră în Ordin, povestea continuă.
          </p>
          <Link
            href="/despre-ordin"
            className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-white font-cardo text-base px-8 py-3 rounded-md tracking-wide transition-colors"
          >
            Citește despre Ordin →
          </Link>
        </div>
      </section>

      {/* ── CODUL ORDINULUI ── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-cardo text-3xl font-bold text-ink text-center mb-12">
            Codul Ordinului
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {codCards.map((card) => (
              <div
                key={card.num}
                className="flex flex-col items-center text-center p-5 bg-parchment rounded-lg border border-gold/20 hover:border-gold/50 transition-colors"
              >
                <HexagonSeal size={56} withBee={false} />
                <h3 className="font-cardo text-sm font-bold text-gold tracking-widest mt-3 mb-2">
                  {card.titlu}
                </h3>
                <p className="font-inter text-sm text-ink-soft leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/codul-ordinului"
              className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-white font-cardo text-base px-8 py-3 rounded-md tracking-wide transition-colors"
            >
              Învață Codul →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRIMA POVESTE ── */}
      <section className="bg-parchment py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-cardo text-3xl font-bold text-ink mb-6">Prima poveste</h2>
          <div className="parchment-card p-6 mb-8 text-left">
            <p className="font-inter text-ink-soft leading-relaxed italic">
              Floricica era cea mai mică floare din lunca de la marginea pădurii.
              Și totuși, într-o dimineață, a sosit la ea o oaspetă cu aripi de aur...
            </p>
          </div>
          <Link
            href="/povesti/floricica"
            className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-white font-cardo text-base px-8 py-3 rounded-md tracking-wide transition-colors"
          >
            Citește povestea →
          </Link>
        </div>
      </section>

      {/* ── NEWSLETTER FORM ── */}
      <section id="newsletter" className="py-16 px-4">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <HexagonSeal size={64} withBee={true} className="mx-auto mb-4" />
            <h2 className="font-cardo text-3xl font-bold text-ink mb-4">Intră în Ordin</h2>
            <p className="font-inter text-ink-soft leading-relaxed">
              Primește, o dată la două săptămâni, o scrisoare de la Starostele Daniel
              cu o poveste nouă din Cetatea de Ceară. Copiii pot scrie înapoi.
            </p>
          </div>
          <div className="bg-parchment/60 rounded-xl border border-gold/20 p-6 sm:p-8">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
