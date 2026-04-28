import Link from "next/link";
import HexagonSeal from "@/components/ornaments/HexagonSeal";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        {/* Sigiliu căzut */}
        <div className="flex justify-center mb-8" aria-hidden="true">
          <div style={{ transform: "rotate(30deg)", opacity: 0.7 }}>
            <HexagonSeal size={100} withBee={false} />
          </div>
        </div>

        <h1 className="font-cardo text-4xl sm:text-5xl font-bold text-gold tracking-wider mb-4">
          Pergamentul nu există
        </h1>

        <p className="font-inter text-ink-soft text-lg leading-relaxed mb-8">
          Calea aceasta nu duce nicăieri în Cetate. Revino la pagina de început.
        </p>

        <Link
          href="/"
          className="inline-block bg-gold hover:bg-gold-dark text-white font-cardo text-lg px-10 py-4 rounded-md tracking-wide transition-colors shadow-md"
        >
          Înapoi la Cetate →
        </Link>
      </div>
    </div>
  );
}
