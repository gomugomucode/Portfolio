import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import { siteConfig } from "@/lib/siteConfig";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Full Stack Developer Nepal | React, Next.js & AI Engineer"
        description="Anupam Baral is a Full Stack Developer & AI Engineer in Nepal. Specialized in React, Next.js, TypeScript, Python, Supabase, Firebase, and Solana."
        keywords="Full Stack Developer Nepal, React Developer Nepal, Next.js Developer, Python Developer, AI Developer Nepal, Supabase Developer, Firebase Developer"
        canonicalUrl={siteConfig.url}
      />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default Home;
