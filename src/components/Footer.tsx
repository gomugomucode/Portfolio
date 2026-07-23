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

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-2">Navigation</h4>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit">Home</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit">About</Link>
            <Link to="/projects" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit">Projects Archive</Link>
            <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit">Engineering Blog</Link>
            <Link to="/ai" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit font-semibold text-primary">AI Showcase (/ai)</Link>
            <Link to="/now" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit">What I'm Doing Now (/now)</Link>
            <Link to="/for-recruiters" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit">For Recruiters Portal</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit">Hire Me / Contact</Link>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-2">Featured Case Studies</h4>
            <Link to="/project/01" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit line-clamp-1">01. E-Learning LMS Platform</Link>
            <Link to="/project/02" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit line-clamp-1">02. Yatra — Solana Ride-Sharing</Link>
            <Link to="/project/03" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit line-clamp-1">03. Web3 Loyalty Protocol</Link>
            <Link to="/project/04" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit line-clamp-1">04. Greenstar Suppliers Catalogue</Link>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-2">Connect & Location</h4>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <a href="https://github.com/gomugomucode" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub Profile">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/gomugomucode" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn Profile">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/gomugomucode" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter Profile">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="mailto:contact@anupambaral.com.np" className="social-link" aria-label="Direct Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Butwal, Lumbini, Nepal — 32907 (GMT+5:45)
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 mt-12 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Anupam Baral. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
