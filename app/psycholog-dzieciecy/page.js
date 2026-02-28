import Navbar from "@/app/components/navbar";
import PageTemplate from "@/app/components/page-template";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const metadata = {
  title: "Psycholog dziecięcy Katowice | Dobre Miejsce",
  description:
    "Osteopatia to delikatne, holistyczne podejście do zdrowia Twojego dziecka. W Dobrym Miejscu łączymy osteopatię z fizjoterapią, aby zapewnić Waszym maluchom kompleksową opiekę od pierwszych dni życia.",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Psycholog dziecięcy Katowice | Dobre Miejsce",
    description:
      "Osteopatia to delikatne, holistyczne podejście do zdrowia Twojego dziecka. W Dobrym Miejscu łączymy osteopatię z fizjoterapią, aby zapewnić Waszym maluchom kompleksową opiekę od pierwszych dni życia.",
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
    content_type: "psychologDziecicy",
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
