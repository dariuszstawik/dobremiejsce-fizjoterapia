import BlogCard from "../components/blog-card";
import Navbar from "../components/navbar";
import SectionTitle from "../components/section-title";

export default function Blog() {
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
          <BlogCard
            title="Zaburzenia napięcia mięśniowego u niemowlaków - jak je rozpoznać i co robić?"
            href="/blog/zaburzenia-napiecia-miesniowego-u-niemowlakow"
            img="/dobremiejsce002.jpg"
          />
          <BlogCard
            title="Witamy na blogu!"
            img="/dobremiejsce008.jpg"
            href="/blog/witamy-na-blogu"
            alt="witamy"
          />
        </div>
      </section>
    </>
  );
}
