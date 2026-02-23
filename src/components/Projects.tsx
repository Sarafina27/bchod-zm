import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    title: "UT003 Dual Carriageway – Kitwe to Chingola (45km)",
    description:
      "Rehabilitation and upgrading to dual carriageway standard including bridge construction.",
    image: "/images/T3-road.JPG",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted">
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
                {/* Push button to bottom */}
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
      </div>
    </section>
  );
};

export default Projects;
