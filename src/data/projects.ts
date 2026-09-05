export interface ProjectPreview {
  index: string;
  slug: string;
  title: string;
  problem: string;
  impact: string;
  metric: { label: string; value: string };
  tags: string[];
  imageUrl: string;
  liveLink: string;
  githubLink: string;
}

export const projects: ProjectPreview[] = [
  {
    index: "01",
    slug: "e-learning-platform",
    title: "E-Learning Platform",
    problem: "Legacy LMS platforms suffer from slow loads and tightly coupled architectures.",
    impact:
      "Engineered a full-stack LMS with decoupled architecture and MySQL persistence. Optimized for production-scale content delivery.",
    metric: { label: "Load time", value: "<1.2s" },
    tags: ["React", "Node.js", "Express", "MySQL", "Vercel"],
    imageUrl: "/elearning-preview.webp",
    liveLink: "https://elearn-lake.vercel.app",
    githubLink: "https://github.com/gomugomucode/elearn",
  },
  {
    index: "02",
    slug: "yatra-solana-ride-sharing",
    title: "Yatra — Solana Ride-Sharing",
    problem: "Centralized ride-sharing takes up to 30% of driver earnings with no data sovereignty.",
    impact:
      "Architected a decentralized ride-sharing protocol on the Solana blockchain. Engineered atomic trip transactions, driver reputation systems, and real-time Firebase signaling.",
    metric: { label: "Tx confirmation", value: "~400ms" },
    tags: ["Solana", "Rust", "Next.js", "Firebase", "Web3.js"],
    imageUrl: "/yatra.webp",
    liveLink: "https://yatraa-zeta.vercel.app/",
    githubLink: "https://github.com/gomugomucode/Yatra",
  },
  {
    index: "03",
    slug: "web3-loyalty-protocol",
    title: "Web3 Loyalty Protocol",
    problem: "Corporate rewards programs create friction, fragmentation, and distrust.",
    impact:
      "Built a Solana-based loyalty rewards dApp utilizing Next.js server-side rendering and seamless Web3.js smart contract integration for zero-latency user experiences.",
    metric: { label: "Settlement", value: "Instant" },
    tags: ["Web3.js", "Solana", "Rust", "Next.js", "TypeScript"],
    imageUrl: "/solana.webp",
    liveLink: "https://solana-loyalty-d-app.vercel.app/",
    githubLink: "https://github.com/gomugomucode/Solana-Loyalty-dApp",
  },
  {
    index: "04",
    slug: "greenstar-suppliers",
    title: "Greenstar Suppliers",
    problem: "Local hardware suppliers in Nepal lack a professional online presence to showcase entrance and home automation products and receive orders.",
    impact:
      "Built a full-featured Next.js 16 product catalogue and enquiry platform for Greenstar Suppliers. Features a hero carousel, per-product Call/WhatsApp order buttons, a floating contact widget, and a backend enquiry form — all tailored for Nepal's market.",
    metric: { label: "Order channels", value: "3" },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Prisma", "PostgreSQL"],
    imageUrl: "/greenstarphoto.png",
    liveLink: "https://www.greenstarsuppliers.com.np/",
    githubLink: "",
  },
  {
    index: "05",
    slug: "yarshabyte-it-company",
    title: "YarshaByte — IT Company",
    problem:
      "Businesses and emerging enterprises in Nepal struggle with disjointed IT systems, legacy infrastructure, and generic web templates that fail to build digital credibility.",
    impact:
      "Architected and engineered the modern digital platform for YarshaByte, an IT company delivering full-spectrum web development, software solutions, cloud systems, and IT consulting.",
    metric: { label: "Performance", value: "99+" },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "IT Services", "Vercel"],
    imageUrl: "/yarshabyte.webp",
    liveLink: "https://yarshabyte.vercel.app/",
    githubLink: "",
  },
];
