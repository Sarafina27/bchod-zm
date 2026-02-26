import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser"; // ✅ use the newer package

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

     emailjs
      .send(
        "service_8qtewas",   // from EmailJS dashboard
        "template_hvksxah",  // from EmailJS dashboard
        {
          user_name: form.name,
          user_email: form.email,
          message: form.message,
        },
        "E2t9bSdICo62Hjx0k"    // from EmailJS dashboard
      )
      .then(
        () => {
          setSending(false);
          setForm({ name: "", email: "", message: "" });
          toast({ title: "Message sent!", description: "We'll get back to you shortly." });
        },
        (error) => {
          setSending(false);
          toast({ title: "Failed to send message", description: error.text, variant: "destructive" });
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Get In Touch
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-center">
          Get in touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left column: contact info */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Reach out for project enquiries, consultancy, or a feasibility review. We'll respond within 2
              business days.
            </p>
            <div className="bg-card p-6 rounded-lg shadow border border-border">
              <h3 className="font-serif font-semibold text-foreground mb-2">Office</h3>
              <p className="text-muted-foreground text-sm">
                Plot #41, Mulungushi Road, Roma, Lusaka, Zambia
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow border border-border">
              <h3 className="font-serif font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">hq@bchodzambia.com</p>
            </div>
          </div>

          {/* Right column: contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" disabled={sending} className="flex items-center gap-2">
              {sending ? "Sending..." : "Send"}
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
