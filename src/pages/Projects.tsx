import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => {
  return (
    <div className="space-y-20">
      <SEO
        title="Projects by Anupam Baral | React, Python & AI/ML"
        description="Explore projects built by Anupam Baral, featuring scalable web applications, AI/ML integrations, and open-source contributions."
        keywords="Anupam Baral Projects, gomugomucode GitHub, React Projects, AI/ML Developer Nepal"
        canonicalUrl="https://anupambaral.com.np/projects"
      />
      <h1 className="sr-only">Projects by Anupam Baral | React, Python & AI/ML</h1>
      <div className="pt-8">
        <ProjectsSection />
      </div>
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Want to discuss a project? <Link to="/contact" className="text-primary underline">Reach out here.</Link>
        </p>
      </div>
    </div>
  );
};

export default Projects;
