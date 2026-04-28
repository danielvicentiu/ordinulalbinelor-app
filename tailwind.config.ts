import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#c9a227",
          light: "#e6c14a",
          dark: "#9a7a14",
        },
        amber: {
          ordin: "#d4830c",
        },
        ivory: "#faf6ea",
        parchment: "#f5e9c8",
        ink: {
          DEFAULT: "#2d1b0e",
          soft: "#5a4220",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        cardo: ["Cardo", "Georgia", "serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "bee-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(-5deg)" },
          "33%": { transform: "translateY(-12px) rotate(3deg)" },
          "66%": { transform: "translateY(-6px) rotate(-3deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { filter: "drop-shadow(0 0 8px #c9a22780)" },
          "50%": { filter: "drop-shadow(0 0 20px #c9a227cc)" },
        },
        "seal-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bee-float": "bee-float 4s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      typography: {
        ordin: {
          css: {
            color: "#2d1b0e",
            h1: { fontFamily: "Cardo, serif", color: "#c9a227" },
            h2: { fontFamily: "Cardo, serif", color: "#2d1b0e" },
            h3: { fontFamily: "Cardo, serif", color: "#5a4220" },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
