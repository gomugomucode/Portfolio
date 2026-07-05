import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Container } from "./layout/Container";

const navLinks = [
  { name: "About", href: "about", isPage: false },
  { name: "Work", href: "work", isPage: false },
  { name: "Skills", href: "skills", isPage: false },
  { name: "Blog", href: "blog", isPage: true },
  { name: "Contact", href: "contact", isPage: false },
];

const sectionIds = navLinks.filter((l) => !l.isPage).map((l) => l.href);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
      return;
    }

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  useEffect(() => {
    if (location.hash && location.pathname === "/") {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    } else {
      e.preventDefault();
      navigate(`/#${href}`);
      setIsMobileMenuOpen(false);
    }
  };

  const linkClass = (href: string, isPage: boolean) =>
    cn(
      "label-mono interactive-focus rounded-sm px-1 py-0.5 transition-colors",
      !isPage && isHome && activeSection === href
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground",
    );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/85 backdrop-blur-md border-b border-border"
          : "py-5 bg-transparent border-b border-transparent",
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-10">
          <Link
            to="/"
            className="font-display font-medium tracking-wide text-sm text-foreground hover:opacity-80 transition-opacity interactive-focus"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img src="/logo.webp" alt="logo" className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link
                  key={link.name}
                  to={`/${link.href}`}
                  className={linkClass(link.href, true)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={`/#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={linkClass(link.href, false)}
                >
                  {link.name}
                </a>
              ),
            )}
          </div>

          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground interactive-focus"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border px-5 py-6"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.isPage ? (
                  <Link
                    key={link.name}
                    to={`/${link.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="label-mono text-muted-foreground hover:text-foreground py-3 border-b border-border"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={`/#${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="label-mono text-muted-foreground hover:text-foreground py-3 border-b border-border"
                  >
                    {link.name}
                  </a>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
