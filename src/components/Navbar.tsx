import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Container } from "./layout/Container";

const navLinks = [
  { name: "About", href: "about", isPage: true },
  { name: "Projects", href: "projects", isPage: true },
  { name: "Skills", href: "skills", isPage: false },
  { name: "Blog", href: "blog", isPage: true },
  { name: "Now", href: "now", isPage: true },
  { name: "Contact", href: "contact", isPage: true },
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
      "font-tech text-xs font-bold uppercase tracking-[0.16em] interactive-focus px-3 py-1.5 rounded-full transition-all duration-200",
      !isPage && isHome && activeSection === href
        ? "text-accent bg-accent/10 border border-accent/25"
        : "text-foreground/75 hover:text-accent hover:bg-foreground/5",
    );

  return (
    <nav
      aria-label="Primary navigation"
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled
          ? "py-3 bg-background/90 border-b border-border-soft shadow-xs"
          : "py-4 bg-background/70 border-b border-transparent",
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-10">
          <Link
            to="/"
            className="font-display font-black tracking-wider text-base text-foreground hover:text-accent transition-colors interactive-focus uppercase"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <div className="flex items-center gap-2.5">
              <img src="/logo.webp" alt="Anupam Baral Logo" className="h-9 w-auto object-contain" width="36" height="36" />
              <span className="hidden sm:inline font-display font-black tracking-tight text-sm">
                ANUPAM BARAL
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-3">
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
            className="md:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 -mr-2 text-foreground/80 hover:text-accent interactive-focus rounded-full"
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
            {/* Backdrop */}
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 w-full h-full bg-foreground/30 backdrop-blur-sm"
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
              <div className="bg-background border-b border-border-soft shadow-2xl px-6 py-6">
                <div className="flex items-center justify-between gap-4 border-b border-border-soft pb-4">
                  <span className="font-tech text-xs font-bold uppercase tracking-[0.2em] text-accent">Navigation</span>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 -m-2 text-foreground/70 hover:text-foreground interactive-focus rounded-full"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-4 flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive =
                      (link.isPage && location.pathname === `/${link.href}`) ||
                      (!link.isPage && isHome && activeSection === link.href);

                    const sharedClass = cn(
                      "font-tech text-sm font-bold uppercase tracking-[0.16em] py-3 border-b border-border-soft transition-colors flex items-center justify-between",
                      isActive ? "text-accent" : "text-foreground/80 hover:text-accent",
                    );

                    if (link.isPage) {
                      return (
                        <Link
                          key={link.name}
                          to={`/${link.href}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={sharedClass}
                        >
                          <span>{link.name}</span>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
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
                        <span>{link.name}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
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
