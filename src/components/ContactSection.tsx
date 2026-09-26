import { useState } from "react";
import {
  Github,
  Linkedin,
  Send,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Clock,
  Globe,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
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
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("contact@anupambaral.com.np");
    setCopied(true);
    toast({
      title: "Email Copied!",
      description: "contact@anupambaral.com.np copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

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
        <div className="lg:col-span-7 flex flex-col gap-6">
          <SectionHeader
            index="Product Collaboration"
            title="Work With Anupam / Let's Build Together."
            description="Have an ambitious product vision that needs full-stack engineering, production AI workflows, or decentralized systems? Reach out directly."
          />

          {success ? (
            <div
              role="status"
              aria-live="polite"
              className="flex flex-col items-center justify-center text-center gap-4 py-12 px-6 border border-accent/25 rounded-2xl bg-card shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
                <Send className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold uppercase text-xl text-foreground">Message Sent</h3>
              <p className="text-body-sm max-w-sm text-foreground/80">
                Thank you for reaching out. I review incoming requests daily and will get back to you within 24 hours.
              </p>
              <Button variant="outline" onClick={() => setSuccess(false)} className="mt-4 rounded-full border-border-strong font-tech text-xs uppercase tracking-wider">
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
                  name="name"
                  type="text"
                  autoComplete="name"
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
                  name="email"
                  type="email"
                  autoComplete="email"
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
                  name="message"
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

              <button type="submit" disabled={sending} className="btn-primary mt-2 self-start">
                {sending ? (
                  <span className="flex items-center gap-2 font-tech font-bold uppercase">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Card 1: Direct Email & Fast Contact */}
          <div className="group relative overflow-hidden rounded-2xl border border-border-soft bg-card/80 p-5 shadow-xs transition-all duration-300 hover:border-accent hover:shadow-md hover:bg-card">
            {/* Ambient subtle glow background */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/5 blur-2xl transition-all duration-500 group-hover:bg-accent/10" />

            <div className="relative flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <span className="font-tech text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  Direct Email
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 font-tech text-[10px] font-bold uppercase tracking-wider text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Quick Turnaround
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                <a
                  href="mailto:contact@anupambaral.com.np"
                  className="flex items-center gap-3 min-w-0 group/link"
                  aria-label="Send email to contact@anupambaral.com.np"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-sm">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex flex-col">
                    <span className="text-xs text-foreground/60 font-tech uppercase tracking-wider">
                      Write Directly
                    </span>
                    <span className="truncate font-mono text-xs sm:text-sm font-semibold text-foreground transition-colors group-hover/link:text-accent">
                      contact@anupambaral.com.np
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-soft bg-background/80 text-foreground/75 transition-all duration-200 hover:border-accent hover:bg-accent/10 hover:text-accent active:scale-95 shadow-2xs"
                    title={copied ? "Copied!" : "Copy email address"}
                    aria-label={copied ? "Email copied to clipboard" : "Copy email address"}
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                  <a
                    href="mailto:contact@anupambaral.com.np"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-soft bg-background/80 text-foreground/75 transition-all duration-200 hover:border-accent hover:bg-accent hover:text-white active:scale-95 shadow-2xs"
                    aria-label="Open mail client"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Developer Profiles */}
          <div className="rounded-2xl border border-border-soft bg-card/80 p-5 shadow-xs transition-all duration-300 hover:border-border-strong hover:bg-card">
            <div className="flex flex-col gap-3">
              <span className="font-tech text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Profiles &amp; Code
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href="https://github.com/gomugomucode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/gh flex items-center justify-between rounded-xl border border-border-soft bg-background/60 p-3 transition-all duration-200 hover:border-accent hover:bg-background hover:shadow-2xs active:scale-[0.98]"
                  aria-label="GitHub Profile (@gomugomucode)"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-foreground transition-colors group-hover/gh:bg-accent/10 group-hover/gh:text-accent">
                      <Github className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex flex-col">
                      <span className="font-tech text-xs font-bold uppercase tracking-wider text-foreground">
                        GitHub
                      </span>
                      <span className="truncate font-mono text-[11px] text-foreground/60">
                        @gomugomucode
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-foreground/40 transition-transform duration-200 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5 group-hover/gh:text-accent" />
                </a>

                <a
                  href="https://linkedin.com/in/gomugomucode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/li flex items-center justify-between rounded-xl border border-border-soft bg-background/60 p-3 transition-all duration-200 hover:border-accent hover:bg-background hover:shadow-2xs active:scale-[0.98]"
                  aria-label="LinkedIn Profile (in/gomugomucode)"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0a66c2]/10 text-[#0a66c2] transition-colors group-hover/li:bg-[#0a66c2] group-hover/li:text-white">
                      <Linkedin className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex flex-col">
                      <span className="font-tech text-xs font-bold uppercase tracking-wider text-foreground">
                        LinkedIn
                      </span>
                      <span className="truncate font-mono text-[11px] text-foreground/60">
                        in/gomugomucode
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-foreground/40 transition-transform duration-200 group-hover/li:translate-x-0.5 group-hover/li:-translate-y-0.5 group-hover/li:text-accent" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Hiring & Response SLA Bento */}
          <div className="relative overflow-hidden rounded-2xl border border-border-soft bg-card/80 p-5 shadow-xs transition-all duration-300 hover:border-border-strong hover:bg-card">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2 border-b border-border-soft/60 pb-3">
                <span className="font-tech text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Hiring &amp; Response SLA
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-tech text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Available
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {/* Metric row 1: Response SLA */}
                <div className="flex items-start gap-3 rounded-xl border border-border-soft/60 bg-background/50 p-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent mt-0.5">
                    <Clock className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-tech text-[11px] font-bold uppercase tracking-wider text-foreground/60">
                      Response SLA
                    </span>
                    <span className="font-mono text-xs font-semibold text-foreground">
                      &lt; 24 Hours (Guaranteed)
                    </span>
                  </div>
                </div>

                {/* Metric row 2: Location & Timezone */}
                <div className="flex items-start gap-3 rounded-xl border border-border-soft/60 bg-background/50 p-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent mt-0.5">
                    <Globe className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-tech text-[11px] font-bold uppercase tracking-wider text-foreground/60">
                      Location &amp; Timezone
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      Butwal, Nepal <span className="font-mono text-[11px] text-foreground/70">(GMT+5:45)</span>
                    </span>
                  </div>
                </div>

                {/* Metric row 3: Availability */}
                <div className="flex items-start gap-3 rounded-xl border border-border-soft/60 bg-background/50 p-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent mt-0.5">
                    <Briefcase className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-tech text-[11px] font-bold uppercase tracking-wider text-foreground/60">
                      Availability
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      Full-Time Roles &amp; Contracts
                    </span>
                  </div>
                </div>

                {/* Metric row 4: Preferred Projects */}
                <div className="flex items-start gap-3 rounded-xl border border-border-soft/60 bg-background/50 p-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent mt-0.5">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex flex-col gap-1.5 w-full">
                    <span className="font-tech text-[11px] font-bold uppercase tracking-wider text-foreground/60">
                      Preferred Projects
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="rounded-md border border-border-soft bg-card px-2 py-0.5 font-tech text-[10px] font-bold uppercase tracking-wider text-foreground/80">
                        React / Next.js Apps
                      </span>
                      <span className="rounded-md border border-border-soft bg-card px-2 py-0.5 font-tech text-[10px] font-bold uppercase tracking-wider text-foreground/80">
                        Python AI Pipelines
                      </span>
                      <span className="rounded-md border border-border-soft bg-card px-2 py-0.5 font-tech text-[10px] font-bold uppercase tracking-wider text-foreground/80">
                        Web3 Systems
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </SectionGrid>
      </AnimatedSection>
    </SectionShell>
  );
};

export default ContactSection;
