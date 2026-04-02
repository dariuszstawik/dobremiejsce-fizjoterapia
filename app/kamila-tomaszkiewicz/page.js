import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";
import Link from "next/link";

export const metadata = {
  title: "Kamila Tomaszkiewicz - psycholog dziecięcy Katowice | Dobre Miejsce",
  description:
    "Kamila Tomaszkiewicz - psycholog dziecięcy Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Kamila Tomaszkiewicz - psycholog dziecięcy Katowice | Dobre Miejsce",
    description:
      "Kamila Tomaszkiewicz - psycholog dziecięcy Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/kamila-tomaszkiewicz",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/kamila-tomaszkiewicz.webp",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function KamilaTomaszkiewicz() {
  return (
    <>
      <Navbar />
      <section className="mt-20">
        <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20">
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="kamila-tomaszkiewicz"
          >
            <img
              src="/kamila-tomaszkiewicz.webp"
              alt="Kamila Tomaszkiewicz"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h2 className={`text-4xl font-bold text-gray mb-6`}>
                Kamila Tomaszkiewicz
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Psycholog
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
                Ukończyłam studia psychologiczne na Uniwersytecie Śląskim w
                Katowicach. Od 7 lat pracuję z dziećmi, młodzieżą i ich
                rodzicami. Prowadzę zajęcia i konsultacje indywidualne, a także
                treningi umiejętności społecznych i warsztaty dla rodziców. Cały
                czas staram się aktualizować i wzbogacać swoją wiedzę i
                umiejętności.
              </p>

              <p className="text-md lg:text-lg mb-6">
                W mojej pracy najważniejsza dla mnie jest dobra relacja z
                osobami, które zwracają się do mnie po wsparcie,
                interdyscyplinarne podejście, zwracanie uwagi na mocne strony,
                nie skupianie się tylko na trudnościach i deficytach, a także
                wiara w to, że warto szukać rozwiązań dla wszelkich problemów i
                dbać o jakość życia swoją i swoich bliskich :)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
