import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";
import Link from "next/link";

export const metadata = {
  title: "Kaja Smoleńska-Ożóg - neurologopeda Katowice | Dobre Miejsce",
  description:
    "Kaja Smoleńska-Ożóg - neurologopeda Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Kaja Smoleńska-Ożóg - neurologopeda Katowice | Dobre Miejsce",
    description:
      "Kaja Smoleńska-Ożóg - neurologopeda Katowice - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/aleksandra-fraczek",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/kaja-smolenska-ozog.webp",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function KajaSmolenskaOzog() {
  return (
    <>
      <Navbar />
      <section className="mt-20">
        <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20">
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="kaja-smolenska-ozog"
          >
            <img
              src="/kaja-smolenska-ozog.webp"
              alt="Kaja SMoleńska-Ożóg"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h2 className={`text-4xl font-bold text-gray mb-6`}>
                Kaja Smoleńska-Ożóg
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Neurologopeda Katowice
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
                Jestem logopedą, neurologopedą oraz pedagogiem. Doświadczenie
                zdobyłam pracując w Poradni Logopedycznej w Górnośląskim Centrum
                Zdrowia, poradniach rehabilitacyjnych oraz licznych placówkach
                szkolno-przedszkolnych.
              </p>

              <p className="text-md lg:text-lg mb-6">
                W mojej pracy najważniejsze jest dla mnie zdobycie zaufania i
                indywidualne podejście do każdego pacjenta. Wspólnie wyznaczamy
                cele i razem przechodzimy przez kolejne etapy terapii. Patrzę na
                człowieka całościowo – nie skupiam się wyłącznie na mowie, ale
                biorę pod uwagę wszystkie aspekty, które mogą wpływać na jego
                funkcjonowanie i rozwój.
              </p>

              <p className="font-semibold mb-6">
                Zakres działań diagnostycznych i terapeutycznych:
              </p>
              <ul
                className="text-md flex flex-col gap-2 font-medium lg:gap-4 lg:text-lg"
                style={{ listStyleImage: 'url("/checkmark.png")' }}
              >
                {[
                  "wczesna interwencja logopedyczna, karmienie noworodków i niemowlaków",
                  "opóźnienie rozwoju mowy",
                  "nieprawidłowa artykulacja dzieci, młodzieży i dorosłych",
                  "zaburzenia miofunkcjonalne",
                  "pacjenci ortodontyczni",
                  "jąkanie, zaburzenia niepłynności mowy",
                ].map((item, index) => (
                  <li key={index} className="ml-10 pl-4">
                    <p className="relative -top-2">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
