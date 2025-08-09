import Navbar from "@/app/components/navbar";
import PageTemplate from "@/app/components/page-template";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "news" });

  return res.items.map((post) => ({
    slug: post.fields.slug,
  }));
}

// Dynamiczne generowanie metadanych
export async function generateMetadata({ params }) {
  const { slug } = params;
  const blogPost = await getContentfulBlogPosts(slug);

  const imageUrl = blogPost.fields.image
    ? `https:${blogPost.fields.image.fields.file.url}`
    : "https://dobremiejsce-fizjoterapia.pl/dobremiejsce009.jpg";

  return {
    title: `${blogPost.fields.title || "Blog"} | Dobre Miejsce`,
    description: blogPost.fields.lead,
    openGraph: {
      title: `${blogPost.fields.title || "Blog"} | Dobre Miejsce`,
      description: blogPost.fields.lead,
      url: `https://dobremiejsce-fizjoterapia.pl/blog/${slug}`,
      siteName: "Dobre Miejsce - fizjoterapia dzieci",
      locale: "pl_PL",
      type: "website",

      images: [
        {
          url: imageUrl,
          width: blogPost.fields.image?.fields.file.details.image.width || 1200,
          height:
            blogPost.fields.image?.fields.file.details.image.height || 800,
          alt:
            blogPost.fields.image?.fields.description || "Fizjoterapia dzieci",
        },
      ],
    },
  };
}

async function getContentfulBlogPosts(slug) {
  const resNewsPosts = await client.getEntries({
    content_type: "news",
    "fields.slug": slug,
  });

  return resNewsPosts.items[0];
}

export default async function Page({ params }) {
  const { slug } = params;
  const blogPost = await getContentfulBlogPosts(slug);

  console.log(blogPost);

  return (
    <>
      <Navbar />
      <PageTemplate
        isNews
        title={blogPost.fields.title}
        lead={blogPost.fields.lead}
        img={`https:${
          blogPost.fields.image ? blogPost.fields.image.fields.file.url : ""
        }`} //blogPost.fields.image ? blogPost.fields.image.fields.file.url : ""}
        // alt={
        //   blogPost.fields.image ? blogPost.fields.image.fields.description : ""
        // }
        alt=""
        imgHeight={blogPost.fields.imageHeight || "512"}
      >
        {documentToReactComponents(blogPost.fields.body)}
      </PageTemplate>
    </>
  );
}
