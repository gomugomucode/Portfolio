import { Link, useLocation, useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "./layout/Container";

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
    <footer className="w-full border-t border-border pt-12 pb-8 bg-background">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="flex flex-col gap-2 max-w-sm">
            <span className="font-display font-medium text-sm text-foreground">Anupam Baral</span>
            <span className="label-mono normal-case tracking-wide">
              Full stack developer · AI/ML engineer · Nepal
            </span>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNavLinks.map((link) =>
              link.isPage ? (
                <Link
                  key={link.name}
                  to={`/${link.href}`}
                  className="label-mono hover:text-foreground transition-colors interactive-focus"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={`/#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="label-mono hover:text-foreground transition-colors interactive-focus"
                >
                  {link.name}
                </a>
              ),
            )}
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex items-center gap-2">
              <a
                href="mailto:contact@anupambaral.com.np"
                className="social-link"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
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
              <a
                href="https://github.com/gomugomucode"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-wrap gap-4 label-mono md:justify-end">
              <Link to="/privacy" className="hover:text-foreground transition-colors interactive-focus">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-foreground transition-colors interactive-focus">
                Terms
              </Link>
            </div>
            <p className="label-mono md:text-right">
              © {new Date().getFullYear()} Anupam Baral
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
