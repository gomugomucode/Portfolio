import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { Container } from "./layout/Container";

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
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[480px] h-[480px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 flex flex-col gap-5 md:gap-6"
          >
            <motion.div variants={itemVariants} className="flex items-center">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-sm bg-foreground/[0.04] border border-border label-mono">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                </span>
                Available for Freelance & Full-time
              </div>
            </motion.div>

            <motion.span variants={itemVariants} className="label-mono">
              Anupam Baral — Portfolio
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="heading-display-lg max-w-[15ch]"
            >
              Full Stack &
              <br />
              AI Developer.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-body max-w-xl"
            >
              Building production-ready web applications, AI-powered software, and scalable SaaS products. Specializing in <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Python</strong>, <strong>Supabase</strong>, <strong>Firebase</strong>, and <strong>Solana</strong>.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <Button variant="default" onClick={() => handleScroll("work")}>
                Explore Work & Case Studies
              </Button>
              <Button variant="outline" onClick={() => handleScroll("contact")}>
                Hire Me / Get in Touch
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
              Full Stack Developer Nepal crafting enterprise software from intuitive React frontend interfaces to scalable Python AI pipelines and Web3 protocols.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/gomugomucode"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/gomugomucode"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-5 sm:left-8 lg:left-12 hidden md:flex items-center gap-2 label-mono hover:opacity-100 interactive-focus"
        onClick={() => handleScroll("about")}
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
        Scroll
      </motion.button>
    </section>
  );
};

export default HeroSection;
