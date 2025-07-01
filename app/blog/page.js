import { client } from "@/lib/contentful/client";
import BlogCard from "../components/blog-card";
import BlogList from "../components/blog-list";
import Navbar from "../components/navbar";
import SectionTitle from "../components/section-title";

export const metadata = {
  title: "Blog Dobre Miejsce – pytania rodziców, porady specjalistów",
  description:
    "Fizjoterapeuci z Katowic odpowiadają na pytania rodziców: wcześniaki, napięcie mięśniowe, SI, wady postawy. Porady i wiedza.",
  openGraph: {
    title: "Blog Dobre Miejsce – pytania rodziców, porady specjalistów",
    description:
      "Fizjoterapeuci z Katowic odpowiadają na pytania rodziców: wcześniaki, napięcie mięśniowe, SI, wady postawy. Porady i wiedza.",
    url: "https://dobremiejsce-fizjoterapia.pl/blog",
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

async function getContentfulContent() {
  const res = await client.getEntries({
    content_type: "blogPost",
  });

  return res.items;
}

export default async function Blog() {
  const blogPosts = await getContentfulContent();

  return (
    <>
      <Navbar />
      <section className="container pt-32 mb-44 px-4 mt-12 md:pt-24 mx-auto max-w-[90%] ">
        <img
          src="/blob3.svg"
          className="w-[1024px] absolute bottom-64 -left-32 -z-10"
        />
        <SectionTitle title="Blog: pytania rodziców" />
        <div className="w-full flex flex-wrap gap-16 justify-center items-center ">
          {blogPosts && <BlogList blogPosts={blogPosts} amount={6} />}
        </div>
      </section>
    </>
  );
}
