export default function FeaturesHomepage() {
  return (
    <section className="mt-12 mb-24">
      <div className="bgy1-blur absolute right-0 top-0 z-0 h-full w-full opacity-20 sm:hidden"></div>
      <div className="container mx-auto px-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        {/* <div className="flex flex-col pb-16 text-gray lg:flex-row">
          <h2 className="robot font-r mb-6 mr-4 basis-2/5 text-4xl font-bold leading-hero lg:text-5xl">
            Rehabilitacja w<br />
            ciepłej atmosferze
          </h2>
          <p className="basis-2/5 pr-6 mb-6 text-lg">
            Rehabilitacja w ciepłej atmosferze bez stresu i płaczu. Diagnozujemy
            i ustalamy plan terapii, ale to mały pacjent ma ostatnie zdanie.
          </p>
          <div className="mr-6 basis-1/5 justify-center lg:text-right">
            <a
              className="whitespace-nowrap rounded-full bg-orange px-5 py-4 text-white no-underline shadow-lg hover:bg-heavy hover:text-white"
              href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              Umów wizytę
            </a>
          </div>
        </div> */}
        <div className="flex flex-col gap-8 text-gray md:flex-row">
          <div className="basis-1/4">
            <img
              src="/doswiadczenie-z-najmlodszymi-mobile.svg"
              className="lg:hidden lg:w-auto"
              alt="Doświadczenie z najmłodszymi"
            />
            <img
              src="/doswiadczenie-z-najmlodszymi.svg"
              className="hidden lg:block lg:w-auto"
              alt="Doświadczenie z najmłodszymi"
            />
            <h2 className="mb-3 mt-6 basis-2/5 text-2xl font-bold text-gray">
              Doświadczenie z najmłodszymi
            </h2>
            <p className="text-base">
              Specjalizujemy się w opiece nad wcześniakami i noworodkami. Nasze
              doświadczenie z oddziału intensywnej terapii noworodkowej pozwala
              nam pomagać nawet w najtrudniejszych przypadkach.{" "}
            </p>
          </div>
          <div className="basis-1/4">
            <img
              src="/wczesna-diagnostyka-mobile.svg"
              className="lg:hidden lg:w-auto"
              alt="Wczesna diagnostyka"
            />
            <img
              src="/wczesna-diagnostyka.svg"
              className="hidden lg:block lg:w-auto"
              alt="Wczesna diagnostyka"
            />
            <h2 className="mb-3 mt-6 basis-2/5 text-2xl font-bold text-gray">
              Wczesna diagnostyka
            </h2>
            <p className="text-base">
              Wykrywamy i wspieramy rozwój maluszka od pierwszych dni życia.
              Specjalistyczne metody diagnostyczne (HINE i Prechtla) pozwalają
              nam działać szybko i skutecznie.
            </p>
          </div>
          <div className="basis-1/4">
            <img
              src="/terapia-z-sercem-mobile.svg"
              className="lg:hidden lg:w-auto"
              alt="Terapia z sercem"
            />
            <img
              src="/terapia-z-sercem.svg"
              className="hidden lg:block lg:w-auto"
              alt="Terapia z sercem"
            />
            <h2 className="mb-3 mt-6 basis-2/5 text-2xl font-bold text-gray">
              Terapia z sercem
            </h2>
            <p className="text-base">
              Każde dziecko jest inne i zasługuje na indywidualne podejście.
              Tworzymy spersonalizowane plany terapii, szanując tempo rozwoju
              małego pacjenta.
            </p>
          </div>
          <div className="basis-1/4">
            <img
              src="/bezpieczna-przestrzen-mobile.svg"
              className="lg:hidden lg:w-auto"
              alt="Bezpieczna przestrzeń"
            />
            <img
              src="/bezpieczna-przestrzen.svg"
              className="hidden lg:block lg:w-auto"
              alt="Bezpieczna przestrzeń"
            />
            <h2 className="mb-3 mt-6 basis-2/5 text-2xl font-bold text-gray">
              Bezpieczna przestrzeń
            </h2>
            <p className="text-base">
              Terapia przez zabawę w przyjaznej atmosferze. Nasz gabinet to
              miejsce, gdzie dzieci czują się swobodnie, a rodzice znajdują
              wsparcie i zrozumienie.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bgy2-blur absolute right-0 top-40 h-full w-full opacity-40 sm:hidden"></div>
      <div className="bgy3-blur absolute bottom-0 left-0 hidden h-full w-full opacity-20 lg:block"></div>
    </section>
  );
}
