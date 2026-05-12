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
  <div className="space-y-12">
    {/* Experience Header */}
    <div className="relative p-8 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/20 backdrop-blur-md">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Briefcase className="w-24 h-24 text-emerald-500" />
      </div>
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4">
          Engineering Portfolio
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
          Crafting Scalable <span className="text-emerald-500">Digital Solutions</span>
        </h3>
        <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
          Focused on building high-performance applications with clean architecture, 
          robust security, and exceptional user experiences. 
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800/50">
          {[
            { label: "Stack", value: "Full Stack" },
            { label: "Experience", value: "2+ Years" },
            { label: "Focus", value: "Architecture" },
            { label: "Projects", value: "10+ Total" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1">{stat.label}</p>
              <p className="text-sm font-semibold text-slate-200">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Featured Projects */}
    <div className="space-y-10">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-800" />
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Featured Case Studies</span>
        <div className="h-px flex-1 bg-slate-800" />
      </div>

      <div className="space-y-8">
        <ProjectCaseStudy
          title="Scalable E-Learning Platform Architecture"
          impact="Full-stack Engineering • System Design"
          description="Engineered a comprehensive Learning Management System (LMS) designed for high concurrency and robust resource delivery. Implemented a decoupled React frontend with a secure Node.js/Express RESTful API, backed by an optimized MySQL schema for complex relational querying."
          tags={["React", "Node.js", "MySQL", "Express", "Tailwind"]}
          imageUrl="/elearning-preview.webp"
          liveLink="https://elearn-lake.vercel.app"
          githubLink="https://github.com/gomugomucode/elearn"
          stats={[
            { label: "Tech", value: "MERN+MySQL" },
            { label: "Role", value: "Lead Dev" }
          ]}
        />
        <ProjectCaseStudy
          title="Web3 Decentralized Loyalty Protocol"
          impact="Blockchain • Web3 Architecture"
          description="Architected a Solana-based loyalty rewards decentralized application (dApp) for a Superteam Nepal bounty. Leveraged Next.js for SSR performance and integrated Web3.js to handle smart contract interactions and secure wallet authentication flows."
          tags={["Solana", "Next.js", "Web3.js", "TypeScript", "Rust"]}
          imageUrl="/solana.webp"
          liveLink="https://solana-loyalty-d-app.vercel.app/"
          githubLink="https://github.com/gomugomucode/Solana-Loyalty-dApp"
          stats={[
            { label: "Chain", value: "Solana" },
            { label: "Outcome", value: "Bounty Win" }
          ]}
        />
      </div>
    </div>
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

interface ProjectCaseStudyProps {
  title: string;
  impact: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveLink?: string;
  githubLink?: string;
  stats?: { label: string; value: string }[];
}

const ProjectCaseStudy = ({ title, impact, description, tags, imageUrl, liveLink, githubLink, stats }: ProjectCaseStudyProps) => (
  <div className="group relative bg-slate-900/30 backdrop-blur-sm border border-slate-800/60 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 shadow-2xl shadow-black/20">
    <div className="flex flex-col lg:flex-row">
      {/* Media Side */}
      <div className="lg:w-2/5 relative h-56 lg:h-auto overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 to-transparent z-10" />
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-4 left-4 z-20 flex gap-2">
          {stats?.map((stat) => (
            <div key={stat.label} className="px-2 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-[9px] font-mono text-slate-300">
              <span className="text-slate-500 uppercase">{stat.label}:</span> {stat.value}
            </div>
          ))}
        </div>
      </div>

      {/* Content Side */}
      <div className="p-6 lg:p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1">{impact}</p>
            <h3 className="text-xl font-bold text-white tracking-tight leading-tight">{title}</h3>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-8">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800/40 text-slate-300 border border-slate-700/50">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-bold px-5 py-2.5 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all active:scale-95"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              VIEW PROJECT
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-bold px-5 py-2.5 bg-slate-800 text-slate-200 rounded-lg hover:bg-slate-700 hover:text-white transition-all border border-slate-700 active:scale-95"
            >
              <Github className="w-3.5 h-3.5" />
              CODEBASE
            </a>
          )}
        </div>
      </div>
    </div>
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
      <section className="w-full max-w-4xl mx-auto px-4 pb-20">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Professional <span className="text-emerald-500 font-mono tracking-tighter">Trajectory_</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500/40 rounded-full mx-auto" />
        </div>

        <div className="flex flex-col sm:flex-row gap-1 p-1.5 bg-slate-900/50 backdrop-blur-sm rounded-xl mb-12 border border-slate-800">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${isActive
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {content[activeTab]}
          </motion.div>
        </AnimatePresence>
      </section>
    </AnimatedSection>
  );
};

export default TabbedContent;