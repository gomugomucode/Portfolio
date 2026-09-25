import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Footer navigation" className="border-t border-border mt-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col gap-6 pr-0 lg:pr-8">
            <Link to="/" className="inline-block">
              <span className="font-display font-medium text-xl tracking-tight">
                Anupam Baral<span className="text-primary">.</span>
              </span>
            </Link>
            
            <p className="text-body-sm text-muted-foreground leading-relaxed max-w-sm">
              Full Stack Developer & AI Engineer based in Nepal. Engineering production-grade web applications, machine learning pipelines, and Solana Web3 protocols.
            </p>
            
            <div className="flex items-center gap-3 mt-2">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wide uppercase">Available for freelance & full-time</span>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <p className="font-tech text-xs font-bold uppercase tracking-[0.18em] text-accent mb-1">Navigation</p>
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-0.5 inline-flex w-fit">Home</Link>
            <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-0.5 inline-flex w-fit">About</Link>
            <Link to="/projects" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-0.5 inline-flex w-fit">Projects Archive</Link>
            <Link to="/blog" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-0.5 inline-flex w-fit">Engineering Blog</Link>
            <Link to="/open-source" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-0.5 inline-flex w-fit">Open Source Hub</Link>
            <Link to="/ai" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-0.5 inline-flex w-fit">AI Showcase</Link>
            <Link to="/now" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-0.5 inline-flex w-fit">Now Page</Link>
            <Link to="/for-recruiters" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-0.5 inline-flex w-fit">For Recruiters</Link>
            <Link to="/uses" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-0.5 inline-flex w-fit">Uses &amp; Setup</Link>
            <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-0.5 inline-flex w-fit">Hire Me / Contact</Link>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <p className="font-tech text-xs font-bold uppercase tracking-[0.18em] text-accent mb-1">Featured Case Studies</p>
            <Link to="/projects/e-learning-platform" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-0.5 inline-flex w-fit line-clamp-1">01. E-Learning LMS Platform</Link>
            <Link to="/projects/yatra-solana-ride-sharing" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-0.5 inline-flex w-fit line-clamp-1">02. Yatra — Solana Ride-Sharing</Link>
            <Link to="/projects/web3-loyalty-protocol" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-0.5 inline-flex w-fit line-clamp-1">03. Web3 Loyalty Protocol</Link>
            <Link to="/projects/greenstar-suppliers" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-0.5 inline-flex w-fit line-clamp-1">04. Greenstar Suppliers Catalogue</Link>
            <Link to="/projects/yarshabyte-it-company" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-0.5 inline-flex w-fit line-clamp-1">05. YarshaByte — IT Company</Link>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <p className="font-tech text-xs font-bold uppercase tracking-[0.18em] text-accent mb-1">Connect &amp; Location</p>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <a href="https://github.com/gomugomucode" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub Profile">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/gomugomucode" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn Profile">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://x.com/gomugomucode" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter / X Profile">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="mailto:contact@anupambaral.com.np" className="social-link" aria-label="Direct Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-foreground/70 leading-relaxed font-sans">
              Butwal, Lumbini, Nepal — 32907 (GMT+5:45)
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 mt-12 border-t border-border-soft">
          <p className="font-tech text-xs font-bold uppercase tracking-wider text-foreground/60">
            &copy; {currentYear} Anupam Baral (@gomugomucode). All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="font-tech text-xs font-bold uppercase tracking-wider text-foreground/60 hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="font-tech text-xs font-bold uppercase tracking-wider text-foreground/60 hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
