import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anupam Baral",
  alternateName: "gomugomucode",
  url: "https://anupambaral.com.np",
  jobTitle: "Full Stack Developer & AI/ML Engineer",
  sameAs: [
    "https://github.com/gomugomucode",
    "https://www.linkedin.com/in/gomugomucode/",
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Python",
    "Artificial Intelligence",
    "Machine Learning",
    "Full Stack Development",
    "Solana Blockchain",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "Nepal",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Anupam Baral Portfolio",
  url: "https://anupambaral.com.np",
};

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Anupam Baral — Full Stack Developer & AI Engineer"
        description="I engineer production-ready web applications and intelligent systems. Based in Nepal, specializing in React, TypeScript, Node.js, and Python ML pipelines."
        keywords="Anupam Baral, gomugomucode, Developer in Nepal, React Developer Nepal, TypeScript Engineer, AI/ML Builder, Python Developer Nepal"
        schema={[personSchema, websiteSchema]}
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
