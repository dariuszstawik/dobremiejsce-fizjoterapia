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
