import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="relative grid items-center overflow-hidden pt-[180px] lg:grid-flow-col lg:grid-cols-2">
        <div className="container -mt-6 z-10 mx-auto px-8 sm:max-w-xl md:max-w-full md:px-24 lg:col-start-1 lg:row-start-1 lg:mb-12 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-end lg:flex-row">
            <div className="lg:mb-0 lg:max-w-xl lg:pr-5">
              <div className="mb-5 max-w-xl">
                <h1 className="robot mb-4 max-w-lg font-sans text-4xl font-bold leading-hero text-gray-other sm:text-5xl lg:text-6xl lg:leading-hero">
                  Fizjoterapia dzieci płynąca z pasji i&nbsp;zaangażowania
                </h1>
                <img
                  src="/decorated-underline.svg"
                  alt="Decorative Line"
                  className="mb-4"
                />
                <p className="text-gray-700 text-base leading-paragraph md:text-lg">
                  Dobre Miejsce dla Twojego dziecka to przyjazna przestrzeń,
                  która powstała, by wspierać prawidłowy rozwój noworodków,
                  niemowląt i większych dzieci. Fizjoterapia najmłodszych
                  płynąca z pasji i zaangażowania dwóch fizjoterapeutek
                  pediatrycznych — Kamili Włodarczyk i Martyny Cesarczyk.
                </p>
              </div>
              <div className="flex flex-row items-center">
                <a
                  className="rounded-full bg-orange px-7 py-4 text-lg font-semibold text-white no-underline shadow-lg hover:bg-heavy hover:text-white"
                  href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  Umów wizytę
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:col-start-2 lg:row-start-1">
          <Image
            className="ml-auto -translate-y-12 transform object-cover md:hidden"
            src="/hero-img-mobile.png"
            width={339}
            height={293}
            priority
            alt="Niemowlę podczas fizjoterapii"
          />
          <Image
            className="ml-auto hidden -translate-y-12 object-cover md:block"
            src="/hero-img.png"
            width={624}
            height={636}
            priority
            alt="Niemowlę podczas fizjoterapii"
          />
        </div>
      </section>
    </>
  );
}
