"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import PageTemplate from "../components/page-template";
import Button from "../components/Button";

// Accent colors drawn from the theme palette
const ACCENTS = ["#ff6e41", "#ffcea0", "#ffb87a"];

const specialists = [
  {
    id: 1,
    name: "Kamila Włodarczyk",
    role: "Fizjoterapeuta dziecięcy",
    photo: "/kamila-wlodarczyk.png",
    href: "/kamila-wlodarczyk",
    // accent: ACCENTS[0],
  },
  {
    id: 2,
    name: "Martyna Cesarczyk",
    role: "Fizjoterapeuta dziecięcy",
    photo: "/martyna-cesarczyk.png",
    href: "/martyna-cesarczyk",
    // accent: ACCENTS[1],
  },
  {
    id: 3,
    name: "Sebastian Niemczyk",
    role: "Fizjoterapeuta dziecięcy",
    photo: "/sebastian-niemczyk.webp",
    href: "/sebastian-niemczyk",
    // accent: ACCENTS[2],
  },
  {
    id: 4,
    name: "Michał Matuszak",
    role: "D.O. Dyplomowany osteopata, fizjoterapeuta",
    photo: "/michal-matuszak.webp",
    href: "/michal-matuszak",
    // accent: ACCENTS[0],
  },
  {
    id: 5,
    name: "Michał Handzlik",
    role: "D.O. Dyplomowany osteopata, fizjoterapeuta",
    photo: "/michal-handzlik.webp",
    href: "/michal-handzlik",
    // accent: ACCENTS[1],
  },
  {
    id: 6,
    name: "Jakub Śmistek",
    role: "Fizjoterapeuta, terapeuta integracji sensorycznej",
    photo: "/jakub-smistek.webp",
    href: "/jakub-smistek",
    // accent: ACCENTS[2],
  },
  {
    id: 7,
    name: "Katarzyna Loranc",
    role: "Trenerka personalna",
    photo: "/katarzyna-loranc-sm.webp",
    href: "/katarzyna-loranc",
    // accent: ACCENTS[0],
  },
  {
    id: 8,
    name: "Kamila Tomaszkiewicz",
    role: "Psycholog",
    photo: "/kamila-tomaszkiewicz.webp",
    href: "/kamila-tomaszkiewicz",
    // accent: ACCENTS[1],
  },
  {
    id: 9,
    name: "Sabina Szober",
    role: "Neurologopeda",
    photo: "/sabina-szober1.webp",
    href: "/sabina-szober",
    // accent: ACCENTS[2],
  },
  {
    id: 10,
    name: "Aleksandra Frączek",
    role: "Logopeda",
    photo: "/logopeda-sm.webp",
    href: "/aleksandra-fraczek",
    // accent: ACCENTS[2],
  },
];

function SpecialistCard({ specialist }) {
  const [hovered, setHovered] = useState(false);
  const { name, role, photo, href, accent } = specialist;

  const card = (
    <div
      className="group flex flex-col items-center text-center cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        "--accent": accent,
        maxWidth: "220px",
        margin: "0 auto",
      }}
    >
      <div className="relative mb-4">
        <div
          className="absolute inset-0 z-0 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at 40% 40%, ${accent}cc, ${accent}44)`,
            transform: hovered
              ? "scale(1.12) rotate(8deg)"
              : "scale(1.05) rotate(0deg)",
            borderRadius: hovered ? "60% 40% 55% 45% / 45% 55% 45% 55%" : "50%",
            filter: "blur(2px)",
            opacity: hovered ? 0.9 : 0.55,
          }}
        />

        <div
          className="relative z-10 overflow-hidden transition-transform duration-500 ease-out rounded-full"
          style={{
            width: 148,
            height: 148,
            transform: hovered ? "scale(1.04)" : "scale(1)",
            boxShadow: hovered
              ? "0 16px 40px -8px rgba(0,0,0,0.12), 0 4px 12px -2px rgba(0,0,0,0.08)"
              : "0 6px 18px -6px rgba(0,0,0,0.10), 0 2px 8px -2px rgba(0,0,0,0.05)",
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

      <h3
        className="leading-snug transition-colors duration-300"
        style={{
          color: hovered ? "#ff6e41" : "#19191a",
          fontSize: "1.05rem",
          fontWeight: 600,
          marginBottom: "0.4rem",
        }}
      >
        {name}
      </h3>

      <p
        className="transition-colors duration-300"
        style={{
          color: hovered ? "#ff6e41" : "#b07050",
          fontSize: "0.78rem",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          fontWeight: 500,
          lineHeight: 1.45,
          maxWidth: "180px",
          minHeight: "2.8em",
          margin: 0,
        }}
      >
        {role}
      </p>

      <div
        style={{
          marginTop: 12,
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
    <a
      href={href}
      style={{
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {card}
    </a>
  ) : (
    card
  );
}

export default function TeamSection() {
  return (
    <>
      <Navbar />

      <PageTemplate
        isTeamPage
        title="Nasz zespół"
        lead="W Dobrym Miejscu najważniejsze są dzieci i ich potrzeby – dlatego tworzymy zespół specjalistów, którzy łączą wiedzę, doświadczenie i ogromne serce do pracy z najmłodszymi. Każdy z nas ma swoją specjalizację, ale wspólnie dążymy do jednego celu: wspierać rozwój dziecka w bezpiecznej, pełnej ciepła atmosferze, w której ruch staje się źródłem zdrowia i radości."
      >
        <section className="relative overflow-hidden bg-transparent pt-16">
          <div
            className="relative z-10"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "40px 28px",
              maxWidth: "1080px",
              //   margin: "0 auto",
              alignItems: "start",
            }}
          >
            {specialists.map((s, i) => (
              <div
                key={s.id}
                style={{
                  animation: "fadeInUp 0.5s ease both",
                  animationDelay: `${i * 0.07}s`,
                }}
              >
                <SpecialistCard specialist={s} />
              </div>
            ))}
          </div>

          <div
            className="relative z-10 text-center"
            style={{ marginTop: "56px" }}
          >
            <Button
              title="Umów wizytę"
              href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
            />
          </div>

          <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(22px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
        </section>
      </PageTemplate>
    </>
  );
}
