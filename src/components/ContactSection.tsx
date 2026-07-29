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
import { contactSchema, SlidingWindowRateLimiter, escapeHtml } from "@/lib/security";
import { logger } from "@/lib/logger";

const rateLimiter = new SlidingWindowRateLimiter("contact_form", 3, 60000);

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          formattedErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(formattedErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate schema
    if (!validate()) return;

    // Check rate limit
    const limitCheck = rateLimiter.isAllowed();
    if (!limitCheck.allowed) {
      toast({
        title: "Rate limit exceeded.",
        description: `Too many submission attempts. Please wait ${limitCheck.retryAfterSeconds} seconds before trying again.`,
        variant: "destructive",
      });
      return;
    }

    setSending(true);

    const safeName = escapeHtml(form.name.trim());
    const safeEmail = form.email.trim();
    const safeMessage = escapeHtml(form.message.trim());

    const formData = new FormData();
    formData.append("access_key", "fbe72730-5191-4c44-bf5c-ac45ed87b137");
    formData.append("name", safeName);
    formData.append("email", safeEmail);
    formData.append("subject", `[Portfolio] Message from ${safeName}`);
    formData.append("message", safeMessage);
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
          description: `I'll get back to you within 24 hours at ${safeEmail}.`,
          duration: 6000,
        });
      } else {
        throw new Error("Submission Failed");
      }
    } catch (err) {
      logger.error("Contact form submission error:", err);
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
            <div className="flex flex-col gap-3 font-mono text-xs">
              <span className="label-mono">Hiring & Response SLA</span>
              <div className="flex flex-col gap-1 text-muted-foreground">
                <p>• <strong>Response SLA:</strong> &lt; 24 Hours</p>
                <p>• <strong>Location & Timezone:</strong> Butwal, Nepal (GMT+5:45)</p>
                <p>• <strong>Availability:</strong> Full-time Roles & Contracts</p>
                <p>• <strong>Preferred Projects:</strong> React/Next.js Apps, Python AI Pipelines, Web3 Systems</p>
              </div>
            </div>
          </Card>
        </div>

        </SectionGrid>
      </AnimatedSection>
    </SectionShell>
  );
};

export default ContactSection;
