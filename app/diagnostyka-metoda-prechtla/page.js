import Navbar from "../components/navbar";
import PageTemplate from "../components/page-template";

export const metadata = {
  title: "Diagnostyka metodą Prechtla Katowice| Dobre Miejsce",
  description:
    "Specjalistyczna diagnostyka rozwoju niemowląt metodą Prechtla w Katowicach. Wczesne wykrywanie zaburzeń rozwojowych u wcześniaków i noworodków.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function DiagnostykaMetodaPrechtla() {
  return (
    <>
      <Navbar />
      <PageTemplate
        title={
          <>
            Diagnostyka metodą Prechtla - wczesne wsparcie w rozwoju Twojego
            dziecka
          </>
        }
        lead="Czy wiesz, że już w pierwszych miesiącach życia możemy ocenić, czy rozwój Twojego maluszka przebiega prawidłowo? Diagnostyka metodą Prechtla to delikatne i precyzyjne narzędzie, które pomaga nam w tym zadaniu."
        img="/baby-hero.jpg"
        alt="Diagnostyka metodą Prechtla w Katowicach"
        bannerBody="Nie czekaj - zadbaj o rozwój swojego maluszka już dziś. Umów się na badanie metodą Prechtla w Katowicach i zyskaj pewność, że rozwój Twojego dziecka jest pod najlepszą opieką."
      >
        {
          <>
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Czym jest metoda Prechtla?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                To specjalistyczne badanie, które pozwala nam obserwować
                naturalne ruchy dziecka - bez dotykania go czy wymuszania
                jakichkolwiek zachowań. Jest szczególnie cenne dla:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">wcześniaków</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">noworodków z grupy ryzyka</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      niemowląt do 5 miesiąca życia
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      dzieci, których rozwój budzi niepokój rodziców
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Jak przebiega badanie?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Podczas diagnostyki skupiamy się na obserwacji tzw. ruchów
                globalnych (GMs - General Movements). Te naturalne ruchy
                obejmują:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">całe ciało dziecka</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">kończyny górne i dolne</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">szyję i tułów</p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Co nas interesuje podczas obserwacji?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Przyglądamy się dokładnie, jak dziecko się porusza, zwracając
                uwagę na:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      płynność i harmonię ruchów
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">ich intensywność i zakres</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">zmienność i dynamikę</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">rotacje wokół osi kończyn</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      naturalny przebieg sekwencji ruchowych
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Dlaczego warto wykonać badanie?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Diagnostyka metodą Prechtla:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      jest całkowicie bezpieczna i nieinwazyjna
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      pozwala wcześnie wykryć ewentualne trudności rozwojowe
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      umożliwia szybkie rozpoczęcie odpowiedniej terapii
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      daje wskazówki do dalszej pracy z dzieckiem
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      pomaga monitorować postępy rozwoju
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Kiedy wykonujemy badanie?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Ruchy globalne pojawiają się u dzieci między 9 a 12 tygodniem
                życia i utrzymują się do około 46-49 tygodnia. To właśnie w tym
                okresie możemy najlepiej ocenić ich jakość i znaczenie dla
                rozwoju dziecka.
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Co po badaniu?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Na podstawie przeprowadzonej diagnostyki:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      przedstawiamy szczegółową ocenę rozwoju dziecka
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      wyjaśniamy znaczenie zaobserwowanych wzorców ruchowych
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      ustalamy plan dalszego postępowania
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      w razie potrzeby planujemy odpowiednią terapię
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      udzielamy wskazówek do pracy w domu
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Diagnostyka Prechtla w Katowicach: profesjonalne wsparcie
              </h2>
              <div className="text-md lg:text-lg mb-6">
                W Dobrym Miejscu w Katowicach badanie przeprowadzają
                certyfikowani specjaliści z wieloletnim doświadczeniem w pracy z
                najmłodszymi pacjentami. Rozumiemy, jak ważna jest wczesna
                diagnostyka, dlatego dbamy o spokojną, przyjazną atmosferę
                podczas badania.
              </div>
            </div>
          </>
        }
      </PageTemplate>
    </>
  );
}
