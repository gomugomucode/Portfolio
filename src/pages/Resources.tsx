import SEO from "@/components/SEO";
import ResourcesSection from "@/components/ResourcesSection";

const Resources = () => {
  return (
    <div className="space-y-20">
      <SEO 
        title="Developer Resources | Annupam Baral"
        description="Curated collection of developer resources, resume templates, and networking strategies."
        keywords="Developer Resources, ATS Resume, GitHub Guide, Annupam Baral Resources"
        canonicalUrl="https://anupambaral.com.np/resources"
      />
      <div className="pt-8">
        <ResourcesSection />
      </div>
    </div>
  );
};

export default Resources;
