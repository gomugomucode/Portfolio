import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Anupam Baral",
  "alternateName": "gomugomucode",
  "url": "https://anupambaral.com.np",
  "jobTitle": "Full Stack Developer",
  "sameAs": [
    "https://github.com/gomugomucode",
    "https://www.linkedin.com/in/gomugomucode/"
  ],
  "knowsAbout": [
    "React",
    "TypeScript",
    "Python",
    "Artificial Intelligence",
    "Machine Learning",
    "Full Stack Development"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Nepal"
  }
};

const Home = () => {
  return (
    <div className="space-y-20">
      <SEO
        title="Anupam Baral (gomugomucode) | Full Stack Developer Nepal"
        description="Anupam Baral (gomugomucode) is a Full Stack Developer & AI/ML Engineer from Nepal specializing in React, TypeScript, and Python."
        keywords="Anupam Baral, gomugomucode, Developer in Nepal, React Developer Nepal, TypeScript Engineer, AI/ML Builder, Python Developer Nepal"
        schema={personSchema}
      />
      <HeroSection />
    </div>
  );
};

export default Home;
