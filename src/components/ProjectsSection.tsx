import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

const projects = [
  {
    index: "01",
    title: "E-Learning Platform",
    impact: "Engineered a full-stack LMS with decoupled architecture and MySQL persistence. Optimized for production-scale content delivery.",
    tags: ["React", "Node.js", "Express", "MySQL", "Vercel"],
    imageUrl: "/elearning-preview.webp",
    liveLink: "https://elearn-lake.vercel.app",
    githubLink: "https://github.com/gomugomucode/elearn",
  },
  {
    index: "02",
    title: "Yatra — Solana Ride-Sharing",
    impact: "Architected a decentralized ride-sharing protocol on the Solana blockchain. Engineered atomic trip transactions, driver reputation systems, and real-time Firebase signaling.",
    tags: ["Solana", "Rust", "Next.js", "Firebase", "Web3.js"],
    imageUrl: "/yatra.webp",
    liveLink: "https://yatraa-zeta.vercel.app/",
    githubLink: "https://github.com/gomugomucode/Yatra",
  },
  {
    index: "03",
    title: "Web3 Loyalty Protocol",
    impact: "Built a Solana-based loyalty rewards dApp utilizing Next.js server-side rendering and seamless Web3.js smart contract integration for zero-latency user experiences.",
    tags: ["Web3.js", "Solana", "Rust", "Next.js", "TypeScript"],
    imageUrl: "/solana.webp",
    liveLink: "https://solana-loyalty-d-app.vercel.app/",
    githubLink: "https://github.com/gomugomucode/Solana-Loyalty-dApp",
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="w-full max-w-6xl mx-auto px-4 md:px-8 py-24 border-t border-border/40">
      <div className="flex flex-col gap-2 mb-16">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          03 — SELECTED WORK
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase">
          Case Studies.
        </h2>
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((project) => (
          <article 
            key={project.index}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
          >
            {/* Visual Image container - 60% Width / col-span-7 */}
            <div className="lg:col-span-7 flex flex-col gap-2">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block aspect-video w-full rounded-md border border-border/60 overflow-hidden bg-muted relative"
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                  onError={(e) => {
                    // Fail-safe default placeholder if image is missing
                    e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200";
                  }}
                />
              </a>
            </div>

            {/* Content text details - 40% Width / col-span-4 col-start-9 */}
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-4">
              <span className="font-mono text-sm font-semibold text-primary">
                {project.index}
              </span>
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground uppercase">
                {project.title}
              </h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                {project.impact}
              </p>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 mt-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium rounded-md bg-primary text-primary-foreground hover:brightness-110 active:scale-95 px-4 py-2.5 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium rounded-md border border-border hover:bg-muted text-foreground active:scale-95 px-4 py-2.5 transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
