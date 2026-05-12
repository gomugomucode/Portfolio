import { motion } from "framer-motion";
import { Code2, Database, Globe, Terminal, Cpu, Palette } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  { title: "Frontend Architecture", icon: Globe, skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Vite"] },
  { title: "Backend Systems", icon: Database, skills: ["Node.js", "Express.js", "Python", "MySQL", "REST APIs", "SQLite"] },
  { title: "AI & Data Engineering", icon: Cpu, skills: ["Machine Learning", "NumPy", "Pandas", "Scikit-Learn"] },
  { title: "DevOps & Infrastructure", icon: Terminal, skills: ["Git / GitHub", "Vercel Actions", "Cloudflare", "Linux Administration"] },
];

const SkillsSection = () => {
  return (
    <AnimatedSection>
      <section className="w-full max-w-6xl mx-auto px-4 pb-20">

        {/* Header Section */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
            Technical <span className="text-violet-500">Arsenal</span>
          </h2>

          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-mono shadow-lg shadow-violet-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Actively Architecting: Advanced AI/ML pipelines with Python
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed">
            I leverage a robust ecosystem of modern tools to build scalable, high-performance applications. 
            My approach combines strongly-typed frontend frameworks with resilient backend architectures.
          </p>

          <div className="w-12 h-1 bg-violet-500/20 rounded-full mx-auto mt-8" />
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.article
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-violet-500/40 transition-all shadow-lg shadow-black/10 group"
              >
                {/* Card Header */}
                <header className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 group-hover:bg-slate-800 transition-colors">
                    <Icon className="w-5 h-5 text-violet-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-violet-400 transition-colors">
                    {cat.title}
                  </h3>
                </header>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-md bg-slate-800/50 text-slate-300 border border-slate-700/50 group-hover:border-slate-700 group-hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default SkillsSection;