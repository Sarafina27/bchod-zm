import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Zap, Construction, Cog, ClipboardCheck } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  icon: typeof Building2;
  gradient: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Project Management",
    description: "End-to-end project planning, coordination and delivery.",
    fullDescription:
      "Our project management services ensure seamless coordination across all phases of your project. We manage timelines, budgets, resources, and stakeholder communication to deliver results on time and within scope.",
    icon: ClipboardCheck,
    gradient: "from-[hsl(var(--section-dark))] via-[hsl(var(--muted-foreground))] to-[hsl(var(--primary))]",
  },
  {
    id: 2,
    title: "Civil Engineering",
    description: "Infrastructure design & site works — roads, drainage, earthworks.",
    fullDescription:
      "We design and oversee civil infrastructure projects including highways, drainage systems, earthworks, and public utilities. Our expertise spans feasibility studies, detailed design, and construction supervision.",
    icon: Construction,
    gradient: "from-[hsl(var(--primary))] to-[hsl(var(--secondary))]",
  },
  {
    id: 3,
    title: "Mechanical Engineering",
    description: "HVAC, plant equipment, and mechanical systems design.",
    fullDescription:
      "From HVAC system design to mechanical plant and equipment installation, we provide comprehensive mechanical engineering solutions. Our focus is on efficiency, reliability, and cost-effectiveness.",
    icon: Cog,
    gradient: "from-[hsl(var(--secondary))] to-[hsl(var(--primary))]",
  },
  {
    id: 4,
    title: "Structural Engineering",
    description: "Robust structural solutions for buildings and bridges.",
    fullDescription:
      "Our structural engineers design safe, cost-effective solutions for buildings and bridges. We conduct detailed analysis, create construction documents, and provide on-site supervision.",
    icon: Building2,
    gradient: "from-[hsl(var(--secondary))] to-[hsl(var(--primary))]",
  },
  {
    id: 5,
    title: "Electrical Engineering",
    description: "Power systems, distribution design and electrical safety.",
    fullDescription:
      "We design electrical systems for power distribution, lighting, fire safety, and communications. Our solutions meet all regulatory standards and best practices for safety and efficiency.",
    icon: Zap,
    gradient: "from-[hsl(var(--accent))] to-[hsl(var(--primary))]",
  },
];

const extendedServices = [...services, ...services, ...services];

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-background relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          What We Do
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 animate-slide-in-left">
          Our Services
        </h2>
        <p className="text-muted-foreground">Scroll to explore • Click to learn more</p>
      </div>

      {/* Infinite scrolling container */}
      <div className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide w-full">
        <motion.div
          className="flex gap-4 min-w-max"
          animate={{ x: [-1920, 0] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {extendedServices.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={`${s.id}-${idx}`}
                className="flex-shrink-0 w-80 h-72 rounded-2xl overflow-hidden bg-card border border-border shadow hover:shadow-lg cursor-pointer transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedService(s)}
              >
                <div className="h-32 flex items-center justify-center bg-muted">
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-background text-foreground shadow">
                    <Icon size={40} />
                  </div>
                </div>
                <div className="h-40 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-serif font-bold text-foreground">{s.title}</h3>
                  <div className="mt-4 h-1 w-8 rounded-full bg-primary" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-card rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`bg-gradient-to-br ${selectedService.gradient} p-8 relative`}>
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-primary-foreground/20 hover:bg-primary-foreground/40 rounded-full text-primary-foreground transition"
                >
                  ×
                </button>
                {(() => {
                  const Icon = selectedService.icon;
                  return (
                    <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-primary-foreground/25 text-primary-foreground mb-4">
                      <Icon size={40} />
                    </div>
                  );
                })()}
                <h2 className="text-3xl font-serif font-bold text-primary-foreground">
                  {selectedService.title}
                </h2>
              </div>
              <div className="p-8">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {selectedService.fullDescription}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 px-4 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="flex-1 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Services;