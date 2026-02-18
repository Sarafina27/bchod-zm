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
    <div className="min-h-screen bg-background text-foreground">
  <Navbar />
  <Hero />
  <section className="py-16"><Services /></section>
  <section className="py-16 bg-muted"><Stats /></section>
  <section className="py-16"><About /></section>
  <section className="py-16 bg-accent text-accent-foreground"><Projects /></section>
  <section className="py-16"><Contact /></section>
  <Footer />
  <FloatingContactBtn />
</div>
  );
};

export default Index;
