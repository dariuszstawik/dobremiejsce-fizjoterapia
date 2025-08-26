import Navbar from "@/app/components/navbar";
import PageTemplate from "@/app/components/page-template";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Dynamiczne generowanie metadanych
// export async function generateMetadata({ params }) {
//   const { slug } = params;
//   const blogPost = await getContentfulBlogPosts(slug);

//   const imageUrl = blogPost.fields.image
//     ? `https:${blogPost.fields.image.fields.file.url}`
//     : "https://dobremiejsce-fizjoterapia.pl/dobremiejsce009.jpg";

//   return {
//     title: `${blogPost.fields.title || "Blog"} | Dobre Miejsce`,
//     description: blogPost.fields.lead,
//     openGraph: {
//       title: `${blogPost.fields.title || "Blog"} | Dobre Miejsce`,
//       description: blogPost.fields.lead,
//       url: `https://dobremiejsce-fizjoterapia.pl/blog/${slug}`,
//       siteName: "Dobre Miejsce - fizjoterapia dzieci",
//       locale: "pl_PL",
//       type: "website",

//       images: [
//         {
//           url: imageUrl,
//           width: blogPost.fields.image?.fields.file.details.image.width || 1200,
//           height:
//             blogPost.fields.image?.fields.file.details.image.height || 800,
//           alt:
//             blogPost.fields.image?.fields.description || "Fizjoterapia dzieci",
//         },
//       ],
//     },
//   };
// }

export const metadata = {
  title: "Terapia ortopedyczna dla dzieci i młodzieży Katowice | Dobre Miejsce",
  description:
    "Czy Twoje dziecko skarży się na ból kolan, stóp lub pleców? A może przeszło uraz lub zabieg chirurgiczny i potrzebuje wsparcia w powrocie do sprawności? W Dobrym Miejscu w Katowicach oferujemy kompleksową terapię ortopedyczną, dostosowaną do potrzeb dzieci i nastolatków – z empatią, wiedzą i ogromnym zaangażowaniem.",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Terapia ortopedyczna dla dzieci i młodzieży Katowice | Dobre Miejsce",
    description:
      "Czy Twoje dziecko skarży się na ból kolan, stóp lub pleców? A może przeszło uraz lub zabieg chirurgiczny i potrzebuje wsparcia w powrocie do sprawności? W Dobrym Miejscu w Katowicach oferujemy kompleksową terapię ortopedyczną, dostosowaną do potrzeb dzieci i nastolatków – z empatią, wiedzą i ogromnym zaangażowaniem.",
    url: "https://dobremiejsce-fizjoterapia.pl/rehabilitacja-wczesniakow",
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
    content_type: "terapiaOrtopedyczna",
  });

  return res.items[0];
}

export default async function TerapiaOrtopedyczna() {
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
