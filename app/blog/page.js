import BlogCard from "../components/blog-card";
import Navbar from "../components/navbar";
import SectionTitle from "../components/section-title";

export default function Blog() {
  return (
    <>
      <Navbar />
      <section className="container my-32 mb-44 px-4 mt-12 md:pt-24 mx-auto max-w-[90%] ">
        <SectionTitle title="Blog: pytania rodziców" />
        <div className="w-full flex flex-wrap gap-16 justify-center items-center ">
          <BlogCard title="Metoda Vojty vs. Bobath - która lepsza dla naszego dziecka?" />
          <BlogCard title="Witamy na blogu!" />
        </div>
      </section>
    </>
  );
}
