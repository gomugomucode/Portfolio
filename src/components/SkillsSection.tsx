import { useState } from "react";
import { Layout, Server, Cpu, Database, Wrench, ShieldAlert, CheckCircle2, Layers } from "lucide-react";
import { SectionHeader, SectionShell } from "./layout/SectionShell";
import AnimatedSection from "./AnimatedSection";
import { Badge } from "./ui/badge";

export interface ExpertiseCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  summary: string;
  technologies: string[];
  realProjects: string[];
  problemsSolved: string[];
  currentFocus: string;
}

const expertiseCategories: ExpertiseCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: Layout,
    summary:
      "Crafting zero-CLS, accessible, and ultra-responsive web user interfaces with strict TypeScript type boundaries and modern component systems.",
    technologies: ["React 19", "Next.js 16 (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Vite"],
    realProjects: ["E-Learning LMS Platform", "Greenstar Suppliers Catalogue", "Solana Loyalty DApp", "Developer Portfolio"],
    problemsSolved: [
      "Sub-1.2s First Contentful Paint (FCP) on content-dense LMS platforms",
      "Zero Cumulative Layout Shift (CLS) through rigid container aspect ratios",
      "Keyboard focus trap navigation & WCAG 2.1 AA screen reader compliance"
    ],
    currentFocus: "Next.js 16 Server Actions, Streaming SSR, and React 19 Compiler performance optimizations."
  },
  {
    id: "backend",
    title: "Backend Engineering",
    icon: Server,
    summary:
      "Engineering stateless RESTful and GraphQL API gateways, asynchronous job queues, and robust relational data access layers.",
    technologies: ["Node.js", "Express.js", "Python (FastAPI / Flask)", "RESTful APIs", "JWT Auth", "Pydantic"],
    realProjects: ["Decoupled LMS API Gateway", "AI Inference Service Gateway", "Greenstar Order Routing API"],
    problemsSolved: [
      "Decoupled monolithic server dependencies into stateless Express API endpoints",
      "40% database speedup via precompiled MySQL join queries and relational indexes",
      "Stateless JWT user authentication with secure HTTP-only session cookies"
    ],
    currentFocus: "High-concurrency Rust microservices and type-safe API gateways."
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: Cpu,
    summary:
      "Building type-safe Python inference pipelines, LLM integration boundaries, structured JSON schema enforcement, and data analysis routines.",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Pydantic", "LLM APIs (OpenAI/Anthropic)", "Prompt Engineering"],
    realProjects: ["Type-Safe AI Inference Gateway", "Predictive Analytics Models", "Automated Data Extraction Pipelines"],
    problemsSolved: [
      "Bridged Python ML backends to TypeScript frontend clients with structural Pydantic validation",
      "Guaranteed 100% deterministic JSON schemas from non-deterministic LLM prompt responses",
      "Extracted and preprocessed large tabular datasets for predictive machine learning models"
    ],
    currentFocus: "Local LLM inference optimization, Retrieval-Augmented Generation (RAG) pipelines, and Agentic AI workflows."
  },
  {
    id: "cloud",
    title: "Cloud & Databases",
    icon: Database,
    summary:
      "Designing relational & NoSQL persistence schemas, configuring Row Level Security (RLS), and setting up global CDN edge deployments.",
    technologies: ["PostgreSQL", "Supabase", "Firebase RTDB", "MySQL", "Prisma ORM", "Vercel Edge", "Cloudflare"],
    realProjects: ["Greenstar Suppliers (Prisma + Postgres)", "Yatra Solana (Firebase RTDB)", "Decoupled LMS (MySQL)"],
    problemsSolved: [
      "Configured fine-grained Supabase Row Level Security (RLS) policies protecting user data",
      "Achieved sub-50ms coordinate synchronization using Firebase Realtime Database",
      "Edge-cached static routes on global CDN infrastructure for instant worldwide delivery"
    ],
    currentFocus: "PostgreSQL query plan indexing, connection pooling, and multi-region database replication."
  },
  {
    id: "devops",
    title: "DevOps & Tooling",
    icon: Wrench,
    summary:
      "Automating CI/CD build verification pipelines, strict static linting, bundle size budget enforcement, and developer experience tools.",
    technologies: ["Git", "GitHub Actions", "Docker", "Vite", "npm / pnpm", "ESLint / Prettier", "PostCSS"],
    realProjects: ["Automated Portfolio CI/CD Pipeline", "Dockerized Python Inference Containers", "Vite Custom Rollup Chunking"],
    problemsSolved: [
      "Sub-2-second production build times with Rollup manual vendor chunking",
      "Automated pull-request static analysis and typecheck builds preventing broken deployments",
      "Unified linting, formatting, and commit hook standards across team repositories"
    ],
    currentFocus: "Containerized Kubernetes deployments and automated end-to-end testing suites."
  },
  {
    id: "blockchain",
    title: "Blockchain & Web3",
    icon: Layers,
    summary:
      "Engineering Solana smart programs in Rust, Web3.js client transaction builders, and decentralized cryptographic wallet authentications.",
    technologies: ["Solana", "Rust", "Anchor Framework", "Web3.js", "Phantom Wallet API", "SPL Tokens"],
    realProjects: ["Yatra Solana Ride-Sharing Protocol", "Web3 Loyalty Protocol DApp"],
    problemsSolved: [
      "Engineered atomic trip escrow smart contracts on Solana with sub-400ms transaction finality",
      "Built client-side Web3 signature workflows eliminating centralized user passwords",
      "Designed gas-efficient SPL token minting and automated customer rewards distribution"
    ],
    currentFocus: "Advanced Solana Anchor state compression and zero-knowledge proof primitives."
  }
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<string>("frontend");
  const selectedCategory = expertiseCategories.find((c) => c.id === activeTab) || expertiseCategories[0];

  return (
    <SectionShell id="skills">
      <AnimatedSection>
        <SectionHeader index="05 — Expertise" title="Technical domain & engineering expertise." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Category Selection Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
              Select Engineering Domain
            </span>
            <div className="flex flex-col gap-1.5">
              {expertiseCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = cat.id === activeTab;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-3 p-3.5 rounded-lg border text-left transition-all duration-200 interactive-focus ${
                      isActive
                        ? "bg-card border-primary/50 text-foreground shadow-sm"
                        : "bg-transparent border-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${
                        isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-medium leading-none font-display">
                        {cat.title}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground mt-1 truncate">
                        {cat.technologies.slice(0, 3).join(", ")}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Expertise Detail Panel */}
          <div className="lg:col-span-8 p-6 md:p-8 rounded-xl border border-border bg-card/60 backdrop-blur-sm flex flex-col gap-6">
            {/* Header Title & Icon */}
            <div className="flex items-center gap-4 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                {(() => {
                  const Icon = selectedCategory.icon;
                  return <Icon className="w-6 h-6" aria-hidden="true" />;
                })()}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {selectedCategory.title}
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  {selectedCategory.summary}
                </p>
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Core Stack & Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedCategory.technologies.map((tech) => (
                  <Badge key={tech} variant="default" className="text-xs font-mono">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Real-world Projects */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Applied Real-World Projects
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedCategory.realProjects.map((proj) => (
                  <span
                    key={proj}
                    className="px-3 py-1 rounded-md border border-border/80 bg-muted/40 text-xs font-medium text-foreground font-mono"
                  >
                    {proj}
                  </span>
                ))}
              </div>
            </div>

            {/* Concrete Problems Solved */}
            <div className="flex flex-col gap-3 pt-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Production Problems Solved
              </span>
              <ul className="flex flex-col gap-2">
                {selectedCategory.problemsSolved.map((problem, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-body-sm text-foreground/90">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Current Active Focus */}
            <div className="p-4 rounded-lg bg-primary/[0.04] border border-primary/20 flex flex-col gap-1 mt-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-semibold flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" /> Current Active Focus
              </span>
              <p className="text-xs text-foreground/90 font-mono">
                {selectedCategory.currentFocus}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionShell>
  );
};

export default SkillsSection;
