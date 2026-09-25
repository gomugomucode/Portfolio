import { Link } from "react-router-dom";
import { ArrowLeft, Cpu, Terminal, Sparkles, CheckCircle2, Layers, ShieldCheck, Database, FileText } from "lucide-react";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/SectionShell";
import { siteConfig } from "@/lib/siteConfig";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";

export interface AIProject {
  id: string;
  title: string;
  subtitle: string;
  category: "ML Inference" | "LLM Pipeline" | "Data Science";
  techStack: string[];
  description: string;
  keyFeatures: string[];
  problemSolved: string;
}

const aiProjects: AIProject[] = [
  {
    id: "ai-1",
    title: "Type-Safe AI Inference Gateway",
    subtitle: "Python FastAPI + Pydantic schema validation microservice",
    category: "ML Inference",
    techStack: ["Python", "FastAPI", "Pydantic", "TypeScript", "Zod", "Docker"],
    description: "Architected a type-safe API gateway bridging Python ML inference engines with TypeScript web clients. Enforces structural Pydantic runtime schema validation to eliminate undefined runtime errors.",
    keyFeatures: [
      "Sub-150ms inference response gateway with asynchronous route handlers",
      "Strict Pydantic & Zod schema validation across client-server boundaries",
      "Containerized Docker deployment isolating heavy ML dependencies"
    ],
    problemSolved: "Prevented untyped Python dictionary outputs from breaking React frontend UI renders."
  },
  {
    id: "ai-2",
    title: "Deterministic LLM Output Schema Engine",
    subtitle: "Structured JSON schema enforcement for LLM prompts",
    category: "LLM Pipeline",
    techStack: ["Python", "OpenAI API", "Prompt Engineering", "JSON Schema", "Pydantic"],
    description: "Designed a deterministic JSON schema wrapper for Large Language Model (LLM) APIs. Converts unstructured text responses into 100% compliant structured JSON data for downstream database storage.",
    keyFeatures: [
      "Guaranteed 100% schema compliance for extracted structured data",
      "Automated retry and fallback strategies for malformed model outputs",
      "Token usage & API cost tracking telemetry integration"
    ],
    problemSolved: "Eliminated JSON parse exceptions from non-deterministic LLM output streams."
  },
  {
    id: "ai-3",
    title: "Predictive Analytics & Feature Extraction Pipeline",
    subtitle: "Tabular dataset preprocessing and model evaluation",
    category: "Data Science",
    techStack: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib"],
    description: "Built end-to-end data preprocessing and classification pipelines using Pandas and Scikit-Learn. Performed feature engineering, missing value imputation, and model hyperparameter tuning.",
    keyFeatures: [
      "Automated data cleaning & normalisation for raw tabular datasets",
      "Scikit-Learn Random Forest & Logistic Regression classification models",
      "Cross-validation scoring & confusion matrix accuracy evaluation"
    ],
    problemSolved: "Transformed raw unstructured data files into high-accuracy predictive classification models."
  }
];

const AIPortfolio = () => {
  const url = `${siteConfig.url}/ai`;
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "AI Portfolio", item: "/ai" },
  ];

  const schemas = [
    getWebPageSchema(
      "AI & Machine Learning Engineering Portfolio | Anupam Baral",
      "Explore AI software pipelines, Python machine learning models, Pydantic schema gateways, and LLM implementations by Anupam Baral.",
      url,
      breadcrumbs
    ),
    getBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <SectionShell bordered={false}>
      <SEO
        title="AI Portfolio — Anupam Baral (@gomugomucode)"
        description="Dedicated AI portfolio of Anupam Baral (@gomugomucode): Python ML inference pipelines, Pydantic schema gateways, LLM integrations, and machine learning architectures."
        canonicalUrl={url}
        schema={schemas}
      />

      {/* Header & Back Link */}
      <div className="flex flex-col gap-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors w-fit">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Home
        </Link>

        <div>
          <span className="label-mono flex items-center gap-1.5 text-primary mb-3">
            <Cpu className="w-4 h-4" aria-hidden="true" /> AI & Machine Learning Showcase
          </span>
          <h1 className="heading-display">AI engineering & pipelines.</h1>
          <p className="text-body max-w-2xl mt-4">
            Engineering production-grade AI software, type-safe Python inference microservices, LLM schema enforcement, and machine learning data pipelines.
          </p>
        </div>

        {/* AI Stack Badges */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
          {["Python", "NumPy", "Pandas", "Scikit-Learn", "Pydantic", "FastAPI", "OpenAI API", "Prompt Engineering", "Docker"].map((tech) => (
            <Badge key={tech} variant="default" className="font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* AI Projects Grid */}
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
            Featured AI & ML Implementations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiProjects.map((project) => (
            <Card key={project.id} className="p-6 flex flex-col justify-between border-border bg-card/40 hover:border-primary/40 transition-colors gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="font-mono text-[10px] text-primary border-primary/30">
                    {project.category}
                  </Badge>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-col gap-2 pt-2 border-t border-border/40">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Key Features
                  </span>
                  <ul className="flex flex-col gap-1.5">
                    {project.keyFeatures.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-foreground/90 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-3 border-t border-border/40">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-muted/60 text-[10px] font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="p-3 rounded bg-primary/[0.04] border border-primary/20 text-[11px] font-mono text-primary">
                  <strong>Problem Solved:</strong> {project.problemSolved}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* AI Software Architecture Pipeline */}
        <div className="p-6 md:p-8 rounded-lg border border-border bg-card/60 backdrop-blur-sm flex flex-col gap-6 mt-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-semibold">
              Production System Architecture
            </span>
            <h3 className="font-display text-lg font-medium text-foreground">
              End-to-End Type-Safe AI Inference Pipeline
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center">
            <div className="p-4 rounded-md border border-border bg-background flex flex-col gap-1">
              <Database className="w-5 h-5 text-primary mx-auto mb-1" aria-hidden="true" />
              <span className="font-mono text-[10px] text-muted-foreground uppercase">Step 1</span>
              <span className="text-xs font-semibold text-foreground">NumPy / Pandas Data Preprocessing</span>
            </div>
            <div className="p-4 rounded-md border border-border bg-background flex flex-col gap-1">
              <Cpu className="w-5 h-5 text-primary mx-auto mb-1" aria-hidden="true" />
              <span className="font-mono text-[10px] text-muted-foreground uppercase">Step 2</span>
              <span className="text-xs font-semibold text-foreground">Scikit-Learn / LLM Model Inference</span>
            </div>
            <div className="p-4 rounded-md border border-border bg-background flex flex-col gap-1">
              <ShieldCheck className="w-5 h-5 text-primary mx-auto mb-1" aria-hidden="true" />
              <span className="font-mono text-[10px] text-muted-foreground uppercase">Step 3</span>
              <span className="text-xs font-semibold text-foreground">Pydantic Schema Validation</span>
            </div>
            <div className="p-4 rounded-md border border-border bg-background flex flex-col gap-1">
              <Terminal className="w-5 h-5 text-primary mx-auto mb-1" aria-hidden="true" />
              <span className="font-mono text-[10px] text-muted-foreground uppercase">Step 4</span>
              <span className="text-xs font-semibold text-foreground">FastAPI REST Gateway</span>
            </div>
            <div className="p-4 rounded-md border border-border bg-background flex flex-col gap-1">
              <FileText className="w-5 h-5 text-primary mx-auto mb-1" aria-hidden="true" />
              <span className="font-mono text-[10px] text-muted-foreground uppercase">Step 5</span>
              <span className="text-xs font-semibold text-foreground">React / Next.js Client Render</span>
            </div>
          </div>
        </div>

        {/* Future AI Roadmap */}
        <Card className="p-6 bg-gradient-to-r from-primary/[0.04] to-transparent border border-primary/20 flex flex-col gap-3">
          <h3 className="font-display text-base font-semibold text-foreground flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary" aria-hidden="true" />
            AI Engineering Future Roadmap
          </h3>
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Currently advancing local LLM inference optimizations (Ollama & vLLM), fine-tuning domain-specific models, building Retrieval-Augmented Generation (RAG) vector search pipelines, and designing autonomous Agentic workflows.
          </p>
        </Card>

        <div className="text-center pt-4">
          <Button variant="default" asChild className="gap-2">
            <Link to="/contact">
              Collaborate on AI Projects
            </Link>
          </Button>
        </div>
      </div>
    </SectionShell>
  );
};

export default AIPortfolio;
