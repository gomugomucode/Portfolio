import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const tabs = [
  { id: "experience", label: "Experience & Projects", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "leadership", label: "Leadership & Mentoring", icon: Users },
] as const;

type TabId = (typeof tabs)[number]["id"];

const ExperienceTab = () => (
  <div className="space-y-4">
    <ContentCard
      title="Full-Stack E-Learning Platform"
      description="Built a comprehensive e-learning management system for the college to facilitate online education and resource sharing."
      tags={["React", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "SQLite"]}
    />
    <ContentCard
      title="Solana Loyalty Rewards dApp"
      description="Developed a decentralized application for a Superteam Nepal bounty."
      tags={["Full-Stack Web3"]}
    />
  </div>
);

const EducationTab = () => (
  <div className="space-y-4">
    <ContentCard
      title="Bachelor of Computer Applications (BCA)"
      subtitle="Butwal Kalika Campus · July 2023 – Present · 5th Semester"
      description="Focusing on software engineering, database management, and web technologies."
      tags={[]}
    />
  </div>
);

const LeadershipTab = () => (
  <div className="space-y-4">
    <ContentCard
      title="Web Development & Deployment Mentor"
      description="Mentoring campus juniors in core web technologies (HTML, CSS) and modern version control/deployment workflows using Git, GitHub, and Vercel."
      tags={["HTML", "CSS", "Git", "GitHub", "Vercel"]}
    />
    <ContentCard
      title="Essential Computer Skills Trainer"
      description="Instructing bachelor students in fundamental computer literacy, covering the Microsoft Office suite (Word, Excel, PowerPoint) and basic design principles using Canva."
      tags={["MS Office", "Canva"]}
    />
  </div>
);

const ContentCard = ({
  title,
  subtitle,
  description,
  tags,
}: {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
}) => (
  <div className="bg-card border border-border rounded-xl p-5 md:p-6 hover:border-primary/40 transition-colors">
    <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
    {subtitle && <p className="text-sm text-primary font-mono mb-2">{subtitle}</p>}
    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
    {tags.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-primary border border-border">
            {tag}
          </span>
        ))}
      </div>
    )}
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
        <div className="flex flex-col sm:flex-row gap-1 p-1 bg-secondary rounded-xl mb-8 border border-border">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
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
