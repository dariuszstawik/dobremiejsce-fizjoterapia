/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Breakpointy z makiet: menu hamburger < 1100px, bloki w kolumnie < 760px
        md2: "760px",
        nav: "1100px",
      },
      colors: {
        // --- Stary wygląd (do usunięcia po przebudowie wszystkich podstron) ---
        orange: "#ff6e41",
        peach: "#fff6f2",
        secondaryOrange: "#ffcea0ff",
        light: "rgb(255 206 160)",
        heavy: "rgb(25 26 21)",

        // --- Nowy system wizualny (redesign) ---
        ink: {
          DEFAULT: "#1F1B18", // tekst główny, obrys focusa
          heading: "#2E2925", // H1
          body: "#524A44", // akapity
          muted: "#625A54", // tekst drugorzędny
          lead: "#3E3732", // wstęp
          footer: "#3A1D10", // tekst w stopce
        },
        accent: {
          DEFAULT: "#C9431A", // przycisk główny
          hover: "#A63610",
        },
        link: {
          DEFAULT: "#B23A12", // linki, etykiety, obrys przycisków
          hover: "#93300E",
        },
        brand: "#FF6E41", // pomarańcz marki (ikony, stopka)
        cream: "#FFF7EE", // tło kremowe sekcji
        blush: "#FFEFE0", // tło jasne: pigułki, pasek ogłoszeń
        apricot: "#FFCEA0", // kafelki ikon
        underline: "#FFC08C", // podkreślenie pod H1
        line: {
          DEFAULT: "#F0E2D3", // linie podziału
          cream: "#EBD9C6", // linie podziału na kremowym tle
        },
      },
      fontFamily: {
        sans: ["var(--font-figtree)", "system-ui", "sans-serif"],
      },
      fontSize: {
        eyebrow: [
          "13px",
          { lineHeight: "1.4", letterSpacing: ".08em", fontWeight: "600" },
        ],
        h1: [
          "clamp(38px, 3.9vw, 74px)",
          { lineHeight: "1.06", letterSpacing: "-.01em", fontWeight: "700" },
        ],
        "h1-sub": [
          "clamp(36px, 3.6vw, 52px)",
          { lineHeight: "1.1", letterSpacing: "-.01em", fontWeight: "700" },
        ],
        h2: [
          "clamp(28px, 3.2vw, 40px)",
          { lineHeight: "1.15", letterSpacing: "-.015em", fontWeight: "700" },
        ],
        "h2-sm": [
          "clamp(26px, 2.8vw, 34px)",
          { lineHeight: "1.15", letterSpacing: "-.015em", fontWeight: "700" },
        ],
      },
      maxWidth: {
        content: "1160px",
      },
      spacing: {
        section: "clamp(72px, 8vw, 104px)",
        gutter: "24px",
      },
      borderRadius: {
        card: "20px",
        tile: "22px",
      },
      boxShadow: {
        cta: "0 10px 22px rgba(201, 67, 26, .22)",
        "cta-hover": "0 10px 22px rgba(201, 67, 26, .25)",
        card: "0 1px 2px rgba(80, 40, 20, .04), 0 12px 32px rgba(80, 40, 20, .05)",
        "card-lg": "0 18px 50px rgba(80, 40, 20, .12)",
        header: "0 8px 24px rgba(80, 40, 20, .06)",
      },
      backgroundImage: {
        "hero-peach":
          "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0) 22%), linear-gradient(66deg, #FBD9CC 0%, #FCE4DA 18%, #FEF1EC 34%, #FFFAF8 44%, #fff 54%)",
      },
    },
  },
  plugins: [],
};
