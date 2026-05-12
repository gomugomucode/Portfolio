import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Users, ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const tabs = [
  { id: "experience", label: "Engineering & Projects", icon: Briefcase },
  { id: "education", label: "Academic Background", icon: GraduationCap },
  { id: "leadership", label: "Mentorship & Open Source", icon: Users },
] as const;

type TabId = (typeof tabs)[number]["id"];

const ExperienceTab = () => (
  <div className="space-y-6">
    <ContentCard
      title="Scalable E-Learning Platform Architecture"
      description="Engineered a comprehensive Learning Management System (LMS) designed for high concurrency and robust resource delivery. Implemented a decoupled React frontend with a secure Node.js/Express RESTful API, backed by an optimized MySQL schema for complex relational querying."
      tags={["React", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "System Design"]}
      imageUrl="/elearning-preview.webp"
      liveLink="https://elearn-lake.vercel.app"
      githubLink="https://github.com/gomugomucode/elearn"
    />
    <ContentCard
      title="Web3 Decentralized Loyalty Protocol"
      description="Architected a Solana-based loyalty rewards decentralized application (dApp) for a Superteam Nepal bounty. Leveraged Next.js for SSR performance and integrated Web3.js to handle smart contract interactions and secure wallet authentication flows."
      tags={["Web3 Architecture", "Solana", "Next.js", "TypeScript", "Smart Contracts"]}
      imageUrl="/solana.webp"
      liveLink="https://solana-loyalty-d-app.vercel.app/"
      githubLink="https://github.com/gomugomucode/Solana-Loyalty-dApp"
    />
  </div>
);

const EducationTab = () => (
  <div className="space-y-6">
    <ContentCard
      title="Bachelor of Computer Applications (BCA)"
      subtitle="Butwal Kalika Campus · July 2023 – Present"
      description="Advancing through my 5th semester with a rigorous focus on software engineering principles, distributed systems, advanced database architecture, and modern application development paradigms."
      tags={["Software Engineering", "Algorithms", "Database Architecture", "System Design"]}
    />
    <ContentCard
      title="Civil Engineering Foundation (Secondary Education)"
      subtitle="Janasewa Secondary School"
      description="Acquired a strong analytical foundation in mathematics, structural analysis, and technical problem-solving, which heavily influences my logical approach to software architecture today."
      tags={["Applied Mathematics", "Analytical Thinking", "Structural Logic"]}
    />
  </div>
);

const LeadershipTab = () => (
  <div className="space-y-6">
    <ContentCard
      title="Technical Mentor: Web Technologies & DevOps"
      description="Spearheading technical workshops for university juniors, focusing on modern web standards (HTML5/CSS3), advanced version control strategies (Git workflows), and CI/CD deployment pipelines utilizing GitHub and Vercel."
      tags={["Mentorship", "CI/CD", "Git Workflows", "Vercel", "Technical Communication"]}
    />
    <ContentCard
      title="Digital Literacy & Fundamentals Instructor"
      description="Facilitating structured training sessions on essential digital paradigms, empowering students with the technical literacy required for modern academic and professional environments."
      tags={["Instructional Design", "Digital Literacy", "Public Speaking"]}
    />
  </div>
);

interface ContentCardProps {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveLink?: string;
  githubLink?: string;
}

const ContentCard = ({ title, subtitle, description, tags, imageUrl, liveLink, githubLink }: ContentCardProps) => (
  <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-emerald-500/40 transition-all duration-300 overflow-hidden flex flex-col shadow-lg shadow-black/10">
    {/* Optional Image Header */}
    {imageUrl && (
      <div className="w-full h-48 sm:h-64 overflow-hidden border-b border-slate-800">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
    )}

    <div className="p-5 md:p-6 flex flex-col flex-1">
      <h3 className="text-lg font-bold text-slate-100 mb-1 leading-tight">{title}</h3>
      {subtitle && <p className="text-sm text-emerald-500 font-mono mb-3">{subtitle}</p>}
      <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">{description}</p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-emerald-400 border border-slate-700/50">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Action Buttons for Projects */}
      {(liveLink || githubLink) && (
        <div className="flex flex-wrap gap-3 mt-auto pt-5 border-t border-slate-800/50">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black rounded-md transition-all border border-emerald-500/20 active:scale-95"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Deployment
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white rounded-md transition-all border border-slate-700 active:scale-95"
            >
              <Github className="w-3.5 h-3.5" />
              Source Code
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState<TabId>("experience");

  const content: Record<TabId, JSX.Element> = {
    experience: <ExperienceTab />,
    education: <EducationTab />,
    leadership: <LeadershipTab />,
  };

  return (
    <AnimatedSection>
      <section className="w-full max-w-3xl mx-auto px-4 pb-20">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
            Professional <span className="text-emerald-500">Trajectory</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500/20 rounded-full mx-auto" />
        </div>

        <div className="flex flex-col sm:flex-row gap-1 p-1.5 bg-slate-900/50 backdrop-blur-sm rounded-xl mb-8 border border-slate-800">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {content[activeTab]}
          </motion.div>
        </AnimatePresence>
      </section>
    </AnimatedSection>
  );
};

export default TabbedContent;