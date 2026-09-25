import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowRight, MapPin, Mail, Check, Code2, Sparkles } from "lucide-react";
import { Container } from "./layout/Container";
import { siteConfig } from "@/lib/siteConfig";
import { trackResumeDownload, trackSocialClick } from "@/lib/analytics";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.author.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

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
    <section className="relative min-h-[88vh] flex flex-col justify-center pt-10 pb-16 md:pt-14 md:pb-20 border-b border-border-soft overflow-hidden">
      <Container>
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Narrative & Headings */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col gap-6"
            >
              {/* Role Eyebrow */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5">
                <div className="status-pill">
                  <span className="pulse-dot" aria-hidden="true" />
                  <span>Available for Full-Time &amp; Contracts</span>
                </div>
                <span className="subdomain-tag">@gomugomucode</span>
                <span className="text-foreground/40 font-tech font-bold">/</span>
                <span className="font-tech text-xs font-bold uppercase tracking-[0.16em] text-foreground/80">
                  Full-Stack &amp; AI Engineer
                </span>
              </motion.div>

              {/* YarshaByte Two-Tier Signature Headline */}
              <motion.div variants={itemVariants}>
                <h1 className="hero-name">
                  <span className="first-name">ANUPAM</span>
                  <span className="last-name">BARAL</span>
                </h1>
              </motion.div>

              {/* Subheadline Intro */}
              <motion.p
                variants={itemVariants}
                className="hero-intro text-base sm:text-lg lg:text-[1.2rem] font-medium leading-relaxed text-foreground/80 max-w-2xl"
              >
                Full-Stack Developer and AI Engineer architecting high-performance web applications with <strong>React</strong> and <strong>TypeScript</strong>, intelligent <strong>Python ML</strong> microservices, and decentralized systems on <strong>Solana</strong>.
              </motion.p>

              {/* Meta Row: Location, Quick Copy Email, Quick Chips */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
                <div className="inline-flex items-center gap-1.5 font-tech text-xs font-bold uppercase tracking-[0.14em] text-foreground/75">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>Butwal, Nepal</span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="copy-email-btn inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/5 hover:bg-accent/10 hover:text-accent border border-border-soft font-tech text-xs font-bold uppercase tracking-[0.14em] transition-colors"
                  title="Click to copy email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-accent" />
                  ) : (
                    <Mail className="w-3.5 h-3.5 text-accent" />
                  )}
                  <span>{copied ? "Email Copied!" : siteConfig.author.email}</span>
                </button>

                <div className="flex flex-wrap items-center gap-2">
                  <a href="#projects" className="anchor-chip">
                    Projects
                  </a>
                  <a href="#skills" className="anchor-chip">
                    Skills
                  </a>
                  <a href="#reviews" className="anchor-chip">
                    Reviews ★
                  </a>
                  <a href="#contact" className="anchor-chip highlight">
                    Connect ↗
                  </a>
                </div>
              </motion.div>

              {/* Dual Action Conversion CTAs */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  type="button"
                  onClick={() => handleScroll("contact")}
                  className="btn-primary"
                >
                  <span>Hire Me for Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="/Anupambaral-cv.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackResumeDownload()}
                  className="btn-secondary"
                >
                  <Download className="w-4 h-4 text-accent" />
                  <span>Download CV</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Hero Portrait Card with Grayscale Hover Reveal */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-full max-w-[28rem] relative">
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-navy border border-border-soft shadow-2xl group">
                  <img
                    src="/mypic1.webp"
                    alt="Anupam Baral — Full-Stack Developer and AI Engineer"
                    width={480}
                    height={600}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    onError={(e) => {
                      e.currentTarget.src = "/logo.webp";
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#1e1a18]/85 backdrop-blur-md border border-[#f5efe7]/15 p-3.5 sm:p-4 rounded-xl flex items-center justify-between text-[#f5efe7]">
                    <div>
                      <div className="font-tech text-xs font-black uppercase tracking-[0.2em] text-accent-light">
                        Full-Stack · AI Engineer
                      </div>
                      <div className="text-[11px] text-[#f5efe7]/70 font-sans font-normal mt-0.5">
                        Web3 &amp; Intelligent Architecture
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://github.com/gomugomucode"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackSocialClick("github", "https://github.com/gomugomucode")}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-accent text-white transition-colors"
                        aria-label="GitHub Profile"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="https://linkedin.com/in/gomugomucode"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackSocialClick("linkedin", "https://linkedin.com/in/gomugomucode")}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-accent text-white transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Metrics Ribbon */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="border-t border-b border-border-soft bg-foreground/[0.02] py-8 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="flex flex-col">
                <span className="font-display text-4xl sm:text-5xl font-black text-foreground leading-none">
                  4+
                </span>
                <span className="mt-2 font-tech text-xs font-bold uppercase tracking-[0.18em] text-foreground/60">
                  Years Product Dev
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-4xl sm:text-5xl font-black text-accent leading-none">
                  25+
                </span>
                <span className="mt-2 font-tech text-xs font-bold uppercase tracking-[0.18em] text-foreground/60">
                  Digital Systems Built
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-4xl sm:text-5xl font-black text-foreground leading-none">
                  100%
                </span>
                <span className="mt-2 font-tech text-xs font-bold uppercase tracking-[0.18em] text-foreground/60">
                  Type-Safe Codebase
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-4xl sm:text-5xl font-black text-accent leading-none">
                  5.0 ★
                </span>
                <span className="mt-2 font-tech text-xs font-bold uppercase tracking-[0.18em] text-foreground/60">
                  Google Verified Rating
                </span>
              </div>
            </div>
          </motion.div>

          {/* Dual Recruiter / Founder Split Cards */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="p-6 rounded-xl border border-border-soft bg-card/60 hover:bg-card hover:border-border-strong transition-all flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-tech text-xs font-bold uppercase tracking-[0.18em] text-accent flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" aria-hidden="true" /> For Recruiters &amp; Tech Leads
                </span>
                <h3 className="font-display text-xl font-bold uppercase text-foreground">
                  Looking for a Full-Stack or AI Engineer?
                </h3>
                <p className="text-body-sm text-foreground/75">
                  Proficient in React 19, Next.js, TypeScript, Python ML microservices, Supabase, and PostgreSQL. Available immediately for remote roles.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleScroll("skills")}
                className="self-start font-tech text-xs font-bold uppercase tracking-wider text-accent hover:underline flex items-center gap-1 mt-2"
              >
                Review Technical Stack &amp; Skills →
              </button>
            </div>

            <div className="p-6 rounded-xl border border-border-soft bg-card/60 hover:bg-card hover:border-border-strong transition-all flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-tech text-xs font-bold uppercase tracking-[0.18em] text-accent flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> For Founders &amp; Startups
                </span>
                <h3 className="font-display text-xl font-bold uppercase text-foreground">
                  Need a Production Web App or MVP Built?
                </h3>
                <p className="text-body-sm text-foreground/75">
                  From initial software architecture to edge deployment, I deliver scalable SaaS products, AI workflows, and Web3 apps with clean design systems.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleScroll("contact")}
                className="self-start font-tech text-xs font-bold uppercase tracking-wider text-accent hover:underline flex items-center gap-1 mt-2"
              >
                Schedule Project Consultation →
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
