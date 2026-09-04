import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";

export const metadata = {
  title: "Julianna Gwóźdź - fizjoterapeuta dzieci w Katowicach | Dobre Miejsce",
  description:
    "Julianna Gwóźdź - fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Julianna Gwóźdź - fizjoterapeuta dzieci",
    description:
      "Julianna Gwóźdź - fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/julianna-gwozdz",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/julianna-gwozdz.webp",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function JuliannaGwozdz() {
  return (
    <>
      <Navbar />
      <section className="mt-20">
        <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20">
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="sebastian"
          >
            <img
              src="/julianna-gwozdz.webp"
              alt="Julianna Gwóźdź"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h1 className="mb-4 font-heading text-4xl md:text-5xl font-bold max-w-5xl">
                Julianna Gwóźdź
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Fizjoterapeuta dziecięcy Katowice
                </span>{" "}
              </h1>
              <a
                className="inline-block whitespace-nowrap rounded-full bg-orange px-5 py-4 mb-8  text-white no-underline shadow-lg hover:bg-heavy hover:text-white"
                href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Umów wizytę
              </a>

              <p className="text-md lg:text-lg mb-6 font-bold">
                Jestem magistrem fizjoterapii, absolwentką Śląskiego
                Uniwersytetu Medycznego w Katowicach oraz studiów podyplomowych
                przygotowania pedagogicznego. Posiadam 10 letnie doświadczenie w
                pracy z dziećmi. Od początku swojej pracy zawodowej pracowałam z
                najmłodszymi pacjentami.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Jestem terapeutką koncepcji NDT Bobath, której założenia
                wykorzystuję w codziennej pracy. Do każdego pacjenta podchodzę w
                indywidualny sposób, każdą terapię planuję w oparciu o najnowsze
                standardy wiedzy medycznej, stawiając bezpieczeństwo pacjenta na
                pierwszym miejscu. Terapię uzupełniam elementami metody PNF,
                Trójpłaszczyznowej Terapii Manualnej Stóp oraz Tapingu
                rehabilitacyjnego.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Zajmuję się terapią wcześniaków i niemowląt z grupy ryzyka z
                opóźnieniem rozwoju psychoruchowego, z zaburzeniami napięcia
                mięśniowego, asymetrią ułożeniową, kręczem szyi, zaburzeniami
                kształtu głowy, a także terapią niemowląt i dzieci z wadami
                wrodzonymi, chorobami metabolicznymi i zespołami genetycznymi.
              </p>
              <p className="text-md lg:text-lg mb-6">
                Z roku na rok staram się poszerzać swoją wiedzę z zakresu
                fizjoterapii poprzez uczestnictwo w kursach, szkoleniach,
                warsztatach oraz konferencjach naukowych, by później móc ją
                wykorzystywać w trakcie terapii.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
