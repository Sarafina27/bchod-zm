import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-[80vh] py-48 md:py-56 flex items-center overflow-hidden"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://bchodzimbabwe.co.zw/wp-content/uploads/2021/07/webhome2_128.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl -mr-40 -mt-40" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold leading-tight mb-6 text-primary-foreground">
            Engineering{" "}
            <span className="text-gradient">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-8">
            Practical engineering solutions across civil, structural, mechanical
            and electrical disciplines — delivered with precision.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all"
            >
              Our Services <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-all"
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
