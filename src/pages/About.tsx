import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";

const About = () => {
  return (
    <div className="space-y-10">
      <SEO
        title="About Anupam Baral | Developer in Nepal"
        description="Learn more about Anupam Baral, a Full Stack Developer from Nepal with expertise in modern web technologies, Python, and AI/ML."
        keywords="Anupam Baral About, Developer in Nepal, React Developer, Full Stack Developer Nepal"
        canonicalUrl="https://anupambaral.com.np/about"
      />
      <h1 className="sr-only">About Anupam Baral | Developer in Nepal</h1>
      <div>
        <AboutSection />
      </div>
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Ready to collaborate? <Link to="/contact" className="text-primary underline">Contact me</Link> for freelance work and technical partnerships.
        </p>
      </div>
      <div>
        <SkillsSection />
      </div>
    </div>
  );
};

export default About;
