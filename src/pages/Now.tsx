import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Code2, BookOpen, Target, Sparkles, CheckCircle2, Calendar } from "lucide-react";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/SectionShell";
import { siteConfig } from "@/lib/siteConfig";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";

const nowData = {
  lastUpdated: "July 23, 2026",
  location: "Butwal, Nepal (GMT+5:45)",
  availability: {
    status: "Available for Select Opportunities",
    details: "Accepting high-impact freelance projects, AI software consulting, and full-time senior engineering roles."
  },
  building: [
    {
      title: "Type-Safe AI Inference Gateway",
      description: "Engineering a Python + FastAPI microservice that bridges machine learning model inference with TypeScript Next.js clients using strict Pydantic and Zod runtime schema validations.",
      tags: ["Python", "FastAPI", "TypeScript", "Next.js", "Pydantic"]
    },
    {
      title: "Open Source Developer Tools",
      description: "Building developer utility libraries for rapid Next.js 16 App Router setup and Solana Web3 wallet transaction builders.",
      tags: ["TypeScript", "Solana", "Web3.js", "Vite"]
    }
  ],
  learning: [
    {
      topic: "Artificial Intelligence & LLM Pipelines",
      description: "Deepening expertise in Python machine learning workflows, Scikit-Learn model evaluation, Retrieval-Augmented Generation (RAG), and deterministic JSON output enforcement for LLMs."
    },
    {
      topic: "Solana Smart Program Optimization",
      description: "Studying Rust Anchor framework state compression, zero-knowledge proof primitives, and low-latency Solana account indexing."
    },
    {
      topic: "Next.js 16 & Server Action Patterns",
      description: "Exploring streaming server-side rendering, React 19 compiler optimization, and edge database connection pooling."
    }
  ],
  reading: [
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      note: "Studying reliable, scalable, and maintainable distributed data systems, consensus algorithms, and database replication."
    },
    {
      title: "Solana Architecture & Anchor Documentation",
      author: "Solana Labs",
      note: "Analyzing BPF bytecodes, account memory layouts, and transaction parallelization."
    }
  ],
  goals: [
    "Publish 3 high-impact technical engineering deep dives on Medium.",
    "Ship 2 open-source AI & Next.js developer tools to GitHub.",
    "Collaborate with international startups on production full-stack & AI architectures."
  ]
};

const Now = () => {
  const url = `${siteConfig.url}/now`;
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Now", item: "/now" },
  ];

  const schemas = [
    getWebPageSchema(
      "What I'm Doing Now | Anupam Baral",
      "What Anupam Baral is currently building, learning, reading, and working on.",
      url,
      breadcrumbs
    ),
    getBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <SectionShell bordered={false}>
      <SEO
        title="Now — Anupam Baral (@gomugomucode)"
        description="What Anupam Baral (@gomugomucode) is currently building, learning, reading, and working on right now."
        canonicalUrl={url}
        schema={schemas}
      />

      {/* Header & Back Link */}
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-full border border-border">
            <Clock className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
            <span>Last updated: {nowData.lastUpdated}</span>
          </div>
        </div>

        <div>
          <span className="label-mono block mb-3">06 — Current Focus</span>
          <h1 className="heading-display">What I'm doing now.</h1>
          <p className="text-body max-w-2xl mt-4">
            This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-primary underline">/now page</a> inspired by Derek Sivers. It details my active software projects, learning focus, technical reading, and current availability.
          </p>
        </div>

        {/* Availability Banner */}
        <Card className="p-6 bg-gradient-to-r from-primary/[0.08] to-transparent border-primary/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase tracking-wider">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {nowData.availability.status}
            </div>
            <p className="text-body-sm text-foreground/90 font-medium mt-1">
              {nowData.availability.details}
            </p>
          </div>
          <Button variant="default" asChild className="gap-2 shrink-0">
            <Link to="/contact">
              Get in Touch
            </Link>
          </Button>
        </Card>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: What I'm Building & Goals */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          {/* Building Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" aria-hidden="true" />
              What I'm Building
            </h2>
            <div className="flex flex-col gap-4">
              {nowData.building.map((item) => (
                <Card key={item.title} className="p-5 flex flex-col gap-3">
                  <h3 className="font-display text-base font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="default" className="text-[10px] font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Goals Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" aria-hidden="true" />
              Current Goals & Objectives
            </h2>
            <Card className="p-6 flex flex-col gap-3">
              <ul className="flex flex-col gap-3">
                {nowData.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-body-sm text-foreground/90">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* Right Column: Learning & Reading */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          {/* Learning Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
              What I'm Learning
            </h2>
            <div className="flex flex-col gap-3">
              {nowData.learning.map((item) => (
                <Card key={item.topic} className="p-5 flex flex-col gap-2">
                  <h3 className="font-display text-sm font-semibold text-primary font-mono">
                    {item.topic}
                  </h3>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Reading Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" aria-hidden="true" />
              What I'm Reading
            </h2>
            <div className="flex flex-col gap-3">
              {nowData.reading.map((book) => (
                <Card key={book.title} className="p-5 flex flex-col gap-2">
                  <div className="flex flex-col">
                    <h3 className="font-display text-base font-medium text-foreground">
                      {book.title}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">
                      by {book.author}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                    {book.note}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

export default Now;
