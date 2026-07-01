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
    subtitle: "Butwal Kalika Campus",
    description:
      "Pursuing advanced studies in software engineering, database architecture, network security, and computer system design.",
  },
  {
    date: "2022 — Present",
    title: "Full Stack Freelance Developer",
    subtitle: "Remote / Independent",
    description:
      "Architecting and deploying responsive web applications, decentralized blockchain protocols, and custom machine learning inference integrations for clients worldwide.",
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
              title="Building architecture that scales."
            />

            <div className="text-body flex flex-col gap-4 -mt-6 md:-mt-8">
              <p>
                I am a Full Stack Developer and AI/ML Engineer based in Nepal. I specialize in
                bridging the gap between complex backend architectures and highly performant,
                intuitive user interfaces.
              </p>
              <p>
                My focus is on engineering resilient systems. Whether I'm deploying decentralized
                protocols on Solana or building monolithic LMS platforms in React and Node.js, I
                care deeply about clean code, developer experience, and shipping products that solve
                actual business problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "TypeScript", "Python", "Solana"].map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            <Card className="p-5 hover:border-foreground/20 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-subtle-foreground mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="label-mono">Location</span>
                  <span className="text-sm text-foreground">Butwal, Nepal</span>
                </div>
              </div>
            </Card>

            <Card className="p-5 hover:border-foreground/20 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-4 h-4 text-subtle-foreground mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="label-mono">Education</span>
                  <span className="text-sm text-foreground">
                    BCA — Butwal Kalika Campus (2023–Present)
                  </span>
                </div>
              </div>
            </Card>

            <a href="mailto:contact@anupambaral.com.np" className="group block">
              <Card className="p-5 bg-foreground/[0.03] hover:bg-foreground/[0.06] hover:border-foreground/25 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <Mail className="w-4 h-4 text-subtle-foreground mt-0.5 shrink-0" />
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
