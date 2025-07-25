import Link from "next/link";
import Navbar from "../components/navbar";
import ParagraphWithImageOnTheRight from "../components/paragraph-with-image-on-the-right";
import Pricing from "../components/pricing-section";

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
      <section className=" py-32 mt-12 md:pt-32 container mx-auto px-8 sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:w-screen">
        <div className="w-[80%] mx-auto">
          <ParagraphWithImageOnTheRight
            title="Cennik"
            subtitle="Dobre Miejsce w Katowicach"
            img="/i004blob-horizontal.png"
            alt="Dobre Miejsce"
            buttonLink="https://dobremiejscefizjoterapiadzieci.booksy.com/"
            buttonTitle="Umów wizytę w serwisie Booksy"
            isLeft
            imgFill
          >
            <div className="flex flex-col gap-2 mb-4">
              <div className="rounded-2xl p-8 pr-0 pb-2">
                <ul
                  className="flex flex-col gap-4"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="mb-0 pl-4">
                    <div className="relative -top-3">
                      <h3 className="font-bold">
                        Wizyta diagnostyczna / Pierwsza wizyta
                      </h3>
                      <p>210 zł — 60 minut</p>
                    </div>
                  </li>
                  <li className="mb-0 pl-4">
                    <div className="relative -top-3">
                      <h3 className="font-bold">Terapia</h3>
                      <p>160 zł — 45 minut</p>
                    </div>
                  </li>
                  <li className="mb-0 pl-4">
                    <div className="relative -top-3">
                      <h3 className="font-bold">Diagnoza SI</h3>
                      <p> 480 zł — 2 spotkania x 45 minut</p>
                    </div>
                  </li>
                  <li className="mb-0 pl-4">
                    <div className="relative -top-3">
                      <Link href="/terapia-si-w-katowicach">
                        <h3 className="font-bold">
                          Terapia integracji sensorycznej
                        </h3>
                      </Link>
                      <p>160 zł — 45 minut</p>
                    </div>
                  </li>
                  <li className="mb-0 pl-4">
                    <div className="relative -top-3">
                      <Link href="/wkladki-ortopedyczne-igli-junior">
                        <h3 className="font-bold">Wykonanie wkładek IGLI</h3>
                      </Link>
                      <p>480 zł — 60 minut</p>
                    </div>
                  </li>
                  <li className="mb-0 pl-4">
                    <div className="relative -top-3">
                      <h3 className="font-bold">
                        Diagnostyka i Terapia ZOGA Wady Postawy
                      </h3>
                      <p>300 zł — 1h&nbsp;30 minut</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </ParagraphWithImageOnTheRight>
        </div>
      </section>
    </>
  );
}
