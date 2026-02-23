import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-section-dark py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/bchod-logo.png"   // place your logo file in public/images
              alt="BCHOD Zambia Logo"
              className="h-12 w-auto"        // adjust size as needed
            />
          </Link>

          {/* Footer navigation */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "About Us", "Services", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase().replace(" ", "")}`}
                  className="text-section-dark-foreground/60 hover:text-teal-glow transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-xs text-section-dark-foreground/40">
            © {new Date().getFullYear()} BCHOD Zambia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
