import { motion } from "framer-motion";
import { Code2, Database, Globe, Terminal, Cpu, Palette } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  { title: "Frontend", icon: Globe, skills: ["React", "Tailwind CSS", "HTML/CSS", "JavaScript", "TypeScript"] },
  { title: "Backend", icon: Database, skills: ["Node.js", "Express.js", "MySQL", "SQLite"] },
  { title: "Languages", icon: Code2, skills: ["JavaScript", "TypeScript", "Python"] },
  { title: "Data Science", icon: Cpu, skills: ["NumPy", "Pandas"] },
  { title: "DevOps & Tools", icon: Terminal, skills: ["Git", "GitHub", "Vercel", "Arch Linux"] },
  { title: "Design", icon: Palette, skills: ["Canva", "Responsive Design"] },
];

const SkillsSection = () => {
  return (
    <AnimatedSection>
      <section className="w-full max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          Skills & <span className="text-primary">Technologies</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default SkillsSection;
