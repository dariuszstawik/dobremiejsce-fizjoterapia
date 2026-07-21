import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";

export const metadata = {
  title: "Anna Plaszczyk - fizjoterapeuta dzieci w Katowicach | Dobre Miejsce",
  description:
    "Anna Plaszczyk - fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Anna Plaszczyk - fizjoterapeuta dzieci",
    description:
      "Anna Plaszczyk - fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/katarzyna-gaweda",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/anna-plaszczyk.webp",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function AnnaPlaszczyk() {
  return (
    <>
      <Navbar />
      <section className="mt-20">
        <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20">
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            // id="sebastian"
          >
            <img
              src="/anna-plaszczyk.webp"
              alt="Anna Plaszczyk"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h1 className="mb-4 font-heading text-4xl md:text-5xl font-bold max-w-5xl">
                Anna Plaszczyk
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
                Jestem fizjoterapeutką specjalizującą się w terapii wad postawy,
                skolioz oraz pracującą w obszarze zaburzeń neurorozwojowych u
                dzieci i niemowląt.
              </p>

              <p className="text-md lg:text-lg mb-6">
                W pracy stawiam na bezpieczne i naukowo sprawdzone metody -
                łączę nowoczesną kinezyterapię z wiedzą z zakresu neurologii
                oraz ortopedii dziecięcej.
              </p>

              <p className="text-md lg:text-lg mb-6 font-semibold">
                Jak wygląda praca ze mną?
              </p>
              <ul
                className="text-md flex flex-col gap-2 font-medium lg:gap-4 lg:text-lg mb-6"
                style={{ listStyleImage: 'url("/checkmark.png")' }}
              >
                {[
                  "Patrzę na pacjenta globalnie: Szukam przyczyn wady postawy, analizując całe ciało - od stóp (metoda GTS Pediatric), przez kręgosłup, aż po stawy skroniowo-żuchwowe.",
                  "Stosuję skuteczne i uznane metody: W terapii skolioz i wad postawy pracuję metodą FITS, a u niemowląt i dzieci z zaburzeniami neurorozwojowymi wykorzystuję NDT-Bobath.",
                  "Terapia przez zabawę i partnerstwo: mały pacjent robi największe postępy, gdy ćwiczenia sprawiają mu radość. Dbam o to, aby zajęcia były przygodą, a rodziców wspieram prostymi wskazówkami i domowym planem działania.",
                ].map((item, index) => (
                  <li key={index} className="ml-10 pl-4">
                    <p className="relative -top-2">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="text-md lg:text-lg mb-6">
                Mój cel to nie tylko poprawa wyników w badaniach, ale przede
                wszystkim uśmiechnięte dziecko, które jest sprawne i ma pewność
                siebie w ruchu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
