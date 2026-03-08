import Navbar from "@/app/components/navbar";
import PageTemplate from "@/app/components/page-template";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Trener personalny dla dzieci i młodzieży Katowice | Dobre Miejsce",
  description:
    "Zajęcia z trenerem personalnym to znacznie więcej niż ćwiczenia. To kompleksowe wsparcie rozwoju fizycznego, które przekłada się na codzienne funkcjonowanie dziecka – w szkole, na boisku i w domu.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Trener personalny dla dzieci i młodzieży Katowice | Dobre Miejsce",
    description:
      "Zajęcia z trenerem personalnym to znacznie więcej niż ćwiczenia. To kompleksowe wsparcie rozwoju fizycznego, które przekłada się na codzienne funkcjonowanie dziecka – w szkole, na boisku i w domu.",
    url: "https://dobremiejsce-fizjoterapia.pl/trener-personalny-dla-dzieci",
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
  try {
    const res = await client.getEntries({
      content_type: "trenerPersonalny",
    });

    if (!res.items || res.items.length === 0) {
      return null;
    }

    return res.items[0];
  } catch (error) {
    console.error("Contentful error:", error);
    return null;
  }
}

export default async function TrenerPersonalny() {
  const content = await getContentfulContent();

  if (!content) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <PageTemplate
        title={content.fields.title || ""}
        lead={content.fields.lead || ""}
        img={
          content.fields.image?.fields?.file?.url
            ? `https:${content.fields.image.fields.file.url}`
            : ""
        }
        alt={content.fields.image?.fields?.description || ""}
        bannerTitle={content.fields.bannerTitle || ""}
        bannerBody={
          content.fields.bannerBody
            ? documentToReactComponents(content.fields.bannerBody)
            : null
        }
      >
        {content.fields.body
          ? documentToReactComponents(content.fields.body)
          : null}
      </PageTemplate>
    </>
  );
}
