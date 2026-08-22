import { Link } from "react-router-dom";
import { Github, Linkedin, ExternalLink, Mail, MapPin, GraduationCap, Code2, Cpu, Globe, ArrowRight, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DeveloperTimeline from "@/components/DeveloperTimeline";
import CertificatesSection from "@/components/CertificatesSection";
import SkillsSection from "@/components/SkillsSection";
import { siteConfig } from "@/lib/siteConfig";
import {
  getPersonSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";

const verifiedProfiles = [
  {
    platform: "GitHub",
    handle: "@gomugomucode",
    url: "https://github.com/gomugomucode",
    description: "Open-source repositories, developer tools, Solana programs, and web applications.",
    icon: Github,
  },
  {
    platform: "LinkedIn",
    handle: "in/gomugomucode",
    url: "https://linkedin.com/in/gomugomucode",
    description: "Professional experience, education updates, engineering milestones, and network.",
    icon: Linkedin,
  },
  {
    platform: "Medium",
    handle: "@gomugomucode",
    url: "https://medium.com/@gomugomucode",
    description: "Technical articles on decoupled architectures, Solana smart programs, and AI pipelines.",
    icon: FileText,
  },
  {
    platform: "X (Twitter)",
    handle: "@gomugomucode",
    url: "https://x.com/gomugomucode",
    description: "Engineering thoughts, tech industry discourse, and software release updates.",
    icon: Globe,
  },
];

const About = () => {
  const url = `${siteConfig.url}/about`;
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "About", item: "/about" },
  ];

  const schemas = [
    getPersonSchema(),
    getWebPageSchema(
      "About Anupam Baral (@gomugomucode) | Full Stack & AI Engineer",
      "Authoritative profile and biographical overview of Anupam Baral (@gomugomucode), a Full-Stack Developer and AI Engineer based in Nepal specializing in React, Next.js, Python, Supabase, and Solana.",
      url,
      breadcrumbs
    ),
    getBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <div className="space-y-16 md:space-y-24 pt-28 pb-20">
      <SEO
        title="About Anupam Baral (@gomugomucode) | Full Stack & AI Engineer"
        description="Learn about Anupam Baral (@gomugomucode), a Full-Stack Developer and AI Engineer based in Nepal. Explore technical skills, project portfolio, educational background, and verified profiles."
        keywords="About Anupam Baral, gomugomucode, Software Engineer Nepal, React Developer Nepal, Full Stack Developer Nepal, Python AI Developer"
        canonicalUrl={url}
        schema={schemas}
      />

      {/* Hero Header Section */}
      <section className="relative">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="label-mono">01 — Identity & Background</span>
              <Badge variant="primary">@gomugomucode</Badge>
            </div>

            <h1 className="heading-display-lg tracking-tight">
              About Anupam Baral
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Full-Stack Developer & AI Engineer building reliable, accessible web applications, scalable Python machine learning pipelines, and decentralized Web3 systems from Nepal.
            </p>

            {/* Quick Facts Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-muted-foreground">Location</span>
                  <span className="text-sm font-medium text-foreground">Butwal, Nepal (GMT+5:45)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <GraduationCap className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-muted-foreground">Education</span>
                  <span className="text-sm font-medium text-foreground">BCA, Tribhuvan University</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-muted-foreground">Specialization</span>
                  <span className="text-sm font-medium text-foreground">React, Next.js, Python & AI</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Who I Am Section */}
      <section>
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <img
                src="/mypic1.webp"
                alt="Anupam Baral (@gomugomucode) - Developer Photo"
                width={280}
                height={280}
                className="w-full max-w-[280px] rounded-lg border border-border shadow-sm object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400";
                }}
              />
              <div className="p-4 rounded-md border border-border bg-card/60">
                <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                  Canonical Identity: <strong>Anupam Baral</strong><br />
                  Online Handle: <strong>gomugomucode</strong><br />
                  Primary Domain: <strong>anupambaral.com.np</strong>
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-5 text-body text-muted-foreground leading-relaxed">
              <h2 className="heading-display-sm text-foreground">Who I Am</h2>
              <p>
                I am <strong>Anupam Baral</strong>, known across developer platforms as <strong>@gomugomucode</strong>. I am a Full-Stack Developer and AI Engineer based in Butwal, Nepal. Currently pursuing a Bachelor of Computer Applications (BCA) at Butwal Kalika Campus, I spend my time designing production software systems, writing technical breakdowns, and building open-source developer utilities.
              </p>
              <p>
                My engineering approach emphasizes type safety, verifiable performance benchmarks, and clean architectural separation. Whether developing high-throughput web frontends in React and Next.js, writing stateless Python microservices for machine learning inference, or deploying smart contracts on Solana, I focus on building sustainable software that solves tangible problems.
              </p>
              <p>
                Outside of client contracts and software development, I actively publish deep-dive engineering articles on Medium and maintain open-source projects on GitHub, documenting solutions to architectural scaling and decentralized consensus challenges.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What I Build Section */}
      <section className="border-t border-border/60 pt-16 md:pt-20">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            <div>
              <span className="label-mono">02 — Core Focus Areas</span>
              <h2 className="heading-display-sm mt-2 text-foreground">What I Build</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 flex flex-col gap-4 bg-card/40 hover:border-foreground/20 transition-all">
                <Code2 className="w-6 h-6 text-primary" aria-hidden="true" />
                <h3 className="font-display text-base font-semibold text-foreground">Full-Stack Web Systems</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Production web applications built with React, Next.js, TypeScript, Tailwind CSS, PostgreSQL, and Supabase. Optimized for sub-second Core Web Vitals and accessible user flows.
                </p>
                <Link to="/projects" className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1 mt-auto">
                  View Projects <ArrowRight className="w-3 h-3" />
                </Link>
              </Card>

              <Card className="p-6 flex flex-col gap-4 bg-card/40 hover:border-foreground/20 transition-all">
                <Cpu className="w-6 h-6 text-primary" aria-hidden="true" />
                <h3 className="font-display text-base font-semibold text-foreground">AI & ML Microservices</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Type-safe Python backend pipelines using FastAPI, Pydantic, and Scikit-Learn. Bridging machine learning inference models with TypeScript frontend gateways.
                </p>
                <Link to="/ai" className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1 mt-auto">
                  Explore AI Work <ArrowRight className="w-3 h-3" />
                </Link>
              </Card>

              <Card className="p-6 flex flex-col gap-4 bg-card/40 hover:border-foreground/20 transition-all">
                <Globe className="w-6 h-6 text-primary" aria-hidden="true" />
                <h3 className="font-display text-base font-semibold text-foreground">Web3 & Decentralized Protocols</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Smart contract development on Solana using Rust and Anchor. Designed the Yatra ride-sharing protocol featuring atomic fare escrows and off-chain telemetry.
                </p>
                <Link to="/open-source" className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1 mt-auto">
                  Open Source Hub <ArrowRight className="w-3 h-3" />
                </Link>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Technical Skills Section */}
      <section className="border-t border-border/60 pt-16 md:pt-20">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <div>
              <span className="label-mono">03 — Capabilities</span>
              <h2 className="heading-display-sm mt-2 text-foreground">Technical Skills & Stack</h2>
            </div>
            <SkillsSection />
          </div>
        </Container>
      </section>

      {/* Developer Timeline & Certifications */}
      <section className="border-t border-border/60 pt-16 md:pt-20">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col gap-12">
            <div>
              <span className="label-mono">04 — Journey & Verification</span>
              <h2 className="heading-display-sm mt-2 text-foreground">Timeline & Verified Credentials</h2>
            </div>

            <DeveloperTimeline />
            <CertificatesSection />
          </div>
        </Container>
      </section>

      {/* Verified Online Profiles (Entity Consistency) */}
      <section className="border-t border-border/60 pt-16 md:pt-20">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            <div>
              <span className="label-mono">05 — Verified Presence</span>
              <h2 className="heading-display-sm mt-2 text-foreground">Find Me Online (Reciprocal Identity Network)</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Official software repositories, technical articles, and social profiles operated by Anupam Baral.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {verifiedProfiles.map((p) => {
                const IconComponent = p.icon;
                return (
                  <a
                    key={p.platform}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <Card className="p-5 h-full flex flex-col justify-between hover:border-primary/40 transition-all bg-card/40 hover:bg-card/70">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <IconComponent className="w-4 h-4 text-primary" aria-hidden="true" />
                            <span className="font-semibold text-sm text-foreground">{p.platform}</span>
                          </div>
                          <Badge variant="default" className="text-[10px] font-mono">{p.handle}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                          {p.description}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-1 text-xs font-mono text-primary mt-4 group-hover:underline">
                        <span>Visit {p.platform} profile</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>

            {/* Direct Contact CTA */}
            <div className="p-8 rounded-lg border border-border bg-gradient-to-r from-card/80 via-card/40 to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-4">
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-lg font-semibold text-foreground">Ready to start a project?</h3>
                <p className="text-sm text-muted-foreground">
                  Available for freelance development, SaaS contracts, and full-time software engineering roles.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button asChild variant="default">
                  <Link to="/contact" className="gap-2">
                    <Mail className="w-4 h-4" />
                    Get in Touch
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/for-recruiters">
                    Recruiter View
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
