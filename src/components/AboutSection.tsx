import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { SectionGrid, SectionHeader, SectionShell } from "./layout/SectionShell";
import { Timeline } from "./Timeline";
import { MapPin, GraduationCap, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const timelineItems = [
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
            <SectionHeader
              index="01 — About"
              title="Architecting web systems & AI software that scale."
            />

            <div className="text-body flex flex-col gap-4">
              <p>
                I am <strong>Anupam Baral</strong>, a Senior <strong>Full Stack Developer</strong> and <strong>AI Developer in Nepal</strong>. I specialize in bridging complex cloud infrastructures with performant, accessible user interfaces built on <strong>React</strong> and <strong>Next.js</strong>.
              </p>
              <p>
                My focus is engineering production-ready software. Whether deploying intelligent <strong>Python</strong> machine learning pipelines, building real-time backend systems with <strong>Supabase</strong> and <strong>Firebase</strong>, or writing smart programs on <strong>Solana</strong>, I prioritize clean architecture, sub-second LCP performance, and long-term maintainability.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Python", "Supabase", "Firebase", "Solana", "AI / ML"].map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            <Card className="p-5 hover:border-foreground/20 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-subtle-foreground mt-0.5 shrink-0" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <span className="label-mono">Location</span>
                  <span className="text-sm text-foreground">Butwal, Nepal (Available Worldwide)</span>
                </div>
              </div>
            </Card>

            <Card className="p-5 hover:border-foreground/20 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-4 h-4 text-subtle-foreground mt-0.5 shrink-0" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <span className="label-mono">Education</span>
                  <span className="text-sm text-foreground">
                    BCA — Butwal Kalika Campus (2023–Present)
                  </span>
                </div>
              </div>
            </Card>

            <a href="mailto:contact@anupambaral.com.np" className="group block" aria-label="Send direct email to Anupam Baral">
              <Card className="p-5 bg-foreground/[0.03] hover:bg-foreground/[0.06] hover:border-foreground/25 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <Mail className="w-4 h-4 text-subtle-foreground mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="flex flex-col gap-1">
                    <span className="label-mono">Direct contact</span>
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">
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
            <span className="label-mono">02 — Experience</span>
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
