import { motion } from "framer-motion";
import { Trophy, Rocket, Code2, GraduationCap, Sparkles, CheckCircle2, Milestone } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { SectionHeader, SectionShell } from "./layout/SectionShell";
import AnimatedSection from "./AnimatedSection";

export interface TimelineItem {
  id: string;
  year: string;
  quarter?: string;
  title: string;
  category: "Milestone" | "Hackathon" | "Production Release" | "Open Source" | "Active Learning" | "Future Goal";
  organization?: string;
  description: string;
  highlights: string[];
  techStack?: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: "t0-dlytica",
    year: "2026",
    quarter: "Q3 (July 2026)",
    title: "DLYTICA Data Analytics & AI Certification Training",
    category: "Active Learning",
    organization: "DLYTICA Academy (ISO 27001:2022 Certified)",
    description: "Completed intensive training & live workshops on Data Analytics, Artificial Intelligence, Python data pipelines, DevOps, and Cybersecurity in partnership with leading tech institutes.",
    highlights: [
      "Completed 1-Month Data & AI Training Program with high distinction",
      "Earned 3-Credit-Hour Certificate in Data Analytics with AI (Live Session)",
      "Participated in Career Guidance Workshop on AI, DevOps, & Cloud Security"
    ],
    techStack: ["Data Analytics", "Python", "Artificial Intelligence", "DevOps", "Cybersecurity"]
  },
  {
    id: "t1",
    year: "2026",
    quarter: "Q1 — Present",
    title: "AI Engineering & Solana Smart Contracts",
    category: "Active Learning",
    organization: "Self-Directed Research",
    description: "Deep-diving into machine learning model inference in Python, LLM structured JSON output validation, Retrieval-Augmented Generation (RAG), and Solana Rust Anchor program compression.",
    highlights: [
      "Building type-safe Python inference microservices with Pydantic",
      "Exploring LLM prompt engineering & deterministic schema enforcement",
      "Studying Solana zero-knowledge proof primitives and account compression"
    ],
    techStack: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Solana", "Rust"]
  },
  {
    id: "t2",
    year: "2025",
    quarter: "Q4",
    title: "Greenstar Suppliers Production Web Platform",
    category: "Production Release",
    organization: "Greenstar Suppliers, Nepal",
    description: "Architected and delivered a Next.js 16 product catalogue and multi-channel order inquiry web application for Nepal's leading entrance & home automation supplier.",
    highlights: [
      "Built multi-channel ordering routes (Direct Call, WhatsApp, Web Form)",
      "Persisted customer order inquiries in PostgreSQL via Prisma ORM",
      "Achieved sub-second page loads across mobile networks in Nepal"
    ],
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"]
  },
  {
    id: "t3",
    year: "2025",
    quarter: "Q2",
    title: "Yatra Solana Ride-Sharing Protocol",
    category: "Hackathon",
    organization: "Solana Global Hackathon Entry",
    description: "Designed and engineered an open-source decentralized ride-sharing engine on Solana with Rust smart programs, Web3.js signatures, and sub-50ms location signaling via Firebase RTDB.",
    highlights: [
      "Built atomic ride escrow smart program on Solana blockchain",
      "Achieved ~400ms transaction confirmation speeds with <$0.0001 gas cost",
      "Engineered driver reputation scoring ledger on-chain"
    ],
    techStack: ["Solana", "Rust", "Next.js", "Firebase RTDB", "Web3.js"]
  },
  {
    id: "t4",
    year: "2024",
    quarter: "Q3",
    title: "Decoupled E-Learning LMS Platform",
    category: "Production Release",
    organization: "Open Source Community",
    description: "Engineered a high-performance decoupled Learning Management System separating the React frontend client from a stateless Node.js/Express API and MySQL persistence store.",
    highlights: [
      "Reduced content initial load speeds to under 1.2 seconds globally",
      "Optimized nested relational MySQL queries by 40%",
      "Implemented stateless JWT authentication & session handling"
    ],
    techStack: ["React", "Node.js", "Express", "MySQL", "Vercel"]
  },
  {
    id: "t5",
    year: "2024",
    quarter: "Q1",
    title: "Web3 Loyalty Protocol DApp Release",
    category: "Open Source",
    organization: "Freelance Project",
    description: "Developed a Web3 customer loyalty rewards application on Solana that mints and issues program points directly to user cryptographic wallets upon purchase triggers.",
    highlights: [
      "Built instant SPL token minting and transfer settlement flows",
      "Integrated seamless Phantom & Solflare wallet connections",
      "Created real-time customer points balance dashboard"
    ],
    techStack: ["Solana", "Rust", "Next.js", "Web3.js", "Tailwind CSS"]
  },
  {
    id: "t6",
    year: "2023",
    quarter: "Q1",
    title: "Software Engineering & Full Stack Foundations",
    category: "Milestone",
    organization: "Independent Development",
    description: "Initiated intensive full-stack development trajectory focusing on JavaScript/TypeScript ecosystem, modern React frontend architectures, and Python backend programming.",
    highlights: [
      "Mastered React component patterns and state management",
      "Built full-stack CRUD applications with Node.js and SQL/NoSQL databases",
      "Adopted strict TypeScript typing practices across all projects"
    ],
    techStack: ["React", "TypeScript", "Python", "Node.js", "SQL"]
  }
];

const categoryIcons = {
  "Milestone": Milestone,
  "Hackathon": Trophy,
  "Production Release": Rocket,
  "Open Source": Code2,
  "Active Learning": Sparkles,
  "Future Goal": GraduationCap,
};

const categoryBadgeStyles = {
  "Milestone": "bg-muted text-foreground border-border",
  "Hackathon": "bg-amber-500/10 text-amber-500 border-amber-500/30",
  "Production Release": "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
  "Open Source": "bg-blue-500/10 text-blue-500 border-blue-500/30",
  "Active Learning": "bg-primary/10 text-primary border-primary/30",
  "Future Goal": "bg-purple-500/10 text-purple-500 border-purple-500/30",
};

export const DeveloperTimeline = () => {
  return (
    <SectionShell id="timeline">
      <AnimatedSection>
        <SectionHeader
          index="03 — Timeline"
          title="Career journey, milestones & learning trajectory."
        />

        <div className="relative pl-6 md:pl-8 border-l border-border/80 flex flex-col gap-10 mt-6">
          {timelineData.map((item, idx) => {
            const Icon = categoryIcons[item.category] || Milestone;
            const badgeStyle = categoryBadgeStyles[item.category];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="relative flex flex-col gap-3 group"
              >
                {/* Timeline Dot Indicator */}
                <div
                  className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary flex items-center justify-center group-hover:scale-125 transition-transform"
                  aria-hidden="true"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                {/* Timeline Header Badge & Year */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-primary">
                    {item.year} {item.quarter ? `• ${item.quarter}` : ""}
                  </span>
                  <Badge variant="outline" className={`font-mono text-[10px] uppercase tracking-wider ${badgeStyle}`}>
                    <Icon className="w-3 h-3 mr-1 inline-block" aria-hidden="true" />
                    {item.category}
                  </Badge>
                  {item.organization && (
                    <span className="text-xs font-mono text-muted-foreground">
                      @ {item.organization}
                    </span>
                  )}
                </div>

                {/* Content Card */}
                <Card className="p-5 md:p-6 flex flex-col gap-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 transition-colors">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="flex flex-col gap-2 pt-1 border-t border-border/40">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-foreground/90 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  {item.techStack && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-muted/60 text-[10px] font-mono text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>
    </SectionShell>
  );
};

export default DeveloperTimeline;
