import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import AboutSection from "@/components/AboutSection";
import DeveloperTimeline from "@/components/DeveloperTimeline";
import CertificatesSection from "@/components/CertificatesSection";
import SkillsSection from "@/components/SkillsSection";
import { siteConfig } from "@/lib/siteConfig";
import {
  getPersonSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";

const About = () => {
  const url = `${siteConfig.url}/about`;
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "About", item: "/about" },
  ];

  const schemas = [
    getPersonSchema(),
    getWebPageSchema(
      "About Anupam Baral | Full Stack Developer & AI Engineer Nepal",
      "Learn about Anupam Baral, a Full Stack Developer and AI Engineer based in Nepal specializing in React, Next.js, Python, Supabase, and Solana.",
      url,
      breadcrumbs
    ),
    getBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <div className="space-y-10">
      <SEO
        title="About Anupam Baral | Full Stack Developer & AI Engineer Nepal"
        description="Learn about Anupam Baral, a Full Stack Developer and AI Engineer based in Nepal with expertise in React, Next.js, Python, TypeScript, Supabase, and Solana."
        keywords="About Anupam Baral, Software Engineer Nepal, React Developer Nepal, Full Stack Developer Nepal, Python Developer"
        canonicalUrl={url}
        schema={schemas}
      />
      <h1 className="sr-only">About Anupam Baral | Full Stack Developer Nepal</h1>
      <div>
        <AboutSection />
      </div>
      <div>
        <DeveloperTimeline />
      </div>
      <div>
        <CertificatesSection />
      </div>
      <div className="text-center py-6">
        <p className="text-sm text-muted-foreground">
          Ready to collaborate? <Link to="/contact" className="text-primary underline font-medium">Contact me</Link> for freelance work, SaaS development, and technical partnerships.
        </p>
      </div>
      <div>
        <SkillsSection />
      </div>
    </div>
  );
};

export default About;
