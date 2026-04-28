import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Povestea Floricicăi",
  description: "Prima poveste pentru copii din universul Ordinului.",
};

function FlowerIllustration() {
  return (
    <div className="flex justify-center my-10" aria-hidden="true">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stem */}
        <line x1="100" y1="200" x2="100" y2="130" stroke="#5a8a3c" strokeWidth="3" strokeLinecap="round" />
        {/* Leaves */}
        <ellipse cx="85" cy="165" rx="18" ry="8" fill="#6aaa45" opacity="0.8" transform="rotate(-30,85,165)" />
        <ellipse cx="115" cy="155" rx="16" ry="7" fill="#6aaa45" opacity="0.7" transform="rotate(30,115,155)" />

        {/* Flower petals (5) */}
        <ellipse cx="100" cy="95" rx="12" ry="28" fill="#f5a0c0" opacity="0.9" />
        <ellipse cx="100" cy="95" rx="12" ry="28" fill="#f5a0c0" opacity="0.9" transform="rotate(72,100,125)" />
        <ellipse cx="100" cy="95" rx="12" ry="28" fill="#f5a0c0" opacity="0.9" transform="rotate(144,100,125)" />
        <ellipse cx="100" cy="95" rx="12" ry="28" fill="#f5a0c0" opacity="0.9" transform="rotate(216,100,125)" />
        <ellipse cx="100" cy="95" rx="12" ry="28" fill="#f5a0c0" opacity="0.9" transform="rotate(288,100,125)" />

        {/* Flower center */}
        <circle cx="100" cy="125" r="16" fill="#f5d04a" />
        <circle cx="100" cy="125" r="10" fill="#e6c14a" />

        {/* Bee near flower */}
        <g transform="translate(148,80)">
          {/* Wings */}
          <ellipse cx="-10" cy="-8" rx="13" ry="7" fill="white" opacity="0.7" transform="rotate(-20,-10,-8)" />
          <ellipse cx="10" cy="-8" rx="13" ry="7" fill="white" opacity="0.7" transform="rotate(20,10,-8)" />
          {/* Body */}
          <ellipse cx="0" cy="0" rx="8" ry="11" fill="#2d1b0e" />
          <rect x="-8" y="-4" width="16" height="3.5" rx="1.5" fill="#c9a227" />
          <rect x="-8" y="2" width="16" height="3.5" rx="1.5" fill="#c9a227" />
          {/* Head */}
          <circle cx="0" cy="-14" r="6" fill="#2d1b0e" />
          {/* Antennae */}
          <line x1="-2" y1="-19" x2="-6" y2="-25" stroke="#2d1b0e" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="2" y1="-19" x2="6" y2="-25" stroke="#2d1b0e" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="-6" cy="-25" r="1.5" fill="#c9a227" />
          <circle cx="6" cy="-25" r="1.5" fill="#c9a227" />
        </g>

        {/* Dotted flight path */}
        <path
          d="M 148 90 Q 130 100 120 115"
          fill="none"
          stroke="#c9a227"
          strokeWidth="1.5"
          strokeDasharray="4,4"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

export default function FloricaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="font-cardo text-4xl sm:text-5xl font-bold text-gold tracking-wider mb-4">
          Povestea Floricicăi
        </h1>
        <div className="w-24 h-px bg-gold/40 mx-auto" />
      </div>

      {/* Flower illustration */}
      <FlowerIllustration />

      {/* Text narativ */}
      <article className="font-inter text-ink-soft leading-[1.9] space-y-5">
        <p className="drop-cap">
          Floricica era cea mai mică floare din lunca de la marginea pădurii.
        </p>
        <p>
          Atât de mică, încât toate celelalte flori o uitau.
          Macul cel roșu se lăuda cu pălăria lui.
          Margareta număra petalele și se mira singură cât e de frumoasă.
          Albăstrelul vorbea numai cu cerul.
          Iar Floricica stătea jos, lângă rădăcini,
          și se întreba dacă are vreun rost pe lume.
        </p>
        <p className="font-cardo text-ink italic text-lg pl-4 border-l-4 border-gold/40">
          — Sunt prea mică, își spunea. Nimeni n-o să mă vadă niciodată.
        </p>
        <p>
          Într-o dimineață, când soarele abia răsărise peste lunca,
          a sosit la ea o oaspetă cu aripi de aur.
        </p>
        <p className="font-cardo text-ink italic text-lg pl-4 border-l-4 border-gold/40">
          — Bună dimineața, Floricica, a zis oaspetele.
        </p>
        <p>
          Floricica a tresărit.
          Era o albină. O albină adevărată, cu ochi mari,
          cu picioare îmbrăcate în polen galben,
          cu un zumzet blând ca o mângâiere.
        </p>
        <p className="font-cardo text-ink italic text-lg pl-4 border-l-4 border-gold/40">
          — Mă cunoști? a întrebat Floricica, mirată.
        </p>
        <p>
          — Te cunoaștem toate, a zis albina. Ești pe pergamentul Reginei.
          Pe locul al patrulea, sub Macul Roșu și deasupra Trifoiului.
        </p>
        <p className="font-cardo text-ink italic text-lg pl-4 border-l-4 border-gold/40">
          — Pe pergamentul Reginei? a îngânat Floricica.
        </p>
        <p>
          — Bineînțeles. Noi avem o hartă a tuturor florilor.
          Și știi de ce ești pe ea?
        </p>
        <p className="font-cardo text-ink italic text-lg pl-4 border-l-4 border-gold/40">
          — Pentru că sunt mică și nu mă vede nimeni?
        </p>
        <p>
          — Nu, a zâmbit albina.
          Pentru că polenul tău e cel mai dulce din toată lunca.
          L-am gustat săptămâna trecută.
          Mama-Regină a zis: &bdquo;Mâine să mergeți întâi la Floricica.&rdquo;
          Așa că iată-mă.
        </p>
        <p>Floricica a rămas fără cuvinte.</p>
        <p className="font-cardo text-ink italic text-lg pl-4 border-l-4 border-gold/40">
          — Tu... mă cunoști pe nume?
        </p>
        <p>
          — Toate florile au nume în Ordinul nostru, a zis albina.
          Te cheamă Floricica.
          Iar polenul tău, dacă vrei să-mi dai puțin,
          va merge mâine în mierea Reginei.
          Iar mierea Reginei va hrăni un Cavaler Guardian.
          Iar Cavalerul Guardian va apăra cetatea.
          Iar cetatea va trimite, peste vară, alte albine la alte flori.
          Așa lucrează lumea, Floricica. Tu ești în mijloc.
        </p>
        <p>Floricica a întins petalele cu toată puterea ei mică.</p>
        <p className="font-cardo text-ink italic text-lg pl-4 border-l-4 border-gold/40">
          — Atunci ia, a zis. Ia tot.
        </p>
        <p>
          Albina a luat polenul ei dulce,
          a făcut o plecăciune scurtă
          și a zburat înapoi spre cetate.
        </p>
        <p>
          Și de-atunci, în fiecare dimineață,
          Floricica nu mai era cea mai mică floare a luncii.
        </p>
        <p className="font-cardo text-gold text-2xl italic text-center py-6 font-bold">
          Era cea mai dulce.
        </p>
      </article>

      {/* CTA */}
      <div className="mt-12 bg-parchment rounded-xl border border-gold/30 p-6 sm:p-8 text-center">
        <p className="font-inter text-ink-soft leading-relaxed mb-6">
          Vrei să afli cum a sosit Floricica pe pergamentul Reginei?
          Cere scrisoarea Starostelui și află, săptămâna viitoare, povestea a doua.
        </p>
        <Link
          href="/#newsletter"
          className="inline-block bg-gold hover:bg-gold-dark text-white font-cardo text-lg px-10 py-4 rounded-md tracking-wide transition-colors shadow-md"
        >
          Cere scrisoarea →
        </Link>
      </div>
    </div>
  );
}
