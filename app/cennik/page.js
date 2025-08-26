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
        <SectionTitle title="Cennik usług" />
        {/* <ParagraphWithImageOnTheRight
            title="Cennik"
            subtitle="Dobre Miejsce w Katowicach"
            img="/i004blob-horizontal.png"
            alt="Dobre Miejsce"
            buttonLink="https://dobremiejscefizjoterapiadzieci.booksy.com/"
            buttonTitle="Umów wizytę w serwisie Booksy"
            isLeft
            imgFill
          > */}
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
        {/* </ParagraphWithImageOnTheRight> */}

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
