import { client } from "@/lib/contentful/client";
import BlogCard from "../components/blog-card";
import BlogList from "../components/blog-list";
import Navbar from "../components/navbar";
import SectionTitle from "../components/section-title";

export const metadata = {
  title: "Aktualności | Dobre Miejsce",
  description:
    "Aktualności z życia gabinetu Dobre Miejsce - fizjoterapia dzieci",
  openGraph: {
    title: "Aktualności | Dobre Miejsce",
    description:
      "Aktualności z życia gabinetu Dobre Miejsce - fizjoterapia dzieci",
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
    content_type: "news",
  });

  return res.items;
}

export default async function Aktualnosci() {
  const blogPosts = await getContentfulContent();

  return (
    <>
      <Navbar />
      <section className="container pt-32 mb-44 px-4 mt-12 md:pt-24 mx-auto max-w-[90%] ">
        <img
          src="/blob3.svg"
          className="w-[1024px] absolute bottom-64 -left-32 -z-10"
        />
        <SectionTitle title="Aktualności" />
        <div className="w-full flex flex-wrap gap-16 justify-center items-center ">
          {blogPosts && <BlogList blogPosts={blogPosts} amount={6} isNews />}
        </div>
      </section>
    </>
  );
}
