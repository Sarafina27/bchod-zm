import { useEffect, useState, type TouchEvent } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getLoopedIndex } from "./projectGallery";

const projects = [
  {
    id: 1,
    title: "T002 Lusaka to Chirundu Escarpment Rehabilitation",
    description:
      "Rehabilitation and widening of 34.7km including bridge construction and pavement strengthening.",
    image: "/images/lusaka-highway-ext.JPG",
  },
  {
    id: 2,
    title: "Mixed-Use Commercial Development",
    description:
      "Multi-purpose commercial complex with cutting-edge structural engineering.",
    image: "/images/levy-junction.jpg",
  },
  {
    id: 3,
    title: "Rehabilitation & Extension of Water Supply and Sewerage Systems – Western Province",
    description:
      "Upgrading and expansion of urban water and wastewater infrastructure across multiple towns",
    image: "/images/western-water.jpg",
  },
];

const featuredGallery = [
  {
    id: 1,
    title: "Construction Supervision of the New Administration Building",
    description:
      "Construction supervision of the new administration building in Lusaka.",
    image: "/images/IMG_2387.JPG",
  },
  {
    id: 2,
    title: "Water Infrastructure Upgrade",
    description:
      "Efficient delivery of water and sewerage upgrades across multiple communities.",
    image: "/images/western-water.jpg",
  },
  {
    id: 3,
    title: "Highway Rehabilitation and Expansion",
    description:
      "Modernising strategic transport corridors through durable engineering works.",
    image: "/images/lusaka-highway-ext.JPG",
  },
  {
    id: 4,
    title: "Highway Rehabilitation and Expansion",
    description:
      "Modernising strategic transport corridors through durable engineering works.",
    image: "/images/lusaka-highway-ext.JPG",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => getLoopedIndex(current, 1, featuredGallery.length));
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const changeSlide = (direction: number) => {
    setActiveIndex((current) => getLoopedIndex(current, direction, featuredGallery.length));
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
    setTouchEndX(null);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    setTouchEndX(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) {
      return;
    }

    const delta = touchStartX - touchEndX;

    if (Math.abs(delta) > 50) {
      changeSlide(delta > 0 ? 1 : -1);
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-lg shadow-lg overflow-hidden border border-border flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="mt-auto inline-block w-full text-center bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-center md:text-left"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Featured Gallery
            </p>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              A closer look at our recent landmark work
            </h3>
          </motion.div>

          <div
            className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/9]">
              {featuredGallery.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={slide.id}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : index < activeIndex ? -50 : 50,
                    }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className={`absolute inset-0 ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10">
                      <div className="max-w-2xl rounded-2xl bg-black/60 px-4 py-4 text-white shadow-lg backdrop-blur-sm sm:px-6">
                        <h4 className="text-xl font-semibold sm:text-2xl">
                          {slide.title}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-slate-200 sm:text-base">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => changeSlide(-1)}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-800 shadow transition hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => changeSlide(1)}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-800 shadow transition hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {featuredGallery.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
