import { motion } from "framer-motion";
import { Github, Terminal, Linkedin, FileText, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">

      {/* --- AVATAR WITH DYNAMIC GLOW --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mb-10"
      >
        {/* The "Rotating" Background Glow */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500 to-blue-600 rounded-full blur-[20px] opacity-20 animate-pulse" />

        {/* The Border Ring */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-[3px] bg-gradient-to-b from-emerald-400 to-slate-800 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <div className="w-full h-full rounded-full border-4 border-[#020617] overflow-hidden">
            <img
              src="/my-photo.webp"
              alt="Annupam Baral - Full Stack Developer from Nepal"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              loading="eager"
            />
          </div>
        </div>

        {/* Floating Terminal Badge */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-2 -right-2 bg-slate-900 border border-emerald-500/50 text-emerald-400 px-3 py-1 rounded-md text-[10px] font-mono shadow-xl backdrop-blur-md"
        >
          status: active
        </motion.div>
      </motion.div>

      {/* --- CONTENT --- */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/5 text-emerald-500 font-mono text-xs mb-6 border border-emerald-500/20"
      >
        <Terminal className="w-3.5 h-3.5" />
        <span>~/gomugomucode</span>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white max-w-4xl"
      >
        Annupam Baral (gomugomucode) — <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">Full Stack Developer</span> & AI/ML Engineer from Nepal
      </motion.h1>

      <motion.p className="text-lg md:text-xl font-medium text-slate-300 mb-6 font-mono">
        React Developer <span className="text-emerald-500">•</span> TypeScript Engineer <span className="text-emerald-500">•</span> Python Developer
      </motion.p>

      <motion.p className="max-w-2xl text-slate-400 text-sm md:text-base leading-relaxed mb-10">
        I am a <span className="text-emerald-400/90 font-medium">Nepal-based Developer</span> passionate about crafting highly scalable, performant web applications and intelligent data solutions. As an <span className="text-slate-200">AI/ML Builder</span> and open-source enthusiast, I specialize in bridging complex backend architectures with stunning frontend experiences. Let's build something exceptional together.
      </motion.p>

      {/* --- SOCIAL BUTTONS --- */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div whileHover={{ y: -2 }}>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-emerald-500 text-[#020617] px-6 py-2.5 rounded-full font-bold transition-all hover:bg-emerald-400"
          >
            <Briefcase className="w-5 h-5" />
            View Projects
          </Link>
        </motion.div>

        <motion.div whileHover={{ y: -2 }}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 text-white border border-slate-700 px-6 py-2.5 rounded-full font-bold transition-all hover:border-emerald-500 hover:text-emerald-400"
          >
            <ArrowRight className="w-5 h-5" />
            Hire Me
          </Link>
        </motion.div>

        <motion.a
          whileHover={{ y: -2 }}
          href="https://github.com/gomugomucode"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-slate-900 text-white border border-slate-700 px-6 py-2.5 rounded-full font-bold transition-all hover:border-blue-500 hover:text-blue-400"
        >
          <Github className="w-5 h-5" />
          GitHub
        </motion.a>

        <motion.a
          whileHover={{ y: -2 }}
          href="/cv.docx"
          download
          className="inline-flex items-center gap-2 bg-slate-900/50 text-slate-300 border border-slate-800/50 px-6 py-2.5 rounded-full font-bold transition-all hover:border-slate-500 hover:text-white"
        >
          <FileText className="w-5 h-5" />
          Download Resume
        </motion.a>
      </div>

    </section>
  );
};

export default HeroSection;
