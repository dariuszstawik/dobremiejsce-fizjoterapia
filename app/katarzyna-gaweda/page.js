import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";

export const metadata = {
  title:
    "Katarzyna Gawęda - fizjoterapeuta dzieci w Katowicach | Dobre Miejsce",
  description:
    "Katarzyna Gawęda - fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Katarzyna Gawęda - fizjoterapeuta dzieci",
    description:
      "Katarzyna Gawęda - fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/katarzyna-gaweda",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/katarzyna-gaweda-sm.webp",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function KatarzynaGaweda() {
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
              src="/katarzyna-gaweda-sm.webp"
              alt="Katarzyna Gawęda"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h1 className="mb-4 font-heading text-4xl md:text-5xl font-bold max-w-5xl">
                Katarzyna Gawęda
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
                Jestem absolwentką kierunku fizjoterapii Śląskiego Uniwersytetu
                Medycznego w Katowicach, oraz studiów podyplomowych na kierunku
                pedagigika.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Swoje doświadczenie w fizjoterapii pediatrycznej zdobywam już od
                10 lat. Staram się stale poszerzać swoją wiedzę z zakresu
                fizjoterapii uczestnicząc aktywnie w kursach, warsztatach oraz
                konferencjach. Miałam okazję prowadzić badania przesiewowe
                dzieci żłobkowych, przedszkolnych i szkolnych w wielu placówkach
                pedagogicznych.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Specjalizuję się w pracy z niemowlętami. Z uwagi na to, że sama
                jestem mamą wiem jak ważne jest poczucie bezpieczeństwa dziecka
                i rodzica podczas terapii.
              </p>
              <p className="text-md lg:text-lg mb-6">
                Staram się dostosowywać swoją wiedzę z różnych dziedzin, aby móc
                jak najlepiej otoczyć indywidualną opieką każdego pacjenta. Mam
                doświadczenie w pracy z dziećmi z wadami postawy ciała, dziećmi
                autystycznymi, i z zaburzeniami integracji sensorycznej.
              </p>
              <p className="font-semibold mb-6">Kwalifikacje:</p>
              <ul
                className="text-md flex flex-col gap-2 font-medium lg:gap-4 lg:text-lg"
                style={{ listStyleImage: 'url("/checkmark.png")' }}
              >
                {[
                  "NDT Bobath Basic dla dzieci 2021/2022 (EBTA)",
                  "Kurs diagnozy i terapii Integracji Sensorycznej I i II stopień 2019/2020",
                  "Kurs Bilateralnej Integracji 2018",
                  "Kurs Trójpłaszczyznowa Manualna terapia wad stóp u dzieci 2021",
                  "Kurs Hipotonia u niemowląt 2021",
                  "Kurs Terapia oddechowa 2018",
                  "Kurs Analiza rozwoju ruchowego dziecka w pierwszym roku życia 2017",
                  "Kurs Diagnostyka i podstawowe zasady leczenia zachowawczego skolioz idiopatycznych 2019",
                  "Kurs Babywork - Rozluźnianie mięśniowo - powięziowe w pediatrii 2022",
                  "Elastyczny Terapeutyczny Taping w pediatrii 2021",
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
