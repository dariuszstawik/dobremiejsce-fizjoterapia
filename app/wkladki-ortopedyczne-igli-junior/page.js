import Navbar from "../components/navbar";
import PageTemplate from "../components/page-template";

export const metadata = {
  title: "Wkładki ortopedyczne IGLI Junior | Dobre Miejsce",
  description:
    "Wkładki ortopedyczne IGLI Junior to innowacyjne rozwiązanie, które wspiera naturalne kształtowanie się stóp i pomaga korygować ich wady.",
  robots: {
    index: true,
    follow: true,
  },
};
export default function WkladkiIgliJunior() {
  return (
    <>
      <Navbar />
      <PageTemplate
        title={<>Wkładki ortopedyczne IGLI Junior</>}
        lead="Zdrowe stopy to podstawa prawidłowego rozwoju postawy Twojego dziecka. Wkładki ortopedyczne IGLI Junior to innowacyjne rozwiązanie, które wspiera naturalne kształtowanie się stóp i pomaga korygować ich wady."
        img="/igli-junior-2.webp"
        alt="Wkładki ortopedyczne IGLI Junior"
        bannerBody="Zapraszamy na konsultację, podczas której ocenimy, czy wkładki IGLI Junior będą odpowiednim rozwiązaniem dla Twojego dziecka."
      >
        {
          <>
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Co wyróżnia wkładki IGLI Junior?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Wykonane z wysokiej jakości włókna węglowego wkładki IGLI Junior
                to zaawansowane technologicznie rozwiązanie, które:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      jest niezwykle lekkie i wytrzymałe
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      dostosowuje się do indywidualnych potrzeb dziecka
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      zapewnia optymalny komfort podczas chodzenia i zabawy
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      wspiera naturalne wzorce ruchowe
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Kiedy warto rozważyć wkładki IGLI Junior?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Wkładki mogą być szczególnie pomocne przy:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">stopach płaskich</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">stopach płasko-koślawych</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      nieprawidłowym ustawieniu pięt
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">problemach z równowagą</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      dolegliwościach bólowych stóp
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">zaburzeniach chodu</p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Proces doboru wkładek
              </h2>
              <div className="text-md lg:text-lg mb-6">
                W Dobrym Miejscu przeprowadzamy dokładną diagnostykę, która
                obejmuje:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      szczegółową ocenę budowy stóp
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">analizę chodu dziecka</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">badanie na podoskopie</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      pomiary niezbędne do idealnego dopasowania wkładek
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Korzyści stosowania wkładek IGLI Junior
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Prawidłowo dobrane wkładki zapewniają:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      stabilne ustawienie stopy w bucie
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      optymalne prowadzenie pięty
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      lepszą kontrolę postawy ciała
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      większy komfort podczas chodzenia
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      wsparcie prawidłowego rozwoju stóp
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Skuteczna terapia to proces
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Pamiętaj, że same wkładki to nie wszystko. Najlepsze efekty
                osiągniemy łącząc:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      noszenie wkładek IGLI Junior
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      regularne ćwiczenia rehabilitacyjne
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      odpowiednio dobrane obuwie
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      codzienną aktywność fizyczną
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Profesjonalne wsparcie
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Nasz zespół:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      Przeprowadzi dokładną diagnostykę
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      Dobierze odpowiedni model wkładek
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      Nauczy prawidłowego użytkowania
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      Zaplanuje program ćwiczeń uzupełniających
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      Będzie monitorował postępy terapii
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Wybierz najlepsze dla swojego dziecka
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Wkładki IGLI Junior to inwestycja w zdrowy rozwój Twojego
                dziecka. Dzięki połączeniu najnowszej technologii z
                indywidualnym podejściem do każdego małego pacjenta, możemy
                skutecznie wspierać prawidłowy rozwój stóp i postawy ciała.
              </div>
            </div>
          </>
        }
      </PageTemplate>
    </>
  );
}
