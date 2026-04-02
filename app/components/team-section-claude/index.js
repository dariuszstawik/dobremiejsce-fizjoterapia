// components/TeamSection.jsx
// Requires: Tailwind CSS, Next.js (uses next/image)
// Font: Add to your layout/globals: import { Playfair_Display, DM_Sans } from 'next/font/google'

"use client";

import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const specialists = [
  {
    id: 1,
    name: "Kamila Włodarczyk",
    role: "Fizjoterapeuta dziecięcy",
    photo: "https://dobremiejsce-fizjoterapia.pl/kamila-wlodarczyk.png",
    href: "https://dobremiejsce-fizjoterapia.pl/kamila-wlodarczyk",
    accent: "#a8c5a0",
  },
  {
    id: 2,
    name: "Martyna Cesarczyk",
    role: "Fizjoterapeuta dziecięcy",
    photo: "https://dobremiejsce-fizjoterapia.pl/martyna-cesarczyk.png",
    href: "https://dobremiejsce-fizjoterapia.pl/martyna-cesarczyk",
    accent: "#b8d4b0",
  },
  {
    id: 3,
    name: "Sebastian Niemczyk",
    role: "Fizjoterapeuta dziecięcy",
    photo: "https://dobremiejsce-fizjoterapia.pl/sebastian-niemczyk.webp",
    accent: "#c5d9bf",
  },
  {
    id: 4,
    name: "Michał Matuszak",
    role: "D.O. Osteopata i fizjoterapeuta dziecięcy",
    photo: "https://dobremiejsce-fizjoterapia.pl/michal-matuszak.webp",
    accent: "#a8c5a0",
  },
  {
    id: 5,
    name: "Michał Handzlik",
    role: "D.O. Dyplomowany osteopata, fizjoterapeuta",
    photo: "https://dobremiejsce-fizjoterapia.pl/michal-handzlik.webp",
    accent: "#b8d4b0",
  },
  {
    id: 6,
    name: "Jakub Śmistek",
    role: "Fizjoterapeuta, terapeuta integracji sensorycznej",
    photo: "https://dobremiejsce-fizjoterapia.pl/jakub-smistek.webp",
    accent: "#c5d9bf",
  },
  {
    id: 7,
    name: "Katarzyna Loranc",
    role: "Trenerka personalna",
    photo: "https://dobremiejsce-fizjoterapia.pl/katarzyna-loranc-sm.webp",
    accent: "#a8c5a0",
  },
  {
    id: 8,
    name: "Kamila Tomaszkiewicz",
    role: "Psycholog",
    photo: "https://dobremiejsce-fizjoterapia.pl/kamila-tomaszkiewicz.webp",
    accent: "#b8d4b0",
  },
  {
    id: 9,
    name: "Sabina Szober",
    role: "Neurologopeda",
    photo: "https://dobremiejsce-fizjoterapia.pl/sabina-szober1.webp",
    accent: "#c5d9bf",
  },
];

// ─── SpecialistCard ───────────────────────────────────────────────────────────

function SpecialistCard({ specialist }) {
  const [hovered, setHovered] = useState(false);
  const { name, role, photo, href, accent } = specialist;

  const card = (
    <div
      className="specialist-card group flex flex-col items-center text-center cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ "--accent": accent }}
    >
      {/* Circular photo with organic blob ring */}
      <div className="relative mb-5">
        {/* Blob ring — animates on hover */}
        <div
          className="blob-ring absolute inset-0 z-0 rounded-full transition-all duration-700"
          style={{
            background: `radial-gradient(circle at 40% 40%, ${accent}cc, ${accent}44)`,
            transform: hovered
              ? "scale(1.12) rotate(8deg)"
              : "scale(1.05) rotate(0deg)",
            borderRadius: hovered
              ? "60% 40% 55% 45% / 45% 55% 45% 55%"
              : "50% 50% 50% 50% / 50% 50% 50% 50%",
            filter: "blur(2px)",
            opacity: hovered ? 0.9 : 0.6,
          }}
        />

        {/* Photo circle */}
        <div
          className="relative z-10 overflow-hidden transition-transform duration-500 ease-out"
          style={{
            width: 148,
            height: 148,
            borderRadius: "50%",
            border: `3px solid ${accent}`,
            transform: hovered ? "scale(1.04)" : "scale(1)",
            boxShadow: hovered
              ? `0 16px 40px -8px ${accent}99, 0 4px 12px -2px rgba(0,0,0,0.08)`
              : `0 4px 16px -4px ${accent}66, 0 2px 6px -1px rgba(0,0,0,0.05)`,
          }}
        >
          <img
            src={photo}
            alt={name}
            width={148}
            height={148}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              transition: "transform 0.6s ease",
              transform: hovered ? "scale(1.07)" : "scale(1)",
            }}
          />
        </div>
      </div>

      {/* Text */}
      <h3
        className="specialist-name font-semibold leading-snug mb-1 transition-colors duration-300"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.05rem",
          color: hovered ? "#3a6b35" : "#2d4a2a",
          letterSpacing: "0.01em",
        }}
      >
        {name}
      </h3>
      <p
        className="specialist-role transition-colors duration-300"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.78rem",
          color: hovered ? "#5a8a55" : "#7a9e75",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          fontWeight: 500,
          maxWidth: 160,
          lineHeight: 1.4,
        }}
      >
        {role}
      </p>

      {/* Subtle underline indicator */}
      <div
        style={{
          marginTop: 10,
          height: 2,
          width: hovered ? 40 : 0,
          background: `linear-gradient(90deg, ${accent}, ${accent}44)`,
          borderRadius: 2,
          transition: "width 0.4s ease",
        }}
      />
    </div>
  );

  return href ? (
    <a href={href} style={{ textDecoration: "none" }}>
      {card}
    </a>
  ) : (
    card
  );
}

// ─── TeamSection ──────────────────────────────────────────────────────────────

export default function TeamSectionClaude() {
  return (
    <section
      className="team-section relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #f7f9f5 0%, #eef5eb 50%, #f4f7f1 100%)",
        padding: "80px 24px 100px",
      }}
    >
      {/* Decorative organic shapes in background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 380,
          height: 380,
          borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
          background: "radial-gradient(circle, #c8dfc422 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -60,
          left: -60,
          width: 300,
          height: 300,
          borderRadius: "42% 58% 35% 65% / 60% 44% 56% 40%",
          background: "radial-gradient(circle, #a8c5a022 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Section header */}
      <div className="relative z-10 text-center mb-14">
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#7aaa70",
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          Dobre Miejsce · Katowice
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            color: "#2d4a2a",
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          Nasz zespół
        </h2>

        {/* Decorative SVG line (matching site style) */}
        <svg
          width="160"
          height="12"
          viewBox="0 0 160 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ margin: "0 auto 20px", display: "block" }}
        >
          <path
            d="M2 8 C30 2, 60 12, 80 6 C100 0, 130 10, 158 6"
            stroke="#a8c5a0"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.97rem",
            color: "#5a7a56",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Łączymy wiedzę, doświadczenie i serce — by wspierać każde dziecko w
          bezpiecznej, pełnej ciepła atmosferze.
        </p>
      </div>

      {/* Cards grid */}
      <div
        className="relative z-10"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "48px 32px",
          maxWidth: 1020,
          margin: "0 auto",
        }}
      >
        {specialists.map((s, i) => (
          <div
            key={s.id}
            style={{
              animation: `fadeInUp 0.5s ease both`,
              animationDelay: `${i * 0.07}s`,
            }}
          >
            <SpecialistCard specialist={s} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="relative z-10 text-center mt-16">
        {/* <a
          href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-all duration-300"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#fff",
            background: "linear-gradient(135deg, #6aaa5e 0%, #4d8c42 100%)",
            padding: "14px 36px",
            borderRadius: 999,
            textDecoration: "none",
            boxShadow: "0 6px 24px -4px #6aaa5e66",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 12px 32px -4px #6aaa5e88";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 24px -4px #6aaa5e66";
          }}
        >
          Umów wizytę
        </a> */}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
