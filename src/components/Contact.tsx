import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Get In Touch</p>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-center">
          Get in touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Reach out for project enquiries, consultancy, or a feasibility review. We'll respond within 2
              business days.
            </p>
            <div className="bg-card p-6 rounded-lg shadow border border-border">
              <h3 className="font-serif font-semibold text-foreground mb-2">Office</h3>
              <p className="text-muted-foreground text-sm">Lusaka, Zambia</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow border border-border">
              <h3 className="font-serif font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">info@bchodzambia.com</p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow border border-border">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
              <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
              <Textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={5} required />
              <Button type="submit" className="w-full" size="lg" disabled={sending}>
                {sending ? "Sending..." : <>Send Message <Send size={16} /></>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
