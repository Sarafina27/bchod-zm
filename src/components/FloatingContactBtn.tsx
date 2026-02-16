import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const FloatingContactBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-80 bg-card rounded-2xl shadow-2xl p-6 mb-4 border border-border animate-in fade-in slide-in-from-bottom-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          >
            <X size={18} />
          </button>
          <h3 className="text-xl font-serif font-bold text-foreground mb-3">Quick Contact</h3>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            Have a question about our services? We're here to help. Send us a message or scroll to our contact section.
          </p>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:brightness-110 transition-all"
          >
            Go to Contact
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110"
        title="Get in touch"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default FloatingContactBtn;
