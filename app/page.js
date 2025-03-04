import Image from "next/image";
import HeroSection from "./components/hero-section";
import BlockWith3Blobs from "./components/block-with-3-blobs";
import Features from "./components/features";
import ListSection from "./components/list-section";
import Pricing from "./components/pricing-section";
import TeamSection from "./components/team-section";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ServicesCard from "./components/services";
import ServiceCards from "./components/serviceCards";
import ServiceCard from "./components/service-card";
import WhyUs from "./components/why-us";
import { TeamShort } from "./components/team-short";
import TeamSectionHomepage from "./components/team-section-homepage";
import SectionTitle from "./components/section-title";
import FeaturesHomepage from "./components/features-homepage";
import ParagraphWithImageOnTheRight from "./components/paragraph-with-image-on-the-right";
import Button from "./components/Button";
import BlogCard from "./components/blog-card";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <div className="container px-4 mx-auto max-w-[90%]">
        <SectionTitle title="W czym możemy pomóc?" />
        {/* <div className="w-full py-6 bg-slate-50"> */}
        <div className="max-w-6xl mx-auto">
          <ParagraphWithImageOnTheRight
            title="Rehabilitacja najmłodszych"
            subtitle="oferta"
            img="/004blob.png"
            alt="Dobre Miejsce w Katowicach zaprasza!"
            // buttonLink="https://dobremiejscefizjoterapiadzieci.booksy.com/"
            // buttonTitle="dowiedz się więcej"
            isLeft
            // hasSmallerTitle
            // hasSmallerImg
          >
            <>
              Wspieramy prawidłowy rozwój wcześniaków i niemowląt z zaburzeniami
              napięcia mięśniowego
              <div className="mr-auto mt-6">
                <Button className="mr-auto mt-6" title="dowiedz się więcej">
                  {/* <Link href={buttonLink}>{buttonTitle}</Link> */}
                  {/* {buttonTitle} */}
                </Button>
              </div>
            </>
          </ParagraphWithImageOnTheRight>
          {/* </div> */}
          {/* </div> */}
        </div>
        {/* <div className="w-screen py-6 bg-slate-50"> */}
        <div className="max-w-6xl mx-auto ">
          <ParagraphWithImageOnTheRight
            title="Diagnostyka rozwoju"
            subtitle="oferta"
            img="/003blob.png"
            alt="Dobre Miejsce w Katowicach zaprasza!"
            buttonLink="https://dobremiejscefizjoterapiadzieci.booksy.com/"
            buttonTitle="dowiedz się więcej"
            // hasSmallerTitle
            // hasSmallerImg
          >
            Wczesne wykrywanie trudności rozwojowych metodami Prechtla i HINE
          </ParagraphWithImageOnTheRight>
        </div>
        {/* </div> */}

        {/* <div className="w-screen py-6 bg-slate-50"> */}
        <div className="max-w-6xl mx-auto">
          <ParagraphWithImageOnTheRight
            title="Terapia integracji sensorycznej"
            subtitle="oferta"
            img="/terapiasiblob.png"
            alt="Dobre Miejsce w Katowicach zaprasza!"
            buttonLink="https://dobremiejscefizjoterapiadzieci.booksy.com/"
            buttonTitle="dowiedz się więcej"
            isLeft
            // hasSmallerTitle
          >
            Pomoc w lepszym rozumieniu i przetwarzaniu bodźców
          </ParagraphWithImageOnTheRight>
          {/* </div> */}
        </div>
        <div className="max-w-6xl mx-auto">
          <ParagraphWithImageOnTheRight
            title="Korekcja wad postawy"
            subtitle="oferta"
            img="/wadypostawyblob.png"
            alt="Dobre Miejsce w Katowicach zaprasza!"
            buttonLink="https://dobremiejscefizjoterapiadzieci.booksy.com/"
            buttonTitle="dowiedz się więcej"
            // hasSmallerTitle
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
      {/* <ServiceCards /> */}
      {/* <ServicesCard /> */}
      {/* <TeamShort /> */}
      {/* <div className="mt-28">
        <SectionTitle title="Kim jesteśmy?" />
      </div> */}
      <TeamSectionHomepage />
      {/* <WhyUs /> */}
      {/* <BlockWith3Blobs /> */}
      <SectionTitle title="Dlaczego my?" />
      <FeaturesHomepage />
      <BlogCard />
      {/* <ListSection /> */}
      {/* <Pricing /> */}
      {/* <TeamSection /> */}
      <Footer />
    </>
  );
}
