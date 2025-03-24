import Navbar from "../components/navbar";
import BlockWith3Blobs from "../components/block-with-3-blobs";
import Features from "../components/features";
import ListSection from "../components/list-section";
import ParagraphWithImage from "../components/paragraph-with-image";
import ParagraphWithImageOnTheRight from "../components/paragraph-with-image-on-the-right";

import Button from "../components/Button";

export const metadata = {
  title: "O nas | Dobre Miejsce",
  description: "O nas: Dobre Miejsce fizjoterapia dzieci",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ONas() {
  return (
    <>
      <Navbar />

      <section className="py-32 mt-12 md:py-40 container mx-auto px-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="bgy1-blur absolute right-0 top-0 z-0 h-full w-full opacity-20 sm:hidden"></div>
        {/* <img src="/blob3.svg" className="w-[640px] absolute top-24 -left-32" /> */}
        {/* <img
          src="/blob3.svg"
          className="w-[640px] absolute top-[600px] -right-32"
        />
        <img
          src="/blob3.svg"
          className="w-[1024px] absolute bottom-64 -left-32"
        /> */}
        {/* <img
          src="/blob.svg"
          className="w-[800px] absolute top-96 -right-64 rotate-90"
        /> */}
        <div className="relative container mx-auto px-4 z-10">
          <div className="w-full flex justify-between items-start">
            <h1 className="mb-6 font-heading text-4xl md:text-5xl font-bold leading-tight max-w-5xl">
              Dobre Miejsce
              <br />
              dla Twojego dziecka -&nbsp;o&nbsp;nas
            </h1>
            {/* <a
              className="whitespace-nowrap rounded-full bg-orange px-5 py-4 text-white no-underline shadow-lg hover:bg-heavy hover:text-white"
              href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              Umów wizytę
            </a> */}
          </div>

          {/* <h2 className="robot mb-6 max-w-3xl font-sans text-4xl font-bold leading-hero text-gray-other sm:text-5xl lg:text-6xl lg:leading-hero">
            Rehabilitacja wcześniaków w Katowicach
          </h2> */}

          {/* <img
            src="/decorated-underline.svg"
            alt="Decorative Line"
            className="mb-6 w-72"
          /> */}

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

          <ParagraphWithImage
            title="Kompleksowe podejście"
            img="/dobremiejsce002.jpg"
          >
            W Dobrym Miejscu oferujemy kompleksową opiekę terapeutyczną dla
            dzieci od pierwszych dni życia. Specjalizujemy się w rehabilitacji
            wcześniaków i niemowląt z zaburzeniami napięcia mięśniowego,
            wykorzystując nasze bogate doświadczenie z oddziałów intensywnej
            terapii noworodka. Zapewniamy profesjonalną diagnostykę rozwoju
            metodami HINE i Prechtla, pozwalającą wcześnie wykryć potencjalne
            trudności. Pomagamy dzieciom z zaburzeniami integracji sensorycznej
            lepiej rozumieć i przetwarzać bodźce z otoczenia, a także wspieramy
            prawidłowy rozwój postawy ciała poprzez terapię wad postawy i dobór
            wkładek ortopedycznych IGLI Junior. Nasza terapia zawsze uwzględnia
            indywidualne potrzeby małego pacjenta i jest prowadzona w
            przyjaznej, pełnej ciepła atmosferze.
          </ParagraphWithImage>

          <BlockWith3Blobs />

          <Features />
          <ListSection />

          <div className="max-w-6xl mx-auto">
            {/* <ParagraphWithImageOnTheRight
              title="Rehabilitacja najmłodszych"
              img="/hero-img-mobile.png"
              alt="Dobre Miejsce w Katowicach zaprasza!"
              buttonLink="https://dobremiejscefizjoterapiadzieci.booksy.com/"
              buttonTitle="Umów wizytę"
              isLeft
            >
              Wspieramy prawidłowy rozwój wcześniaków i niemowląt z zaburzeniami
              napięcia mięśniowego
            </ParagraphWithImageOnTheRight>
          </div>
          <div className="max-w-6xl mx-auto">
            <ParagraphWithImageOnTheRight
              title="Diagnostyka rozwoju"
              img="/hero-img-mobile.png"
              alt="Dobre Miejsce w Katowicach zaprasza!"
              buttonLink="https://dobremiejscefizjoterapiadzieci.booksy.com/"
              buttonTitle="Umów wizytę"
            >
              Wczesne wykrywanie trudności rozwojowych metodami Prechtla i HINE
            </ParagraphWithImageOnTheRight>
          </div>
          <div className="max-w-6xl mx-auto">
            <ParagraphWithImageOnTheRight
              title="Rehabilitacja najmłodszych"
              img="/hero-img-mobile.png"
              alt="Dobre Miejsce w Katowicach zaprasza!"
              buttonLink="https://dobremiejscefizjoterapiadzieci.booksy.com/"
              buttonTitle="Umów wizytę"
              isLeft
            >
              Wspieramy prawidłowy rozwój wcześniaków i niemowląt z zaburzeniami
              napięcia mięśniowego
            </ParagraphWithImageOnTheRight>
          </div>
          <div className="max-w-6xl mx-auto">
            <ParagraphWithImageOnTheRight
              title="Diagnostyka rozwoju"
              img="/hero-img-mobile.png"
              alt="Dobre Miejsce w Katowicach zaprasza!"
              buttonLink="https://dobremiejscefizjoterapiadzieci.booksy.com/"
              buttonTitle="Umów wizytę"
            >
              Wczesne wykrywanie trudności rozwojowych metodami Prechtla i HINE
            </ParagraphWithImageOnTheRight> */}

            {/* <TeamSectionHomepage /> */}

            <ParagraphWithImage
              title="Nasz zespół"
              subtitle="Dobre Miejsce"
              img="/dobremiejsce005.jpg"
              alt="Dobre Miejsce w Katowicach zaprasza!"
              // buttonLink="https://dobremiejscefizjoterapiadzieci.booksy.com/"
              // buttonTitle="Umów wizytę"
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
              // isLeft
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
