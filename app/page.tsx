import Contours from "@/components/Contours";
import AscentRail from "@/components/AscentRail";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Contours />
      <AscentRail />
      <Nav />
      <Hero />
      <div className="h-px bg-line mx-6 md:mx-16" />
      <About />
      <div className="h-px bg-line mx-6 md:mx-16" />
      <Skills />
      <div className="h-px bg-line mx-6 md:mx-16" />
      <Projects />
      <div className="h-px bg-line mx-6 md:mx-16" />
      <Contact />
      <Footer />
    </>
  );
}
