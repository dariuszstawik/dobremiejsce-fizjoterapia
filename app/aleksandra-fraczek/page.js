import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";
import Link from "next/link";

export const metadata = {
  title: "Aleksandra Frączek - logopeda Katowice | Dobre Miejsce",
  description:
    "Aleksandra Frączek - logopeda Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Aleksandra Frączek - logopeda Katowice | Dobre Miejsce",
    description:
      "Aleksandra Frączek - logopeda Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/aleksandra-fraczek",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/logopeda-sm.webp",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function AlEksandraFraczek() {
  return (
    <>
      <Navbar />
      <section className="mt-20">
        <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20">
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="aleksandra-fraczek"
          >
            <img
              src="/logopeda-sm.webp"
              alt="Aleksandra Frączek"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h2 className={`text-4xl font-bold text-gray mb-6`}>
                Aleksandra Frączek
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Logopeda Katowice
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
                Jestem absolwentką kierunku logopedia na Uniwersytecie
                Jagielloński w Krakowie, gdzie zdobyłam rzetelne przygotowanie
                teoretyczne oraz praktyczne w zakresie diagnozy i terapii
                zaburzeń mowy. Swoje doświadczenie zdobywałam m.in. podczas
                praktyk w Polskim Centrum Rehabilitacji Funkcjonalnej VOTUM oraz
                na Oddziale Klinicznym Psychiatrii Dorosłych, Dzieci i Młodzieży
                Szpitala Uniwersyteckiego w Krakowie.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Od 2019 roku pracuję jako logopeda. W swojej pracy łączę
                profesjonalizm z empatią i uważnością na potrzeby Pacjenta.
                Tworzę bezpieczną, wspierającą przestrzeń, w której terapia
                przebiega skutecznie i w przyjaznej atmosferze.
              </p>

              <p className="font-semibold mb-6">
                Prowadzę terapie i diagnozy logopedyczne dla dzieci
                przedszkolnych, szkolnych, młodzieży oraz dorosłych w zakresie:
              </p>
              <ul
                className="text-md flex flex-col gap-2 font-medium lg:gap-4 lg:text-lg"
                style={{ listStyleImage: 'url("/checkmark.png")' }}
              >
                {[
                  "opóźnienia rozwoju mowy u dzieci",
                  "zaburzeń miofunkcjonalnych – zaburzenia z poziomu napięcia mięśniowego w obrębie strefy orofacjalnej (w tym: pacjenci ortodontyczni)",
                  "korekcji wad wymowy u dzieci/dorosłych",
                  "jąkania u dzieci/młodzieży",
                  "zespołu Downa",
                  "zaburzeń mowy u dzieci z rozszczepem podniebienia",
                  "zaburzeń mowy występujących w przebiegu chorób neurologicznych (afazje) u dzieci/dorosłych",
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
