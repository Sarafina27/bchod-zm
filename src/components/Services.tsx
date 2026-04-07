import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


interface Service {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Project Management",
    description: "End-to-end project planning, coordination and delivery.",
    fullDescription:
      "Our project management services ensure seamless coordination across all phases of your project. We manage timelines, budgets, resources, and stakeholder communication to deliver results on time and within scope.",
    image: "/images/Mvuvye bridge survey-Eastern Zambia.jpg",
  },
  {
    id: 2,
    title: "Civil Engineering",
    description: "Design and construction of infrastructure: roads, bridges, buildings, and water systems.",
    fullDescription:
      "Civil engineering services covering the design and construction of infrastructure such as roads, bridges, buildings, and water systems. Solutions are grounded in proven engineering standards and practical knowledge of Zambia and the region, delivering outcomes that are safe, compliant, and cost-effective. Services span the full project lifecycle, from feasibility and detailed design to construction support and post-construction throughout the structure’s design life.",
    image: "/images/civileng.JPG",
  },
  {
    id: 3,
    title: "Structural Engineering",
    description: "Robust structural solutions for buildings and bridges.",
    fullDescription:
      "Expertise across residential, commercial, industrial, mining, and resource projects. Provision of engineering designs, full documentation, and detailed construction inspections. Solutions are state-of-the-art, robust, and tailored to client requirements. Focus: fit-for-use structures that meet safety, compliance, and performance standards.",
    image: "/images/structure.jpeg",
  },
  {
    id: 4,
    title: "Geotechnical Engineering",
    description: "Soil, foundation, and ground stability expertise.",
    fullDescription:
      "Comprehensive capability from desk studies to field investigations. Services include geotechnical reporting, interpretation, stability analysis, and foundation assessment. Design and supervision of geotechnical solutions ensuring safe and reliable ground conditions. Team includes geologists, hydrogeologists, and geotechnical experts.",
    image: "/images/geotech.png",
  },
  {
    id: 5,
    title: "Electrical & Mechanical Engineering",
    description: "Power systems, machinery, and mechanical systems design.",
    fullDescription:
      "The team provides systems and solutions that ensure installation and maintenance of electrical systems, machinery, and mechanical equipment is of sound and real usable nature.",
    image: "/images/pumps.jpg",
  },
  {
    id: 6,
    title: "Environmental, Health & Safety",
    description: "Sustainable development and workforce wellbeing.",
    fullDescription:
      "Ensuring projects protect the environment and maintain safe, healthy working conditions. Services include environmental impact assessments, safety audits, and compliance monitoring. Focus: sustainable development and safeguarding workforce wellbeing.",
    image: "/images/clearing.png",
  },
  {
    id: 7,
    title: "Geomatic & Surveying",
    description: "Professional surveying and geospatial expertise for land, engineering, and hydrographic projects.",
    fullDescription:
      "We provide accurate, reliable, and cost-effective survey solutions. Our clients include landowners, developers, government agencies, engineers, architects, and utility companies. Deliverables: trusted geospatial data supporting planning, design, and construction.",
    image: "/images/civil.jpg",
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

      {/* Scrolling container */}
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
          {extendedServices.map((s, idx) => (
            <motion.div
              key={`${s.id}-${idx}`}
              className="flex-shrink-0 w-80 h-72 rounded-2xl overflow-hidden bg-card border border-border shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedService(s)}
            >
              {/* Cover image */}
              <img
                src={s.image}
                alt={s.title}
                className="h-32 w-full object-cover"
              />

              {/* Card content */}
              <div className="h-40 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-serif font-bold text-foreground">{s.title}</h3>
                <div className="mt-4 h-1 w-8 rounded-full bg-primary" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal popup */}
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
              {/* Image at top of modal */}
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-8">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                  {selectedService.title}
                </h2>
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
                  <Link
  to="/contact"
  onClick={() => setSelectedService(null)}
  className="flex-1 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition text-center"
>
  Contact us!
</Link>

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