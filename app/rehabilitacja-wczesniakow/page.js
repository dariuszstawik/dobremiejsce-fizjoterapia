import { HandHeart } from "lucide-react";
import Navbar from "../components/navbar";
import PageTemplate from "../components/page-template";
import Link from "next/link";

export const metadata = {
  title: "Rehabilitacja wczesniaków Katowice | Dobre Miejsce",
  description:
    "Specjalistyczna rehabilitacja wcześniaków w Katowicach. Indywidualna terapia wspierająca rozwój dziecka od pierwszych dni życia.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RehabilitacjaWczesniakow() {
  return (
    <>
      <Navbar />
      <PageTemplate
        title={
          <>
            Rehabilitacja wczesniaków
            <br />w Katowicach
          </>
        }
        lead="Kiedy maluszek przychodzi na świat wcześniej niż planowano, rodzice
          stają przed wieloma wyzwaniami i pytaniami. W Dobrym Miejscu
          rozumiemy, jak ważne jest profesjonalne wsparcie w tym szczególnym
          czasie."
        img="/dobremiejsce008.jpg"
        alt="Rehabilitacja wczesniaków w Katowicach"
        bannerBody="W Dobrym Miejscu każdy wcześniak i jego rodzina znajdą ciepłą, przyjazną atmosferę oraz profesjonalną opiekę opartą na najnowszej wiedzy i wieloletnim doświadczeniu. Razem zadbamy o to, by Twój maluszek mógł rozwijać się w najlepszy możliwy sposób."
      >
        {
          <>
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-3 mt-2 text-3xl font-bold text-gray">
                Dlaczego rehabilitacja wcześniaków jest tak istotna?
              </h2>

              <p className="text-md lg:text-lg mb-6">
                Dzieci urodzone przedwcześnie potrzebują szczególnej troski i
                uwagi. Ich układy - nerwowy, mięśniowy i kostny - nie miały
                wystarczająco dużo czasu, by w pełni dojrzeć w brzuchu mamy. To
                sprawia, że mogą potrzebować dodatkowego wsparcia w swoim
                rozwoju. Nasza specjalistka,{" "}
                <Link href="/kamila-wlodarczyk" className="text-orange">
                  Kamila Włodarczyk
                </Link>
                , na co dzień pracuje w Górnośląskim Centrum Zdrowia Dziecka w
                Katowicach oraz Szpitalu Miejskim w Rudzie Śląskiej, gdzie
                opiekuje się najmniejszymi pacjentami. To bezcenne doświadczenie
                przekłada się na głębokie zrozumienie potrzeb wcześniaków i ich
                rodzin.
              </p>

              <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
                Jak wspieramy rozwój wcześniaków?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                W Dobrym Miejscu tworzymy indywidualny plan terapii dla każdego
                maluszka, biorąc pod uwagę:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">wiek skorygowany dziecka</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      jego aktualny poziom rozwoju
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      szczególne potrzeby wynikające z wcześniactwa
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      komfort emocjonalny zarówno dziecka, jak i rodziców
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-8 mt-6 text-3xl font-bold text-gray">
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
              </div>

              <h2 className="mb-4 mt-6 text-3xl font-bold text-gray">
                Dla rodziców wcześniaków
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Wiemy, że opieka nad wcześniakiem może budzić wiele obaw.
                Dlatego w naszej pracy nie tylko zajmujemy się rehabilitacją
                maluszka, ale także:
                <ul
                  className="mt-6 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-3 pl-4 lg:my-3">
                    <p className="relative -top-2">
                      uczymy rodziców, jak bezpiecznie pielęgnować i dziecko,{" "}
                    </p>
                  </li>
                  <li className="mb-3 pl-4 lg:mb-3">
                    <p className="relative -top-2">
                      pokazujemy ćwiczenia, które można wykonywać w domu,
                    </p>
                  </li>
                  <li className="mb-3 pl-4 lg:mb-3">
                    <p className="relative -top-2">
                      odpowiadamy na wszystkie pytania i rozwiewamy wątpliwości,
                    </p>
                  </li>
                  <li className="mb-3 pl-4 lg:mb-3">
                    <p className="relative -top-2">
                      wspieramy emocjonalnie w trudnych momentach.
                    </p>
                  </li>
                </ul>
              </div>

              {/* <div className="text-white text-md lg:text-lg my-16 bg-orange p-8 rounded-md flex ">
                W Dobrym Miejscu każdy wcześniak i jego rodzina znajdą ciepłą,
                przyjazną atmosferę oraz profesjonalną opiekę opartą na
                najnowszej wiedzy i wieloletnim doświadczeniu. Razem zadbamy o
                to, by Twój maluszek mógł rozwijać się w najlepszy możliwy
                sposób.
                <HandHeart
                  size={148}
                  absoluteStrokeWidth
                  className="shrink-0"
                />
              </div> */}
            </div>
          </>
        }
      </PageTemplate>
    </>
  );
}
