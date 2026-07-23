import { SectionHeader, SectionShell } from "./layout/SectionShell";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
  },
  {
    title: "Backend & Databases",
    skills: ["Python", "Node.js", "Express.js", "Supabase", "Firebase", "PostgreSQL", "MySQL"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Python ML", "Scikit-Learn", "Pandas", "NumPy", "Model Inference", "AI Pipelines"],
  },
  {
    title: "Web3 & Blockchain",
    skills: ["Solana Developer", "Rust Smart Programs", "Web3.js", "Wallet Integration"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Vercel", "Cloudflare", "Docker", "Git / GitHub", "REST APIs", "CI/CD"],
  },
];

const SkillsSection = () => {
  return (
    <SectionShell id="skills">
      <AnimatedSection>
        <SectionHeader index="04 — Skills" title="Technical stack & expertise." />

        <div className="flex flex-col divide-y divide-border">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8 py-5 group"
            >
              <span className="label-mono sm:w-44 shrink-0 pt-0.5">
                {cat.title}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-200"
                  >
                    {skill}
                    <span className="text-border mx-1 last:hidden">/</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </SectionShell>
  );
};

export default SkillsSection;
