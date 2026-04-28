"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import HexagonSeal from "@/components/ornaments/HexagonSeal";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/despre-ordin", label: "Despre Ordin" },
  { href: "/codul-ordinului", label: "Codul" },
  { href: "/legenda", label: "Legenda" },
  { href: "/povesti/floricica", label: "Povești" },
  { href: "/scrisoare-catre-staroste", label: "Scrisoare" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-gold/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Ordinul Albinelor — Acasă"
          >
            <HexagonSeal size={40} withBee={true} />
            <span className="font-cardo text-xl font-bold text-ink tracking-wide group-hover:text-gold transition-colors">
              Ordinul Albinelor
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navigație principală">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-inter transition-colors hover:text-gold ${
                  pathname === link.href
                    ? "text-gold font-semibold"
                    : "text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-ink hover:text-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Închide meniul" : "Deschide meniul"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden bg-ivory border-t border-gold/20 px-4 py-4"
        >
          <nav className="flex flex-col gap-3" aria-label="Navigație mobilă">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-inter py-2 border-b border-gold/10 transition-colors hover:text-gold ${
                  pathname === link.href
                    ? "text-gold font-semibold"
                    : "text-ink-soft"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
