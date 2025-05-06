import Navbar from "../components/navbar";
import BlockWith3Blobs from "../components/block-with-3-blobs";
import Features from "../components/features";
import ListSection from "../components/list-section";
import ParagraphWithImage from "../components/paragraph-with-image";
import ParagraphWithImageOnTheRight from "../components/paragraph-with-image-on-the-right";

import Button from "../components/Button";
import Link from "next/link";

export const metadata = {
  title: "O nas | Dobre Miejsce",
  description:
    "Dobre Miejsce to wyjątkowa przestrzeń stworzona z myślą o najmłodszych pacjentach i ich rodzinach. Powstaliśmy z przekonania, że każde dziecko zasługuje na najlepszą możliwą opiekę terapeutyczną, prowadzoną w przyjaznej, pełnej ciepła atmosferze.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ONas() {
  return (
    <>
      <Navbar />

      <section className="py-32 mt-12 md:py-40 container mx-auto px-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="bgy1-blur absolute right-0 top-0 z-0 h-full w-full opacity-20 sm:hidden"></div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="w-full flex justify-between items-start">
            <h1 className="mb-6 font-heading text-4xl md:text-5xl font-bold leading-tight max-w-5xl">
              Dobre Miejsce
              <br />
              dla Twojego dziecka -&nbsp;o&nbsp;nas
            </h1>
          </div>

          <p className="mb-6 text-2xl max-w-5xl ">
            Dobre Miejsce to wyjątkowa przestrzeń stworzona z myślą o
            najmłodszych pacjentach i ich rodzinach. Powstaliśmy z przekonania,
            że każde dziecko zasługuje na najlepszą możliwą opiekę
            terapeutyczną, prowadzoną w przyjaznej, pełnej ciepła atmosferze.
          </p>
          <a
            className="inline-block whitespace-nowrap rounded-full bg-orange px-5 py-4 mb-8  text-white no-underline shadow-lg hover:bg-heavy hover:text-white"
            href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            Umów wizytę
          </a>
          <div
            className="mb-16 relative overflow-hidden rounded-3xl"
            style={{ height: "512px" }}
          >
            <img
              className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 rounded-3xl transition duration-200"
              src="/dobremiejsce008.jpg"
              alt=""
            />
          </div>

          <ParagraphWithImage title="Kompleksowe podejście" img="/dm8.jpg">
            <p>
              W Dobrym Miejscu oferujemy kompleksową opiekę terapeutyczną dla
              dzieci od pierwszych dni życia. Specjalizujemy się w{" "}
              <Link href="/rehabilitacja-wczesniakow" className="text-orange">
                rehabilitacji wcześniaków
              </Link>{" "}
              i{" "}
              <Link href="/rehabilitacja-noworodkow" className="text-orange">
                niemowląt z zaburzeniami napięcia mięśniowego
              </Link>
              , wykorzystując nasze bogate doświadczenie z oddziałów intensywnej
              terapii noworodka. Zapewniamy profesjonalną diagnostykę rozwoju
              metodami{" "}
              <Link href="/diagnostyka-hine" className="text-orange">
                HINE
              </Link>
              , i{" "}
              <Link href="diagnostyka-metoda-prechtla" className="text-orange">
                {" "}
                Prechtla
              </Link>
              , pozwalającą wcześnie wykryć potencjalne trudności. Pomagamy
              dzieciom z{" "}
              <Link href="/terapia-si-w-katowicach" className="text-orange">
                zaburzeniami integracji sensorycznej
              </Link>{" "}
              lepiej rozumieć i przetwarzać bodźce z otoczenia, a także
              wspieramy prawidłowy rozwój postawy ciała poprzez{" "}
              <Link
                href="/terapia-wad-postawy-u-dzieci"
                className="text-orange"
              >
                terapię wad postawy
              </Link>{" "}
              i{" "}
              <Link
                href="/wkladki-ortopedyczne-igli-junior"
                className="text-orange"
              >
                dobór wkładek ortopedycznych IGLI Junior.
              </Link>{" "}
              Nasza terapia zawsze uwzględnia indywidualne potrzeby małego
              pacjenta i jest prowadzona w przyjaznej, pełnej ciepła atmosferze.
            </p>
          </ParagraphWithImage>

          <BlockWith3Blobs />

          <Features />
          <ListSection />

          <div className="max-w-6xl mx-auto">
            <ParagraphWithImage
              title="Nasz zespół"
              subtitle="Dobre Miejsce"
              img="/dobremiejsce005.jpg"
              alt="Dobre Miejsce w Katowicach zaprasza!"
              isLeft
            >
              <>
                <h3 className="mb-3 mt-6 text-2xl font-bold text-gray">
                  Kamila Włodarczyk
                </h3>
                Certyfikowana terapeutka NDT-Bobath, specjalizująca się w
                rehabilitacji wcześniaków i noworodków. Jej doświadczenie w
                pracy na oddziale intensywnej terapii noworodka przekłada się na
                wyjątkowe zrozumienie potrzeb najmłodszych pacjentów i ich
                rodzin.
                <div className="mr-auto mt-6 mb-10">
                  <Button title="więcej" href="/kamila-wlodarczyk" />
                </div>
                <h3 className="mb-3 mt-6  text-2xl font-bold text-gray">
                  Martyna Cesarczyk
                </h3>
                Fizjoterapeutka pediatryczna z bogatym doświadczeniem w terapii
                neurorozwojowej. Specjalizuje się w pracy z dziećmi z mózgowym
                porażeniem dziecięcym i innymi schorzeniami neurologicznymi oraz
                w korekcji wad postawy.
                <div className="mr-auto mt-6 mb-10">
                  <Button title="więcej" href="/martyna-cesarczyk" />
                </div>
              </>
            </ParagraphWithImage>

            <ParagraphWithImageOnTheRight
              title="Dobre Miejsce w Katowicach zaprasza!"
              img="/dobremiejsce009.jpg"
              alt="Dobre Miejsce w Katowicach zaprasza!"
              buttonLink="https://dobremiejscefizjoterapiadzieci.booksy.com/"
              buttonTitle="Umów wizytę"
            >
              Jeśli szukasz profesjonalnej opieki fizjoterapeutycznej dla
              swojego dziecka, prowadzonej z pasją i zaangażowaniem, jesteś we
              właściwym miejscu. W Dobrym Miejscu każde dziecko otrzymuje szansę
              na harmonijny rozwój, a rodzice znajdują zrozumienie i wsparcie.
            </ParagraphWithImageOnTheRight>
          </div>
        </div>
      </section>
    </>
  );
}
