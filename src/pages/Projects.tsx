import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ExternalLink, Github, BookOpen } from "lucide-react";
import SEO from "@/components/SEO";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/SectionShell";
import AnimatedSection from "@/components/AnimatedSection";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.problem.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag === "All" || project.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <SectionShell bordered={false}>
      <SEO
        title="Projects by Anupam Baral | React, Python & AI/ML"
        description="Explore projects built by Anupam Baral, featuring scalable web applications, AI/ML integrations, and open-source contributions."
        keywords="Anupam Baral Projects, gomugomucode GitHub, React Projects, AI/ML Developer Nepal"
        canonicalUrl="https://anupambaral.com.np/projects"
      />

      <AnimatedSection>
        <div className="flex flex-col gap-6 mb-16 max-w-2xl">
          <span className="label-mono">03 — Complete Archive</span>
          <h1 className="heading-display">All selected work.</h1>
          <p className="text-body-sm">
            A comprehensive list of case studies, open source contributions, and client projects built with React, Node, Python, and Solana.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between items-start md:items-center">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-md border border-border bg-background text-sm interactive-focus placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wide transition-colors interactive-focus ${
                  selectedTag === tag
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, i) => (
          <AnimatedSection key={project.index} delay={i * 0.05}>
            <article className="group flex flex-col h-full border border-border rounded-md overflow-hidden bg-card hover:border-foreground/20 transition-colors duration-300">
              <Link
                to={`/project/${project.index}`}
                className="block aspect-video overflow-hidden bg-muted relative"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
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
                      <Badge key={tag} variant="secondary" className="text-[9px] px-1.5 py-0">
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
          </AnimatedSection>
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full py-20 flex flex-col items-center justify-center text-center gap-4">
            <p className="text-body-sm text-muted-foreground">
              No projects found matching your search and filter criteria.
            </p>
            <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedTag("All"); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <div className="text-center mt-20">
        <p className="text-sm text-muted-foreground">
          Want to discuss a project? <Link to="/contact" className="text-primary hover:underline">Reach out here.</Link>
        </p>
      </div>
    </SectionShell>
  );
};

export default Projects;
