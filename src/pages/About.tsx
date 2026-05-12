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
      <div>
        <AboutSection />
      </div>
      <div>
        <SkillsSection />
      </div>
      <div>

      </div>

    </div>
  );
};

export default About;
