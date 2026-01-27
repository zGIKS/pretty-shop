import Section2 from "@/components/landing/home/section2";
import Section3 from "@/components/landing/home/section3";
import Section4 from "@/components/landing/home/section4";
import Section5 from "@/components/landing/home/section5";
import Carousel from "@/components/landing/home/carousel";
import Hero from "@/components/landing/home/hero";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Section2 />
      <Carousel />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
}
