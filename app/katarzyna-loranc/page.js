import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";
import Link from "next/link";

export const metadata = {
  title: "Katarzyna Loranc - trenerka personalna Katowice | Dobre Miejsce",
  description:
    "Katarzyna Loranc - trenerka personalna Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Katarzyna Loranc - trenerka personalna Katowice | Dobre Miejsce",
    description:
      "Katarzyna Loranc - trenerka personalna Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/kamila-wlodarczyk",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/katarzyna-loranc-sm.webp",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function KatarzynaLorenc() {
  return (
    <>
      <Navbar />
      <section className="mt-20">
        <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20">
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="katarzyna-loranc"
          >
            <img
              src="/katarzyna-loranc-sm.webp"
              alt="Katarzyna Loranc"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h2 className={`text-4xl font-bold text-gray mb-6`}>
                Katarzyna Loranc
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Trenerka personalna
                </span>{" "}
              </h2>

              <a
                className="inline-block whitespace-nowrap rounded-full bg-orange px-5 py-4 mb-8  text-white no-underline shadow-lg hover:bg-heavy hover:text-white"
                href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Umów wizytę
              </a>

              <p className="text-md lg:text-lg mb-6 font-bold">
                Na co dzień prowadzę treningi indywidualne oraz zajęcia grupowe,
                w których skupiam się na bezpiecznym wprowadzaniu ruchu,
                rozwijaniu siły, sprawności oraz świadomości ciała.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Pracowałam z dziećmi i młodzieżą, prowadząc zajęcia
                ogólnorozwojowe, które łączyły elementy piłki ręcznej z
                ćwiczeniami poprawiającymi koordynację, równowagę, stabilizację
                i siłę. Uważam, że aktywność fizyczną warto wprowadzać i uczyć
                od najmłodszych lat, bo to podstawa prawidłowego rozwoju i
                zdrowych nawyków.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Podczas zajęć stawiam na bezpieczeństwo, indywidualne podejście
                i dobrą atmosferę, tak aby dzieci chętnie uczestniczyły w
                ćwiczeniach i czerpały z nich radość.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
