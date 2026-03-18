import { motion } from "framer-motion";
import { Github, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-primary font-mono text-sm mb-6 border border-border"
      >
        <Terminal className="w-4 h-4" />
        <span>~/anupam-baral</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
      >
        Anupam <span className="text-primary">Baral</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl font-medium text-primary mb-6 font-mono"
      >
        Full-Stack Developer & BCA Student
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed mb-8"
      >
        I build scalable web applications using React and Node.js. Currently expanding my skill set into Python, NumPy, and Pandas to explore Data Science and AI. Proud Arch Linux user and anime/manga enthusiast.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        href="https://github.com/gomugomucode"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        <Github className="w-5 h-5" />
        gomugomucode
      </motion.a>
    </section>
  );
};

export default HeroSection;
