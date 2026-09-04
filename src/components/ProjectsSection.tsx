import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
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

  return (
    <motion.article
      variants={cardMotionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-foreground/10 bg-card shadow-[0_20px_60px_rgba(26,24,22,0.06)] hover:shadow-[0_28px_80px_rgba(26,24,22,0.14)] hover:border-foreground/20 transition-all duration-700 w-full ${className}`}
    >
      <div
        className={`flex flex-col ${
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } min-h-[20rem] sm:min-h-[22rem] lg:min-h-[26rem] xl:min-h-[28rem]`}
      >
        {/* Visual Preview / Thumbnail (50% on lg+) */}
        <div className="relative w-full lg:w-1/2 min-h-[16rem] sm:min-h-[20rem] lg:min-h-full overflow-hidden bg-muted">
          <Link
            to={projectLink}
            aria-label={`Open case study for ${project.title}`}
            className="block w-full h-full focus-visible:outline-none"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-[1.02]"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200";
              }}
            />
            {/* Ambient vignette gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent ${
                isReversed
                  ? "lg:bg-gradient-to-l lg:from-transparent lg:to-black/10"
                  : "lg:bg-gradient-to-r lg:from-transparent lg:to-black/10"
              } pointer-events-none`}
            />
          </Link>

          {/* Floating Index Pill */}
          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-background/85 backdrop-blur-md px-3.5 py-1 text-[0.7rem] font-mono font-semibold tracking-widest text-foreground border border-foreground/10 shadow-sm">
            {project.index}
          </span>
        </div>

        {/* Editorial Information Panel (50% on lg+) */}
        <div
          className={`w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-8 md:p-10 xl:p-12 bg-[color-mix(in_srgb,var(--background)_84%,var(--primary)_16%)]/40 dark:bg-card/80 border-t lg:border-t-0 ${
            isReversed ? "lg:border-r" : "lg:border-l"
          } border-border/30`}
        >
          {/* Top Metadata Row */}
          <div className="flex items-center justify-between gap-4 text-[0.72rem] font-mono font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="truncate">{meta.category}</span>
            <span className="shrink-0">{meta.year}</span>
          </div>

          {/* Main Content Info */}
          <div className="py-6 sm:py-8">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-primary">
              {meta.badge}
            </p>
            <Link
              to={projectLink}
              className="block mt-2.5 focus-visible:outline-none"
            >
              <h3 className="font-display text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.25rem] font-normal uppercase leading-[0.98] tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
            </Link>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-subtle-foreground line-clamp-3">
              {project.problem}
            </p>
          </div>

          {/* Bottom Tags & Interaction */}
          <div className="flex items-end justify-between gap-4 pt-4 border-t border-border/30">
            <div className="flex flex-wrap gap-2 max-w-[70%]">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-foreground/12 bg-background/60 backdrop-blur-sm px-3 py-1 text-[0.68rem] font-mono uppercase tracking-wider text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-10 place-items-center rounded-full border border-foreground/15 bg-background/80 hover:bg-muted text-foreground transition-all duration-200 active:scale-95"
                  aria-label={`Visit live site for ${project.title}`}
                  title="Visit Live Site"
                >
                  <ExternalLink className="size-4" />
                </a>
              )}
              <Link
                to={projectLink}
                aria-label={`View ${project.title} case study`}
                className="grid size-12 sm:size-13 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/90 active:scale-95"
              >
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
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
