import Link from "next/link";
import HexagonSeal from "@/components/ornaments/HexagonSeal";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory/80 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Logo + slogan */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <HexagonSeal size={32} withBee={false} />
              <span className="font-cardo text-lg font-bold text-gold">
                Ordinul Albinelor
              </span>
            </div>
            <p className="text-sm text-ivory/60 font-inter italic">
              Povești pentru copii din Cetatea de Ceară
            </p>
          </div>

          {/* Col 2: Linkuri principale */}
          <div>
            <h3 className="font-cardo text-gold text-sm tracking-wider uppercase mb-4">
              Rute
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Linkuri footer">
              <Link href="/despre-ordin" className="text-sm text-ivory/70 hover:text-gold transition-colors">
                Despre Ordin
              </Link>
              <Link href="/codul-ordinului" className="text-sm text-ivory/70 hover:text-gold transition-colors">
                Codul Ordinului
              </Link>
              <Link href="/legenda" className="text-sm text-ivory/70 hover:text-gold transition-colors">
                Legenda Cetății
              </Link>
              <Link href="/povesti/floricica" className="text-sm text-ivory/70 hover:text-gold transition-colors">
                Povestea Floricicăi
              </Link>
              <Link href="/scrisoare-catre-staroste" className="text-sm text-ivory/70 hover:text-gold transition-colors">
                Scrisoare către Staroste
              </Link>
            </nav>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h3 className="font-cardo text-gold text-sm tracking-wider uppercase mb-4">
              Legal
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Linkuri legale">
              <Link href="/confidentialitate" className="text-sm text-ivory/70 hover:text-gold transition-colors">
                Confidențialitate
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-ivory/10 text-center">
          <p className="text-xs text-ivory/40 font-inter italic">
            © Ordinul Albinelor 2026 • Pergamente trimise cu drag de la marginea pădurii
          </p>
        </div>
      </div>
    </footer>
  );
}
