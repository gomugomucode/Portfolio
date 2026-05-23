import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { theme } = useTheme();

    // Detect scroll to add a blur effect to the navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const scrolledClass =
        theme === "dark"
            ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/20"
            : "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-lg shadow-slate-200/40";

    const mobileMenuClass =
        theme === "dark"
            ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800"
            : "bg-white/95 backdrop-blur-xl border-b border-slate-200";

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? scrolledClass : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 text-emerald-500 group" aria-label="Home">
                        <Terminal className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        <span className="font-bold font-mono text-foreground tracking-tight group-hover:text-emerald-500 transition-colors">
                            Anupam<span className="text-emerald-500">.dev</span>
                        </span>
                    </Link>

                    {/* Desktop Links + Theme Toggle */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                                    location.pathname === link.href
                                        ? "text-emerald-500"
                                        : "text-slate-500 dark:text-slate-300"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Theme Toggle — Desktop */}
                        <ThemeToggle />
                    </div>

                    {/* Mobile: Theme Toggle + Hamburger */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            className="text-slate-500 dark:text-slate-300 hover:text-foreground transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`md:hidden overflow-hidden ${mobileMenuClass}`}
                    >
                        <div className="flex flex-col px-4 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                                        location.pathname === link.href
                                            ? "text-emerald-500"
                                            : "text-slate-500 dark:text-slate-300"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;