import Link from "next/link";
import Navbar from "../components/navbar";
import ParagraphWithImageOnTheRight from "../components/paragraph-with-image-on-the-right";
import Pricing from "../components/pricing-section";
import PricingNew from "../components/pricing";
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

const pricelistData = [
  {
    category: "Niemowlęta (diagnoza / terapia)",
    items: [
      {
        title: "Wizyta diagnostyczna / Pierwsza wizyta / Kontrola",
        description: "1h",
        price: "220 zł",
      },
      { title: "Terapia", description: "45 min", price: "170 zł" },
    ],
  },
  {
    category: "Dzieci 1-18 lat (diagnoza / terapia)",
    items: [
      {
        title: "Wizyta diagnostyczna / Pierwsza wizyta / Kontrola",
        description: "1h",
        price: "220 zł",
      },
      { title: "Terapia", description: "45 min", price: "170 zł" },
    ],
  },
  {
    category: "Terapia specjalistyczna (np. wad postawy, pooperacyjna, SI)",
    items: [
      {
        title: "Diagnoza pooperacyjna / ortopedyczna",
        description: "1h",
        price: "170 zł",
      },
      {
        title: "Terapia pooperacyjna/ortopedyczna",
        description: "45 min",
        price: "170 zł",
      },
      {
        title: "Terapia oddechowa noworodków / niemowląt",
        description: "45 min",
        price: "170 zł",
      },
      {
        title: "Terapia wad postawy (od 3 lat)",
        description: "45 min",
        price: "170 zł",
      },
      {
        title: "Diagnostyka i Terapia Zoga Wady Postawy",
        description: "1h 30 min",
        price: "300 zł",
      },
      {
        title: "Diagnoza SI (2 spotkania)",
        description: "55 min",
        price: "490 zł",
      },
      { title: "Terapia SI", description: "45 min", price: "170 zł" },
    ],
  },
  {
    category: "Osteopatia dzieci i dorosłych",
    items: [
      {
        title: "Terapia osteopatyczna Michał Matuszak",
        description: "40 min",
        price: "230 zł",
      },
      {
        title: "Terapia osteopatyczna Michał Handzlik",
        description: "1h",
        price: "250 zł",
      },
    ],
  },
  {
    category: "Neurologopedia Sabina Szober",
    items: [
      {
        title: "I wizyta ( porażenie nerwu twarzowego ) - diagnoza",
        description: "1h 45 min",
        price: "350 zł",
      },
      {
        title: "I wizyta ( 0 - 1 r.ż. ) - diagnoza / terapia",
        description: "1h 45 min",
        price: "350 zł",
      },
      {
        title: "I wizyta ( inne ) - diagnoza",
        description: "1h 45 min, tel. 607230876",
        price: "350 zł",
      },
      {
        title: "Terapia neurologopedyczna",
        description: "1h",
        price: "250 zł",
      },
      {
        title: "Terapia neurologopedyczna",
        description: "1h 15 min",
        price: "300 zł",
      },
      {
        title: "Terapia neurologopedyczna",
        description: "1h 30 min",
        price: "350 zł",
      },
      { title: "Terapia nerwu twarzowego", description: "1h", price: "200 zł" },
      {
        title: "Terapia nerwu twarzowego",
        description: "1h 15 min",
        price: "300 zł",
      },
    ],
  },
  {
    category: "Logopedia Aleksandra Frączek",
    items: [
      {
        title:
          "Diagnoza logopedyczna/ pierwsza wizyta (Dzieci od 3 r.ż., młodzież, dorośli)",
        description: "1h 15 min",
        price: "200 zł",
      },
      { title: "Terapia logopedyczna", description: "30 min", price: "130 zł" },
      { title: "Terapia logopedyczna", description: "45 min", price: "150 zł" },
      { title: "Terapia logopedyczna", description: "1h", price: "160 zł" },
    ],
  },
  {
    category: "Neurologopeda Kaja Smoleńska-Ożóg",
    items: [
      {
        title: "Diagnoza neurologopedyczna dzieci od 1 tyg. ż.",
        description: "1h",
        price: "200 zł",
      },
      {
        title: "Terapia neurologopedyczna",
        description: "45 min",
        price: "150 zł",
      },
    ],
  },
  {
    category: "Psycholog dziecięcy",
    items: [
      {
        title: "DIagnoza psycholog dziecięcy",
        description: "50 min",
        price: "220 zł",
      },
      {
        title: "Terapia psychologiczna dla dzieci",
        description: "50 min",
        price: "180 zł",
      },
    ],
  },
  {
    category: "Trening personalny dla dzieci i dorosłych",
    items: [
      {
        title: "Trening personalny dla kobiet w ciąży",
        description: "1h",
        price: "180 zł",
      },
      {
        title:
          "Trening personalny dla kobiet po porodzie (trening można rozpocząć 4-6 tygodni po porodzie)",
        description: "1h",
        price: "180 zł",
      },
      {
        title: "Trening personalny dla dzieci",
        description: "45 min",
        price: "150 zł",
      },
    ],
  },
  {
    category: "Wkładki ortopedyczne",
    items: [
      {
        title: "Wykonanie wkładek korekcyjnych IGLI",
        description: "",
        price: "490 zł",
      },
    ],
  },
];

export default function Cennik() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto pt-24 px-4 sm:px-0">
        <SectionTitle title="Cennik usług*" />

        <div className="flex flex-col gap-3 mb-12 mt-4">
          {pricelistData.map((section, idx) => (
            <details
              key={idx}
              // className="group border border-orange/10 rounded-2xl bg-white shadow-sm overflow-hidden select-none"
              className="group border border-orange/10 rounded-2xl bg-white shadow-sm overflow-hidden select-none transition-all duration-200 hover:border-orange/20 hover:shadow-md open:border-orange/20 open:shadow-md"
            >
              {/* Zmieniono na 'group-open:bg-orange/5' – nagłówek pozostaje subtelny po otwarciu */}
              <summary className="list-none cursor-pointer flex justify-between items-center p-4 sm:p-5 bg-white hover:bg-orange/5 group-open:bg-orange/5 transition-colors duration-200 [&::-webkit-details-marker]:hidden">
                {/* Tekst zachowuje swój elegancki, ciemnopomarańczowy kolor */}
                <span className="text-sm font-bold text-orange-900 tracking-wide uppercase">
                  {section.category}
                </span>

                {/* Delikatne podświetlenie tła wokół strzałki przy otwarciu (group-open:bg-orange/10) */}
                <div className="p-1 rounded-full bg-orange/5 group-hover:bg-orange/10 group-open:bg-orange/10 transition-colors">
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </summary>

              {/* Przywrócono 'border-t border-orange/5' – przy jasnym nagłówku ta linia idealnie oddziela go od listy usług */}
              <div className="px-4 pb-4 sm:px-6 sm:pb-6 border-t border-orange/5 bg-white">
                <ul className="list-none flex flex-col p-0 m-0 divide-y divide-orange/10">
                  {section.items.map((item, i) => (
                    <PricingLi
                      key={i}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                    />
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>

        <div className="bg-peach border border-orange rounded-2xl mt-6 mb-8 p-4 text-sm text-orange-900 leading-relaxed">
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

        <div className="flex justify-center items-center mb-16">
          <Button
            title="Umów wizytę w serwisie Booksy"
            href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
          />
        </div>
      </div>
    </>
  );
}
// import Link from "next/link";
// import Navbar from "../components/navbar";
// import ParagraphWithImageOnTheRight from "../components/paragraph-with-image-on-the-right";
// import Pricing from "../components/pricing-section";
// import PricingNew from "../components/pricing";
// import pricelistData from "../pricelistData";
// import PricingLi from "../components/pricing-li";
// import SectionTitle from "../components/section-title";
// import Button from "../components/Button";

// export const metadata = {
//   title: "Cennik | Dobre Miejsce",
//   description: "Cennik usług fizjoterapii dzieci w Katowicach",
//   robots: {
//     index: true,
//     follow: true,
//   },

//   openGraph: {
//     title: "Cennik | Dobre Miejsce",
//     description: "Cennik usług fizjoterapii dzieci w Katowicach",
//     url: "https://dobremiejsce-fizjoterapia.pl/cennik",
//     siteName: "Dobre Miejsce - fizjoterapia dzieci",
//     locale: "pl_PL",
//     type: "website",
//     images: [
//       {
//         url: "https://dobremiejsce-fizjoterapia.pl/dobremiejsce009.jpg",
//         width: 1200,
//         height: 800,
//         alt: "Fizjoterapia dzieci",
//       },
//     ],
//   },
// };

// export default function Cennik() {
//   return (
//     <>
//       <Navbar />
//       <div className="max-w-4xl mx-auto pt-24">
//         <SectionTitle title="Cennik usług*" />
//         <div className="flex flex-col gap-4 -mt-6 mb-4">
//           <div className="rounded-2xl p-8 pl-0 pr-0 pb-2">
//             <ul className="list-none flex flex-col gap-0 p-0 m-0">
//               {pricelistData?.map((item, i) => (
//                 <PricingLi
//                   key={item.id ?? i}
//                   title={item.title}
//                   description={item.description}
//                   price={item.price}
//                 />
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="bg-peach border border-orange rounded-2xl mt-6 mb-8 p-4 text-sm text-orange-900">
//           * Pacjent może odwołać wizytę (zmienić jej termin) na 24 godziny przed
//           umówioną godziną wizyty. W przypadku odwołania (zmiany terminu) wizyty
//           po tym terminie, Podmiot Leczniczy jest uprawniony do dochodzenia od
//           pacjenta równowartości wizyty odwołanej (zmienionej) po terminie,
//           chyba że inny pacjent umówił się na wizytę odwołaną lub zmienioną.
//           Podmiot Leczniczy może zrezygnować z dochodzenia należności
//           wymienionej w zdaniu poprzednim w przypadku gdy pacjent wykaże, że
//           niedotrzymanie terminu odwołania (zmiana terminu) wizyty jest
//           następstwem działania siły wyższej (nagłej choroby, wypadku losowego
//           itp.).
//         </div>

//         <div className="flex justify-center items-center">
//           <Button
//             title="Umów wizytę w serwisie Booksy"
//             href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
//           />
//         </div>
//       </div>
//     </>
//   );
// }
