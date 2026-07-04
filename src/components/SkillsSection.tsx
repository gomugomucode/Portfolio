import { SectionHeader, SectionShell } from "./layout/SectionShell";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "REST APIs"],
  },
  {
    title: "AI / ML",
    skills: ["Machine Learning", "Pandas", "NumPy", "Scikit-Learn"],
  },
  {
    title: "Database & Cloud",
    skills: ["MySQL", "SQLite", "MongoDB", "Vercel", "Cloudflare"],
  },
  {
    title: "Web3",
    skills: ["Solana", "Rust", "Web3.js"],
  },
  {
    title: "DevOps",
    skills: ["Git / GitHub", "Docker", "Linux"],
  },
];

const SkillsSection = () => {
  return (
    <SectionShell id="skills">
      <AnimatedSection>
        <SectionHeader index="04 — Skills" title="Technical arsenal." />

        <div className="flex flex-col divide-y divide-border">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8 py-5 group"
            >
              <span className="label-mono sm:w-36 shrink-0 pt-0.5">
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
