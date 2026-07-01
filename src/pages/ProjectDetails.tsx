import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Database, Cpu, Calendar, Shield } from "lucide-react";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  client: string;
  tags: string[];
  imageUrl: string;
  liveLink: string;
  githubLink: string;
  metrics: { label: string; value: string }[];
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string;
  lessons: string;
}

const caseStudies: Record<string, CaseStudy> = {
  "01": {
    id: "01",
    title: "E-Learning LMS Platform",
    subtitle: "A high-performance decoupled Learning Management System built for production-scale content distribution.",
    role: "Full Stack Engineer",
    year: "2024",
    client: "Internal / Open Source",
    tags: ["React", "Node.js", "Express", "MySQL", "Vercel"],
    imageUrl: "/elearning-preview.webp",
    liveLink: "https://elearn-lake.vercel.app",
    githubLink: "https://github.com/gomugomucode/elearn",
    metrics: [
      { label: "Content Load Time", value: "<1.2s" },
      { label: "System Uptime", value: "99.9%" },
      { label: "Database Speedup", value: "40%" }
    ],
    problem: "Traditional LMS solutions suffer from slow page load speeds and tightly coupled architectures. High payload delivery and excessive database roundtrips degrade search and dashboard performance when multiple courses load concurrently.",
    solution: "Decoupled the architecture completely by serving a static, highly optimized React client via global CDNs and running a lightweight, stateless Node.js/Express API. Built database query optimizations using precompiled joins and index mappings in MySQL to handle nested course structures.",
    architecture: [
      "Decoupled React Client served from edge CDNs.",
      "Stateless REST API utilizing Node.js and Express.",
      "Relational MySQL persistence layer utilizing relational indexing for course trees.",
      "Vercel Edge caching configurations for static route delivery."
    ],
    challenges: "Handling recursive folder structures and hierarchical course categories efficiently in a relational MySQL database without triggering exponential query loops.",
    lessons: "Leveraging structured database indexes and flattening dynamic relational queries into indexed lookup arrays dramatically increases runtime response speed and resource efficiency."
  },
  "02": {
    id: "02",
    title: "Yatra — Solana Ride-Sharing",
    subtitle: "Decentralized atomic trip contracts and reputation ledger built on the Solana blockchain.",
    role: "Core Web3 Architect",
    year: "2024",
    client: "Hackathon Entry",
    tags: ["Solana", "Rust", "Next.js", "Firebase", "Web3.js"],
    imageUrl: "/yatra.webp",
    liveLink: "https://yatraa-zeta.vercel.app/",
    githubLink: "https://github.com/gomugomucode/Yatra",
    metrics: [
      { label: "Tx Confirmation", value: "~400ms" },
      { label: "Gas Fee Per Ride", value: "<$0.0001" },
      { label: "Signaling Delay", value: "50ms" }
    ],
    problem: "Centralized ride-sharing apps take up to a 30% cut of driver earnings and suffer from centralized data security risks. Drivers have no sovereign ownership over their profile history, trip records, or reputational scores.",
    solution: "Created an open-source decentralized ride-sharing engine on Solana. All trip status shifts (requested, accepted, completed) are verified using atomic smart contracts written in Rust. Used Firebase RTDB for sub-second location updates, and Web3.js client-side signatures to authenticate every trip event.",
    architecture: [
      "Rust Smart Program compiled to Solana BPF bytecode.",
      "Next.js client application with Web3 provider wallet connections.",
      "Firebase Realtime Database for quick coordinate syncing.",
      "Anchor framework testing suite mapping instruction executions."
    ],
    challenges: "Managing asynchronous off-chain signaling coordinates (Firebase) while enforcing absolute trust boundaries via atomic on-chain verification steps on the blockchain ledger.",
    lessons: "Decoupled real-time coordination feeds (off-chain) from critical state transitions (on-chain) are key to scaling blockchain architectures without overloading blocks."
  },
  "03": {
    id: "03",
    title: "Web3 Loyalty Protocol",
    subtitle: "A high-performance loyalty rewards dApp featuring automated smart-contract distributions.",
    role: "Lead Dapp Developer",
    year: "2023",
    client: "Freelance",
    tags: ["Web3.js", "Solana", "Rust", "Next.js", "TypeScript"],
    imageUrl: "/solana.webp",
    liveLink: "https://solana-loyalty-d-app.vercel.app/",
    githubLink: "https://github.com/gomugomucode/Solana-Loyalty-dApp",
    metrics: [
      { label: "Token Transfer", value: "Instant" },
      { label: "Tx Cost", value: "<$0.01" },
      { label: "Wallet Setup Time", value: "<2 Min" }
    ],
    problem: "Traditional corporate rewards programs suffer from fragmented platforms, high transaction friction, and dynamic expiration rules that build distrust with program members.",
    solution: "Built a loyalty dApp that mints and issues dynamic program points directly to consumer cryptographic wallets. Built smart program distributions to handle points transfers, program enrollment, and reward redemptions with instant settlement times.",
    architecture: [
      "Solana program handles state for loyalty program balances.",
      "Next.js frontend with Tailwind interface details.",
      "TypeScript Web3.js transaction builders with automated wallet signature flows.",
      "Edge-cached REST requests fetching off-chain loyalty product details."
    ],
    challenges: "Handling smooth wallet connection edge cases across multiple mobile browsers where wallet injection APIs frequently conflict.",
    lessons: "Clean, asynchronous state management wrapper logic around third-party wallet interfaces prevents critical page crashes and improves mobile customer conversion rates."
  }
};

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? caseStudies[id] : null;

  if (!project) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-32 text-center flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <h1 className="font-display text-2xl font-medium tracking-tight text-foreground">
          Project Not Found
        </h1>
        <p className="text-sm text-muted-foreground max-w-md">
          The project case study you requested could not be resolved in this environment.
        </p>
        <Link to="/projects">
          <Button variant="outline" className="gap-2 font-mono uppercase text-[11px] tracking-widest">
            <ArrowLeft className="w-4 h-4" />
            Back to All Work
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
      <SEO
        title={`${project.title} | Case Study`}
        description={project.subtitle}
        keywords={`${project.title}, Anupam Baral Case Study, Software Architecture, React Developer`}
        canonicalUrl={`https://anupambaral.com.np/project/${project.id}`}
      />

      {/* Back CTA */}
      <div className="mb-12">
        <Link to="/#work" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>
      </div>

      {/* Header Info */}
      <div className="flex flex-col gap-6 mb-12">
        <h1 className="heading-display max-w-4xl">
          {project.title}
        </h1>
        <p className="text-body max-w-3xl">
          {project.subtitle}
        </p>

        {/* Technical Pills & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 px-4 py-2.5 transition-all"
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
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Full-width visual wrapper */}
      <div className="w-full aspect-video border border-border/40 rounded-md overflow-hidden bg-muted mb-16 relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200";
          }}
        />
      </div>

      {/* Grid contents: Info Rails (col-4) and Narrative (col-8) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Metadata & Metrics (col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
          {/* Metadata details */}
          <Card className="p-6 flex flex-col gap-4">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground block">
                Role
              </span>
              <span className="text-sm font-medium text-foreground">
                {project.role}
              </span>
            </div>
            <div className="h-[1px] bg-border/40" />
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground block">
                Year
              </span>
              <span className="text-sm font-medium text-foreground flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                {project.year}
              </span>
            </div>
            <div className="h-[1px] bg-border/40" />
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground block">
                Environment
              </span>
              <span className="text-sm font-medium text-foreground">
                {project.client}
              </span>
            </div>
          </Card>

          {/* Quantitative Metrics */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Performance metrics
            </span>
            <div className="flex flex-col gap-3">
              {project.metrics.map((metric) => (
                <Card key={metric.label} className="px-6 py-4 flex justify-between items-center">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {metric.label}
                  </span>
                  <span className="text-sm font-semibold text-primary font-mono">
                    {metric.value}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Editorial Case Study Text (col-span-8) */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          {/* The Problem */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xl font-medium tracking-tight text-foreground flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" />
              The Problem
            </h3>
            <p className="text-body-sm sm:text-base">
              {project.problem}
            </p>
          </div>

          {/* The Solution */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xl font-medium tracking-tight text-foreground flex items-center gap-2">
              <Database className="w-5 h-5 text-primary" />
              The Solution
            </h3>
            <p className="text-body-sm sm:text-base">
              {project.solution}
            </p>
          </div>

          {/* Architecture block */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xl font-medium tracking-tight text-foreground flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Technical Architecture
            </h3>
            <ul className="flex flex-col gap-3 text-body-sm sm:text-base pl-4 border-l border-border">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Learning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
            <div className="flex flex-col gap-2">
              <h4 className="label-mono text-foreground">
                Challenges
              </h4>
              <p className="text-body-sm">
                {project.challenges}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="label-mono text-foreground">
                Lessons learned
              </h4>
              <p className="text-body-sm">
                {project.lessons}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
