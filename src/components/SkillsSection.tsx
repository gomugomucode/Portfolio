import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { SectionGrid, SectionShell } from "./layout/SectionShell";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Frontend architecture",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend systems",
    skills: ["Node.js", "Express.js", "Python", "REST APIs"],
  },
  {
    title: "Data & intelligence",
    skills: ["Machine Learning", "Pandas", "NumPy", "Scikit-Learn"],
  },
  {
    title: "Database & cloud",
    skills: ["MySQL", "SQLite", "MongoDB", "Vercel", "Cloudflare"],
  },
  {
    title: "Web3 & decentralization",
    skills: ["Solana", "Rust", "Web3.js"],
  },
  {
    title: "DevOps & tooling",
    skills: ["Git / GitHub", "Docker", "Linux Administration"],
  },
];

const SkillsSection = () => {
  return (
    <SectionShell id="skills">
      <AnimatedSection>
        <SectionGrid>
          <div className="lg:col-span-4 flex flex-col gap-3 lg:sticky lg:top-28">
            <span className="label-mono">04 — Skills</span>
            <h2 className="heading-display">Technical arsenal.</h2>
            <p className="text-body-sm max-w-sm mt-2">
              A curated stack of frontend frameworks, backend runtimes, databases, AI/ML tools, and
              Web3 protocols. Built on type-safety, testability, and edge deployments.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {skillCategories.map((cat) => (
              <Card
                key={cat.title}
                className="p-5 hover:border-foreground/20 transition-colors duration-300"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="label-mono text-foreground">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </SectionGrid>
      </AnimatedSection>
    </SectionShell>
  );
};

export default SkillsSection;
