import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full border-t border-border py-8 px-4"
    >
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} Anupam Baral. All rights reserved.
        </p>

        {/* Social Links Container */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:baralanupam111.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-500 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Email</span>
          </a>

          <a
            href="https://linkedin.com/in/gomugomucode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-sky-500 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href="https://github.com/gomugomucode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
