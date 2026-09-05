import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Download, Briefcase, Code2, Sparkles, CheckCircle2, ShieldCheck, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Container } from "./layout/Container";
import { trackResumeDownload, trackSocialClick } from "@/lib/analytics";

const HeroSection = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background glow radial */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <Container>
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Main Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="order-2 lg:order-1 lg:col-span-8 flex flex-col gap-6"
            >
              {/* Availability & Role Tag */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-medium text-primary">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Available for Full-time Roles & Freelance Contracts
                </div>
              </motion.div>

              <motion.span variants={itemVariants} className="label-mono">
                Anupam Baral — Full Stack & AI Engineer
              </motion.span>

              {/* Clear Entity H1 Headline */}
              <motion.h1
                variants={itemVariants}
                className="heading-display-lg max-w-[20ch] tracking-tight"
              >
                Anupam Baral — Full-Stack Developer & AI Engineer
              </motion.h1>

              {/* Subheadline Value Proposition */}
              <motion.p
                variants={itemVariants}
                className="text-body max-w-2xl text-muted-foreground leading-relaxed"
              >
                I'm Anupam Baral (<strong>@gomugomucode</strong>), a Full-Stack Developer and AI Engineer based in Nepal. I specialize in building modern web applications with <strong>React</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>, engineering intelligent <strong>Python</strong> microservices, and architecting decentralized systems on <strong>Solana</strong>.
              </motion.p>

              {/* Dual Action Conversion CTAs */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  variant="default"
                  onClick={() => handleScroll("contact")}
                  className="gap-2 px-6 py-6 text-sm font-medium interactive-focus"
                >
                  <Briefcase className="w-4 h-4" aria-hidden="true" />
                  Hire Me for Projects / Full-time
                </Button>
                <a
                  href="/Anupambaral-cv.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackResumeDownload()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border hover:bg-muted text-foreground font-mono text-xs font-medium uppercase tracking-wider transition-colors interactive-focus"
                >
                  <Download className="w-4 h-4 text-primary" aria-hidden="true" />
                  Download CV
                </a>
              </motion.div>
            </motion.div>

            {/* Right Profile & Quick Social Proof Rail (First on Mobile) */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="order-1 lg:order-2 lg:col-span-4 flex flex-col gap-6 lg:pl-6 border-b lg:border-b-0 border-l-0 lg:border-l border-border/40 pb-6 lg:pb-0"
            >
              <div className="flex items-center gap-4">
                <img
                  src="/mypic1.webp"
                  alt="Anupam Baral - Full Stack Developer & AI Engineer"
                  width={72}
                  height={72}
                  decoding="async"
                  fetchPriority="high"
                  className="w-18 h-18 rounded-full border-2 border-primary/20 object-cover shadow-sm"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300";
                  }}
                />
                <div>
                  <div className="font-display text-base font-semibold text-foreground">Anupam Baral</div>
                  <p className="text-xs font-mono text-primary font-medium">@gomugomucode</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Butwal, Nepal • GMT+5:45</p>
                </div>
              </div>

              <p className="text-body-sm text-muted-foreground leading-relaxed">
                Full-Stack & AI Engineer building production web applications, Python AI models, real-time backends with Supabase & Firebase, and Solana protocols.
              </p>

              {/* Verified Badges */}
              <div className="flex flex-col gap-2 pt-2 border-t border-border/40">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span>100% Type-Safe TypeScript & Python</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span>Solana Web3 Hackathon Participant</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/gomugomucode"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick("github", "https://github.com/gomugomucode")}
                  className="social-link"
                  aria-label="GitHub Profile (@gomugomucode)"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/gomugomucode"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick("linkedin", "https://linkedin.com/in/gomugomucode")}
                  className="social-link"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://medium.com/@gomugomucode"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick("medium", "https://medium.com/@gomugomucode")}
                  className="social-link"
                  aria-label="Medium Publications (@gomugomucode)"
                >
                  <FileText className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* High-Impact Proof & Metrics Grid Bar */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-lg border border-border bg-card"
          >
            <div className="flex flex-col gap-1 border-r border-border/40 last:border-0 pr-4">
              <span className="font-display text-2xl md:text-3xl font-bold text-foreground">4+</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Production Apps</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-border/40 last:border-0 pr-4 pl-0 md:pl-4">
              <span className="font-display text-2xl md:text-3xl font-bold text-primary">&lt;1.2s</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">LMS Content Delivery</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-border/40 last:border-0 pr-4 pl-0 md:pl-4">
              <span className="font-display text-2xl md:text-3xl font-bold text-foreground">~400ms</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Solana Tx Confirmation</span>
            </div>
            <div className="flex flex-col gap-1 pl-0 md:pl-4">
              <span className="font-display text-2xl md:text-3xl font-bold text-primary">100%</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Code Type Safety</span>
            </div>
          </motion.div>

          {/* Dual Recruiter / Client Targeted High-Intent Callout Split */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="p-6 rounded-lg border border-border bg-gradient-to-br from-card/80 to-card/20 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" aria-hidden="true" /> For Recruiters & Hiring Managers
                </span>
                <h3 className="font-display text-base font-medium text-foreground">
                  Looking for a Full Stack or AI Engineer?
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  Proficient in React 19, Next.js 16, TypeScript, Python ML pipelines, Supabase RLS, and PostgreSQL. Immediately available for remote roles.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleScroll("skills")}
                className="self-start text-xs font-mono font-medium text-primary hover:underline flex items-center gap-1 mt-2"
              >
                Review Technical Stack & Expertise →
              </button>
            </div>

            <div className="p-6 rounded-lg border border-border bg-gradient-to-br from-card/80 to-card/20 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> For Founders & Freelance Clients
                </span>
                <h3 className="font-display text-base font-medium text-foreground">
                  Need a Production Web App or MVP Built?
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  From initial software architecture to edge deployment, I deliver scalable SaaS products, AI integrations, and Web3 applications with clean maintainable code.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleScroll("contact")}
                className="self-start text-xs font-mono font-medium text-primary hover:underline flex items-center gap-1 mt-2"
              >
                Schedule Project Consultation →
              </button>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-5 sm:left-8 lg:left-12 hidden md:flex items-center gap-2 label-mono hover:opacity-100 interactive-focus"
        onClick={() => handleScroll("about")}
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
        Scroll
      </motion.button>
    </section>
  );
};

export default HeroSection;
