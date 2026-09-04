import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, type ProjectPreview } from "@/data/projects";
import { Button } from "./ui/button";
import { SectionShell } from "./layout/SectionShell";

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

const projectMetadata: Record<string, { category: string; year: string; badge: string }> = {
  "01": { category: "EdTech & LMS", year: "2024", badge: "Case Study" },
  "02": { category: "Solana Ride-Sharing", year: "2024", badge: "Live Protocol" },
  "03": { category: "Web3 Loyalty Protocol", year: "2023", badge: "Live DApp" },
  "04": { category: "Automation Solutions", year: "2025", badge: "Company Website" },
  "05": { category: "Creative Agency", year: "2026", badge: "Live Project" },
};

const headingContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.1,
    },
  },
};

const charVariants: Variants = {
  hidden: { y: "115%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: EASING,
    },
  },
};

const textFadeVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.35,
      ease: EASING,
    },
  },
};

const cardMotionVariants: Variants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASING,
    },
  },
};

interface WorkCardProps {
  project: ProjectPreview;
  isReversed?: boolean;
  className?: string;
}

const WorkCard = ({ project, isReversed = false, className = "" }: WorkCardProps) => {
  const meta = projectMetadata[project.index] || {
    category: "Full Stack",
    year: "2026",
    badge: "Featured Project",
  };

  const projectLink = project.slug ? `/projects/${project.slug}` : `/projects/${project.index}`;

  // Client websites should not render repository links
  const isClientWebsite =
    project.slug === "greenstar-suppliers" ||
    project.slug === "yarshabyte-agency" ||
    meta.badge === "Company Website" ||
    meta.badge === "Live Project" ||
    !project.githubLink ||
    project.githubLink.trim() === "";

  const hasRepoLink = !isClientWebsite && Boolean(project.githubLink && project.githubLink.trim() !== "");

  return (
    <motion.article
      variants={cardMotionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-stretch ${className}`}
    >
      {/* Box 1: Image Showcase Box */}
      <div
        className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-foreground/10 bg-card shadow-[0_16px_50px_rgba(26,24,22,0.06)] hover:shadow-[0_24px_70px_rgba(26,24,22,0.12)] hover:border-foreground/20 transition-all duration-500 min-h-[19rem] sm:min-h-[22rem] lg:min-h-[27rem] xl:min-h-[29rem] flex flex-col ${
          isReversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Link
          to={projectLink}
          aria-label={`Open case study for ${project.title}`}
          className="relative block w-full h-full focus-visible:outline-none flex-1 overflow-hidden"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-[1.03]"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200";
            }}
          />
          {/* Ambient vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />

          {/* Floating Index Badge */}
          <span className="pointer-events-none absolute left-4 top-4 sm:left-6 sm:top-6 rounded-full bg-background/90 backdrop-blur-md px-3.5 py-1 text-xs font-mono font-bold tracking-widest text-foreground border border-foreground/10 shadow-sm">
            {project.index}
          </span>
        </Link>
      </div>

      {/* Box 2: Detail Box (Title, Description, Tech Stack, Live Site, Repo) */}
      <div
        className={`group relative rounded-2xl sm:rounded-3xl border border-foreground/10 bg-card p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[0_16px_50px_rgba(26,24,22,0.06)] hover:shadow-[0_24px_70px_rgba(26,24,22,0.12)] hover:border-foreground/20 transition-all duration-500 flex flex-col justify-between ${
          isReversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {/* Top Meta Row */}
        <div className="flex items-center justify-between gap-4 text-xs font-mono font-semibold uppercase tracking-[0.16em] text-muted-foreground pb-4 border-b border-border/40">
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-primary" />
            <span className="truncate text-foreground/90 font-medium">{meta.category}</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-[0.7rem] font-bold">
              {meta.badge}
            </span>
            <span>{meta.year}</span>
          </div>
        </div>

        {/* Main Content Info */}
        <div className="py-6 sm:py-7 flex-1 flex flex-col justify-center">
          <Link to={projectLink} className="block focus-visible:outline-none group/title">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-[2.1rem] xl:text-[2.35rem] font-medium uppercase leading-[1.05] tracking-tight text-foreground group-hover/title:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </Link>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-subtle-foreground">
            {project.problem}
          </p>

          {/* Tech Stack */}
          <div className="mt-6 sm:mt-7">
            <p className="text-[0.7rem] font-mono font-bold uppercase tracking-[0.18em] text-muted-foreground mb-2.5">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-foreground/12 bg-muted/40 hover:bg-muted/70 backdrop-blur-sm px-3 py-1 text-[0.72rem] font-mono uppercase tracking-wider text-foreground/80 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links Row (Live Site, Repo, Case Study) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-border/40">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/80 hover:bg-primary hover:text-primary-foreground hover:border-primary px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-foreground transition-all duration-200 active:scale-95 shadow-xs group/btn"
                aria-label={`Visit live site for ${project.title}`}
              >
                <span>Live Site</span>
                <ExternalLink className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            )}

            {hasRepoLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/80 hover:bg-foreground hover:text-background hover:border-foreground px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-foreground transition-all duration-200 active:scale-95 shadow-xs group/btn"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                <Github className="size-3.5" />
                <span>Repo</span>
              </a>
            )}
          </div>

          <Link
            to={projectLink}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm group/case"
            aria-label={`View ${project.title} case study`}
          >
            <span>Case Study</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/case:translate-x-0.5 group-hover/case:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const WorkHeader = () => (
  <div className="flex flex-col items-start lg:pt-4">
    {/* Eyebrow badge with glowing indicator */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-3 mb-6 sm:mb-8"
    >
      <span className="grid size-4 place-items-center rounded-full border border-foreground/20">
        <span className="size-1.5 rounded-full bg-primary animate-pulse" />
      </span>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/90">
        Work
      </p>
    </motion.div>

    {/* Cinematic character-split heading with square accent */}
    <motion.h2
      variants={headingContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="max-w-[35rem] text-[clamp(2.75rem,5.8vw,5.25rem)] font-display font-medium uppercase leading-[0.92] tracking-tight text-foreground"
    >
      <span className="block overflow-hidden whitespace-nowrap pb-[0.05em] -mb-[0.05em]">
        {"RECENT".split("").map((char, i) => (
          <motion.span
            key={i}
            variants={charVariants}
            className="inline-block will-change-transform"
          >
            {char}
          </motion.span>
        ))}
      </span>
      <span className="block overflow-hidden whitespace-nowrap pb-[0.05em] -mb-[0.05em]">
        {"WORKS".split("").map((char, i) => (
          <motion.span
            key={i}
            variants={charVariants}
            className="inline-block will-change-transform"
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          variants={charVariants}
          className="ml-3 sm:ml-4 inline-block size-3.5 sm:size-4 lg:size-5 translate-y-[-0.2em] rounded-sm bg-primary align-middle will-change-transform"
          aria-hidden="true"
        />
      </span>
    </motion.h2>

    <motion.p
      variants={textFadeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-7 sm:mt-8 max-w-md text-base leading-7 text-subtle-foreground"
    >
      A curated showcase of production applications, decentralized Web3 protocols, and modern creative agency platforms.
    </motion.p>
  </div>
);

const ProjectsSection = () => {
  return (
    <SectionShell id="work" className="relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-32 right-0 w-[30rem] h-[30rem] rounded-full bg-primary/[0.04] blur-[120px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-2/3 -left-32 w-[26rem] h-[26rem] rounded-full bg-primary/[0.03] blur-[100px] -z-10"
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="mb-14 sm:mb-20 lg:mb-24">
        <WorkHeader />
      </div>

      {/* Alternating Full-Width Rows (Line 1: Image Left / Text Right; Line 2: Text Left / Image Right, etc.) */}
      <div className="flex flex-col gap-14 sm:gap-20 lg:gap-24">
        {projects.map((project, index) => (
          <WorkCard
            key={project.index}
            project={project}
            isReversed={index % 2 === 1}
          />
        ))}
      </div>

      {/* View All Projects CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 sm:mt-24 md:mt-28 flex justify-center"
      >
        <Button
          variant="outline"
          size="lg"
          asChild
          className="group rounded-full px-8 py-6 border-foreground/15 hover:border-foreground/30 hover:bg-muted/50 transition-all duration-300 shadow-sm"
        >
          <Link
            to="/projects"
            className="gap-3 font-mono uppercase tracking-[0.18em] text-xs font-semibold"
          >
            View All Projects Archive
            <span className="group-hover:translate-x-1.5 transition-transform duration-300 inline-block font-sans">
              →
            </span>
          </Link>
        </Button>
      </motion.div>
    </SectionShell>
  );
};

export default ProjectsSection;
