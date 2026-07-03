import Hero from "@/components/Hero/Hero";
import WhyHiSpring from "@/components/WhyHiSpring/WhyHiSpring";
import About from "@/components/About/About";
import Manufacturing from "@/components/Manufacturing/Manufacturing";
import Certifications from "@/components/Certifications/Certifications";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import Stats from "@/components/Stats/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyHiSpring />
      <About />
      <Certifications />
      <WhyChoose />
      <Stats />
      <Manufacturing />
    </>
  );
}