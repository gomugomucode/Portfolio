import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-16 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col gap-6 pr-0 lg:pr-12">
            <Link to="/" className="inline-block">
              <span className="font-display font-medium text-xl tracking-tight">
                Anupam Baral<span className="text-primary">.</span>
              </span>
            </Link>
            
            <p className="text-body-sm text-muted-foreground leading-relaxed max-w-sm">
              Engineering production-grade applications and scalable AI architectures. 
              Focused on performance, precision, and zero-compromise design.
            </p>
            
            <div className="flex items-center gap-3 mt-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wide uppercase">Available for select opportunities</span>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-2">Navigation</h4>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit">Home</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit">About</Link>
            <Link to="/projects" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit">Projects</Link>
            <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit">Blog</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex w-fit">Contact</Link>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-2">Connect</h4>
            <a href="https://github.com/gomugomucode" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex items-center gap-2 w-fit">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/gomugomucode" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex items-center gap-2 w-fit">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://twitter.com/gomugomucode" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex items-center gap-2 w-fit">
              <Twitter className="w-4 h-4" /> Twitter
            </a>
            <a href="mailto:contact@anupambaral.com.np" className="text-sm font-medium hover:text-primary transition-colors py-1 inline-flex items-center gap-2 w-fit">
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-2">Location</h4>
            <p className="text-sm text-foreground">
              Butwal, Lumbini<br />
              Nepal — 32907
            </p>
            <p className="text-xs text-muted-foreground font-mono mt-2">
              GMT+5:45
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
