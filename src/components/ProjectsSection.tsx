import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, type ProjectPreview } from "@/data/projects";
import { Button } from "./ui/button";
import { SectionShell } from "./layout/SectionShell";

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];


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
  const projectLink = project.slug ? `/projects/${project.slug}` : `/projects/${project.index}`;

  const isClientWebsite =
    project.slug === "greenstar-suppliers" ||
    project.slug.startsWith("yarshabyte") ||
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
        className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-dark-border bg-dark-card shadow-2xl hover:border-dark-foreground/30 transition-all duration-500 min-h-[19rem] sm:min-h-[22rem] lg:min-h-[27rem] xl:min-h-[29rem] flex flex-col ${
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
            className="w-full h-full object-cover object-top transition duration-500 ease-out group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200";
            }}
          />
          {/* Ambient vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent pointer-events-none" />

          {/* Floating Index Badge */}
          <span className="pointer-events-none absolute left-4 top-4 sm:left-6 sm:top-6 rounded-full bg-dark-bg/90 backdrop-blur-md px-3.5 py-1 text-xs font-tech font-bold uppercase tracking-widest text-accent-light border border-dark-border shadow-sm z-10">
            {project.index}
          </span>
        </Link>
      </div>

      {/* Box 2: Detail Box (Title, Description, Tech Stack, Live Site, Repo) */}
      <div
        className={`group relative flex flex-col justify-between py-2 sm:py-4 lg:py-6 px-1 sm:px-3 lg:px-5 transition-all duration-500 ${
          isReversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {/* Main Content Info */}
        <div className="flex-1 flex flex-col justify-center">
          <Link to={projectLink} className="block focus-visible:outline-none group/title">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-bold uppercase leading-[1.04] tracking-tight text-dark-foreground group-hover/title:text-accent-light transition-colors duration-300">
              {project.title}
            </h3>
          </Link>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-dark-foreground/75">
            {project.problem}
          </p>

          {project.impact && (
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-dark-foreground/90 font-medium">
              {project.impact}
            </p>
          )}

          {/* Tech Stack Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-dark-border bg-white/[0.04] backdrop-blur-sm px-3.5 py-1 text-xs font-tech font-bold uppercase tracking-wider text-dark-foreground/80 transition-colors hover:border-accent-light hover:text-accent-light"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links Row (Live Site, Repo, Case Study) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-dark-border mt-6">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-dark-border bg-white/[0.04] hover:bg-accent hover:text-white hover:border-accent px-4 py-2 text-xs font-tech font-bold uppercase tracking-wider text-dark-foreground transition-all duration-200 active:scale-95 shadow-xs group/btn"
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
                className="inline-flex items-center gap-2 rounded-full border border-dark-border bg-white/[0.04] hover:bg-white hover:text-dark-bg hover:border-white px-4 py-2 text-xs font-tech font-bold uppercase tracking-wider text-dark-foreground transition-all duration-200 active:scale-95 shadow-xs group/btn"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                <Github className="size-3.5" />
                <span>Repo</span>
              </a>
            )}
          </div>

          <Link
            to={projectLink}
            className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-light text-white px-5 py-2 text-xs font-tech font-bold uppercase tracking-widest transition-all duration-200 active:scale-95 shadow-md group/case"
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
    {/* Eyebrow badge */}
    <div className="section-eyebrow text-accent-light mb-4">
      Product Showcase
    </div>

    {/* Cinematic character-split heading */}
    <motion.h2
      variants={headingContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-display font-black uppercase leading-[0.95] tracking-tight text-dark-foreground"
    >
      <span className="inline-flex items-center flex-nowrap overflow-hidden whitespace-nowrap pb-[0.05em]">
        {"SELECTED PRODUCTS".split("").map((char, i) => (
          <motion.span
            key={i}
            variants={charVariants}
            className={char === " " ? "inline-block w-[0.25em]" : "inline-block will-change-transform"}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        <motion.span
          variants={charVariants}
          className="ml-3 sm:ml-4 inline-block size-3 sm:size-3.5 lg:size-4 translate-y-[-0.15em] rounded-sm bg-accent-light align-middle will-change-transform shrink-0"
          aria-hidden="true"
        />
      </span>
    </motion.h2>

    <motion.p
      variants={textFadeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-6 max-w-md text-base leading-7 text-dark-foreground/75"
    >
      A curated showcase of production applications, decentralized Web3 protocols, and modern creative systems.
    </motion.p>
  </div>
);

const ProjectsSection = () => {
  return (
    <div id="projects" className="scroll-mt-16">
      <SectionShell id="work" className="relative overflow-hidden bg-dark-bg text-dark-foreground py-20 md:py-28 lg:py-32 border-t border-b border-dark-border">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 lg:mb-24">
          <WorkHeader />
        </div>

        {/* Alternating Full-Width Rows */}
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
            className="group rounded-full px-8 py-6 border-dark-border text-dark-foreground hover:border-dark-foreground/40 hover:bg-white/10 transition-all duration-300 shadow-sm"
          >
            <Link
              to="/projects"
              className="gap-3 font-tech uppercase tracking-[0.18em] text-xs font-bold"
            >
              View All Projects Archive
              <span className="group-hover:translate-x-1.5 transition-transform duration-300 inline-block font-sans">
                →
              </span>
            </Link>
          </Button>
        </motion.div>
      </SectionShell>
    </div>
  );
};

export default ProjectsSection;
