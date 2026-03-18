import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full border-t border-border py-8 px-4"
    >
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anupam Baral. All rights reserved.
        </p>
        <a
          href="https://github.com/gomugomucode"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
