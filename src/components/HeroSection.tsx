import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const HeroSection = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // out-expo
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-16 overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl flex flex-col gap-6"
      >
        {/* Availability Status Badge */}
        <motion.div variants={itemVariants} className="flex items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-foreground/5 border border-border text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for work
          </div>
        </motion.div>

        {/* Pre-headline (Name) */}
        <motion.span
          variants={itemVariants}
          className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground block mt-2"
        >
          ANUPAM BARAL
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black tracking-tighter leading-none text-foreground uppercase"
        >
          Full Stack<br />Developer.
        </motion.h1>

        {/* Tech Stack Tags */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 mt-2">
          {["React / Next.js", "Node.js", "Python / AI", "TypeScript"].map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mt-4"
        >
          Building production-ready web applications and intelligent systems. From scalable SaaS platforms to machine learning pipelines — I engineer things that work.
        </motion.p>

        {/* Actions & Socials */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-6">
          <Button variant="default" onClick={() => handleScroll("work")}>
            View Work
          </Button>

          <Button variant="outline" onClick={() => handleScroll("contact")}>
            Get in Touch
          </Button>

          <div className="h-6 w-[1px] bg-border hidden sm:block mx-2" />

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gomugomucode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md border border-border bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground transition-all active:scale-95"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/gomugomucode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md border border-border bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground transition-all active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-4 md:left-8 flex items-center gap-2 cursor-pointer font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:opacity-100 transition-opacity hidden md:flex"
        onClick={() => handleScroll("about")}
      >
        <span className="animate-bounce">
          <ArrowDown className="w-3.5 h-3.5" />
        </span>
        Scroll
      </motion.div>
    </section>
  );
};

export default HeroSection;




