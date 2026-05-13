import { motion } from "framer-motion";
import { Github, Terminal, Linkedin, FileText, ArrowRight, Briefcase, Sparkles, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 py-24 overflow-hidden">
      
      {/* Dynamic Background Glows (New Palette) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-cyan-400/5 rounded-full blur-[80px] pointer-events-none" />

      {/* --- AVATAR WITH DYNAMIC GLOW --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-14"
      >
        <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-600 via-cyan-500 to-cyan-400 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
        
        <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-b from-emerald-500/50 to-slate-900 shadow-2xl">
          <div className="w-full h-full rounded-full border-[6px] border-[#020617] overflow-hidden bg-slate-950">
            <img
              src="/my-photo.webp"
              alt="Anupam Baral - Full Stack Developer from Butwal, Nepal"
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000 hover:scale-105"
              loading="eager"
            />
          </div>
        </div>

        {/* Status Indicator */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          className="absolute bottom-1 right-2 flex items-center gap-1.5 bg-slate-950 border border-emerald-500/30 px-4 py-2 rounded-full shadow-2xl backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Active Status</span>
        </motion.div>
      </motion.div>

      {/* --- TOP BADGE --- */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-emerald-500/40 transition-all mb-10"
      >
        <Terminal className="w-4 h-4 text-emerald-400" />
        <span className="text-xs font-mono text-slate-300 tracking-tight">
          <span className="text-emerald-500 font-bold">~</span>/gomugomucode <span className="text-slate-600">--status</span> <span className="text-cyan-400 font-bold">online</span>
        </span>
      </motion.div>

      {/* --- HEADLINE --- */}
      <div className="max-w-6xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.5em] text-emerald-400/80 mb-6 block">
            The Intersection of Code & Intelligence
          </span>
        </motion.div>
      </div>

      {/* --- SUBTITLE / DESCRIPTION --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-3xl mx-auto space-y-8 mb-16"
      >
        <h1 className="text-xl md:text-2xl font-bold text-slate-100 flex items-center justify-center gap-4">
          <Sparkles className="w-6 h-6 text-emerald-400" />
          Hi, I'm Anupam Baral
          <span className="w-2 h-2 rounded-full bg-slate-700" />
          <span className="text-cyan-400 uppercase text-xs tracking-[0.3em] font-black">from Nepal</span>
        </h1>
        
        <p className="text-slate-400 text-base md:text-xl leading-relaxed font-medium px-4">
          Architecting <span className="text-slate-100">scalable digital ecosystems</span> and high-impact
          frontend experiences. Specializing in neural-driven 
          <span className="text-emerald-400 font-serif italic ml-1.5"> intelligent architectures.</span>
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {["React", "TypeScript", "Python", "Solana", "AI/ML"].map((skill) => (
            <span key={skill} className="px-4 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-emerald-500/50 transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* --- ACTION BUTTONS --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        <Link
          to="/projects"
          className="group relative inline-flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:bg-emerald-500 hover:scale-[1.02] active:scale-95 shadow-2xl shadow-emerald-600/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <Code2 className="w-5 h-5" />
          Explore Work
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
        </Link>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-slate-900 text-white border border-slate-800 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:bg-slate-800 hover:border-emerald-500/40 active:scale-95 shadow-xl"
        >
          <Briefcase className="w-5 h-5 text-cyan-400" />
          Partner Up
        </Link>

        <div className="flex items-center gap-6 mt-6 md:mt-0 md:ml-6 pl-8 border-l border-slate-800 hidden sm:flex">
          <motion.a
            whileHover={{ y: -4, color: "#10b981" }}
            href="https://github.com/gomugomucode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition-colors"
          >
            <Github className="w-7 h-7" />
          </motion.a>
           <motion.a
            whileHover={{ y: -3, color: "#0077b5" }}
            href="https://linkedin.com/in/gomugomucode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ y: -4, color: "#10b981" }}
            href="/Anupambaral-cv.docx"
            download
            className="text-slate-500 transition-colors"
          >
            <FileText className="w-7 h-7" />
          </motion.a>
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;




