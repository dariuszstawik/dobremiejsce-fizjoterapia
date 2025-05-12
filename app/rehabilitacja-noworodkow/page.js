import Navbar from "../components/navbar";
import PageTemplate from "../components/page-template";

export const metadata = {
  title:
    "Rehabilitacja noworodków i niemowląt z zaburzeniami napięcia mięśniowego | Dobre Miejsce",
  description:
    "Profesjonalna fizjoterapia noworodków i niemowląt z zaburzeniami napięcia mięśniowego w Katowicach. Terapia NDT-Bobath prowadzona przez doświadczone specjalistki.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Rehabilitacja noworodków i niemowląt z zaburzeniami napięcia mięśniowego",
    description:
      "Profesjonalna fizjoterapia noworodków i niemowląt z zaburzeniami napięcia mięśniowego w Katowicach. Terapia NDT-Bobath prowadzona przez doświadczone specjalistki.",
    url: "https://dobremiejsce-fizjoterapia.pl/o-nas",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/dm8.jpg",
        width: 1080,
        height: 810,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function RehabilitacjaNoworodkow() {
  return (
    <>
      <Navbar />
      <PageTemplate
        title={
          <>
            Rehabilitacja noworodków i niemowląt z zaburzeniami napięcia
            mięśniowego
          </>
        }
        lead="Czy zauważyłeś/aś, że Twoje dziecko preferuje jedną stronę ciała, ma trudności z utrzymaniem główki lub jego ruchy wydają się zbyt wiotkie lub sztywne? Zaburzenia napięcia mięśniowego u najmłodszych to problem, który wymaga profesjonalnej uwagi - im wcześniej rozpoczniemy terapię, tym lepsze efekty możemy osiągnąć."
        img="/dm8.jpg"
        alt="Rehabilitacja noworodków i niemowląt w Katowicach"
        bannerBody="Nie czekaj, aż problemy się pogłębią. Umów się na konsultację, podczas której ocenimy stan Twojego maluszka i zaproponujemy najlepszy plan terapii. W Dobrym Miejscu każde dziecko otrzymuje szansę na harmonijny rozwój w przyjaznej, pełnej ciepła atmosferze."
      >
        {
          <>
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Dlaczego napięcie mięśniowe jest tak ważne?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Prawidłowe napięcie mięśniowe to fundament harmonijnego rozwoju
                dziecka. Wpływa ono na:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      umiejętność utrzymania prawidłowej pozycji ciała
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      rozwój motoryki dużej i małej
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      zdolność wykonywania codziennych czynności
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      osiąganie kolejnych kamieni milowych rozwoju
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      ogólny komfort i samopoczucie dziecka
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Kiedy warto zgłosić się na konsultację?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Obserwuj swojego maluszka - niepokojące mogą być:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      asymetria w ułożeniu ciała lub ruchach
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      trudności z utrzymaniem główki
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      zbyt mocne lub zbyt słabe napięcie mięśni
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      opóźnienie w osiąganiu kamieni milowych
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      preferowanie jednej strony ciała
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">nietypowe wzorce ruchowe</p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Kompleksowa diagnostyka
              </h2>
              <div className="text-md lg:text-lg mb-6">
                W Dobrym Miejscu przeprowadzamy szczegółową ocenę, która
                obejmuje:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      wywiad dotyczący przebiegu ciąży i porodu
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      badanie napięcia mięśniowego
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">ocenę wzorców ruchowych</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      analizę pozycji spontanicznych
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      obserwację reakcji na różne bodźce
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Nasze doświadczenie
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Zajmujemy się terapią dzieci z zaburzeniami napięcia mięśniowego
                o różnym podłożu:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      nieprawidłowości neurologiczne
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      mózgowe porażenie dziecięce
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      choroby genetyczne i metaboliczne
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      zaburzenia wynikające z przebiegu ciąży lub porodu
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">asymetrie ułożeniowe</p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Jak pomagamy?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Terapia w Dobrym Miejscu jest zawsze dostosowana do
                indywidualnych potrzeb dziecka:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      wykorzystujemy metodę NDT-Bobath
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      pracujemy poprzez zabawę i naturalne aktywności
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      uczymy prawidłowych wzorców ruchowych
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      wspieramy symetryczny rozwój
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      wzmacniamy naturalne mechanizmy kompensacyjne
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Wsparcie dla rodziców
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Rodzice są kluczową częścią procesu terapeutycznego, dlatego:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      pokazujemy ćwiczenia do wykonywania w domu
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      doradzamy w kwestiach pielęgnacji
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      odpowiadamy na wszystkie pytania i wątpliwości
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Dlaczego warto rozpocząć terapię jak najwcześniej?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Wczesna interwencja daje najlepsze efekty, ponieważ:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      układ nerwowy małego dziecka jest najbardziej plastyczny
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      łatwiej jest zapobiegać niż korygować utrwalone wzorce
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      możemy wykorzystać naturalne okna rozwojowe
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      minimalizujemy ryzyko wtórnych problemów
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      wspieramy prawidłowy rozwój od samego początku
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Doświadczony zespół
              </h2>
              <div className="text-md lg:text-lg mb-6">
                W Dobrym Miejscu terapię prowadzą doświadczone fizjoterapeutki,
                które na co dzień pracują z najmłodszymi pacjentami w
                szpitalach, w tym na oddziałach intensywnej terapii noworodka.
                Ta praktyka przekłada się na głębokie zrozumienie potrzeb małych
                pacjentów i ich rodzin.
              </div>
            </div>
          </>
        }
      </PageTemplate>
    </>
  );
}
