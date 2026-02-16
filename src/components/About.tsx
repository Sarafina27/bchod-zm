const About = () => {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Who We Are</p>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-center">
          About BCHOD Zambia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="h-80 rounded-xl shadow-lg bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))]" />
          <div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              BCHOD Zambia is a multidisciplinary engineering consultancy delivering practical, sustainable and
              cost-effective solutions across civil, structural, mechanical and electrical projects.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We combine technical rigor with project-led experience to deliver infrastructure that serves
              communities and businesses across Zambia.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-card rounded-lg shadow border border-border">
                <h3 className="text-2xl font-bold text-primary">15+</h3>
                <p className="text-sm text-muted-foreground">Years experience</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow border border-border">
                <h3 className="text-2xl font-bold text-primary">100+</h3>
                <p className="text-sm text-muted-foreground">Projects completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
