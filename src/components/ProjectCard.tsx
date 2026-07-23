import { Link } from "react-router-dom";
import { ExternalLink, Github, BookOpen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import type { ProjectPreview } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectPreview;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group flex flex-col h-full border border-border rounded-md overflow-hidden bg-card hover:border-foreground/20 hover:[box-shadow:var(--e-2)] transition-all duration-300">
      <Link
        to={`/project/${project.index}`}
        className="block aspect-video overflow-hidden bg-muted relative w-full"
      >
        <img
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800";
          }}
        />
      </Link>

      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-primary">{project.index}</span>
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-[9px] px-1.5 py-0">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Link
          to={`/project/${project.index}`}
          className="block group-hover:text-primary transition-colors"
        >
          <h3 className="font-display text-xl font-medium tracking-tight text-foreground leading-snug line-clamp-1">
            {project.title}
          </h3>
        </Link>

        <p className="text-body-sm line-clamp-3 flex-1">{project.problem}</p>

        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border mt-auto">
          <Button variant="default" size="sm" className="h-8 text-[11px]" asChild>
            <Link to={`/project/${project.index}`}>
              <BookOpen className="w-3 h-3 mr-1.5" />
              Study
            </Link>
          </Button>
          {project.liveLink && (
            <Button variant="outline" size="sm" className="h-8 text-[11px]" asChild>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-1.5" />
                Live
              </a>
            </Button>
          )}
          {project.githubLink && (
            <Button variant="ghost" size="sm" className="h-8 text-[11px]" asChild>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3 mr-1.5" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};
