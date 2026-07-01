import { Link, useLocation, useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const footerNavLinks = [
  { name: "About", href: "about", isPage: false },
  { name: "Work", href: "work", isPage: false },
  { name: "Skills", href: "skills", isPage: false },
  { name: "Blog", href: "blog", isPage: true },
  { name: "Contact", href: "contact", isPage: false },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      e.preventDefault();
      navigate(`/#${href}`);
    }
  };

  return (
    <footer className="w-full border-t border-border/60 pt-16 pb-8 mt-32 bg-background">
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
            {footerNavLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.name}
                  to={`/${link.href}`}
                  className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={`/#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              )
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
          <div className="flex flex-wrap gap-4 text-[10px] font-mono uppercase tracking-wider text-muted-foreground md:justify-end">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
          <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider text-right">
            © {new Date().getFullYear()} Anupam Baral. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
