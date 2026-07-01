import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

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
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-center max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[480px] h-[480px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 flex flex-col gap-5 md:gap-6"
        >
          <motion.div variants={itemVariants} className="flex items-center">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-sm bg-foreground/[0.04] border border-border label-mono">
              <span className="relative flex h-1.5 w-1.5">
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              Available for work
            </div>
          </motion.div>

          <motion.span variants={itemVariants} className="label-mono">
            Anupam Baral
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="heading-display-lg max-w-[14ch]"
          >
            Full stack
            <br />
            developer.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-body max-w-xl mt-1"
          >
            Building production-ready web applications and intelligent systems.
            From scalable SaaS platforms to machine learning pipelines — I engineer
            things that work.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mt-2 md:mt-4">
            <Button variant="default" onClick={() => handleScroll("work")}>
              View work
            </Button>
            <Button variant="outline" onClick={() => handleScroll("contact")}>
              Get in touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-4 lg:col-start-9 flex flex-col gap-6 lg:pb-2"
        >
          <div className="hidden lg:block h-px w-full bg-border" />
          <p className="text-body-sm max-w-xs">
            React, Next.js, Node.js, Python, TypeScript, Solana — full-stack
            systems from interface to infrastructure.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/gomugomucode"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/gomugomucode"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-5 sm:left-8 lg:left-12 flex items-center gap-2 label-mono hover:opacity-100 interactive-focus hidden md:flex"
        onClick={() => handleScroll("about")}
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-3.5 h-3.5" />
        Scroll
      </motion.button>
    </section>
  );
};

export default HeroSection;
