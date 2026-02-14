import Link from "next/link";
import Navbar from "../components/navbar";
import ParagraphWithImageOnTheRight from "../components/paragraph-with-image-on-the-right";
import Pricing from "../components/pricing-section";
import PricingNew from "../components/pricing";
import pricelistData from "../pricelistData";
import PricingLi from "../components/pricing-li";
import SectionTitle from "../components/section-title";
import Button from "../components/Button";

export const metadata = {
  title: "Cennik | Dobre Miejsce",
  description: "Cennik usług fizjoterapii dzieci w Katowicach",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Cennik | Dobre Miejsce",
    description: "Cennik usług fizjoterapii dzieci w Katowicach",
    url: "https://dobremiejsce-fizjoterapia.pl/cennik",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/dobremiejsce009.jpg",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function Cennik() {
  return (
    <>
      <Navbar />
      {/* <section className=" py-32 mt-12 md:pt-32 container mx-auto px-8 sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:w-screen"> */}
      <div className="max-w-4xl mx-auto pt-24">
        <SectionTitle title="Cennik usług*" />
        <div className="flex flex-col gap-4 -mt-6 mb-4">
          <div className="rounded-2xl p-8 pl-0 pr-0 pb-2">
            <ul className="list-none flex flex-col gap-0 p-0 m-0">
              {pricelistData?.map((item, i) => (
                <PricingLi
                  key={item.id ?? i}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </ul>
          </div>
        </div>
        {/* <div className="bg-peacha rounded-2xl my-8 text-sm">
          * Pacjent może odwołać wizytę (zmienić jej termin) na 24 godziny przed
          umówioną godziną wizyty. W przypadku odwołania (zmiany terminu) wizyty
          po tym terminie, Podmiot Leczniczy jest uprawniony do dochodzenia od
          pacjenta równowartości wizyty odwołanej (zmienionej) po terminie,
          chyba że inny pacjent umówił się na wizytę odwołaną lub
          zmienioną.Podmiot Leczniczy może zrezygnować z dochodzenia należności
          wymienionej w zdaniu poprzednim w przypadku gdy pacjent wykaże, że
          niedotrzymanie terminu odwołania (zmiana terminu) wizyty jest
          następstwem działania siły wyższej (nagłej choroby, wypadku losowego
          itp.).
        </div> */}

        <div className="bg-peach border border-orange rounded-2xl mt-6 mb-8 p-4 text-sm text-orange-900">
          * Pacjent może odwołać wizytę (zmienić jej termin) na 24 godziny przed
          umówioną godziną wizyty. W przypadku odwołania (zmiany terminu) wizyty
          po tym terminie, Podmiot Leczniczy jest uprawniony do dochodzenia od
          pacjenta równowartości wizyty odwołanej (zmienionej) po terminie,
          chyba że inny pacjent umówił się na wizytę odwołaną lub zmienioną.
          Podmiot Leczniczy może zrezygnować z dochodzenia należności
          wymienionej w zdaniu poprzednim w przypadku gdy pacjent wykaże, że
          niedotrzymanie terminu odwołania (zmiana terminu) wizyty jest
          następstwem działania siły wyższej (nagłej choroby, wypadku losowego
          itp.).
        </div>

        <div className="flex justify-center items-center">
          <Button
            title="Umów wizytę w serwisie Booksy"
            href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
          />
        </div>
      </div>
      {/* </section> */}
    </>
  );
}
