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
  getProfilePageSchema,
  getWebSiteSchema,
  getFAQSchema,
} from "@/lib/schema";

const homepageFaqs = [
  {
    question: "What software stack does Anupam Baral specialize in?",
    answer:
      "Anupam Baral specializes in Full Stack web development using React, Next.js, TypeScript, Python, Node.js, Supabase, Firebase, and Solana Web3 development.",
  },
  {
    question: "Is Anupam Baral available for freelance software development?",
    answer:
      "Yes, Anupam Baral is available for freelance projects, AI integration consulting, full-stack application development, and Web3 Solana integrations worldwide.",
  },
  {
    question: "Where is Anupam Baral based?",
    answer:
      "Anupam Baral is based in Butwal, Nepal, working with global clients, tech startups, and open-source communities.",
  },
];

const Home = () => {
  const schemas = [
    getProfilePageSchema(),
    getWebSiteSchema(),
    getFAQSchema(homepageFaqs),
  ];

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Anupam Baral — Full-Stack Developer & AI Engineer | gomugomucode"
        description="Anupam Baral (@gomugomucode) is a Full-Stack Developer and AI Engineer from Nepal, building web applications, AI systems, backend services, and open-source projects."
        ogTitle="Anupam Baral — Full-Stack Developer & AI Engineer"
        ogDescription="Portfolio of Anupam Baral (@gomugomucode), Full-Stack Developer and AI Engineer from Nepal."
        keywords="Anupam Baral, gomugomucode, Full Stack Developer Nepal, AI Engineer Nepal, React Developer, Next.js Developer, Python Developer, Solana Developer"
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
