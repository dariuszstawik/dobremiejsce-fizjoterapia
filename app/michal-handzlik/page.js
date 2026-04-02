import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";
import Link from "next/link";

export const metadata = {
  title:
    "Michał Handzlik - Dyplomowany osteopata, fizjoterapeuta Katowice | Dobre Miejsce",
  description:
    "Michał Handzlik - Dyplomowany osteopata, fizjoterapeuta Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Michał Handzlik - Dyplomowany osteopata, fizjoterapeuta Katowice | Dobre Miejsce",
    description:
      "Michał Handzlik - Dyplomowany osteopata, fizjoterapeuta Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/michal-handzlik",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/michal-handzlik.webp",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function MichalHandzlik() {
  return (
    <>
      <Navbar />
      <section className="mt-20">
        <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20">
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="michal-handzlik"
          >
            <img
              src="/michal-handzlik.webp"
              alt="Michał Handzlik"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h2 className={`text-4xl font-bold text-gray mb-6`}>
                Michał Handzlik D.O.
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Dyplomowany osteopata, fizjoterapeuta
                </span>{" "}
              </h2>

              <a
                className="inline-block whitespace-nowrap rounded-full bg-orange px-5 py-4 mb-8  text-white no-underline shadow-lg hover:bg-heavy hover:text-white"
                href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Umów wizytę
              </a>

              <p className="text-md lg:text-lg mb-6 font-bold">
                W swojej pracy stawiam na uważność, bezpieczeństwo i
                indywidualne podejście do każdego pacjenta. Jako dyplomowany{" "}
                <Link href="/osteopata-dzieciecy" className="text-orange">
                  osteopata
                </Link>{" "}
                i fizjoterapeuta pomagam osobom dorosłym, dzieciom oraz
                niemowlętom w łagodzeniu bólu, poprawie funkcjonowania ciała i
                odzyskaniu komfortu w codziennym życiu.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Ukończyłem fizjoterapię na Śląskim Uniwersytecie Medycznym w
                Katowicach oraz 4-letnie studia osteopatyczne w Still Academy of
                Osteopathy w Warszawie. Stale rozwijam swoje kompetencje
                uczestnicząc w kursach i szkoleniach.
              </p>

              <p className="text-md lg:text-lg mb-6">
                W terapii kieruję się holistycznym spojrzeniem na organizm,
                szukając przyczyn dolegliwości, a nie tylko ich objawów.
              </p>
              <p className="font-semibold mb-6">Kwalifikacje:</p>
              <ul
                className="text-md flex flex-col gap-2 font-medium lg:gap-4 lg:text-lg"
                style={{ listStyleImage: 'url("/checkmark.png")' }}
              >
                {[
                  "Szkoła Osteopatii Pediatrycznej (dr George Stylian D.O., GradCertOsteoPaed) 2025/nadal",
                  "Staw skroniowo-żuchwowy diagnostyka i terapia 2025",
                  "Podstawowe wzorce Ontogenezy Motorycznej 2025",
                  "Znaczenie badania odruchów oraz próby trakcji w różnych jednostkach chorobowych 2025",
                  "Osteopatia Pediatryczna moduł I i II (Marie Caroline Wilieme D.O.) 2024",
                  "Ocena postawy ciała u dzieci i młodzieży w kierunku wykrywania nieprawidłowości w jej obrębie 2024",
                  "Staw kolanowy - badanie i strategia leczenia 2023",
                  "Choroba zwyrodnieniowa stawu kolanowego 2023",
                  "Suche igłowanie - medyczna akupunktura – moduł I 2020",
                  "Terapia manualna wg Standardów IFOMPT 10 modułów zakończonych egzaminem MT I 2016/2019",
                  "PNF Basic 2017",
                  "Mobilizacji tkanek miękkich 2014/2015",
                  "Aktywne i pasywne techniki rozluźniania mięśniowo-powięziowego 2014/2015",
                  "Masażu głębokiego tkanek miękkich 2014/2015",
                  "Terapii punktów spustowych 2014/2015",
                  "Integracja strukturalna w oparciu o łańcuchy mięśniowo-powięziowe” – Kurs podstawowy 2014/2015",
                  "Kinesiotaping - kurs podstawowy 2013",
                ].map((item, index) => (
                  <li key={index} className="ml-10 pl-4">
                    <p className="relative -top-2">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
