import { useEffect, useRef, useState } from "react";
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
  { name: "Now", href: "now", isPage: true },
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

  const burgerButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const setBodyScrollLocked = (locked: boolean) => {
    if (typeof document === "undefined") return;
    const body = document.body;
    if (!body) return;

    if (locked) {
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
    } else {
      body.style.overflow = "";
      body.style.touchAction = "";
    }
  };

  useEffect(() => {
    setBodyScrollLocked(isMobileMenuOpen);

    if (isMobileMenuOpen) {
      // Focus close button for immediate keyboard access
      window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    } else {
      // Restore focus to hamburger button
      window.setTimeout(() => burgerButtonRef.current?.focus(), 0);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);




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
      aria-label="Primary navigation"
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
            <img src="/logo.webp" alt="Anupam Baral Logo" className="h-12 w-auto" width="48" height="48" />
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
            ref={burgerButtonRef}
            type="button"
            className="md:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 -mr-2 text-muted-foreground hover:text-foreground interactive-focus rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {/* Backdrop (solid glass surface + blur) */}
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 w-full h-full bg-background/90 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              role="dialog"
              aria-modal="true"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-0 left-0 right-0 z-10"
            >
              <div className="bg-background/98 backdrop-blur-xl border-b border-border/80 shadow-2xl px-6 py-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="label-mono">Menu</span>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 -m-2 text-muted-foreground hover:text-foreground interactive-focus rounded-md"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-5 flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive =
                      (link.isPage && location.pathname === `/${link.href}`) ||
                      (!link.isPage && isHome && activeSection === link.href);

                    const sharedClass = cn(
                      "label-mono py-3 border-b border-border transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    );

                    if (link.isPage) {
                      return (
                        <Link
                          key={link.name}
                          to={`/${link.href}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={sharedClass}
                        >
                          {link.name}
                        </Link>
                      );
                    }

                    return (
                      <a
                        key={link.name}
                        href={`/#${link.href}`}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={sharedClass}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
