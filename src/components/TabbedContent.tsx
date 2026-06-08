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

const featuredProjects = [
  {
    title: "Scalable E-Learning Platform Architecture",
    impact: "Full-stack Engineering • System Design",
    description:
      "Built a scalable LMS with React and Node.js, delivering fast course access, secure API routing, and modular platform architecture for modern education workflows.",
    tags: ["React", "Node.js", "MySQL", "Express", "Tailwind"],
    imageUrl: "/elearning-preview.webp",
    liveLink: "https://elearn-lake.vercel.app",
    githubLink: "https://github.com/gomugomucode/elearn",
  },
  {
    title: "Yatra - Solana Ride-Sharing Protocol",
    impact: "Web3 Engineering • Real-time Systems",
    description:
      "Designed a Solana ride-sharing protocol with resilient dispatch, on-chain trip coordination, and real-time Web3 user experience for scalable travel infrastructure.",
    tags: ["Solana", "Rust", "Firebase", "TypeScript", "Web3.js"],
    imageUrl: "/yatra.webp",
    liveLink: "https://yatraa-zeta.vercel.app/",
    githubLink: "https://github.com/gomugomucode/Yatra",
  },
  {
    title: "Web3 Decentralized Loyalty Protocol",
    impact: "Blockchain • Web3 Architecture",
    description:
      "Delivered a Solana-based loyalty dApp built with Next.js for high-performance rewards, secure smart contract flows, and seamless decentralized user engagement.",
    tags: ["Solana", "Next.js", "Web3.js", "TypeScript", "Rust"],
    imageUrl: "/solana.webp",
    liveLink: "https://solana-loyalty-d-app.vercel.app/",
    githubLink: "https://github.com/gomugomucode/Solana-Loyalty-dApp",
  },
];

const ExperienceTab = () => (
  <div className="space-y-12">
    {/* Experience Header */}
    <div className="relative p-8 rounded-3xl overflow-hidden border border-border bg-card/40 backdrop-blur-md">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Briefcase className="w-24 h-24 text-emerald-500" />
      </div>
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4">
          Engineering Portfolio
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
          Crafting Scalable <span className="text-emerald-500">Digital Solutions</span>
        </h3>
        <p className="text-muted-foreground text-sm md:text-base max-w-xl leading-relaxed">
          Focused on building high-performance applications with clean architecture,
          robust security, and exceptional user experiences.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border/50">
          {[
            { label: "Stack", value: "Full Stack" },
            { label: "Experience", value: "2+ Years" },
            { label: "Focus", value: "Architecture" },
            { label: "Projects", value: "10+ Total" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold mb-1">{stat.label}</p>
              <p className="text-sm font-semibold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Featured Projects */}
    <div className="space-y-10">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">Featured Case Studies</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="space-y-14">
        {featuredProjects.map((project, index) => (
          <ProjectCaseStudy
            key={project.title}
            reverse={index % 2 === 1}
            {...project}
          />
        ))}
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
  reverse?: boolean;
}

const ProjectCaseStudy = ({ title, impact, description, tags, imageUrl, liveLink, githubLink, reverse = false }: ProjectCaseStudyProps) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, ease: "easeOut" }}
    className="group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-[2rem] overflow-hidden hover:border-emerald-500/20 transition-all duration-700 shadow-2xl shadow-slate-950/10"
  >
    <div className={`grid gap-6 lg:gap-8 ${reverse ? "lg:grid-cols-[1fr_1.65fr]" : "lg:grid-cols-[1.65fr_1fr]"} min-h-[500px]`}>
      {/* Media Side */}
      <div className="relative overflow-hidden rounded-[2rem] border border-border/30 bg-slate-950/5 min-h-[450px] lg:min-h-[500px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>

      {/* Content Side */}
      <div className="p-8 lg:p-10 flex flex-col justify-between relative z-10 bg-card/20 backdrop-blur-sm">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-400 mb-4">
            {impact}
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            {title}
          </h3>

          <div className="flex flex-wrap gap-3 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-sm font-semibold px-4 py-2 rounded-full bg-muted/80 text-emerald-200 border border-border/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3 bg-emerald-500 text-slate-950 rounded-2xl hover:bg-emerald-400 transition-all duration-300 active:scale-95 shadow-lg shadow-emerald-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 bg-muted text-foreground rounded-2xl hover:bg-muted/80 transition-all duration-300 border border-border active:scale-95"
              >
                <Github className="w-4 h-4" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.article>
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
  <div className="bg-card/40 backdrop-blur-sm border border-border rounded-xl hover:border-emerald-500/40 transition-all duration-300 overflow-hidden flex flex-col shadow-lg shadow-black/10">
    {/* Optional Image Header */}
    {imageUrl && (
      <div className="w-full h-48 sm:h-64 overflow-hidden border-b border-border">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
    )}

    <div className="p-5 md:p-6 flex flex-col flex-1">
      <h3 className="text-lg font-bold text-foreground mb-1 leading-tight">{title}</h3>
      {subtitle && <p className="text-sm text-emerald-500 font-mono mb-3">{subtitle}</p>}
      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">{description}</p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-muted text-emerald-400 border border-border">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Action Buttons for Projects */}
      {(liveLink || githubLink) && (
        <div className="flex flex-wrap gap-3 mt-auto pt-5 border-t border-border/50">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white rounded-md transition-all border border-emerald-500/20 active:scale-95"
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
              className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground rounded-md transition-all border border-border active:scale-95"
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
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-20">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            Professional <span className="text-emerald-500 font-mono tracking-tighter">Trajectory_</span>
          </h2>
          <div className="w-12 h-1 bg-emerald-500/40 rounded-full mx-auto" />
        </div>

        <div className="flex flex-col sm:flex-row gap-1 p-1.5 bg-card/50 backdrop-blur-sm rounded-xl mb-12 border border-border">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${isActive
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
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
