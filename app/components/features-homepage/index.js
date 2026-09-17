import { Fade } from "react-awesome-reveal";

export default function FeaturesHomepage() {
  return (
    <section className="mt-12 mb-24">
      <div className="bgy1-blur absolute right-0 top-0 z-0 h-full w-full opacity-20 sm:hidden"></div>
      <div className="container mx-auto px-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <Fade direction="bottom" delay="30" triggerOnce>
          <div className="flex flex-col gap-8 text-gray md:flex-row">
            <div className="basis-1/4">
              <img
                src="/doswiadczenie-z-najmlodszymi-mobile.svg"
                className="lg:hidden lg:w-auto"
                alt="Doświadczenie z najmłodszymi"
                loading="lazy"
              />
              <img
                src="/doswiadczenie-z-najmlodszymi.svg"
                className="hidden lg:block lg:w-auto"
                alt="Doświadczenie z najmłodszymi"
                loading="lazy"
              />
              <h3 className="mb-3 mt-6 basis-2/5 text-2xl font-bold text-gray">
                Doświadczenie z najmłodszymi
              </h3>
              <p className="text-base">
                Specjalizujemy się w fizjoterapii niemowląt, wcześniaków i
                noworodków. Nasze doświadczenie z oddziału intensywnej terapii
                noworodkowej pozwala nam pomagać nawet w najtrudniejszych
                przypadkach.{" "}
              </p>
            </div>
            <div className="basis-1/4">
              <img
                src="/wczesna-diagnostyka-mobile.svg"
                className="lg:hidden lg:w-auto"
                alt="Wczesna diagnostyka"
                loading="lazy"
              />
              <img
                src="/wczesna-diagnostyka.svg"
                className="hidden lg:block lg:w-auto"
                alt="Wczesna diagnostyka"
                loading="lazy"
              />
              <h3 className="mb-3 mt-6 basis-2/5 text-2xl font-bold text-gray">
                Wczesna diagnostyka
              </h3>
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
                loading="lazy"
              />
              <img
                src="/terapia-z-sercem.svg"
                className="hidden lg:block lg:w-auto"
                alt="Terapia z sercem"
                loading="lazy"
              />
              <h3 className="mb-3 mt-6 basis-2/5 text-2xl font-bold text-gray">
                Terapia z sercem
              </h3>
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
                loading="lazy"
              />
              <img
                src="/bezpieczna-przestrzen.svg"
                className="hidden lg:block lg:w-auto"
                alt="Bezpieczna przestrzeń"
                loading="lazy"
              />
              <h3 className="mb-3 mt-6 basis-2/5 text-2xl font-bold text-gray">
                Bezpieczna przestrzeń
              </h3>
              <p className="text-base">
                Terapia przez zabawę w przyjaznej atmosferze. Nasz gabinet to
                miejsce, gdzie dzieci czują się swobodnie, a rodzice znajdują
                wsparcie i zrozumienie.{" "}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="bgy2-blur absolute right-0 top-40 h-full w-full opacity-40 sm:hidden"></div>
      <div className="bgy3-blur absolute bottom-0 left-0 hidden h-full w-full opacity-20 lg:block"></div>
    </section>
  );
}
