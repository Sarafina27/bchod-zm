import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContactBtn from "@/components/FloatingContactBtn";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <FloatingContactBtn />
    </div>
  );
};

export default Index;
