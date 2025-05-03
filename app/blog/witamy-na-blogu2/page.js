import Navbar from "@/app/components/navbar";
import PageTemplate from "@/app/components/page-template";

export default function WitamyNaBlogu() {
  return (
    <>
      <Navbar />
      <PageTemplate
        isBlog
        title={<>Witamy na blogu!</>}
        lead="Z ogromną radością witamy Cię na blogu Dobrego Miejsca! Postanowiłyśmy stworzyć tę przestrzeń z myślą o wszystkich rodzicach, którzy szukają rzetelnych informacji, praktycznych wskazówek i profesjonalnego wsparcia w temacie rozwoju swoich maluszków."
        img="/dobremiejsce008.jpg"
        alt="Witamy na blogu!"
      >
        {
          <>
            <article className="max-w-4xl mx-auto">
              <h2 className="mb-3 mt-10 text-3xl font-bold text-gray">
                Dlaczego powstał ten blog?
              </h2>
              <div className="text-md lg:text-lg mb-6 space-y-2">
                <p>
                  {" "}
                  W codziennej pracy w gabinecie spotykamy się z wieloma
                  pytaniami od rodziców – o rozwój psychomotoryczny, o to, kiedy
                  maluch powinien zacząć siadać, czy asymetria ułożeniowa jest
                  powodem do niepokoju, jak wspierać wcześniaka w pierwszych
                  miesiącach życia, jak rozpoznać zaburzenia integracji
                  sensorycznej...
                </p>
                <p>
                  Lista jest długa, a każde z tych pytań jest ważne i zasługuje
                  na wyczerpującą odpowiedź. Zdajemy sobie sprawę, że podczas
                  wizyty nie zawsze jest czas, by omówić wszystkie kwestie,
                  które Was nurtują. Dlatego właśnie powstał nasz blog – jako
                  naturalne rozszerzenie naszej misji wspierania rodziców w
                  trosce o prawidłowy rozwój ich dzieci.
                </p>
              </div>

              <h2 className="mb-3 mt-10 text-3xl font-bold text-gray">
                Czego możesz się tutaj spodziewać?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Na blogu Dobrego Miejsca będziemy regularnie publikować artykuły
                dotyczące:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-1">
                      rozwoju wcześniaków i niemowląt,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      prawidłowego handlingu i pielęgnacji,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      wczesnych sygnałów ostrzegawczych w rozwoju,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">Integracji sensorycznej,</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">wad postawy u dzieci,</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      praktycznych ćwiczeń do wykonywania w domu,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      odpowiedzi na najczęściej zadawane przez Was pytania.
                    </p>
                  </li>
                </ul>
                <p>
                  Zależy nam, by treści były nie tylko rzetelne, ale też
                  przystępne i praktyczne. Jako fizjoterapeutki z doświadczeniem
                  w pracy z najmłodszymi pacjentami, w tym wcześniakami i
                  dziećmi z oddziałów intensywnej terapii, chcemy dzielić się z
                  Wami naszą wiedzą w sposób, który pomoże Wam w codziennej
                  opiece nad maluszkiem.
                </p>
              </div>

              <h2 className="mb-3 mt-10 text-3xl font-bold text-gray">
                Zapraszamy do dialogu!
              </h2>
              <div className="text-md lg:text-lg mb-6 space-y-2">
                <p>
                  Blog to nie tylko miejsce, gdzie publikujemy nasze artykuły –
                  to przestrzeń do wymiany myśli. Zachęcamy Was do zadawania
                  pytań{" "}
                  <a
                    href="mailto:kamila.wlodarczyk@dobremiejsce-fizjoterapia.pl"
                    className="text-orange"
                  >
                    mailowo
                  </a>{" "}
                  i na naszym{" "}
                  <a
                    href="https://www.facebook.com/fizjoterapiadzieci.dobremiejsce"
                    className="text-orange"
                  >
                    fanpage
                  </a>
                  , sugerowania tematów, które Was interesują, i dzielenia się
                  swoimi doświadczeniami. Wierzymy, że wspólnie możemy stworzyć
                  wartościowe źródło wiedzy dla wszystkich rodziców.
                </p>
                <p className="font-semibold">
                  Bądźcie z nami i zaglądajcie tu regularnie!
                </p>{" "}
                <p>
                  Z ciepłymi pozdrowieniami,
                  <p>Kamila Włodarczyk i Martyna Cesarczyk</p> Zespół Dobrego
                  Miejsca{" "}
                </p>
              </div>
            </article>
          </>
        }
      </PageTemplate>
    </>
  );
}
