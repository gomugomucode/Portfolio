import { motion } from "framer-motion";
import { Timeline } from "./Timeline";
import { Card } from "./ui/card";
import { MapPin, GraduationCap, Mail } from "lucide-react";

const timelineItems = [
  {
    date: "2023 — Present",
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "Butwal Kalika Campus",
    description: "Pursuing advanced studies in software engineering, database architecture, network security, and computer system design.",
  },
  {
    date: "2022 — Present",
    title: "Full Stack Freelance Developer",
    subtitle: "Remote / Independent",
    description: "Architecting and deploying responsive web applications, decentralized blockchain protocols, and custom machine learning inference integrations for clients worldwide.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-4 md:px-8 py-24 border-t border-border/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column - Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              01 — ABOUT
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase">
              Building Architecture<br />That Scales.
            </h2>
          </div>

          <div className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed flex flex-col gap-4">
            <p>
              I am a Full Stack Developer and AI/ML Engineer based in Nepal. I specialize in bridging the gap between complex backend architectures and highly performant, intuitive user interfaces.
            </p>
            <p>
              My focus is on engineering resilient systems. Whether I'm deploying decentralized protocols on Solana or building monolithic LMS platforms in React and Node.js, I care deeply about clean code, developer experience, and shipping products that solve actual business problems.
            </p>
          </div>

          {/* Skill Tag Summaries */}
          <div className="flex flex-wrap gap-2.5 mt-2">
            {["React", "Next.js", "Node.js", "TypeScript", "Python", "Solana"].map((tag) => (
              <span 
                key={tag}
                className="inline-flex items-center border border-border text-muted-foreground font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column - Structured Metadata Cards */}
        <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-4">
          <Card className="hover:border-foreground/20 transition-colors duration-300">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-md border border-border text-muted-foreground">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Location</span>
                <span className="text-sm font-semibold text-foreground">Butwal, Nepal</span>
              </div>
            </div>
          </Card>

          <Card className="hover:border-foreground/20 transition-colors duration-300">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-md border border-border text-muted-foreground">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Education</span>
                <span className="text-sm font-semibold text-foreground">BCA — Butwal Kalika Campus (2023–Present)</span>
              </div>
            </div>
          </Card>

          <a href="mailto:contact@anupambaral.com.np" className="group block">
            <Card className="bg-foreground/5 hover:bg-foreground/10 hover:border-foreground/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-md border border-border text-muted-foreground bg-background">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Direct Contact</span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    contact@anupambaral.com.np
                  </span>
                </div>
              </div>
            </Card>
          </a>
        </div>
      </div>

      {/* Experience / Track Record Sub-section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-24 pt-16 border-t border-border/20">
        <div className="lg:col-span-4 flex flex-col gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            02 — EXPERIENCE
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground uppercase">
            Track Record.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <Timeline items={timelineItems} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
