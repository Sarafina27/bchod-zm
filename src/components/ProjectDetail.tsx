import { useParams } from "react-router-dom";
 
const projects = [
 {
  id: 1,
  title: "T002 Lusaka to Chirundu Escarpment Rehabilitation",
  desc: "Rehabilitation and widening of 34.7km including bridge construction and pavement strengthening",
  tag: "Civil",
  image: "/images/lusaka-highway-ext.JPG",
  fullDescription:
    "This project involved the rehabilitation and upgrading of 34.7km of the T002 road between Lusaka and Chirundu. The works included extensive cutting and filling, widening for passing lanes, construction of reinforced concrete bridges, pavement strengthening using bitumen emulsion treated base, and installation of a 50mm medium-grade asphalt wearing course. The project also incorporated drainage improvements and safety enhancements to improve traffic flow and long-term durability of the escarpment section."
},
  {
    id: 2,
    title: "Mixed-Use Commercial Development",
    desc: "Multi-purpose commercial complex with cutting-edge structural engineering",
    tag: "Structural",
    image: "/images/levy-junction.jpg",
    fullDescription:
      "The Levy Junction Mixed Development was conceived as a large-scale commercial and mixed-use urban development in Lusaka. The project involved redevelopment of the former Engineering Services Corporation (ESCO) site into a high-value commercial complex comprising retail, office, hotel and structured parking facilities.",
  },
 {
  id: 3,
  title: "T003 Dual Carriageway – Kitwe to Chingola (45km)",
  desc: "Rehabilitation and upgrading to dual carriageway standard including bridge construction",
  tag: "Civil",
  image: "/images/T3-road.JPG",
  fullDescription:
    "This project involved the rehabilitation and upgrading of approximately 45km of the T003 road between Kitwe and Chingola into a dual carriageway standard. The works included pavement strengthening, base stabilization, asphalt surfacing, drainage improvements, and the construction of a new bridge at Mwambashi River near Sabina Junction on the southbound lane. The project significantly improved traffic flow, safety, and connectivity within the Copperbelt region and formed part of Zambia’s strategic road infrastructure enhancement programme."
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
        <p className="text-foreground leading-relaxed mb-8">
          {project.fullDescription}
        </p>

        {/* New section for more projects */}
        <div className="mt-12 border-t pt-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Read about more projects
          </h2>
          <a
            href="/files/BCHOD_Full_Project_Portfolio.pdf" // place your PDF in public/files/
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-semibold hover:underline text-sm"
          >
            Open PDF
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
