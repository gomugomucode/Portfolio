import { Github, ExternalLink, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { SectionHeader, SectionShell } from "./layout/SectionShell";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  return (
    <SectionShell id="work">
      <AnimatedSection>
        <SectionHeader index="04 — Selected work" title="Case studies." />
      </AnimatedSection>

      <div className="flex flex-col gap-20 md:gap-28">
        {projects.map((project, i) => {
          const reversed = i % 2 === 1;

          return (
            <AnimatedSection key={project.index} delay={i * 0.05}>
              <article
                key={project.index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start group"
              >
                <div
                  className={cn(
                    "lg:col-span-7 flex flex-col",
                    reversed ? "lg:col-start-6 lg:order-2" : "lg:order-1",
                  )}
                >
                  <Link
                    to={`/project/${project.index}`}
                    className="block aspect-[16/10] w-full rounded-md border border-border overflow-hidden bg-muted"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500 ease-out"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200";
                      }}
                    />
                  </Link>
                </div>

                <div
                  className={cn(
                    "lg:col-span-5 flex flex-col gap-4",
                    reversed ? "lg:col-start-1 lg:row-start-1 lg:order-1" : "lg:order-2",
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-sm text-primary">{project.index}</span>
                    <div className="flex items-baseline gap-2 text-right">
                      <span className="label-mono">{project.metric.label}</span>
                      <span className="font-mono text-sm text-foreground">{project.metric.value}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl md:text-[1.75rem] font-medium tracking-tight text-foreground leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-body-sm text-subtle-foreground">{project.problem}</p>

                  <p className="text-body-sm">{project.impact}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <Button variant="default" size="sm" asChild>
                      <Link to={`/project/${project.index}`}>
                        <BookOpen className="w-3.5 h-3.5" />
                        Case study
                      </Link>
                    </Button>
                    {project.liveLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live
                        </a>
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5" />
                          Source
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection delay={0.2}>
        <div className="mt-20 flex justify-center">
          <Button variant="outline" asChild className="group">
            <Link to="/projects" className="gap-2 font-mono uppercase tracking-widest text-[11px]">
              View All Projects
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Link>
          </Button>
        </div>
      </AnimatedSection>
    </SectionShell>
  );
};

export default ProjectsSection;
