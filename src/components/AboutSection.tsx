import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const AboutSection = () => {
  return (
    <AnimatedSection>
      <section className="w-full max-w-4xl mx-auto px-4 pb-20 pt-10">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          
          {/* Image/Avatar Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-slate-800 shrink-0 relative group"
          >
            <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/0 transition-colors z-10" />
            <img 
              src="/my-photo.webp" 
              alt="Annupam Baral" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://github.com/gomugomucode.png';
              }}
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                About <span className="text-emerald-500">Me</span>
              </h2>
              <div className="w-12 h-1 bg-emerald-500/20 rounded-full mx-auto md:mx-0" />
            </div>

            <div className="space-y-4 text-slate-400 leading-relaxed text-sm md:text-base">
              <p>
                Hello! I'm <span className="text-emerald-400 font-medium">Annupam Baral</span>, a passionate software engineer based in Nepal. My journey in tech started with a curiosity for how web applications scale, which evolved into a deep dive into Full-Stack Development and Artificial Intelligence.
              </p>
              <p>
                I am currently pursuing my Bachelor of Computer Applications (BCA) at Butwal Kalika Campus, where I combine academic rigor with practical, hands-on engineering. I thrive on building resilient architectures, whether it's engineering a seamless React frontend or optimizing a Python-based machine learning pipeline.
              </p>
              <p>
                Beyond writing code, I am deeply committed to open-source communities and technical mentorship. I believe that sharing knowledge and contributing to the global developer ecosystem is the most effective way to grow both personally and professionally.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-3">
              <span className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs font-mono rounded-md border border-slate-700/50">Problem Solver</span>
              <span className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs font-mono rounded-md border border-slate-700/50">Lifelong Learner</span>
              <span className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs font-mono rounded-md border border-slate-700/50">Open Source Advocate</span>
            </div>
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
};

export default AboutSection;
