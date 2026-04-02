import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";
import Link from "next/link";

export const metadata = {
  title:
    "Jakub Śmistek - Fizjoterapeuta, certyfikowany terapeuta integracji sensorycznej Katowice | Dobre Miejsce",
  description:
    "Jakub Śmistek - Fizjoterapeuta, certyfikowany terapeuta integracji sensorycznej Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Jakub Śmistek - Fizjoterapeuta, certyfikowany terapeuta integracji sensorycznej Katowice | Dobre Miejsce",
    description:
      "Jakub Śmistek - Fizjoterapeuta, certyfikowany terapeuta integracji sensorycznej Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/jakub-smistek",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/jakub-smistek.webp",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function JakubSmistek() {
  return (
    <>
      <Navbar />
      <section className="mt-20">
        <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20">
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="jakub-smistek"
          >
            <img
              src="/jakub-smistek.webp"
              alt="Jakub Śmistek"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h2 className={`text-4xl font-bold text-gray mb-6`}>
                Jakub Śmistek
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Fizjoterapeuta, certyfikowany terapeuta integracji
                  sensorycznej
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
                Na co dzień pracuje z dziećmi z wadami postawy, wadami stóp,
                MPD, autyzmem, aspergerem, zespółem Downa oraz zaburzeniami
                procesów{" "}
                <Link href="/terapia-si-w-katowicach" className="text-orange">
                  integracji sensorycznej.
                </Link>{" "}
                W swojej pracy łączę różne metody fizjoterapeutyczne aby uzyskać
                jak najlepsze efekty terapeutyczne. Każdy plan terapii
                przygotowuje indywidualnie, tak aby był nie tylko skuteczny, ale
                też ciekawy i motywujący.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Dla mnie fizjoterapia to nie tylko praca, ale sposób patrzenia
                na świat — pełen empatii, cierpliwości i wiary w potencjał
                każdego dziecka. Wierzę, że nawet najmniejsze postępy są
                wielkimi zwycięstwami, a każdy dzień w gabinecie to szansa, by
                pomóc komuś poczuć się silniejszym. Poza swoją pracą lubie
                również podróżę górskie, bieganie, taniec, a dla relaksu lubię
                zanurzyć się w media w świecie fantazy lub grać w gry
                komputerowe.
              </p>

              <p className="font-semibold mb-6">Wykształcenie:</p>
              <ul
                className="text-md flex flex-col gap-2 font-medium lg:gap-4 lg:text-lg"
                style={{ listStyleImage: 'url("/checkmark.png")' }}
              >
                {[
                  "Absolwent Uniwersytetu Jana Kochanowskiego w Kielcach na Collegium Medicum, kierunek - Fizjoterapia",
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
