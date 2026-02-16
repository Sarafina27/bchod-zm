const Footer = () => {
  return (
    <footer className="bg-section-dark py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold font-serif text-sm">B</span>
            </div>
            <span className="font-serif font-bold text-section-dark-foreground">BCHOD Zambia</span>
          </div>

          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "About Us", "Services", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="text-section-dark-foreground/60 hover:text-teal-glow transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-xs text-section-dark-foreground/40">
            © {new Date().getFullYear()} BCHOD Zambia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
