import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";
import Link from "next/link";

export const metadata = {
  title:
    "Michał Matuszak - Osteopata i fizjoterapeuta dziecięcy Katowice | Dobre Miejsce",
  description:
    "Michał Matuszak- Osteopata i fizjoterapeuta dziecięcy Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Michał Matuszak - Osteopata i fizjoterapeuta dziecięcy Katowice | Dobre Miejsce",
    description:
      "Michał Matuszak- Osteopata i fizjoterapeuta dziecięcy Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/michal-matuszak",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/michal-matuszak.webp",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function MichalMatuszak() {
  return (
    <>
      <Navbar />
      <section className="mt-20">
        <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20">
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="michal-matuszak"
          >
            <img
              src="/michal-matuszak.webp"
              alt="Michał Matuszak"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h2 className={`text-4xl font-bold text-gray mb-6`}>
                Michał Matuszak D.O.
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Osteopata i fizjoterapeuta dziecięcy Katowice
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
                Absolwent Flanders International College of Osteophaty,
                specjalista z wieloletnim doświadczeniem.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Pracuję w oparciu o trzy filary{" "}
                <Link href="/osteopata-dzieciecy" className="text-orange">
                  osteopatii
                </Link>
                : struktura wpływa na funkcję – funkcja wpływa na strukturę –
                ciało dąży do homeostazy.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Diagnozuję i leczę manualnie zaburzenia ruchomości w układzie
                kostno-stawowym, mięśniowo-powięziowym, wisceralnym (narządy
                wewnętrzne) oraz czaszkowo-krzyżowym.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Pracuję z niemowlakami, dziećmi, nastolatkami oraz dorosłymi.
                Najczęściej zgłaszane problemy to:
              </p>

              <p className="font-semibold mb-6">U dzieci:</p>
              <ul
                className="text-md flex flex-col gap-2 font-medium lg:gap-4 lg:text-lg"
                style={{ listStyleImage: 'url("/checkmark.png")' }}
              >
                {[
                  "zaburzenia ssania, karmienia piersią/butelką",
                  "refluks żołądkowo-przełykowy i ulewania",
                  "kolki, wzdęcia, zaparcia",
                  "asymetria posturalna, tortikolis, plagiocefalia",
                  "opóźnienia w osiąganiu kamieni milowych rozwoju ruchowego",
                  "wzmożone / obniżone napięcie mięśniowe",
                  "dolegliwości bólowe kręgosłupa i kończyn u dzieci w wieku szkolnym",
                  "stany po urazach okołoporodowych i operacjach",
                ].map((item, index) => (
                  <li key={index} className="ml-10 pl-4">
                    <p className="relative -top-2">{item}</p>
                  </li>
                ))}
              </ul>

              <p className="font-semibold my-6">U dorosłych:</p>
              <ul
                className="text-md flex flex-col gap-2 font-medium lg:gap-4 lg:text-lg mb-6"
                style={{ listStyleImage: 'url("/checkmark.png")' }}
              >
                {[
                  "zespoły bólowe kręgosłupa (rwa kulszowa, dyskopatia, blokady)",
                  "bóle i zawroty głowy o podłożu napięciowym / szyjnym",
                  "zaburzenia stawów skroniowo-żuchwowych (TMJ)",
                  "problemy z zatokami, szumy uszne, uczucie zatkanych uszu",
                  "dolegliwości trawienne i napięcia brzucha",
                  "ograniczenia ruchomości po urazach i zabiegach operacyjnych",
                ].map((item, index) => (
                  <li key={index} className="ml-10 pl-4">
                    <p className="relative -top-2">{item}</p>
                  </li>
                ))}
              </ul>

              <p className="text-md lg:text-lg mb-6">
                Zapraszam na kompleksową diagnostykę osteopatyczną i terapię
                indywidualnie dopasowaną do Twoich potrzeb.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
