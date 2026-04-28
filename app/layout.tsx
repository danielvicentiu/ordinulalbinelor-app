import type { Metadata } from "next";
import { Cardo, Inter } from "next/font/google";
import { Toaster } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cardo = Cardo({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cardo",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s — Ordinul Albinelor",
    default: "Ordinul Albinelor — Povești pentru copii din Cetatea de Ceară",
  },
  description:
    "Univers narativ apicol pentru copii. Scrisori ceremoniale de la Starostele Daniel.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://ordinulalbinelor.ro"
  ),
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: "Ordinul Albinelor",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ordinul Albinelor — Povești pentru copii din Cetatea de Ceară",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${cardo.variable} ${inter.variable}`}>
      <body className="font-inter min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
