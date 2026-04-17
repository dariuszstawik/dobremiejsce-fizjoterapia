// import Navbar from "@/app/components/navbar";
// import PageTemplate from "@/app/components/page-template";
// import { client } from "@/lib/contentful/client";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// export const metadata = {
//   title: "Neurologopeda Katowice | Dobre Miejsce",
//   description:
//     "W Dobrym Miejscu przyjmuje neurologopedka Sabina Szober, która przez lata pracowała w najtrudniejszych środowiskach klinicznych: na oddziałach intensywnej terapii, neurologii i neonatologii.",
//   robots: {
//     index: true,
//     follow: true,
//   },

//   openGraph: {
//     title: "Neurologopeda Katowice | Dobre Miejsce",
//     description:
//       "W Dobrym Miejscu przyjmuje neurologopedka Sabina Szober, która przez lata pracowała w najtrudniejszych środowiskach klinicznych: na oddziałach intensywnej terapii, neurologii i neonatologii.",
//     url: "https://dobremiejsce-fizjoterapia.pl/neurologopeda-katowice",
//     siteName: "Dobre Miejsce - fizjoterapia dzieci",
//     locale: "pl_PL",
//     type: "website",
//     images: [
//       {
//         url: "https://dobremiejsce-fizjoterapia.pl/baby-hero.jpg",
//         width: 1920,
//         height: 1272,
//         alt: "Fizjoterapia dzieci",
//       },
//     ],
//   },
// };

// async function getContentfulContent() {
//   const res = await client.getEntries({
//     content_type: "neurologopeda",
//   });

//   return res.items[0];
// }

// export default async function NeurologopedaKatowice() {
//   const content = await getContentfulContent();

//   return (
//     <>
//       <Navbar />
//       <PageTemplate
//         // isBlog
//         title={content.fields.title}
//         lead={content.fields.lead}
//         img={`https:${
//           content.fields.image ? content.fields.image.fields.file.url : ""
//         }`} //content.fields.image ? content.fields.image.fields.file.url : ""}
//         // alt={
//         //   content.fields.image ? content.fields.image.fields.description : ""
//         // }
//         alt=""
//         bannerTitle={content.fields.bannerTitle || ""}
//         bannerBody={documentToReactComponents(content.fields.bannerBody) || ""}
//       >
//         {documentToReactComponents(content.fields.body)}
//       </PageTemplate>
//     </>
//   );
// }

import Navbar from "@/app/components/navbar";
import PageTemplate from "@/app/components/page-template";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { PhoneCall } from "lucide-react"; // Dodany import ikony

export const metadata = {
  title: "Neurologopeda Katowice | Dobre Miejsce",
  description:
    "W Dobrym Miejscu przyjmuje neurologopedka Sabina Szober, która przez lata pracowała w najtrudniejszych środowiskach klinicznych: na oddziałach intensywnej terapii, neurologii i neonatologii.",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Neurologopeda Katowice | Dobre Miejsce",
    description:
      "W Dobrym Miejscu przyjmuje neurologopedka Sabina Szober, która przez lata pracowała w najtrudniejszych środowiskach klinicznych: na oddziałach intensywnej terapii, neurologii i neonatologii.",
    url: "https://dobremiejsce-fizjoterapia.pl/neurologopeda-katowice",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/baby-hero.jpg",
        width: 1920,
        height: 1272,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

async function getContentfulContent() {
  const res = await client.getEntries({
    content_type: "neurologopeda",
  });

  return res.items[0];
}

export default async function NeurologopedaKatowice() {
  const content = await getContentfulContent();

  return (
    <>
      <Navbar />
      <PageTemplate
        // isBlog
        title={content.fields.title}
        lead={content.fields.lead}
        img={`https:${
          content.fields.image ? content.fields.image.fields.file.url : ""
        }`}
        alt=""
        hasNoBanner
        // bannerTitle={content.fields.bannerTitle || ""}
        // bannerBody={documentToReactComponents(content.fields.bannerBody) || ""}
      >
        {/* Nowa sekcja rejestracji telefonicznej umieszczona przed główną treścią CMS */}
        <div className="mb-12 mt-8 max-w-2xl rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
          <div className="mb-4 flex items-center gap-4">
            <h3 className="text-xl font-bold text-gray">Umów wizytę</h3>
            <a
              href="https://logmedporadnie.pl/kontakt/"
              target="_blank"
              className="ml-auto h-8 w-auto object-contain lg:h-10"
            >
              <img
                src="https://logmedporadnie.pl/wp-content/themes/logmed/img/logo.png"
                alt="Logo Logmed"
                className="ml-auto h-8 w-auto object-contain lg:h-10"
              />
            </a>
          </div>
          <p className="mb-6 text-md text-gray-600 lg:text-lg">
            Rejestracja na konsultacje i terapię u neurologopedy odbywa się{" "}
            <strong>wyłącznie telefonicznie</strong>. Zadzwoń do nas, a chętnie
            pomożemy ustalić dogodny termin!
          </p>
          <a
            href="tel:+48577611464"
            className="inline-flex w-fit items-center gap-3 whitespace-nowrap rounded-full bg-orange px-6 py-4 text-white no-underline shadow-md transition-all hover:scale-105 hover:bg-heavy hover:text-white"
          >
            <PhoneCall size={24} />
            <span className="text-lg font-bold tracking-wide lg:text-xl">
              577 611 464
            </span>
          </a>
        </div>

        {/* Główna treść z Contentful */}

        {documentToReactComponents(content.fields.body)}

        {/* Nowa sekcja rejestracji telefonicznej umieszczona przed główną treścią CMS */}
        <div className="mb-12 mt-8 max-w-2xl rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
          <div className="mb-4 flex items-center gap-4">
            <h3 className="text-xl font-bold text-gray">Umów wizytę</h3>
            <a
              href="https://logmedporadnie.pl/kontakt/"
              target="_blank"
              className="ml-auto h-8 w-auto object-contain lg:h-10"
            >
              <img
                src="https://logmedporadnie.pl/wp-content/themes/logmed/img/logo.png"
                alt="Logo Logmed"
                className="ml-auto h-8 w-auto object-contain lg:h-10"
              />
            </a>
          </div>
          <p className="mb-6 text-md text-gray-600 lg:text-lg">
            Rejestracja na konsultacje i terapię u neurologopedy odbywa się{" "}
            <strong>wyłącznie telefonicznie</strong>. Zadzwoń do nas, a chętnie
            pomożemy ustalić dogodny termin!
          </p>
          <a
            href="tel:+48577611464"
            className="inline-flex w-fit items-center gap-3 whitespace-nowrap rounded-full bg-orange px-6 py-4 text-white no-underline shadow-md transition-all hover:scale-105 hover:bg-heavy hover:text-white"
          >
            <PhoneCall size={24} />
            <span className="text-lg font-bold tracking-wide lg:text-xl">
              577 611 464
            </span>
          </a>
        </div>
      </PageTemplate>
    </>
  );
}
