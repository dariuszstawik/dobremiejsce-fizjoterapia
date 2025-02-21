import { HandHeart } from "lucide-react";
import Navbar from "../components/navbar";
import BlockWith3Blobs from "../components/block-with-3-blobs";
import Features from "../components/features";
import ListSection from "../components/list-section";
import ParagraphWithImage from "../components/paragraph-with-image";
import ParagraphWithImageOnTheRight from "../components/paragraph-with-image-on-the-right";

export default function ONas() {
  return (
    <>
      <Navbar />

      <section className="relative py-24 mt-12 md:py-40 container mx-auto px-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
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
              dla Twojego dziecka - o nas
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
            <ParagraphWithImageOnTheRight
              title="Dobre Miejsce w Katowicach zaprasza!"
              img="/dobremiejsce002.jpg"
            >
              Jeśli szukasz profesjonalnej opieki fizjoterapeutycznej dla
              swojego dziecka, prowadzonej z pasją i zaangażowaniem, jesteś we
              właściwym miejscu. W Dobrym Miejscu każde dziecko otrzymuje szansę
              na harmonijny rozwój, a rodzice znajdują zrozumienie i wsparcie.
            </ParagraphWithImageOnTheRight>

            {/* <div className="flex">
              <a
                href="#"
                className="inline-flex justify-center items-center text-center h-18 py-8 px-10 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-full focus:ring-4 focus:ring-blue-200 transition duration-200"
              >
                Czytaj więcej
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
