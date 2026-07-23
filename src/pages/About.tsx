import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import { siteConfig } from "@/lib/siteConfig";

const About = () => {
  return (
    <div className="space-y-10">
      <SEO
        title="About Anupam Baral | Full Stack Developer & AI Engineer Nepal"
        description="Learn about Anupam Baral, a Full Stack Developer and AI Engineer based in Nepal with expertise in React, Next.js, Python, TypeScript, Supabase, and Solana."
        keywords="About Anupam Baral, Software Engineer Nepal, React Developer Nepal, Full Stack Developer Nepal, Python Developer"
        canonicalUrl={`${siteConfig.url}/about`}
      />
      <h1 className="sr-only">About Anupam Baral | Full Stack Developer Nepal</h1>
      <div>
        <AboutSection />
      </div>
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Ready to collaborate? <Link to="/contact" className="text-primary underline">Contact me</Link> for freelance work, SaaS development, and technical partnerships.
        </p>
      </div>
      <div>
        <SkillsSection />
      </div>
    </div>
  );
};

export default About;
