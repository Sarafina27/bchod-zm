import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Lusaka Highway Extension",
    desc: "Major infrastructure project spanning 50+ km with modern design standards",
    tag: "Civil",
    gradient: "from-[hsl(var(--primary))] to-[hsl(var(--secondary))]",
  },
  {
    id: 2,
    title: "Commercial District Development",
    desc: "Multi-purpose commercial complex with cutting-edge structural engineering",
    tag: "Structural",
    gradient: "from-[hsl(var(--secondary))] to-[hsl(var(--primary))]",
  },
  {
    id: 3,
    title: "National Power Grid Upgrade",
    desc: "State-of-the-art electrical systems for national power distribution",
    tag: "Electrical",
    gradient: "from-[hsl(var(--accent))] to-[hsl(var(--primary))]",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Featured Projects</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Selected works demonstrating our approach and delivery capability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              className="rounded-xl overflow-hidden shadow-md bg-card border border-border hover:border-glow transition-all"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className={`h-40 bg-gradient-to-br ${p.gradient}`} />
              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-primary-foreground bg-primary px-3 py-1 rounded-full mb-3">
                  {p.tag}
                </span>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                <a className="inline-flex items-center text-primary font-semibold hover:underline text-sm" href="#">
                  View project
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
