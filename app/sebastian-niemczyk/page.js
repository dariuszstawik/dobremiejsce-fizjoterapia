import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";

export const metadata = {
  title:
    "Sebastian Niemczyk - fizjoterapeuta dzieci w Katowicach | Dobre Miejsce",
  description:
    "Sebastian Niemczyk- fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Sebastian Niemczyk- fizjoterapeuta dzieci",
    description:
      "Sebastian Niemczyk - fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/kamila-wlodarczyk",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/sebastian-niemczyk.webp",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function SebastianNiemczyk() {
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
              src="/sebastian-niemczyk.webp"
              alt="Sebastian Niemczyk"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h1 className="mb-4 font-heading text-4xl md:text-5xl font-bold max-w-5xl">
                Sebastian Niemczyk
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
                Ruch uważam za jeden z najważniejszych elementów życia – to
                zarówno przywilej, jak i fundament zdrowia. Po wielu latach
                pracy w prywatnych placówkach dla dzieci i młodzieży rozpocząłem
                pracę w szpitalu, gdzie miałem okazję poznawać różne oddziały:
                od ortopedii i chirurgii urazowej, przez anestezjologię i
                intensywną terapię, neurochirurgię, kardiochirurgię, chirurgię
                dziecięcą, pediatrię, aż po diabetologię. To właśnie tutaj
                odkryłem, że moja prawdziwa pasja to Oddział Chirurgii
                Urazowo-Ortopedycznej – miejsce, w którym mogę pomagać pacjentom
                wracać do pełnej sprawności, czasem dosłownie stawiając ich z
                powrotem na nogi.
              </p>

              <p className="text-md lg:text-lg mb-6">
                W pracy z pacjentami – zarówno dziećmi, jak i młodzieżą –
                najważniejsze są dla mnie relacje. Budowanie przyjaznej
                atmosfery pozwala, aby terapia, nawet jeśli wiąże się z bólem,
                dyskomfortem lub wysiłkiem, była bezpieczna, mniej stresująca i
                efektywna. Staram się pokazać pacjentom, że ruch może nie tylko
                pomagać w powrocie do zdrowia, ale też sprawiać radość i być
                częścią aktywnego, pełnego energii życia.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Studiowałem Fizjoterapię na Akademii Wychowania Fizycznego w
                Katowicach, a od 2017 roku rozwijam się zawodowo, korzystając z
                różnorodnych szkoleń oraz doświadczeń zdobytych w pracy z
                pacjentami na wielu oddziałach szpitalnych. Na co dzień staram
                się też być na bieżąco – szukam nowości, czytam i poszerzam
                wiedzę z zakresu fizjoterapii, bo wierzę, że tylko dzięki
                ciągłemu rozwojowi mogę jak najlepiej wspierać swoich pacjentów.
              </p>
              <p className="font-semibold mb-6">Wybrane kursy i szkolenia:</p>
              <ul
                className="text-md flex flex-col gap-2 font-medium lg:gap-4 lg:text-lg"
                style={{ listStyleImage: 'url("/checkmark.png")' }}
              >
                {[
                  "Przygotowanie pedagogiczne 2018",
                  "Blizna - terapia kompleksowa 2019",
                  "Uszkodzenie więzadła krzyżowego przedniego 2023",
                  "Mały sportowiec 2023",
                  "Fizjoterapia w oddziałach intensywnej terapii i intensywnego nadzoru–od tlenoterapii biernej do nieinwazyjnej wentylacji 2023",
                  "Staw kolanowy - badanie i strategie leczenia 2023",
                  "Leczenie operacyjne w ortopedii 2023",
                  "Choroba Osgood-Schlattera 2024",
                  "Ból stawu kolanowego 2025",
                  "Pourazowa niestabilność stawu skokowego 2025",
                  "Medycyna sportowa w pracy fizjoterapeuty i trenera 2025",
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
