import Navbar from "@/app/components/navbar";
import PageTemplate from "@/app/components/page-template";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "blogPost" });

  return res.items.map((post) => ({
    slug: post.fields.slug,
  }));
}

// Dynamiczne generowanie metadanych
export async function generateMetadata({ params }) {
  const { slug } = params;
  const blogPost = await getContentfulBlogPosts(slug);

  return {
    title: `${blogPost.fields.title || "Blog"} | Dobre Miejsce`,
    description: blogPost.fields.lead,
  };
}

async function getContentfulBlogPosts(slug) {
  const resNewsPosts = await client.getEntries({
    content_type: "blogPost",
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
        isBlog
        title={blogPost.fields.title}
        lead={blogPost.fields.lead}
        img={`https://${
          blogPost.fields.image ? blogPost.fields.image.fields.file.url : ""
        }`} //blogPost.fields.image ? blogPost.fields.image.fields.file.url : ""}
        // alt={
        //   blogPost.fields.image ? blogPost.fields.image.fields.description : ""
        // }
        alt=""
      >
        {documentToReactComponents(blogPost.fields.body)}
      </PageTemplate>
    </>
  );
}
