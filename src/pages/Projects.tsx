import SEO from "@/components/SEO";
import TabbedContent from "@/components/TabbedContent";


const Projects = () => {
  return (
    <div className="space-y-20">
      <SEO
        title="Projects by Anupam Baral | React, Python & AI/ML"
        description="Explore projects built by Anupam Baral, featuring scalable web applications, AI/ML integrations, and open-source contributions."
        keywords="Anupam Baral Projects, gomugomucode GitHub, React Projects, AI/ML Developer Nepal"
        canonicalUrl="https://anupambaral.com.np/projects"
      />
      <div className="pt-8">
        <TabbedContent />
      </div>

    </div>
  );
};

export default Projects;
