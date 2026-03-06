import Navbar from "@/app/components/navbar";
import PageTemplate from "@/app/components/page-template";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const metadata = {
  title:
    "Fizjoterapia sportowa dla dzieci i młodzieży Katowice | Dobre Miejsce",
  description:
    "Fizjoterapię sportową dzieci i młodzieży w Dobrym Miejscu prowadzi Sebastian Niemczyk – absolwent Akademii Wychowania Fizycznego w Katowicach, od 2017 roku stale rozwijający się klinicznie i szkoleniowo.",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Fizjoterapia sportowa dla dzieci i młodzieży Katowice | Dobre Miejsce",
    description:
      "Fizjoterapię sportową dzieci i młodzieży w Dobrym Miejscu prowadzi Sebastian Niemczyk – absolwent Akademii Wychowania Fizycznego w Katowicach, od 2017 roku stale rozwijający się klinicznie i szkoleniowo.",
    url: "https://dobremiejsce-fizjoterapia.pl/osteopatia-dziecieca",
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
    content_type: "fizjoterapiaSportowa",
  });

  return res.items[0];
}

export default async function PsychologDzieciecy() {
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
