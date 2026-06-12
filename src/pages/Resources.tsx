import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ResourcesSection from "@/components/ResourcesSection";

const Resources = () => {
  return (
    <div className="space-y-20">
      <SEO
        title="Developer Resources | Anupam Baral"
        description="Curated collection of developer resources, resume templates, and networking strategies."
        keywords="Developer Resources, ATS Resume, GitHub Guide, Anupam Baral Resources"
        canonicalUrl="https://anupambaral.com.np/resources"
      />
      <h1 className="sr-only">Developer Resources | Anupam Baral</h1>
      <div className="pt-8">
        <ResourcesSection />
      </div>
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Need tailored support? <Link to="/contact" className="text-emerald-400 underline">Let's connect.</Link>
        </p>
      </div>
    </div>
  );
};

export default Resources;
