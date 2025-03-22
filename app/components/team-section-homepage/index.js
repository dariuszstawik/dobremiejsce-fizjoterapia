import { Fade } from "react-awesome-reveal";
import Button from "../Button";
import SectionTitle from "../section-title";

export default function TeamSectionHomepage() {
  return (
    <section className="relative w-screen py-8  after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full  after:opacity-60">
      <div className="container w-[80%] px-4 mx-auto relative z-20">
        <SectionTitle title="Kim jesteśmy?" />
        <Fade direction="bottom" delay="30" triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 -mx-4">
            <div className="w-full md:max-w-1/2 px-4 py-10 mb-10 bg-peach rounded-xl">
              <div className="h-full py-8 px-4 lg:px-10 rounded-md text-center">
                <img
                  className="mx-auto mb-6 rounded-full w-64"
                  src="/kamila-wlodarczyk.png"
                  alt=""
                />
                <h3 className="mb-2 text-2xl md:text-3xl leading-tight font-semibold">
                  Kamila Włodarczyk
                </h3>
                <span className="inline-block mb-6 text-lg font-medium text-orange">
                  Terapeutka NDT-Bobath | Specjalistka od wcześniaków
                </span>
                <p className="mb-8 text-coolGray-500 font-medium">
                  Na co dzień pracuje w Górnośląskim Centrum Zdrowia Dziecka w
                  Katowicach oraz Szpitalu Miejskim w Rudzie Śląskiej, na
                  oddziałach neonatologii i intensywnej terapii noworodka.
                </p>
                <div className="mr-auto mt-6">
                  <Button
                    className="mx-auto mt-6"
                    title="więcej o Kamili"
                    href="/kamila-wlodarczyk"
                  ></Button>
                </div>
              </div>
            </div>
            <div className="w-full md:max-w-1/2 px-4 py-10 mb-10 bg-peach  rounded-xl">
              <div className="h-full py-8 px-10  rounded-md text-center">
                <img
                  className="mx-auto mb-6 rounded-full w-64"
                  src="/martyna-cesarczyk.png"
                  alt=""
                />
                <h3 className="mb-2 text-2xl md:text-3xl leading-tight font-semibold">
                  Martyna Cesarczyk
                </h3>
                <span className="inline-block mb-6 text-lg font-medium text-orange">
                  Fizjoterapeutka pediatryczna | Specjalistka terapii SI
                </span>
                <p className="mb-8 text-coolGray-500 font-medium">
                  Doświadczenie w fizjoterapii pediatrycznej zdobywała m.in. w
                  Górnośląskim Centrum Zdrowia Dziecka w Katowicach i Centrum
                  Intensywnej Terapii Olinek w Warszawie.
                </p>
                <div className="mr-auto mt-6">
                  <Button
                    className="mx-auto mt-6"
                    title="więcej o Martynie"
                    href="/martyna-cesarczyk"
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
