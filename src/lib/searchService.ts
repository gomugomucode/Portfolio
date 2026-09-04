import { siteConfig } from "./siteConfig";
import { FALLBACK_ARTICLES } from "./mediumFeed";

export interface SearchIndexItem {
  id: string;
  type: "project" | "blog" | "skill" | "page";
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export const SEARCH_INDEX: SearchIndexItem[] = [
  // Pages
  {
    id: "page-home",
    type: "page",
    title: "Home",
    description: "Executive Engineering Portfolio & Systems Overview",
    url: "/",
    tags: ["home", "anupam baral", "portfolio", "full stack"],
  },
  {
    id: "page-about",
    type: "page",
    title: "About Me",
    description: "Engineering background, technical values, experience timeline, and bio",
    url: "/about",
    tags: ["about", "experience", "timeline", "bio"],
  },
  {
    id: "page-projects",
    type: "page",
    title: "Projects Showcase",
    description: "Featured full stack, Web3 Solana, and AI software engineering projects",
    url: "/projects",
    tags: ["projects", "solana", "react", "nextjs", "rust"],
  },
  {
    id: "page-blog",
    type: "page",
    title: "Technical Writing & Blog",
    description: "Deep dives into system design, Rust smart contracts, and TypeScript pipelines",
    url: "/blog",
    tags: ["blog", "medium", "writing", "articles", "system design"],
  },

  // Projects
  {
    id: "proj-01",
    type: "project",
    title: "Yatra — Decentralized Ride Sharing Protocol",
    description: "Atomic ride escrow contracts on Solana using Rust Anchor framework and Firebase telemetry.",
    url: "/project/01",
    tags: ["Solana", "Rust", "Anchor", "Firebase", "Web3", "TypeScript"],
  },
  {
    id: "proj-02",
    type: "project",
    title: "Decoupled E-Learning Platform",
    description: "High-throughput learning management system with Node.js statless APIs and MySQL indexing.",
    url: "/project/02",
    tags: ["React", "Node.js", "Express", "MySQL", "Architecture"],
  },
  {
    id: "proj-03",
    type: "project",
    title: "Solana Loyalty Rewards Protocol",
    description: "Web3 loyalty rewards DApp with automated token distributions and sub-cent fees.",
    url: "/project/03",
    tags: ["Solana", "Rust", "Web3.js", "Next.js"],
  },
  {
    id: "proj-04",
    type: "project",
    title: "Greenstar Suppliers Catalogue App",
    description: "Next.js 16 product catalogue and order enquiry web platform built with Prisma & PostgreSQL.",
    url: "/project/04",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },
  {
    id: "proj-05",
    type: "project",
    title: "YarshaByte — Creative Digital Agency",
    description: "Modern creative digital agency platform built with Next.js, fluid typography, and bespoke web design.",
    url: "/project/05",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Agency", "Design", "Vercel"],
  },

  // Articles from FALLBACK_ARTICLES
  ...FALLBACK_ARTICLES.map((art) => ({
    id: `art-${art.slug}`,
    type: "blog" as const,
    title: art.title,
    description: art.excerpt,
    url: `/blog/${art.slug}`,
    tags: art.categories,
  })),
];

export const searchService = {
  /**
   * Perform multi-domain fuzzy keyword search
   */
  search: (query: string, typeFilter?: "project" | "blog" | "skill" | "page"): SearchIndexItem[] => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    let items = SEARCH_INDEX;
    if (typeFilter) {
      items = items.filter((item) => item.type === typeFilter);
    }

    return items.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchTags = item.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchTags;
    });
  },
};
