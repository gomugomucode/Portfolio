import { motion } from "framer-motion";
import { Globe, Database, Cpu, Share2, Shield, Terminal } from "lucide-react";
import { Card } from "./ui/card";

const skillCategories = [
  { 
    title: "Frontend Architecture", 
    icon: Globe, 
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] 
  },
  { 
    title: "Backend Systems", 
    icon: Database, 
    skills: ["Node.js", "Express.js", "Python", "REST APIs"] 
  },
  { 
    title: "Data & Intelligence", 
    icon: Cpu, 
    skills: ["Machine Learning", "Pandas", "NumPy", "Scikit-Learn"] 
  },
  { 
    title: "Database & Cloud", 
    icon: Share2, 
    skills: ["MySQL", "SQLite", "MongoDB", "Vercel", "Cloudflare"] 
  },
  { 
    title: "Web3 & Decentralization", 
    icon: Shield, 
    skills: ["Solana", "Rust", "Web3.js"] 
  },
  { 
    title: "DevOps & Tooling", 
    icon: Terminal, 
    skills: ["Git / GitHub", "Docker", "Linux Administration"] 
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-4 md:px-8 py-24 border-t border-border/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side - Title Rail (col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-2 sticky top-28">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            04 — SKILLS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase">
            Technical<br />Arsenal.
          </h2>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-sm mt-4">
            A curated stack of frontend frameworks, backend runtimes, databases, AI/ML tools, and Web3 protocols. Built on type-safety, testability, and edge deployments.
          </p>
        </div>

        {/* Right Side - Bento Grid (col-span-8) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card 
                key={cat.title}
                className="hover:border-foreground/20 transition-all duration-300 group"
              >
                <div className="flex flex-col gap-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md border border-border text-muted-foreground bg-muted/20 group-hover:text-primary group-hover:border-primary/20 transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center border border-border text-muted-foreground font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-sm bg-foreground/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;