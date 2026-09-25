import { Link } from "react-router-dom";
import { ArrowLeft, Download, Mail, Clock, MapPin, Globe, CheckCircle2, ShieldCheck, Briefcase, Code2, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/SectionShell";
import { siteConfig } from "@/lib/siteConfig";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";
import { trackResumeDownload } from "@/lib/analytics";

const recruiterData = {
  availability: "Available for Immediate Hiring (Full-time / High-Impact Contracts)",
  workMode: "100% Remote Work Worldwide",
  location: "Butwal, Lumbini, Nepal",
  timezone: "GMT+5:45 (Flexible 4-6 hours overlap with US, EU, and APAC teams)",
  languages: ["English (Professional Fluent)", "Nepali (Native)"],
  targetRoles: [
    { title: "Full-Stack & AI Engineer", match: "High Match" },
    { title: "AI Software Engineer", match: "High Match" },
    { title: "Frontend / React Engineer", match: "High Match" },
    { title: "Web3 Solana Developer", match: "High Match" }
  ],
  stackHighlights: {
    frontend: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS", "Vite"],
    backend: ["Python (FastAPI/Flask)", "Node.js", "Express.js", "Pydantic"],
    databases: ["PostgreSQL", "Supabase RLS", "Firebase RTDB", "MySQL", "Prisma"],
    web3: ["Solana", "Rust", "Anchor Framework", "Web3.js"]
  },
  keyMetrics: [
    { label: "Production Apps Deployed", value: "4+" },
    { label: "LMS Content Load Speed", value: "<1.2s" },
    { label: "Solana Tx Finality", value: "~400ms" },
    { label: "Code Type Safety", value: "100%" }
  ]
};

const RecruiterExperience = () => {
  const url = `${siteConfig.url}/for-recruiters`;
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "For Recruiters", item: "/for-recruiters" },
  ];

  const schemas = [
    getWebPageSchema(
      "Recruiter Portal & Hiring Info | Anupam Baral",
      "Dedicated portal for recruiters and hiring managers evaluating Anupam Baral for Full-Stack & AI Engineering roles.",
      url,
      breadcrumbs
    ),
    getBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <SectionShell bordered={false}>
      <SEO
        title="For Recruiters — Anupam Baral (@gomugomucode)"
        description="Dedicated portal for engineering recruiters evaluating Anupam Baral (@gomugomucode) for Full-Stack, React, Next.js, Python AI, and Web3 roles."
        canonicalUrl={url}
        schema={schemas}
      />

      {/* Header & Back Link */}
      <div className="flex flex-col gap-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors w-fit">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Portfolio
        </Link>

        <div>
          <span className="label-mono block mb-3">Recruiter Portal</span>
          <h1 className="heading-display">Fast-track hiring guide.</h1>
          <p className="text-body max-w-2xl mt-4">
            Everything engineering managers, recruiters, and technical founders need to evaluate Anupam Baral for full-time roles or high-impact technical contracts.
          </p>
        </div>

        {/* Immediate Hiring Status Card */}
        <Card className="p-6 bg-gradient-to-r from-primary/[0.08] to-transparent border-primary/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase tracking-wider">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {recruiterData.availability}
            </div>
            <p className="text-body-sm text-foreground/90 font-medium">
              {recruiterData.workMode} • {recruiterData.timezone}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/Anupambaral-cv.docx"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackResumeDownload()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-mono text-xs font-medium hover:bg-primary/90 transition-colors interactive-focus"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download CV (.DOCX)
            </a>
            <a
              href="mailto:contact@anupambaral.com.np"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border bg-card hover:bg-muted text-foreground font-mono text-xs font-medium transition-colors interactive-focus"
            >
              <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
              Direct Email
            </a>
          </div>
        </Card>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Target Roles & Stack */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          {/* Target Roles */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" aria-hidden="true" />
              Target Roles & Position Match
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recruiterData.targetRoles.map((role) => (
                <Card key={role.title} className="p-5 flex items-center justify-between border-border bg-card/50">
                  <span className="font-display text-base font-medium text-foreground">
                    {role.title}
                  </span>
                  <Badge variant="outline" className="font-mono text-[10px] text-emerald-500 border-emerald-500/30">
                    {role.match}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>

          {/* Core Technical Stack Breakdown */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" aria-hidden="true" />
              Production Tech Stack & Capability
            </h2>
            <Card className="p-6 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Frontend Engineering</span>
                <div className="flex flex-wrap gap-2">
                  {recruiterData.stackHighlights.frontend.map((t) => (
                    <Badge key={t} variant="default" className="font-mono text-xs">{t}</Badge>
                  ))}
                </div>
              </div>

              <div className="h-px bg-border/40" />

              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Backend & AI Pipelines</span>
                <div className="flex flex-wrap gap-2">
                  {recruiterData.stackHighlights.backend.map((t) => (
                    <Badge key={t} variant="default" className="font-mono text-xs">{t}</Badge>
                  ))}
                </div>
              </div>

              <div className="h-px bg-border/40" />

              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Databases & Persistence</span>
                <div className="flex flex-wrap gap-2">
                  {recruiterData.stackHighlights.databases.map((t) => (
                    <Badge key={t} variant="default" className="font-mono text-xs">{t}</Badge>
                  ))}
                </div>
              </div>

              <div className="h-px bg-border/40" />

              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Blockchain & Web3</span>
                <div className="flex flex-wrap gap-2">
                  {recruiterData.stackHighlights.web3.map((t) => (
                    <Badge key={t} variant="default" className="font-mono text-xs">{t}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column: Work Preferences & Verified Metrics */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          {/* Work Preferences & Details */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" aria-hidden="true" />
              Work Logistics & Languages
            </h2>
            <Card className="p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Location</span>
                <span className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" aria-hidden="true" /> {recruiterData.location}
                </span>
              </div>

              <div className="h-px bg-border/40" />

              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Timezone Overlap</span>
                <span className="text-xs font-mono text-foreground leading-relaxed flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary shrink-0" aria-hidden="true" /> {recruiterData.timezone}
                </span>
              </div>

              <div className="h-px bg-border/40" />

              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Spoken Languages</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {recruiterData.languages.map((lang) => (
                    <span key={lang} className="px-2.5 py-1 rounded bg-muted text-xs font-mono font-medium text-foreground">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Verified Engineering Performance Metrics */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
              Verified Performance Track Record
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {recruiterData.keyMetrics.map((metric) => (
                <Card key={metric.label} className="p-4 flex flex-col gap-1">
                  <span className="font-display text-xl font-bold text-primary">{metric.value}</span>
                  <span className="font-mono text-[10px] uppercase text-muted-foreground">{metric.label}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* Next Steps Card */}
          <Card className="p-6 bg-muted/40 border border-border flex flex-col gap-3">
            <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" aria-hidden="true" />
              Ready to Interview?
            </h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              I am available for technical interview loops, coding assessments, and architecture reviews. standard response time is under 24 hours.
            </p>
            <Button variant="default" asChild className="w-full mt-2">
              <Link to="/contact">
                Schedule Technical Interview
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </SectionShell>
  );
};

export default RecruiterExperience;
