import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "This field is required.";
    if (!form.email.trim()) e.email = "This field is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.message.trim()) e.message = "This field is required.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);

    const userEmail = form.email;
    const formData = new FormData();
    formData.append("access_key", "fbe72730-5191-4c44-bf5c-ac45ed87b137");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", `[Portfolio] Message from ${form.name}`);
    formData.append("message", form.message);
    formData.append("from_name", "Anupam's Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setForm({ name: "", email: "", message: "" });
        setErrors({});

        toast({
          title: "Message received.",
          description: `I'll get back to you within 24 hours at ${userEmail}.`,
          duration: 6000,
        });
      } else {
        throw new Error("Submission Failed");
      }
    } catch (err) {
      toast({
        title: "Transmission failed.",
        description: "Please email me directly at contact@anupambaral.com.np.",
        variant: "destructive"
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-4 md:px-8 py-24 border-t border-border/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Contact Form (col-span-7) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              05 — CONTACT
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase">
              Let's Build Together.
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Doe"
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <span className="text-xs text-red-500 font-mono mt-1">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@example.com"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <span className="text-xs text-red-500 font-mono mt-1">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <Textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="How can we work together?"
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <span className="text-xs text-red-500 font-mono mt-1">{errors.message}</span>
              )}
            </div>

            <Button type="submit" disabled={sending} className="mt-4 w-full sm:w-auto self-start">
              {sending ? (
                <span className="flex items-center gap-2 font-mono uppercase text-[11px] tracking-widest">
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </div>

        {/* Right Side: Quick Info Cards (col-span-4 col-start-9) */}
        <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-4 lg:mt-16">
          <a href="mailto:contact@anupambaral.com.np" className="group">
            <Card className="hover:border-foreground/20 transition-colors duration-300">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Direct Email
                </span>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  contact@anupambaral.com.np
                </span>
              </div>
            </Card>
          </a>

          <Card>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/gomugomucode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-md border border-border bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground transition-all active:scale-95"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/gomugomucode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-md border border-border bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground transition-all active:scale-95"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Card>

          <Card className="bg-foreground/5 border-dashed">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Availability
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Available for freelance opportunities and full-time roles. Standard response time is under 24 hours.
              </p>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
