import Image from "next/image";
import HeroSection from "./components/hero-section";
import BlockWith3Blobs from "./components/block-with-3-blobs";
import Features from "./components/features";
import ListSection from "./components/list-section";
import Pricing from "./components/pricing-section";
import TeamSection from "./components/team-section";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BlockWith3Blobs />
      <Features />
      <ListSection />
      <Pricing />
      <TeamSection />
      <Footer />
    </>
  );
}
