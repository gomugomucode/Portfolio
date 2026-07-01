export interface ProjectPreview {
  index: string;
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
];
