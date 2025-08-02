import Image from "next/image";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import TeamSectionHomepage from "./components/team-section-homepage";
import SectionTitle from "./components/section-title";
import FeaturesHomepage from "./components/features-homepage";
import ParagraphWithImageOnTheRight from "./components/paragraph-with-image-on-the-right";
import Button from "./components/Button";
import BlogCard from "./components/blog-card";
import Link from "next/link";
import { client } from "@/lib/contentful/client";
import BlogList from "./components/blog-list";

async function getContentfulContent() {
  const res = await client.getEntries({
    content_type: "blogPost",
  });

  return res.items;
}

export default async function Home() {
  const blogPosts = await getContentfulContent();

  return (
    <>
      <Navbar />
      <HeroSection />

      <div className="container px-4 mx-auto max-w-[90%]">
        <SectionTitle title="W czym możemy pomóc?" />
        <div className="max-w-6xl mx-auto">
          <ParagraphWithImageOnTheRight
            title="Rehabilitacja najmłodszych"
            subtitle="oferta"
            img="/004blob.webp"
            alt="Dobre Miejsce w Katowicach zaprasza!"
            isLeft
          >
            <>
              Wspieramy prawidłowy rozwój wcześniaków i niemowląt z zaburzeniami
              napięcia mięśniowego
              <div className="flex flex-col gap-6 mr-auto mt-6">
                <Button
                  className="mr-auto mt-6"
                  title="rehabilitacja wcześniaków"
                  href="/rehabilitacja-wczesniakow"
                />

                <Button
                  className="mr-auto mt-6"
                  title="rehabilitacja niemowląt"
                  href="/rehabilitacja-noworodkow"
                />
              </div>
            </>
          </ParagraphWithImageOnTheRight>
        </div>

        <div className="max-w-6xl mx-auto ">
          <ParagraphWithImageOnTheRight
            title="Diagnostyka rozwoju"
            subtitle="oferta"
            img="/003blob.webp"
            alt="Dobre Miejsce w Katowicach zaprasza!"
          >
            Wczesne wykrywanie trudności rozwojowych metodami Prechtla i HINE
            <div className="flex flex-col gap-6 mr-auto mt-6">
              <Button
                className="mr-auto mt-6"
                title="diagnostyka Prechtla"
                href="/diagnostyka-metoda-prechtla"
              />

              <Button
                className="mr-auto mt-6"
                title="diagnostyka Hine"
                href="/diagnostyka-hine"
              />
            </div>
          </ParagraphWithImageOnTheRight>
        </div>

        <div className="max-w-6xl mx-auto">
          <ParagraphWithImageOnTheRight
            title="Terapia integracji sensorycznej SI"
            subtitle="oferta"
            img="/terapiasiblob.webp"
            alt="Dobre Miejsce w Katowicach zaprasza!"
            buttonLink="/terapia-si-w-katowicach"
            buttonTitle="dowiedz się więcej"
            isLeft
          >
            Pomoc w lepszym rozumieniu i przetwarzaniu bodźców
          </ParagraphWithImageOnTheRight>
        </div>
        <div className="max-w-6xl mx-auto">
          <ParagraphWithImageOnTheRight
            title="Korekcja wad postawy"
            subtitle="oferta"
            img="/wadypostawyblob1.webp"
            alt="Dobre Miejsce w Katowicach zaprasza!"
            buttonLink="/terapia-wad-postawy-u-dzieci"
            buttonTitle="dowiedz się więcej"
          >
            Profilaktyka i terapia problemów z postawą ciała
          </ParagraphWithImageOnTheRight>
        </div>
      </div>
      <TeamSectionHomepage />
      <SectionTitle title="Dlaczego my?" />
      <FeaturesHomepage />
      <SectionTitle title="Opinie klientów" />

      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
      <div
        className="elfsight-app-09f8947f-4893-4371-af58-0d0a25bb0561"
        data-elfsight-app-lazy
      ></div>
      <div className="container my-32 mb-32 px-4 mx-auto max-w-[90%] ">
        <SectionTitle title="Blog: pytania rodziców" />
        <div className="w-full flex flex-wrap gap-16 justify-center items-center ">
          {blogPosts && (
            <BlogList blogPosts={blogPosts} isOnHomepage amount={2} />
          )}
        </div>
      </div>
    </>
  );
}
