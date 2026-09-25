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

  const categoryIndexLabels: Record<string, string> = {
    frontend: "01 / FRONTEND",
    backend: "02 / BACKEND",
    ai: "03 / AI & ML",
    cloud: "04 / CLOUD & DB",
    devops: "05 / DEVOPS",
    blockchain: "06 / WEB3",
  };

  return (
    <SectionShell id="skills">
      <AnimatedSection>
        <SectionHeader
          index="Core Competencies"
          title="Domain Mastery & Technical Architecture"
          description="A systematic breakdown of software engineering capabilities, battle-tested technologies, and production systems engineered across the stack."
        />

        {/* 6-Card Domain Mastery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {expertiseCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`skill-card text-left transition-all duration-300 interactive-focus group cursor-pointer ${
                  isActive
                    ? "border-accent bg-foreground/[0.04] shadow-md -translate-y-1"
                    : "border-border-soft hover:border-border-strong"
                }`}
              >
                <span
                  className="skill-accent-bar"
                  style={isActive ? { transform: "scaleY(1)" } : undefined}
                />

                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-tech text-xs font-bold uppercase tracking-[0.18em] text-accent">
                    {categoryIndexLabels[cat.id] || "00 / CORE"}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      isActive ? "bg-accent text-white" : "bg-foreground/5 text-foreground/70 group-hover:text-accent"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground mb-2">
                  {cat.title}
                </h3>

                <p className="text-sm text-foreground/75 leading-relaxed line-clamp-2 mb-4">
                  {cat.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-soft/60">
                  {cat.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-full bg-foreground/[0.04] text-[10px] font-tech font-bold uppercase tracking-wider text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                  {cat.technologies.length > 3 && (
                    <span className="px-2 py-0.5 rounded-full bg-accent/10 text-[10px] font-tech font-bold text-accent">
                      +{cat.technologies.length - 3}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Domain Deep Dive Panel */}
        <div
          role="region"
          aria-label={`Detailed engineering specifications for ${selectedCategory.title}`}
          className="p-6 md:p-8 rounded-2xl border border-border-soft bg-card shadow-sm flex flex-col gap-6"
        >
          {/* Header Title & Icon */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border-soft">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                {(() => {
                  const Icon = selectedCategory.icon;
                  return <Icon className="w-6 h-6" aria-hidden="true" />;
                })()}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-tech text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Active Domain Focus
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-foreground">
                  {selectedCategory.title}
                </h3>
              </div>
            </div>
            <p className="text-body-sm text-foreground/80 max-w-xl">
              {selectedCategory.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technologies & Real Projects */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2.5">
                <span className="font-tech text-xs font-bold uppercase tracking-[0.18em] text-foreground/60">
                  Core Technologies &amp; Frameworks
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="default"
                      className="bg-foreground/[0.05] hover:bg-accent hover:text-white text-foreground border border-border-soft font-tech text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <span className="font-tech text-xs font-bold uppercase tracking-[0.18em] text-foreground/60">
                  Applied Real-World Projects
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory.realProjects.map((proj) => (
                    <span
                      key={proj}
                      className="px-3 py-1 rounded-full border border-border-soft bg-foreground/[0.03] text-xs font-tech font-bold uppercase tracking-wider text-foreground/80"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Problems Solved & Current Focus */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <span className="font-tech text-xs font-bold uppercase tracking-[0.18em] text-foreground/60">
                  Production Problems Solved
                </span>
                <ul className="flex flex-col gap-2.5">
                  {selectedCategory.problemsSolved.map((problem, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-body-sm text-foreground/85">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-accent/[0.06] border border-accent/20 flex flex-col gap-1.5 mt-1">
                <span className="font-tech text-xs font-bold uppercase tracking-[0.18em] text-accent flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" /> Active Focus
                </span>
                <p className="text-xs text-foreground/85 font-medium leading-relaxed">
                  {selectedCategory.currentFocus}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionShell>
  );
};

export default SkillsSection;
