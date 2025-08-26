import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";
import Link from "next/link";
import SectionTitle from "../components/section-title";
import PageTemplate from "../components/page-template";

export const metadata = {
  title: "Nasz zespół- fizjoterapeuci dziecięcy w Katowicach | Dobre Miejsce",
  description:
    "Nasz zespół - fizjoterapeuci dziecięcy w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Nasz zespół - fizjoterapeuci dziecięcy",
    description:
      "Nasz zespół- fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/kamila-wlodarczyk",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/kamila-wlodarczyk.png",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function Zespol() {
  return (
    <>
      <Navbar />

      <PageTemplate
        // isBlog
        isTeamPage
        title="Nasz zespół"
        lead="W Dobrym Miejscu najważniejsze są dzieci i ich potrzeby – dlatego tworzymy zespół fizjoterapeutów, którzy łączą wiedzę, doświadczenie i ogromne serce do pracy z najmłodszymi. Każdy z nas ma swoją specjalizację, ale wspólnie dążymy do jednego celu: wspierać rozwój dziecka w bezpiecznej, pełnej ciepła atmosferze, w której ruch staje się źródłem zdrowia i radości."
        // img="/kamila-wlodarczyk.png"
        // alt="Fizjoterapia dzieci"
      >
        <section className="mt-8">
          {/* <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20"> */}
          {/* <SectionTitle title="Nasz zespół" /> */}
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="kamila"
          >
            {/* <div> */}
            <img
              src="/kamila-wlodarczyk.png"
              alt="Kamila Włodarczyk"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />
            {/* </div> */}
            <div className="text-gray">
              {/* <h3 className="mb-5 text-xl font-semibold lg:text-2xl lg:text-3xl"> */}
              <h2 className={`text-4xl font-bold text-gray`}>
                Kamila Włodarczyk
              </h2>
              <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                {" "}
                Fizjoterapeuta dziecięcy Katowice
              </span>{" "}
              {/* <span className="block text-3xl">Katowice</span> */}
              {/* </h3> */}
              <div className="mb-6 text:lg md:text-xl lg:text-2xl max-w-5xl ">
                <div className="flex items-center gap-4 mb-2">
                  <Mail className="text-orange" />{" "}
                  kamila.wlodarczyk@dobremiejsce-fizjoterapia.pl
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <PhoneCall className="text-orange" /> 539 937 132
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
              {/* <div className="mb-6 text-2xl max-w-5xl ">
                Jestem absolwentką Śląskiego Uniwersytetu Medycznego. Od 2016
                roku zajmuję się fizjoterapią pediatryczną. Terapię
                neurorozwojową niemowląt prowadzę wg. metody NDT-Bobath. Pracuję
                również ze starszymi dziećmi z wadami postawy ciała, natomiast
                specjalizuję się w diagnozie rozwojowej oraz terapii noworodków
                i dzieci do pierwszego roku życia.
              </div> */}
              {/* <a
                className="inline-block whitespace-nowrap rounded-full bg-orange px-5 py-4 mb-8  text-white no-underline shadow-lg hover:bg-heavy hover:text-white"
                href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Umów wizytę
              </a> */}
              <p className="text-md lg:text-lg mb-6 font-bold">
                Jestem absolwentką Śląskiego Uniwersytetu Medycznego. Od 2016
                roku zajmuję się fizjoterapią pediatryczną. Terapię
                neurorozwojową niemowląt prowadzę wg. metody NDT-Bobath. Pracuję
                również ze starszymi dziećmi z wadami postawy ciała, natomiast
                specjalizuję się w diagnozie rozwojowej oraz terapii noworodków
                i dzieci do pierwszego roku życia.
              </p>
              <p className="text-md lg:text-lg mb-6">
                Na co dzień pracuję w Górnośląskim Centrum Zdrowia Dziecka w
                Katowicach w Oddziale Neonatologii i Intensywnej Terapii
                Noworodka oraz jako konsultant w Oddziale Neonatologii Szpitala
                Miejskiego w Rudzie Śląskiej.
              </p>
              {/* <div className="flex gap-4">
                <Mail className="text-orange" />{" "}
                kamila.wlodarczyk@dobremiejsce-fizjoterapia.pl
              </div>
              <div className="flex gap-4">
                <PhoneCall className="text-orange" /> 539 937 132
              </div> */}
              <p className="text-md lg:text-lg mb-6">
                Pasja zawodowa zaprowadziła mnie do wyjątkowego porozumienia z
                najmniejszymi pacjentami-jedną z moich misji jest pomoc
                noworodkom i ich Rodzinom w adaptacji do nowego Świata- również
                tego po wyjściu z Oddziału Intensywnej Terapii. Podczas pracy
                terapeutycznej szczególnie ważna jest dla mnie indywidualność
                każdego dziecka i to na jej bazie buduję diagnozę i terapię.
              </p>
              <p className="font-semibold mb-6">Kwalifikacje:</p>
              <ul
                className="text-md flex flex-col gap-2 font-medium lg:gap-4 lg:text-lg"
                style={{ listStyleImage: 'url("/checkmark.png")' }}
              >
                {[
                  "PNF kurs podstawowy (PNF Basic course) 2017",
                  "NDT-Bobath dla dzieci (EBTA) 2018",
                  "Terapia oddechowa noworodków, niemowląt i małych dzieci metodą Zwiększania Przepływów Oddechowych AFE/AFI 2019",
                  "Opieka, stymulacja i terapia rozwojowa w oddziałach neonatologicznych 2019",
                  "NBAS Skala Oceny Zachowania Noworodka (Skala Brazeltona) 2020",
                  "Diagnostyka metodą Prechtla - kurs podstawowy 2020",
                  "Podejście osteopatyczne w pediatrii (niemowlaki 0-1) 2021",
                  "Karmienie wcześniaka na Oddziale Neonatologicznym 2022",
                  "ZOGA Niemowląt moduł I i II 2024",
                  "Osteopatia Pediatryczna w Zaburzeniach Układu Pokarmowego 2024",
                  "HINE (Hammersmith Infant Neurological Examination) 2024",
                  "GTS - Stopa Dziecka - diagnostyka i terapia 2025",
                  "Współczesna fizjoterapia oddechowa - stymulacja oraz oczyszczanie układu oddechowego od pierwszych dni życia 2025",
                ].map((item, index) => (
                  <li key={index} className="ml-10 pl-4">
                    <p className="relative -top-2">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* </div> */}
        </section>
        <section className="mt-20">
          {/* <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20"> */}
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
          {/* </div> */}
        </section>

        <section className="mt-20">
          {/* <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20"> */}
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

              {/* <div className="mb-6 text:lg md:text-xl lg:text-2xl max-w-5xl ">
                <div className="flex items-center gap-4 mb-2">
                  <Mail className="text-orange" />{" "}
                  kamila.wlodarczyk@dobremiejsce-fizjoterapia.pl
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <PhoneCall className="text-orange" /> 539 937 132
                </div>
              </div> */}
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
          {/* </div> */}
        </section>
      </PageTemplate>
    </>
  );
}
