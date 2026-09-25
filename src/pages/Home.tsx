import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EngineeringPhilosophySection from "@/components/EngineeringPhilosophySection";
import DeveloperTimeline from "@/components/DeveloperTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesSection from "@/components/CertificatesSection";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import GoogleReviews from "@/components/GoogleReviews";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import { siteConfig } from "@/lib/siteConfig";
import {
  getPersonSchema,
  getWebSiteSchema,
} from "@/lib/schema";

const Home = () => {
  const schemas = [
    getPersonSchema(),
    getWebSiteSchema(),
  ];

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Anupam Baral (@gomugomucode) — Full-Stack Developer & AI Engineer"
        description="Official portfolio of Anupam Baral (@gomugomucode), a Full-Stack Developer and AI Engineer from Nepal building web applications, AI systems, and software projects."
        canonicalUrl={`${siteConfig.url}/`}
        schema={schemas}
      />
      <HeroSection />
      <AboutSection />
      <EngineeringPhilosophySection />
      <DeveloperTimeline />
      <ProjectsSection />
      <SkillsSection />
      <CertificatesSection />
      <PerformanceDashboard />
      <GoogleReviews />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default Home;
