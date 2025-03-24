import Navbar from "../components/navbar";
import PageTemplate from "../components/page-template";

export const metadata = {
  title: "Diagnostyka Hine | Dobre Miejsce",
  description: "Diagnostyka rozwoju dziecka metodą Hine w Katowicach",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DiagnostykaHINE() {
  return (
    <>
      <Navbar />
      <PageTemplate
        title={
          <>Diagnostyka HINE - wczesne wsparcie w rozwoju Twojego dziecka</>
        }
        lead="Zastanawiasz się, czy rozwój Twojego maluszka przebiega prawidłowo? Test HINE (Hammersmith Infant Neurological Examination) to precyzyjne narzędzie diagnostyczne, które pomaga nam ocenić rozwój psychomotoryczny niemowląt i wcześnie wykryć ewentualne trudności."
        img="/dobremiejsce008.jpg"
        alt="Diagnostyka HINE w Katowicach"
        bannerBody="Nie czekaj - wczesna diagnostyka to klucz do skutecznej terapii. Umów się na badanie HINE i zyskaj pewność, że rozwój Twojego dziecka jest pod najlepszą kontrolą. W Dobrym Miejscu każde badanie przeprowadzamy z najwyższą starannością, w przyjaznej atmosferze i z pełnym wsparciem dla rodziców."
      >
        {
          <>
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Czym jest test HINE?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                To specjalistyczne, nieinwazyjne badanie neurologiczne, które:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      jest przeznaczone dla dzieci w wieku 2-24 miesięcy
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      pozwala dokładnie ocenić rozwój psychomotoryczny
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      umożliwia wczesne wykrycie nieprawidłowości
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      jest bezpieczne i przyjazne dla dziecka
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      daje podstawę do zaplanowania skutecznej terapii
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Dlaczego warto wykonać test HINE?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Test HINE wyróżnia się:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      wysoką czułością w diagnozowaniu mózgowego porażenia
                      dziecięcego
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      możliwością różnicowania zaburzeń rozwojowych
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      precyzyjną oceną postępów rozwoju
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      zdolnością do przewidywania możliwych ścieżek rozwojowych
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      wsparciem w planowaniu ukierunkowanej terapii
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Jak przebiega badanie?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Podczas diagnostyki HINE oceniamy:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">napięcie mięśniowe</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">wzorce ruchowe</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">reakcje posturalne</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">odruchy neurologiczne</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">rozwój motoryczny</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      zachowanie i stan świadomości dziecka
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Co po badaniu?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Na podstawie wyników testu HINE:
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
                      określamy mocne i słabe strony w rozwoju
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      tworzymy indywidualny plan terapii
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      ustalamy konkretne cele terapeutyczne
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      planujemy harmonogram kolejnych kontroli
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Wsparcie dla rodziców
              </h2>
              <div className="text-md lg:text-lg mb-6">
                W Dobrym Miejscu:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      dokładnie omawiamy wyniki badania
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      wyjaśniamy znaczenie poszczególnych obserwacji
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      odpowiadamy na wszystkie pytania
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      instruujemy, jak wspierać rozwój dziecka w domu
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      zapewniamy stały kontakt i możliwość konsultacji
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Diagnostyka HINE w Katowicach: kiedy warto wykonać test?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Badanie zalecamy szczególnie w przypadku:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">wcześniactwa</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      komplikacji okołoporodowych
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      niepokojących objawów w rozwoju
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      potrzeby profilaktycznej kontroli rozwoju
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      występowania czynników ryzyka rozwojowego
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Doświadczony zespół
              </h2>
              <div className="text-md lg:text-lg mb-6">
                W Dobrym Miejscu diagnostykę HINE przeprowadzają certyfikowane
                fizjoterapeutki z wieloletnim doświadczeniem w pracy z
                najmłodszymi pacjentami. Nasze doświadczenie kliniczne pozwala
                na precyzyjną interpretację wyników i zaplanowanie skutecznej
                terapii.
              </div>
            </div>
          </>
        }
      </PageTemplate>
    </>
  );
}
