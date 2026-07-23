import { useState } from "react";
import { Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { SectionGrid, SectionHeader, SectionShell } from "./layout/SectionShell";
import AnimatedSection from "./AnimatedSection";
import { trackContactFormSubmit } from "@/lib/analytics";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

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
        setSuccess(true);
        trackContactFormSubmit("web3forms");

        toast({
          title: "Message received.",
          description: `I'll get back to you within 24 hours at ${userEmail}.`,
          duration: 6000,
        });
      } else {
        throw new Error("Submission Failed");
      }
    } catch {
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
    <SectionShell id="contact">
      <AnimatedSection>
        <SectionGrid>
        <div className="lg:col-span-7 flex flex-col gap-8">
          <SectionHeader index="06 — Contact" title="Let's build together." />

          {success ? (
            <div
              role="status"
              aria-live="polite"
              className="flex flex-col items-center justify-center text-center gap-4 py-12 px-6 border border-border rounded-md bg-card/50"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Send className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-medium text-xl">Message Sent</h3>
              <p className="text-body-sm max-w-sm">
                Thank you for reaching out. I usually respond within 24 hours.
              </p>
              <Button variant="outline" onClick={() => setSuccess(false)} className="mt-4">
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 -mt-4 md:-mt-6">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="label-mono">
                  Name <span className="text-destructive" aria-hidden="true">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  aria-required="true"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span id="name-error" role="alert" className="text-xs text-destructive font-mono mt-1">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="label-mono">
                  Email <span className="text-destructive" aria-hidden="true">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  aria-required="true"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" role="alert" className="text-xs text-destructive font-mono mt-1">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="label-mono">
                  Message <span className="text-destructive" aria-hidden="true">*</span>
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  required
                  aria-required="true"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we work together?"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <span id="message-error" role="alert" className="text-xs text-destructive font-mono mt-1">
                    {errors.message}
                  </span>
                )}
              </div>

              <Button type="submit" disabled={sending} className="mt-2 w-full sm:w-auto self-start">
                {sending ? (
                  <span className="flex items-center gap-2 label-mono normal-case">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" aria-hidden="true" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Send message
                  </span>
                )}
              </Button>
            </form>
          )}
        </div>

        <div className="lg:col-span-5 flex flex-col gap-3">
          <a href="mailto:contact@anupambaral.com.np" className="group" aria-label="Send direct email to Anupam Baral">
            <Card className="p-5 hover:border-foreground/20 transition-colors duration-300">
              <div className="flex flex-col gap-1">
                <span className="label-mono">Direct email</span>
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  contact@anupambaral.com.np
                </span>
              </div>
            </Card>
          </a>

          <Card className="p-5">
            <div className="flex flex-col gap-3">
              <span className="label-mono">Profiles</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/gomugomucode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/gomugomucode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-foreground/[0.03]">
            <div className="flex flex-col gap-2">
              <span className="label-mono">Availability</span>
              <p className="text-body-sm">
                Available for freelance opportunities and full-time roles. Standard response time is under 24 hours.
              </p>
            </div>
          </Card>
        </div>

        </SectionGrid>
      </AnimatedSection>
    </SectionShell>
  );
};

export default ContactSection;
