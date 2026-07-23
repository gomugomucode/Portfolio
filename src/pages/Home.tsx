import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EngineeringPhilosophySection from "@/components/EngineeringPhilosophySection";
import DeveloperTimeline from "@/components/DeveloperTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import GoogleReviews from "@/components/GoogleReviews";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import { siteConfig } from "@/lib/siteConfig";
import {
  getPersonSchema,
  getWebSiteSchema,
  getOrganizationSchema,
  getFAQSchema,
  getAggregateRatingSchema,
  getReviewSchema,
} from "@/lib/schema";
import { googleReviews } from "@/data/googleReviews";

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
    getPersonSchema(),
    getWebSiteSchema(),
    getOrganizationSchema(),
    getFAQSchema(homepageFaqs),
    getAggregateRatingSchema(googleReviews),
    ...getReviewSchema(googleReviews),
  ];

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Full Stack Developer Nepal | React, Next.js & AI Engineer"
        description="Anupam Baral is a Full Stack Developer & AI Engineer in Nepal. Specialized in React, Next.js, TypeScript, Python, Supabase, Firebase, and Solana."
        keywords="Full Stack Developer Nepal, React Developer Nepal, Next.js Developer, Python Developer, AI Developer Nepal, Supabase Developer, Firebase Developer"
        canonicalUrl={siteConfig.url}
        schema={schemas}
      />
      <HeroSection />
      <AboutSection />
      <EngineeringPhilosophySection />
      <DeveloperTimeline />
      <ProjectsSection />
      <SkillsSection />
      <PerformanceDashboard />
      <GoogleReviews />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default Home;
