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

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <div className="flex flex-wrap gap-10">
        <ServiceCard
          title="Rehabilitacja najmłodszych"
          description="Wspieramy prawidłowy rozwój wcześniaków i niemowląt z zaburzeniami
        napięcia mięśniowego"
          img="/dobremiejsce001.jpg"
        />

        <ServiceCard
          title="Diagnostyka rozwoju"
          description="Wczesne wykrywanie trudności rozwojowych metodami Prechtla i HINE"
          img="/dobremiejsce009.jpg"
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
      </div>
      {/* <ServiceCards /> */}
      {/* <ServicesCard /> */}
      <TeamShort />
      <WhyUs />
      <BlockWith3Blobs />
      <Features />
      <ListSection />
      <Pricing />
      <TeamSection />
      <Footer />
    </>
  );
}
