import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const element = document.getElementById(href);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t border-border/60 pt-16 pb-8 mt-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-2">
          <span className="font-display font-bold tracking-tighter text-lg uppercase text-foreground">
            ANUPAM BARAL
          </span>
          <span className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
            Full Stack Developer · AI/ML Engineer · Nepal
          </span>
        </div>

        {/* Center Column - Links */}
        <div className="flex flex-col md:items-center gap-3">
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {["about", "work", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`/#${item}`}
                onClick={(e) => handleNavClick(e, item)}
                className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Socials & Copyright */}
        <div className="flex flex-col md:items-end gap-3">
          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@anupambaral.com.np"
              className="p-2 rounded-md border border-border bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground transition-all active:scale-95"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/gomugomucode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md border border-border bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground transition-all active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/gomugomucode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md border border-border bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground transition-all active:scale-95"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
            © {new Date().getFullYear()} Anupam Baral. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
