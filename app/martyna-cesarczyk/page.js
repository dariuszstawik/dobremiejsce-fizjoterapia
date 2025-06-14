import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";
import Link from "next/link";

export const metadata = {
  title:
    "Martyna Cesarczyk - fizjoterapeuta dzieci w Katowicach | Dobre Miejsce",
  description:
    "Martyna Cesarczyk - fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Martyna Cesarczyk - fizjoterapeuta dzieci",
    description:
      "Martyna Cesarczyk - fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/martyna-cesarczyk",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/martyna-cesarczyk.png",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function MartynaCesarczyk() {
  return (
    <>
      <Navbar />

      <section>
        <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20">
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="martyna"
          >
            <img
              src="/martyna-cesarczyk.png"
              alt="Martyna Cesarczyk"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h1 className="mb-4 font-heading text-4xl md:text-5xl font-bold max-w-5xl">
                Martyna Cesarczyk
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Fizjoterapeuta dziecięcy Katowice
                </span>{" "}
              </h1>

              <div className="mb-6 text:lg md:text-xl lg:text-2xl max-w-5xl ">
                <div className="flex items-center gap-4 mb-2">
                  <Mail className="text-orange" />{" "}
                  martyna.cesarczyk@dobremiejsce-fizjoterapia.pl
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <PhoneCall className="text-orange" /> 577 611 464
                </div>
              </div>
              <a
                className="inline-block whitespace-nowrap rounded-full bg-orange px-5 py-4 mb-8  text-white no-underline shadow-lg hover:bg-heavy hover:text-white"
                href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Umów wizytę
              </a>

              <p className="text-md lg:text-lg mb-6 font-bold">
                Jestem absolwentką kierunku fizjoterapii Śląskiego Uniwersytetu
                Medycznego w Katowicach, studiów podyplomowych na kierunku
                Neurorozwojowa Terapia Dzieci z Chorobami Układu Nerwowego oraz
                studiów podyplomowych pedagogicznych.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Swoje doświadczenie w fizjoterapii pediatrycznej zdobywałam
                m.in. w Górnośląskim Centrum Zdrowia Dziecka w Katowicach,
                Centrum Intensywnej Terapii Olinek w Warszawie, NZOZ Terapia w
                Rudzie Śląskiej i SORO dla Dzieci Niepełnosprawnych w
                Katowicach.
              </p>

              <p className="text-md lg:text-lg mb-6">
                W dziedzinie fizjoterapii pediatrycznej najbardziej pasjonuje
                mnie praca z dziećmi z mózgowym porażeniem dziecięcym i innymi
                chorobami centralnego układu nerwowego. Mam doświadczenie w
                pracy z niemowlętami i dziećmi z{" "}
                <Link
                  href="/terapia-wad-postawy-u-dzieci"
                  className="text-orange"
                >
                  wadami postawy ciała
                </Link>
                . Prowadzę również{" "}
                <Link href="/terapia-si-w-katowicach" className="text-orange">
                  {" "}
                  diagnozę i terapię integracji sensorycznej
                </Link>
                .
              </p>
              <p className="font-semibold mb-6">Kwalifikacje:</p>
              <ul
                className="text-md flex flex-col gap-2 font-medium lg:gap-4 lg:text-lg"
                style={{ listStyleImage: 'url("/checkmark.png")' }}
              >
                {[
                  "NDT Bobath Basic dla dzieci 2021 (EBTA)",
                  "Kurs diagnozy i terapii Integracji Sensorycznej I i II stopień 2018/2019",
                  "PNF podstawowy 2016 (PNF Basic course)",
                  "Elastyczny Terapeutyczny Taping w pediatrii 2022",
                  "Kinesiotaping podstawowy 2014",
                  "Visual Impairment in infants with brain damage dr Andrea Guzetta 2022",
                  "Dziecko słabowidzące albo zagrożone rozwojem słabo wzroczności u fizjoterapeuty – podstawowe informacje i strategie pracy dr Agata Grzegorzewska 2022",
                  "Dobór indywidualnych wkładek Igli MEDI 2023",
                  "ZOGA Niemowląt moduł I i II 2024",
                  "Osteopatia Pediatryczna w Zaburzeniach Układu Pokarmowego 2024",
                  "HINE (HAMMERSMITH INFANT NEUROLOGICAL EXAMINATION) 2024",
                  "GTS - Stopa Dziecka - diagnostyka i terapia 2025",
                  "Motoryczna Terapia Jedzenia 2025",
                  "ZOGA Wady Postawy 2025",
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
