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
                {/* <div className="flex items-center gap-4 mb-2">
                  <PhoneCall className="text-orange" /> 539 937 132
                </div> */}
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
              <h2 className={`text-4xl font-bold text-gray`}>
                Martyna Cesarczyk
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Fizjoterapeuta dziecięcy Katowice
                </span>{" "}
              </h2>

              <div className="mb-6 text:lg md:text-xl lg:text-2xl max-w-5xl ">
                <div className="flex items-center gap-4 mb-2">
                  <Mail className="text-orange" />{" "}
                  martyna.cesarczyk@dobremiejsce-fizjoterapia.pl
                </div>
                {/* <div className="flex items-center gap-4 mb-2">
                  <PhoneCall className="text-orange" /> 577 611 464
                </div> */}
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
            id="sebastian-niemczyk"
          >
            <img
              src="/sebastian-niemczyk.webp"
              alt="Sebastian Niemczyk"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h2 className={`text-4xl font-bold text-gray mb-6`}>
                Sebastian Niemczyk
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Fizjoterapeuta dziecięcy Katowice
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

        <section className="mt-20">
          {/* <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20"> */}
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="michal-handzlik"
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

              {/* <div className="mb-6 text:lg md:text-xl lg:text-2xl max-w-5xl ">
                <div className="flex items-center gap-4 mb-2">
                  <Mail className="text-orange" />{" "}
                  martyna.cesarczyk@dobremiejsce-fizjoterapia.pl
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <PhoneCall className="text-orange" /> 577 611 464
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
          {/* </div> */}
        </section>

        <section className="mt-20">
          {/* <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20"> */}
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

              {/* <div className="mb-6 text:lg md:text-xl lg:text-2xl max-w-5xl ">
                <div className="flex items-center gap-4 mb-2">
                  <Mail className="text-orange" />{" "}
                  martyna.cesarczyk@dobremiejsce-fizjoterapia.pl
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <PhoneCall className="text-orange" /> 577 611 464
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
          {/* </div> */}
        </section>

        <section className="mt-20">
          {/* <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20"> */}
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

              {/* <div className="mb-6 text:lg md:text-xl lg:text-2xl max-w-5xl ">
                <div className="flex items-center gap-4 mb-2">
                  <Mail className="text-orange" />{" "}
                  martyna.cesarczyk@dobremiejsce-fizjoterapia.pl
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <PhoneCall className="text-orange" /> 577 611 464
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
          {/* </div> */}
        </section>

        <section className="mt-20">
          {/* <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20"> */}
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="katarzyna-loranc"
          >
            <img
              src="/katarzyna-loranc-sm.webp"
              alt="Katarzyna Loranc"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h2 className={`text-4xl font-bold text-gray mb-6`}>
                Katarzyna Loranc
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Trenerka personalna
                </span>{" "}
              </h2>

              {/* <div className="mb-6 text:lg md:text-xl lg:text-2xl max-w-5xl ">
                <div className="flex items-center gap-4 mb-2">
                  <Mail className="text-orange" />{" "}
                  martyna.cesarczyk@dobremiejsce-fizjoterapia.pl
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <PhoneCall className="text-orange" /> 577 611 464
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
                Na co dzień prowadzę treningi indywidualne oraz zajęcia grupowe,
                w których skupiam się na bezpiecznym wprowadzaniu ruchu,
                rozwijaniu siły, sprawności oraz świadomości ciała.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Pracowałam z dziećmi i młodzieżą, prowadząc zajęcia
                ogólnorozwojowe, które łączyły elementy piłki ręcznej z
                ćwiczeniami poprawiającymi koordynację, równowagę, stabilizację
                i siłę. Uważam, że aktywność fizyczną warto wprowadzać i uczyć
                od najmłodszych lat, bo to podstawa prawidłowego rozwoju i
                zdrowych nawyków.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Podczas zajęć stawiam na bezpieczeństwo, indywidualne podejście
                i dobrą atmosferę, tak aby dzieci chętnie uczestniczyły w
                ćwiczeniach i czerpały z nich radość.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20">
          {/* <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20"> */}
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="kamila-tomaszkiewicz"
          >
            <img
              src="/kamila-tomaszkiewicz.webp"
              alt="Kamila Tomaszkiewicz"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h2 className={`text-4xl font-bold text-gray mb-6`}>
                Kamila Tomaszkiewicz
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Psycholog
                </span>{" "}
              </h2>

              {/* <div className="mb-6 text:lg md:text-xl lg:text-2xl max-w-5xl ">
                <div className="flex items-center gap-4 mb-2">
                  <Mail className="text-orange" />{" "}
                  martyna.cesarczyk@dobremiejsce-fizjoterapia.pl
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <PhoneCall className="text-orange" /> 577 611 464
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
                Ukończyłam studia psychologiczne na Uniwersytecie Śląskim w
                Katowicach. Od 7 lat pracuję z dziećmi, młodzieżą i ich
                rodzicami. Prowadzę zajęcia i konsultacje indywidualne, a także
                treningi umiejętności społecznych i warsztaty dla rodziców. Cały
                czas staram się aktualizować i wzbogacać swoją wiedzę i
                umiejętności.
              </p>

              <p className="text-md lg:text-lg mb-6">
                W mojej pracy najważniejsza dla mnie jest dobra relacja z
                osobami, które zwracają się do mnie po wsparcie,
                interdyscyplinarne podejście, zwracanie uwagi na mocne strony,
                nie skupianie się tylko na trudnościach i deficytach, a także
                wiara w to, że warto szukać rozwiązań dla wszelkich problemów i
                dbać o jakość życia swoją i swoich bliskich :)
              </p>
            </div>
          </div>
        </section>
      </PageTemplate>
    </>
  );
}
