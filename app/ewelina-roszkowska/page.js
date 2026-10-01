import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";

export const metadata = {
  title:
    "Ewelina Roszkowska - fizjoterapeuta dzieci w Katowicach | Dobre Miejsce",
  description:
    "Ewelina Roszkowska - fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Ewelina Roszkowska - fizjoterapeuta dzieci",
    description:
      "Ewelina Roszkowska - fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/ewelina-roszkowska",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/ewelina-roszkowska.webp",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function EwelinaRoszkowska() {
  return (
    <>
      <Navbar />
      <section className="mt-20">
        <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20">
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="sebastian"
          >
            <img
              src="/ewelina-roszkowska.webp"
              alt="Ewelina Roszkowska"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h1 className="mb-4 font-heading text-4xl md:text-5xl font-bold max-w-5xl">
                Ewelina Roszkowska
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Fizjoterapeuta dziecięcy Katowice
                </span>{" "}
              </h1>
              <a
                className="inline-block whitespace-nowrap rounded-full bg-orange px-5 py-4 mb-8  text-white no-underline shadow-lg hover:bg-heavy hover:text-white"
                href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Umów wizytę
              </a>

              <p className="text-md lg:text-lg mb-6 font-bold">
                Jestem absolwentką Śląskiego Uniwersytetu Medycznego w
                Katowicach, a moją zawodową pasją jest wspieranie prawidłowego
                rozwoju ruchowego najmłodszych. W codziennej pracy skupiam się
                przede wszystkim na diagnostyce i terapii wad postawy- pomagam
                dzieciom i młodzieży ze skoliozami, a także z wadami stóp i
                kolan.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Zajmuję się również dziećmi zmagającymi się z problemami o
                podłożu neurologicznym. Doświadczenie kliniczne zdobywałam m.in.
                podczas praktyk w Górnośląskim Centrum Zdrowia Dziecka w
                Katowicach, Szpitalu Dziecięcym w Sosnowcu oraz w codziennej
                pracy z pacjentami w placówce rehabilitacyjnej Walor.
              </p>

              <p className="text-md lg:text-lg mb-6">
                W terapii łączę wiedzę medyczną z empatycznym, pełnym
                cierpliwości podejściem. Zależy mi na tym, aby ćwiczenia były
                dla dziecka bezpieczne i angażujące, a rodzice otrzymywali jasne
                wskazówki, jak wspierać postępy swojej pociechy w domu.
              </p>
              <p className="text-md lg:text-lg mb-6"></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
