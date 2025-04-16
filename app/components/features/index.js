import BlockTitle from "../block-title";
import Button from "../Button";

export default function Features() {
  return (
    <section className="mt-12">
      {/* <div className="bgy1-blur absolute right-0 top-0 z-0 h-full w-full opacity-20 sm:hidden"></div> */}
      <div className="container mx-auto px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col pb-16 text-gray lg:flex-row items-start box-content">
          {/* <h3 className="robot font-r mb-6 mr-4 basis-2/5 text-4xl font-bold leading-hero lg:text-5xl">
            Rehabilitacja w<br />
            ciepłej atmosferze
          </h3> */}
          <BlockTitle
            title="Rehabilitacja w ciepłej atmosferze"
            subtitle="Dobre Miejsce w Katowicach"
            isAlignedLeft
          />
          <p className="basis-2/5 pr-6 text-lg">
            Rehabilitacja w ciepłej atmosferze bez stresu i płaczu. Diagnozujemy
            i ustalamy plan terapii, ale to mały pacjent ma ostatnie zdanie.
          </p>
          <div className="mr-6 basis-1/5 justify-center lg:text-right mt-4">
            <a
              className="whitespace-nowrap rounded-full bg-orange px-5 py-4 text-white no-underline shadow-lg hover:bg-heavy hover:text-white"
              href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              Umów wizytę
            </a>
            {/* <Button title="Umów wizytę" /> */}
          </div>
        </div>
        <div className="flex flex-col gap-8 text-gray md:flex-row">
          <div className="basis-1/3">
            <img
              src="/indywidualne-podejscie-mobile.svg"
              className="lg:hidden lg:w-auto"
              alt="Indywidualne podejście mobile"
            />
            <img
              src="/indywidualne-podejscie.svg"
              className="hidden lg:block lg:w-auto"
              alt="Indywidualne podejście"
            />
            <h3 className="mb-3 mt-6 basis-2/5 text-2xl font-bold text-gray">
              Indywidualne podejście
            </h3>
            <p className="">
              Szanujemy indywidualność każdego dziecka i dajemy jej wybrzmieć —
              w naszym podejściu to terapeuta dopasowuje się do potrzeb pacjenta
              i podąża za nimi.
            </p>
          </div>
          <div className="basis-1/3">
            <img
              src="/skuteczna-terapia-mobile.svg"
              className="lg:hidden lg:w-auto"
              alt="Skuteczna terapia mobile"
            />
            <img
              src="/skuteczna-terapia.svg"
              className="hidden lg:block lg:w-auto"
              alt="Skuteczna terapia"
            />
            <h3 className="mb-3 mt-6 basis-2/5 text-2xl font-bold text-gray">
              Skuteczna terapia
            </h3>
            <p className="">
              Naszym celem jest, aby terapia była skuteczna, wszystkie dzieci,
              również te z dużymi wyzwaniami rozwojowymi czuły się u nas
              bezpiecznie, a ich Rodzice otrzymali niezbędne wsparcie.
            </p>
          </div>
          <div className="basis-1/3">
            <img
              src="/rodzina-mobile.svg"
              className="lg:hidden lg:w-auto"
              alt="Rodzina mobile"
            />
            <img
              src="/rodzina.svg"
              className="hidden lg:block lg:w-auto"
              alt="Rodzina"
            />
            <h3 className="mb-3 mt-6 basis-2/5 text-2xl font-bold text-gray">
              Rodzina jest dla nas ważna
            </h3>
            <p className="">
              Każdy Rodzic, który jest zaniepokojony rozwojem swojego malucha,
              bądź potrzebuje profilaktycznej wizyty lub wsparcia w kwestiach
              czynności pielęgnacyjnych jest u nas miło widziany.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="bgy2-blur absolute right-0 top-40 h-full w-full opacity-40 sm:hidden"></div>
      <div className="bgy3-blur absolute bottom-0 left-0 hidden h-full w-full opacity-20 lg:block"></div> */}
    </section>
  );
}
