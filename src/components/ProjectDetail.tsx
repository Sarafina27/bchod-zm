import { useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Lusaka Highway Extension",
    desc: "Major infrastructure project spanning 50+ km with modern design standards",
    tag: "Civil",
    image: "/images/lusaka-highway-ext.JPG",
    fullDescription: "This project involves extending the Lusaka highway with modern design standards, improving connectivity and safety...",
  },
  {
    id: 2,
    title: "Commercial District Development",
    desc: "Multi-purpose commercial complex with cutting-edge structural engineering",
    tag: "Structural",
    image: "/images/levy-junction.jpg",
    fullDescription: "A new commercial district designed with advanced structural engineering principles, supporting retail and office spaces...",
  },
  {
    id: 3,
    title: "National Power Grid Upgrade",
    desc: "State-of-the-art electrical systems for national power distribution",
    tag: "Electrical",
    image: "/images/national-power-grid.webp",
    fullDescription: "Upgrading Zambia’s national power grid with modern electrical systems to improve distribution efficiency and reliability...",
  },
];

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) return <p className="text-center mt-20">Project not found.</p>;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
          {project.title}
        </h1>
        <p className="text-muted-foreground mb-6">{project.desc}</p>
        <p className="text-foreground leading-relaxed">
          {project.fullDescription}
        </p>
      </div>
    </section>
  );
}