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

export default function Home() {
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
            img="/004blob.png"
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
            img="/003blob.png"
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
            title="Terapia integracji sensorycznej"
            subtitle="oferta"
            // img="/terapiasiblob.png"
            img="/terapiasiblob2.png"
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
            img="/wadypostawyblob1.png"
            alt="Dobre Miejsce w Katowicach zaprasza!"
            buttonLink="/terapia-wad-postawy-u-dzieci"
            buttonTitle="dowiedz się więcej"
          >
            Profilaktyka i terapia problemów z postawą ciała
          </ParagraphWithImageOnTheRight>
        </div>
        {/* <div className="flex flex-wrap gap-16 justify-center items-center mb-28">
          <ServiceCard
            title="Rehabilitacja najmłodszych"
            description="Wspieramy prawidłowy rozwój wcześniaków i niemowląt z zaburzeniami
        napięcia mięśniowego"
            img="/dobremiejsce001.jpg"
          />

          <ServiceCard
            title="Diagnostyka rozwoju"
            description="Wczesne wykrywanie trudności rozwojowych metodami Prechtla i HINE"
            img="/dobremiejsce004.jpg"
          />

          <ServiceCard
            title="Terapia integracji sensorycznej"
            description="Pomoc w lepszym rozumieniu i przetwarzaniu bodźców"
            img="/terapiasi.jpeg"
          />

          <ServiceCard
            title="Korekcja wad postawy"
            description="Profilaktyka i terapia problemów z postawą ciała"
            img="/wadypostawy.jpeg"
          />
        </div> */}
      </div>
      <TeamSectionHomepage />
      <SectionTitle title="Dlaczego my?" />
      <FeaturesHomepage />
      <div className="container my-32 mb-32 px-4 mx-auto max-w-[90%] ">
        <SectionTitle title="Blog: pytania rodziców" />
        <div className="w-full flex flex-wrap gap-16 justify-center items-center ">
          <BlogCard
            title="Zaburzenia napięcia mięśniowego u niemowlaków - jak je rozpoznać i co robić?"
            href="/blog/zaburzenia-napiecia-miesniowego-u-niemowlakow"
            img="/dobremiejsce002.jpg"
            alt="zaburzenia napięcia mięśniowego u niemowlaków"
          />
          <BlogCard
            title="Witamy na blogu!"
            img="/dobremiejsce008.jpg"
            href="/blog/witamy-na-blogu"
            alt="witamy"
          />
        </div>
      </div>
    </>
  );
}
