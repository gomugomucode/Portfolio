import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import SEO from "@/components/SEO";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/SectionShell";
import AnimatedSection from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import GitHubSection from "@/components/GitHubSection";
import { siteConfig } from "@/lib/siteConfig";
import {
  getBreadcrumbSchema,
  getWebPageSchema,
  getProjectSchema,
} from "@/lib/schema";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"featured" | "newest">("featured");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    let filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.problem.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag === "All" || project.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });

    if (sortOrder === "newest") {
      filtered = filtered.slice().reverse();
    }

    return filtered;
  }, [searchQuery, selectedTag, sortOrder]);

  const url = `${siteConfig.url}/projects`;
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Projects", item: "/projects" },
  ];

  const projectSchemas = projects.map((p) =>
    getProjectSchema({
      title: p.title,
      description: p.problem,
      tags: p.tags,
      slug: p.slug,
      githubLink: p.githubLink,
      liveLink: p.liveLink,
      imageUrl: p.imageUrl,
    })
  );

  const schemas = [
    getBreadcrumbSchema(breadcrumbs),
    getWebPageSchema(
      "Projects by Anupam Baral (@gomugomucode) | Full Stack & AI Case Studies",
      "Explore projects built by Anupam Baral, featuring scalable web applications, AI/ML integrations, and Solana Web3 software.",
      url,
      breadcrumbs
    ),
    ...projectSchemas,
  ];

  return (
    <SectionShell bordered={false}>
      <SEO
        title="Projects — Anupam Baral (@gomugomucode)"
        description="Explore production projects built by Anupam Baral (@gomugomucode), featuring scalable web applications, AI/ML integrations, and open-source contributions."
        canonicalUrl={url}
        schema={schemas}
      />

      <AnimatedSection>
        <div className="flex flex-col gap-6 mb-16 max-w-2xl">
          <span className="label-mono">03 — Complete Archive</span>
          <h1 className="heading-display">All selected work.</h1>
          <p className="text-body-sm">
            A comprehensive list of case studies, open source contributions, and client projects built with React, Next.js, Python, Supabase, and Solana.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between items-start md:items-end">
          <div className="flex flex-col gap-4 w-full md:max-w-md">
            <div className="relative w-full">
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

          <div className="flex flex-col gap-2 shrink-0">
            <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Sort By</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "featured" | "newest")}
              className="h-10 px-3 rounded-md border border-border bg-background text-sm interactive-focus"
            >
              <option value="featured">Featured First</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, i) => (
          <AnimatedSection key={project.index} delay={i * 0.05}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full py-20 flex flex-col items-center justify-center text-center gap-4 border border-border border-dashed rounded-md bg-muted/30">
            <p className="text-body-sm text-muted-foreground">
              No projects found matching your search and filter criteria.
            </p>
            <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedTag("All"); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <div className="mt-16">
        <GitHubSection />
      </div>

      <div className="text-center mt-16">
        <p className="text-sm text-muted-foreground">
          Want to discuss a project? <Link to="/contact" className="text-primary hover:underline">Reach out here.</Link>
        </p>
      </div>
    </SectionShell>
  );
};

export default Projects;
