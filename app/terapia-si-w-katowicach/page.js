import Link from "next/link";
import Navbar from "../components/navbar";
import PageTemplate from "../components/page-template";

export const metadata = {
  title:
    "Integracja sensoryczna: diagnoza i terapia SI Katowice | Dobre Miejsce",
  description:
    "Pomagamy dzieciom z zaburzeniami integracji sensorycznej. Diagnoza SI i terapia w Katowicach – w przyjaznej atmosferze.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Integracja sensoryczna: diagnoza i terapia SI Katowice | Dobre Miejsce",
    description:
      "Pomagamy dzieciom z zaburzeniami integracji sensorycznej. Diagnoza SI i terapia w Katowicach – w przyjaznej atmosferze.",
    url: "https://dobremiejsce-fizjoterapia.pl/terapia-si-w-katowicach",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/dm2.jpg",
        width: 2000,
        height: 2667,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};
export default function TerapiaSIWKatowicach() {
  return (
    <>
      <Navbar />
      <PageTemplate
        title={<>Diagnoza i terapia SI w Katowicach</>}
        lead="Czy Twoje dziecko wydaje się nadmiernie wrażliwe na dźwięki, nie lubi określonych faktur ubrań lub ma trudności z utrzymaniem równowagi? Może to być związane z zaburzeniami integracji sensorycznej. W Dobrym Miejscu w Katowicach pomagamy dzieciom lepiej rozumieć i przetwarzać bodźce z otaczającego świata."
        img="/dm2.jpg"
        alt="Terapia SI w Katowicach"
        bannerBody="Zapraszamy do kontaktu i umówienia diagnozy SI w naszym gabinecie w Katowicach. Wspólnie zadbamy o harmonijny rozwój Twojego dziecka."
      >
        {
          <>
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-3 mt-2 text-3xl font-bold text-gray">
                Czym jest integracja sensoryczna?
              </h2>

              <p className="text-md lg:text-lg mb-6">
                To naturalna zdolność mózgu do organizowania i przetwarzania
                bodźców zmysłowych, które docierają do nas z otoczenia. Gdy ten
                proces nie przebiega prawidłowo, dziecko może doświadczać
                różnych trudności w codziennym funkcjonowaniu.{" "}
              </p>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Kiedy warto rozważyć diagnozę SI?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Obserwuj, czy Twoje dziecko:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      unika przytulania lub przeciwnie - zbyt mocno się przytula
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      jest nadruchliwe lub wyjątkowo spokojne
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      ma trudności z koncentracją i nauką
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      nie lubi mycia głowy, czesania, obcinania paznokci
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      jest niezgrabne ruchowo lub boi się zabaw na placu zabaw
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      reaguje zbyt silnie na dźwięki, światła lub zapachy
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      ma problem z ubieraniem się lub jedzeniem
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Profesjonalna diagnoza SI w Katowicach
              </h2>
              <div className="text-md lg:text-lg mb-6">
                W Dobrym Miejscu przeprowadzamy szczegółową diagnozę integracji
                sensorycznej, która obejmuje:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">wywiad z rodzicami</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      obserwację dziecka w różnych aktywnościach
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      standaryzowane testy oceniające funkcjonowanie zmysłów
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      szczegółowy raport z zaleceniami do pracy w domu
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Terapia integracji sensorycznej (SI) w Katowicach - jak
                pomagamy?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Nasze zajęcia terapeutyczne są prowadzone w formie
                ukierunkowanej zabawy w specjalnie wyposażonej sali SI. Podczas
                terapii:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      stopniowo wprowadzamy dziecko w świat nowych bodźców
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      wzmacniamy jego naturalne mechanizmy adaptacyjne
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      poprawiamy koordynację i planowanie ruchowe
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      rozwijamy umiejętności potrzebne w przedszkolu i szkole
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      wspieramy pewność siebie i samodzielność
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Wsparcie dla całej rodziny
              </h2>
              <div className="text-md lg:text-lg mb-6">
                W terapii SI kluczowa jest współpraca z rodzicami. Dlatego:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      uczymy, jak wspierać rozwój sensoryczny w domu
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      doradzamy w organizacji przyjaznego środowiska
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      regularnie omawiamy postępy dziecka
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      odpowiadamy na wszystkie pytania i wątpliwości
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-2 text-3xl font-bold text-gray">
                Doświadczona terapeutka SI
              </h2>

              <div className="text-md lg:text-lg mb-6">
                Terapią integracji sensorycznej w Dobrym Miejscu zajmuje się{" "}
                <Link href="/martyna-cesarczyk" className="text-orange">
                  Martyna Cesarczyk
                </Link>{" "}
                - fizjoterapeutka z bogatym doświadczeniem w pracy z dziećmi.
                Jako absolwentka studiów podyplomowych z zakresu terapii
                neurorozwojowej oraz licznych szkoleń specjalistycznych,
                nieustannie poszerza swoją wiedzę, by zapewnić małym pacjentom
                najwyższą jakość terapii SI.{" "}
              </div>

              {/* <h2 className="mb-8 mt-6 text-3xl font-bold text-gray">
                Nasze podejście opiera się na delikatnej i uważnej terapii,
                która:
              </h2>
              <div className="text-md lg:text-lg mb-6">
                <ul
                  className="m-0 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-3 pl-4 lg:my-3">
                    <p className="relative -top-2">
                      wspiera prawidłowy rozwój psychoruchowy
                    </p>
                  </li>
                  <li className="mb-3 pl-4 lg:mb-3">
                    <p className="relative -top-2">
                      pomaga w osiąganiu kolejnych kamieni milowych
                    </p>
                  </li>
                  <li className="mb-3 pl-4 lg:mb-3">
                    <p className="relative -top-2">
                      zapobiega potencjalnym trudnościom rozwojowym
                    </p>
                  </li>
                  <li className="mb-3 pl-4 lg:mb-3">
                    <p className="relative -top-2">
                      wzmacnia naturalne mechanizmy adaptacyjne dziecka
                    </p>
                  </li>
                </ul>
              </div> */}
            </div>
          </>
        }
      </PageTemplate>
    </>
  );
}
