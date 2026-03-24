import Navbar from "@/app/components/navbar";
import PageTemplate from "@/app/components/page-template";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
        }`} //content.fields.image ? content.fields.image.fields.file.url : ""}
        // alt={
        //   content.fields.image ? content.fields.image.fields.description : ""
        // }
        alt=""
        bannerTitle={content.fields.bannerTitle || ""}
        bannerBody={documentToReactComponents(content.fields.bannerBody) || ""}
      >
        {documentToReactComponents(content.fields.body)}
      </PageTemplate>
    </>
  );
}
