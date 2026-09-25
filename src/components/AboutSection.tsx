import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { SectionGrid, SectionHeader, SectionShell } from "./layout/SectionShell";
import { Timeline } from "./Timeline";
import { MapPin, GraduationCap, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const timelineItems = [
  {
    date: "July 2026",
    title: "Data Analytics & AI Certification Training",
    subtitle: "DLYTICA Academy (ISO 27001:2022 Certified)",
    description:
      "Completed 1-Month Data & AI Training Program, 3-Credit-Hour Data Analytics with AI Workshop, and Cloud DevOps/Cybersecurity guidance sessions.",
  },
  {
    date: "2023 — Present",
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "Butwal Kalika Campus, Nepal",
    description:
      "Advanced coursework in software engineering, relational database management systems, network security, and computer algorithms.",
  },
  {
    date: "2024 — Present",
    title: "Full Stack & AI Freelance Developer",
    subtitle: "Remote / Global Client Engagement",
    description:
      "Engineering responsive Next.js applications, intelligent Python machine learning workflows, Supabase / Firebase cloud architectures, and Solana Web3 protocols.",
  },
];

const AboutSection = () => {
  return (
    <SectionShell id="about">
      <AnimatedSection>
        <SectionGrid>
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="section-eyebrow">01 — Overview</div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase leading-snug tracking-tight text-foreground">
                Architecting scalable digital products where clean design systems meet intelligent software engineering.
              </h2>
            </div>

            <div className="text-body flex flex-col gap-4 text-foreground/80">
              <p>
                I am <strong>Anupam Baral</strong>, a <strong>Full-Stack &amp; AI Engineer</strong> based in Nepal. I specialize in bridging cloud infrastructures with performant, accessible user interfaces built on <strong>React</strong>, <strong>Next.js</strong>, and <strong>Python</strong>.
              </p>
              <p>
                My focus is engineering production-ready software. Whether deploying intelligent <strong>Python</strong> machine learning pipelines, building real-time backend systems with <strong>Supabase</strong> and <strong>Firebase</strong>, or writing smart programs on <strong>Solana</strong>, I prioritize clean architecture, sub-second LCP performance, and long-term maintainability.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["React", "Next.js", "TypeScript", "Python", "Supabase", "Firebase", "Solana", "AI / ML"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border-soft bg-foreground/[0.04] px-3.5 py-1 text-xs font-tech font-bold uppercase tracking-wider text-foreground/80 hover:border-accent hover:text-accent transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3.5">
            <Card className="p-5 rounded-2xl border-border-soft bg-card/60 hover:bg-card hover:border-border-strong transition-all duration-300 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-tech text-xs font-bold uppercase tracking-[0.16em] text-accent">Location</span>
                  <span className="text-sm font-medium text-foreground">Butwal, Nepal (Available Worldwide)</span>
                </div>
              </div>
            </Card>

            <Card className="p-5 rounded-2xl border-border-soft bg-card/60 hover:bg-card hover:border-border-strong transition-all duration-300 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4 text-accent" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-tech text-xs font-bold uppercase tracking-[0.16em] text-accent">Education</span>
                  <span className="text-sm font-medium text-foreground">
                    BCA — Butwal Kalika Campus (2023–Present)
                  </span>
                </div>
              </div>
            </Card>

            <a href="mailto:contact@anupambaral.com.np" className="group block" aria-label="Send direct email to Anupam Baral">
              <Card className="p-5 rounded-2xl border-border-soft bg-card/60 hover:bg-card hover:border-accent transition-all duration-300 shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 group-hover:bg-accent group-hover:text-white transition-colors flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-accent group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-tech text-xs font-bold uppercase tracking-[0.16em] text-accent">Direct Contact</span>
                    <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      contact@anupambaral.com.np
                    </span>
                  </div>
                </div>
              </Card>
            </a>
          </div>
        </SectionGrid>
      </AnimatedSection>

      <AnimatedSection className="mt-20 md:mt-24 pt-16 md:pt-20 border-t border-border">
        <SectionGrid>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="label-mono">Experience</span>
            <h2 className="heading-display text-2xl md:text-3xl">Track record.</h2>
          </div>
          <div className="lg:col-span-8">
            <Timeline items={timelineItems} />
          </div>
        </SectionGrid>
      </AnimatedSection>
    </SectionShell>
  );
};

export default AboutSection;
