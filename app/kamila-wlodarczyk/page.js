import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";

export const metadata = {
  title:
    "Kamila Włodarczyk - fizjoterapeuta dzieci w Katowicach | Dobre Miejsce",
  description:
    "Kamila Włodarczyk - fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: false,
    follow: false,
  },
};

export default function KamilaWlodarczyk() {
  return (
    <>
      <Navbar />

      <section>
        <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20">
          {/* <h2 className="mb-8 text-3xl font-semibold lg:mb-16">Nasz zespół</h2> */}
          {/* Kamila Section */}
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
              <h1 className="mb-4 font-heading text-4xl md:text-5xl font-bold max-w-5xl">
                Kamila Włodarczyk{" "}
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Fizjoterapeuta dziecięcy Katowice
                </span>{" "}
                {/* <span className="block text-3xl">Katowice</span> */}
              </h1>
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
