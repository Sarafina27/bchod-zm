import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-[80vh] py-48 md:py-56 flex items-center overflow-hidden bg-background text-foreground"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://bchodzimbabwe.co.zw/wp-content/uploads/2021/07/webhome2_128.jpg")',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />
      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl -mr-40 -mt-40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold leading-tight mb-6 text-foreground animate-count-up">
            Engineering{" "}
            <span className="text-gradient">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Practical engineering solutions across civil, structural, mechanical
            and electrical disciplines — delivered with precision.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all shadow"
            >
              Our Services <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-border text-foreground font-semibold text-sm hover:bg-accent hover:text-accent-foreground transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;