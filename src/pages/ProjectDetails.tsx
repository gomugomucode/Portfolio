import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Database, Cpu, Calendar, Shield, CheckCircle2, Image as ImageIcon, ChevronRight, BookOpen, Layers, Lightbulb, Scale } from "lucide-react";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/SectionShell";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { getProjectArchitectureNodes } from "@/data/architecture";
import { siteConfig } from "@/lib/siteConfig";
import {
  getProjectSchema,
  getBreadcrumbSchema,
  getWebPageSchema,
} from "@/lib/schema";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

export type { CaseStudy };


const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = id
    ? caseStudies[id] || Object.values(caseStudies).find((cs) => cs.slug === id)
    : null;

  if (!project) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-32 text-center flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <h1 className="font-display text-2xl font-medium tracking-tight text-foreground">
          Project Case Study Not Found
        </h1>
        <p className="text-sm text-muted-foreground max-w-md">
          The requested project case study could not be resolved.
        </p>
        <Button variant="outline" asChild className="gap-2 font-mono uppercase text-[11px] tracking-widest">
          <Link to="/projects">
            <ArrowLeft className="w-4 h-4" />
            Back to All Work
          </Link>
        </Button>
      </div>
    );
  }

  const url = `${siteConfig.url}/projects/${project.slug}`;
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Projects", item: "/projects" },
    { name: project.title, item: `/projects/${project.slug}` },
  ];

  const schemas = [
    getProjectSchema({
      title: project.title,
      description: project.subtitle,
      tags: project.tags,
      slug: project.slug,
      githubLink: project.githubLink,
      liveLink: project.liveLink,
      imageUrl: project.imageUrl,
    }),
    getBreadcrumbSchema(breadcrumbs),
    getWebPageSchema(
      project.seoTitle,
      project.seoDescription,
      url,
      breadcrumbs
    ),
  ];

  return (
    <SectionShell bordered={false}>
      <SEO
        title={project.seoTitle}
        description={project.seoDescription}
        keywords={project.keywords.join(", ")}
        canonicalUrl={url}
        ogImage={`${siteConfig.url}${project.imageUrl}`}
        ogType="article"
        schema={schemas}
      />

      {/* Visual Breadcrumb Trail */}
      <nav aria-label="Breadcrumb navigation" className="flex items-center gap-2 mb-6 label-mono text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" aria-hidden="true" />
        <Link to="/projects" className="hover:text-foreground transition-colors">Projects</Link>
        <ChevronRight className="w-3 h-3" aria-hidden="true" />
        <span className="text-foreground font-medium line-clamp-1">{project.title}</span>
      </nav>

      {/* Back CTA */}
      <div className="mb-12">
        <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to All Projects Archive
        </Link>
      </div>

      {/* Header Info */}
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="font-mono text-xs text-primary border-primary/30">
            Case Study • {project.year}
          </Badge>
          <span className="text-xs font-mono text-muted-foreground">{project.client}</span>
        </div>

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
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
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
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="w-full aspect-video border border-border/40 rounded-md overflow-hidden bg-muted mb-16 relative">
        <img
          src={project.imageUrl}
          alt={`Visual mockup of ${project.title}`}
          width={1200}
          height={675}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200";
          }}
        />
      </div>

      {/* Grid contents */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Metadata Rail */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
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
                Timeline / Year
              </span>
              <span className="text-sm font-medium text-foreground flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
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

          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Verified Performance Metrics
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

          {/* Contextual Link to Engineering Article */}
          {project.relatedArticleLink && (
            <Card className="p-6 bg-primary/[0.04] border-primary/20 flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" /> Related Engineering Log
              </span>
              <h4 className="font-display text-sm font-medium leading-snug">
                {project.relatedArticleTitle}
              </h4>
              <a
                href={project.relatedArticleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:underline"
              >
                Read Article on Medium →
              </a>
            </Card>
          )}
        </div>

        {/* Right Editorial Storytelling Section */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          {/* Problem */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xl font-medium tracking-tight text-foreground flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" aria-hidden="true" />
              1. The Problem
            </h3>
            <p className="text-body-sm sm:text-base leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Context & Requirements */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xl font-medium tracking-tight text-foreground flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" aria-hidden="true" />
              2. Context & Core Requirements
            </h3>
            <ul className="flex flex-col gap-2 pt-1">
              {project.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-md border border-border bg-card/40 text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" aria-hidden="true" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xl font-medium tracking-tight text-foreground flex items-center gap-2">
              <Database className="w-5 h-5 text-primary" aria-hidden="true" />
              3. The Technical Solution
            </h3>
            <p className="text-body-sm sm:text-base leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Key Features */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xl font-medium tracking-tight text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
              4. Key Capabilities & Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-md border border-border bg-card/40 text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture block & Visual Flow Diagram */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-xl font-medium tracking-tight text-foreground flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
              5. Architecture & System Flow Diagram
            </h3>

            {/* Visual SVG Flow Diagram */}
            <ArchitectureDiagram
              projectTitle={project.title}
              nodes={getProjectArchitectureNodes(project.id)}
            />

            <ul className="flex flex-col gap-3 text-body-sm sm:text-base pl-4 border-l border-border mt-2">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Trade-offs & Decisions */}
          <div className="flex flex-col gap-3 p-5 rounded-lg border border-border bg-muted/30">
            <h3 className="font-display text-base font-medium text-foreground flex items-center gap-2">
              <Scale className="w-4 h-4 text-primary" aria-hidden="true" />
              6. Technical Decisions & Trade-offs
            </h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed font-mono text-xs">
              {project.tradeoffs}
            </p>
          </div>

          {/* Screenshots Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="flex flex-col gap-4 pt-2">
              <h3 className="font-display text-xl font-medium tracking-tight text-foreground flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-primary" aria-hidden="true" />
                7. Screenshots & Interface Previews
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots.map((shot, idx) => (
                  <div key={idx} className="aspect-video rounded-md border border-border overflow-hidden bg-muted">
                    <img
                      src={shot}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      width={600}
                      height={337}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Lessons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
            <div className="flex flex-col gap-2">
              <h4 className="label-mono text-foreground flex items-center gap-1.5">
                Challenges
              </h4>
              <p className="text-body-sm leading-relaxed">
                {project.challenges}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="label-mono text-foreground flex items-center gap-1.5">
                Lessons learned
              </h4>
              <p className="text-body-sm leading-relaxed">
                {project.lessons}
              </p>
            </div>
          </div>

          {/* Future Improvements */}
          <div className="p-5 rounded-lg border border-primary/20 bg-primary/[0.03] flex flex-col gap-2">
            <h4 className="label-mono text-primary flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" aria-hidden="true" /> Future Improvements & Roadmap
            </h4>
            <p className="text-body-sm text-foreground/90 font-mono text-xs">
              {project.futureImprovements}
            </p>
          </div>
        </div>
      </div>

      {/* Internal Navigation Footer: Prev / Next */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-16 mt-20 border-t border-border">
        {project.id !== "01" ? (
          <Link
            to={`/project/0${parseInt(project.id) - 1}`}
            className="group flex flex-col gap-2 p-6 border border-border rounded-md bg-card hover:border-primary/50 transition-colors"
          >
            <span className="label-mono flex items-center gap-2">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
              Previous Case Study
            </span>
            <span className="font-display text-lg font-medium text-foreground">
              {caseStudies[`0${parseInt(project.id) - 1}`]?.title || "Previous"}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {project.id !== Object.keys(caseStudies).length.toString().padStart(2, "0") ? (
          <Link
            to={`/project/0${parseInt(project.id) + 1}`}
            className="group flex flex-col items-end gap-2 p-6 border border-border rounded-md bg-card hover:border-primary/50 transition-colors text-right"
          >
            <span className="label-mono flex items-center gap-2 justify-end">
              Next Case Study
              <ArrowLeft className="w-3.5 h-3.5 rotate-180 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-medium text-foreground">
              {caseStudies[`0${parseInt(project.id) + 1}`]?.title || "Next"}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </SectionShell>
  );
};

export default ProjectDetails;
