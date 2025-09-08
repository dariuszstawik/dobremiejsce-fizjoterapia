import Link from "next/link";
import Navbar from "../components/navbar";
import PageTemplate from "../components/page-template";

export const metadata = {
  title: "Terapia wad postawy u dzieci Katowice | Dobre Miejsce",
  description:
    "Profesjonalna terapia wad postawy u dzieci w Katowicach – ćwiczenia korekcyjne, wkładki ortopedyczne",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Terapia wad postawy u dzieci Katowice",
    description:
      "Profesjonalna terapia wad postawy u dzieci w Katowicach – ćwiczenia korekcyjne, wkładki ortopedyczne",
    url: "https://dobremiejsce-fizjoterapia.pl/terapia-wad-postawy-u-dzieci",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/dm7.webp",
        width: 2000,
        height: 2667,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};
export default function TerapiaWadPostawyUDzieci() {
  return (
    <>
      <Navbar />
      <PageTemplate
        title={
          <>
            Terapia wad postawy <br /> Katowice
          </>
        }
        lead="Czy zauważyłeś/aś, że Twoje dziecko często się garbi, ma asymetryczne ramiona lub skarży się na bóle pleców? Te sygnały mogą wskazywać na wady postawy, które - wcześnie wykryte i leczone - można skutecznie skorygować."
        img="/dm7.webp"
        alt="Terapia wad postawy w Katowicach"
        bannerBody="Nie czekaj, aż wady postawy się pogłębią. Umów się na wizytę diagnostyczną, podczas której ocenimy postawę Twojego dziecka i zaproponujemy odpowiedni plan terapii. W Dobrym Miejscu łączymy profesjonalizm z przyjazną atmosferą, dzięki czemu dzieci chętnie uczestniczą w zajęciach."
        imgBottom
      >
        {
          <>
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Dlaczego wady postawy są tak istotnym problemem?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                W dzisiejszych czasach dzieci spędzają coraz więcej czasu w
                pozycji siedzącej - przed komputerem, tabletem czy telefonem.
                To, w połączeniu z mniejszą aktywnością fizyczną, może prowadzić
                do:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      nieprawidłowego rozwoju kręgosłupa
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      asymetrii w układzie mięśniowym
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">problemów ze stopami</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">dolegliwości bólowych</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      zmniejszonej wydolności fizycznej
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Kompleksowa diagnostyka wad postawy
              </h2>
              <div className="text-md lg:text-lg mb-6">
                <Link href="/">W Dobrym Miejscu w Katowicach </Link>
                przeprowadzamy szczegółową ocenę postawy ciała dziecka, która
                obejmuje:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      badanie postawy w statyce i podczas ruchu
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      analizę rozkładu ciężaru ciała
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      ocenę stóp przy użyciu specjalistycznego podoskopu
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      badanie zakresu ruchomości stawów
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      specjalistyczne testy funkcjonalne
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Terapia wad postawy Katowice - jak pomagamy?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Nasz program terapeutyczny jest zawsze dostosowany do
                indywidualnych potrzeb dziecka i może obejmować:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      ćwiczenia korekcyjne dopasowane do wieku i możliwości
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      terapię mięśniowo-powięziową
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      naukę prawidłowych nawyków ruchowych
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      stretching i ćwiczenia rozciągające
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      elementy zabawowe, które motywują do ćwiczeń
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Diagnoza i korekcja stóp
              </h2>
              <div className="text-md lg:text-lg mb-6">
                W przypadku wad stóp oferujemy:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      szczegółową diagnostykę z użyciem podoskopu
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <div className="relative -top-2">
                      dobór indywidualnie dopasowanych{" "}
                      <Link
                        href="/wkladki-ortopedyczne-igli-junior"
                        className="text-orange"
                      >
                        wkładk ortopedycznych IGLI Junior
                      </Link>
                      ,
                    </div>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      program ćwiczeń wzmacniających mięśnie stóp
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      porady dotyczące odpowiedniego obuwia
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Wsparcie dla rodziców
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Wiemy, jak ważna jest kontynuacja terapii w domu, dlatego:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      uczymy rodziców prostych ćwiczeń do wykonywania z
                      dzieckiem
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      doradzamy w organizacji ergonomicznego miejsca do nauki
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      proponujemy aktywności sportowe odpowiednie dla dziecka
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      pomagamy wprowadzić zdrowe nawyki ruchowe w codzienne
                      życie
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-2 text-3xl font-bold text-gray">
                Profilaktyka przede wszystkim
              </h2>

              <div className="text-md lg:text-lg mb-6">
                Zachęcamy do regularnych wizyt kontrolnych, nawet jeśli nie
                zauważasz niepokojących objawów. Wczesne wykrycie problemów z
                postawą pozwala na szybką interwencję i lepsze efekty terapii.
              </div>
            </div>
          </>
        }
      </PageTemplate>
    </>
  );
}
