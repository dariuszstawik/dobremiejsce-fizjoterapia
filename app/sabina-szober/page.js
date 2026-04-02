import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";
import Link from "next/link";

export const metadata = {
  title: "Sabina Szober - neurologopeda Katowice | Dobre Miejsce",
  description:
    "Sabina Szober - neurologopeda Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Sabina Szober - neurologopeda Katowice | Dobre Miejsce",
    description:
      "Sabina Szober - neurologopeda Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/sabina-szober",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/sabina-szober1.webp",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function SabinaSzober() {
  return (
    <>
      <Navbar />
      <section className="mt-20">
        <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20">
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="sabina-szober"
          >
            <img
              src="/sabina-szober1.webp"
              alt="Sabina Szober"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h2 className={`text-4xl font-bold text-gray mb-6`}>
                Sabina Szober
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Neurologopeda Katowice
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
                Neurologopeda z wieloletnim doświadczeniem w zakresie
                prowadzenia terapii neurologopedycznych w oddziale klinicznym
                neurologii, laryngologii, oddziałach intensywnej terapii, w tym
                intensywnej terapii pediatrycznej, neonatologicznej oraz poradni
                logopedycznej i neurologopedycznej.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Nauczyciel akademicki w zakresie neurologopedii. Autorka pozycji
                logopedycznych – książki, artykuły. 
              </p>

              <p className="font-semibold mb-6">
                Zakres konsultacji diagnostycznych oraz działań terapeutycznych:
              </p>
              <ul
                className="text-md flex flex-col gap-2 font-medium lg:gap-4 lg:text-lg"
                style={{ listStyleImage: 'url("/checkmark.png")' }}
              >
                {[
                  "neonatologiczna interwencja logopedyczna i neurologopedyczna, w tym neurologopedyczne doradztwo laktacyjne oraz konsultacje przedporodowe w kierunku przygotowania do karmienia drogą naturalną nowonarodzonego dziecka",

                  "neonatologiczna interwencja logopedyczna i neurologopedyczna – wcześniaki",

                  "diagnoza i terapia zaburzeń komunikacji w przebiegu chorób genetycznych u dzieci i dorosłych, w tym pacjenci z wadami dysmorficznymi",

                  "diagnoza i terapia w przebiegu rozszczepów podniebienia",

                  "standardowe działania logopedyczne (wady wymowy, jąkanie i inne)",

                  "diagnoza i terapia opóźnienia rozwoju mowy",

                  "diagnoza i terapia dzieci w przebiegu zaburzeń neurorozwojowych",

                  "diagnoza i terapia dzieci w przebiegu spectrum autyzmu",

                  "rehabilitacja neurologopedyczna w przebiegu porażeń nerwu twarzowego",

                  "rehabilitacja neurologopedyczna pacjentów po rekonstrukcjach w obrębie strefy orofacjalnej, w tym języka",

                  "diagnoza i terapia w przebiegu uszkodzeń neurologicznych (udary, urazy mózgowe, powikłania pooperacyjne OUN) u dzieci i dorosłych – afazje, dyzartrie",

                  "diagnoza i terapia w przebiegu chorób neurodegeneracyjnych mózgu",

                  "wspomaganie funkcjonowania osób w przebiegu chorób wieku podeszłego (otępienia, Alzhaimer)",

                  "diagnoza i terapia w przebiegu zaburzeń laryngologicznych oraz foniatrycznych (w tym w przebiegu uszkodzenia nerwu krtaniowego, porażeń więzadeł głosowych) neurologicznych (udary, urazy mózgowe, powikłania pooperacyjne OUN) u dzieci i dorosłych – afazje, dyzartrie",
                  "poprawa wymowy młodzieży i dorosłych – przygotowanie zawodowe.",
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
