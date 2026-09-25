/**
 * Production Engineering Case Studies
 * Detailed Architectural Design Documents for Featured Portfolio Projects
 */

export interface EngineeringCaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  problem: string;
  whyItMattered: string;
  constraints: string[];
  architectureOverview: string;
  technicalDecisions: { choice: string; rationale: string; alternativeRejected: string }[];
  tradeoffs: { option: string; pros: string; cons: string }[];
  challengesAndFailures: string;
  performanceImprovements: string;
  securityDecisions: string;
  lessonsLearned: string;
  futureImprovements: string;
}

export const ENGINEERING_CASE_STUDIES: EngineeringCaseStudy[] = [
  {
    id: "01",
    slug: "yatra-solana-ride-sharing-protocol",
    title: "Yatra — Decentralized Ride-Sharing Protocol on Solana",
    subtitle: "Architecting atomic ride contracts, driver reputation mechanisms, and off-chain telemetry.",
    problem: "Centralized ride-sharing platforms retain up to 30% of driver revenue as commission overhead and store driver reputational ratings inside proprietary databases, locking drivers into single platform ecosystems.",
    whyItMattered: "Direct peer-to-peer ride contracts eliminate middleman fees while cryptographically guaranteeing driver rating sovereignty across different ride platforms.",
    constraints: [
      "Sub-second ride matching latency required for real-time passenger UX.",
      "Zero transaction spam on Solana blockchain for minute GPS telemetry updates.",
      "Atomic escrow settlement preventing fraudulent fare cancellation after driver dispatch.",
    ],
    architectureOverview: "Hybrid decentralized architecture: Solana Anchor Rust smart program handles financial escrow execution and driver rating NFTs; Firebase Realtime Database routes high-frequency 50ms vehicle GPS telemetry off-chain.",
    technicalDecisions: [
      {
        choice: "Solana Anchor (Rust)",
        rationale: "400ms block finality and sub-cent transaction fees enable economically viable micro-transactions for short distance fares.",
        alternativeRejected: "Ethereum L2 (Arbitrum/Optimism) — Rejected due to higher gas fee variance and 2-12 second settlement delays.",
      },
      {
        choice: "Off-Chain Telemetry Decoupling",
        rationale: "GPS coordinate updates occur every 2 seconds. Broadcasting these on-chain would incur excessive transaction fees.",
        alternativeRejected: "Full On-Chain Telemetry — Rejected due to blockchain account update rate limits.",
      },
    ],
    tradeoffs: [
      {
        option: "Off-Chain Signaling via Firebase",
        pros: "50ms telemetry latency, smooth map animation, zero transaction costs for coordinate ticks.",
        cons: "Introduces centralized infrastructure dependency for real-time location streaming.",
      },
    ],
    challengesAndFailures: "Early iterations encountered Account Reentrancy bugs during simultaneous ride cancellation and driver acceptance. Solved by implementing strict state lock checks in Anchor program contexts.",
    performanceImprovements: "Achieved 400ms transaction settlement finality and reduced driver onboarding fee overhead by 98%.",
    securityDecisions: "Implemented Program Derived Address (PDA) escrow accounts to isolate trip funds during active transit.",
    lessonsLearned: "Decoupling real-time signaling telemetry from immutable ledger settlement is essential for high-frequency Web3 consumer applications.",
    futureImprovements: "Migrate off-chain signaling from Firebase to a decentralized libp2p pub-sub network.",
  },
  {
    id: "02",
    slug: "decoupled-lms-architectures",
    title: "High-Throughput Decoupled E-Learning Platform",
    subtitle: "Designing MySQL persistence indexing, stateless APIs, and zero-latency CDN distribution.",
    problem: "Monolithic learning platforms crash during synchronized exam windows when tens of thousands of students concurrently query course materials.",
    whyItMattered: "Educational institutions require guaranteed uptime during critical exam periods and sub-second page loads across low-bandwidth mobile networks.",
    constraints: [
      "Zero database downtime during concurrent student login spikes.",
      "Sub-second video metadata loading across mobile 3G/4G connections.",
    ],
    architectureOverview: "Decoupled architecture: React presentation layer hosted on global Edge CDNs; stateless Node.js / Express microservices querying indexed MySQL read-replicas.",
    technicalDecisions: [
      {
        choice: "Stateless JWT Auth Gateways",
        rationale: "Removes server session storage overhead, allowing horizontal scaling across containerized clusters.",
        alternativeRejected: "Stateful Redis Sessions — Rejected due to added infrastructure complexity for read-heavy workloads.",
      },
    ],
    tradeoffs: [
      {
        option: "Read-Replica MySQL Scaling",
        pros: "Offloads heavy read traffic from master database instance.",
        cons: "Minor replication lag (50-200ms) between master writes and replica reads.",
      },
    ],
    challengesAndFailures: "Recursive database queries on nested course modules caused 3.4s response spikes. Resolved by flattening course category trees into indexed lookup arrays.",
    performanceImprovements: "Cut global catalogue load times from 3.4s down to 1.1s under simulated 10,000 concurrent user tests.",
    securityDecisions: "Enforced strict parameter validation and parameterized SQL queries to eliminate SQL injection risks.",
    lessonsLearned: "Decoupling API services from presentation rendering drastically improves application fault tolerance.",
    futureImprovements: "Introduce GraphQL API layer for dynamic frontend payload field filtering.",
  },
];

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  subtitle: string;
  role: string;
  year: string;
  client: string;
  tags: string[];
  keywords: string[];
  imageUrl: string;
  screenshots: string[];
  liveLink: string;
  githubLink: string;
  metrics: { label: string; value: string }[];
  problem: string;
  requirements: string[];
  solution: string;
  architecture: string[];
  tradeoffs: string;
  features: string[];
  challenges: string;
  lessons: string;
  futureImprovements: string;
  relatedArticleLink?: string;
  relatedArticleTitle?: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  "01": {
    id: "01",
    slug: "e-learning-platform",
    title: "E-Learning LMS Platform",
    seoTitle: "E-Learning LMS Platform Case Study | React, Node.js & MySQL",
    seoDescription: "In-depth technical case study of a decoupled React LMS platform with MySQL query optimizations, sub-1.2s load speeds, and Vercel edge caching.",
    subtitle: "A high-performance decoupled Learning Management System built for production-scale content distribution.",
    role: "Full Stack Engineer",
    year: "2024",
    client: "Internal / Open Source",
    tags: ["React", "Node.js", "Express", "MySQL", "Vercel", "Tailwind CSS"],
    keywords: ["React LMS", "Decoupled Architecture", "Node.js Express API", "MySQL Indexing", "Vercel Edge Caching"],
    imageUrl: "/elearning-preview.webp",
    screenshots: [
      "/elearning-preview.webp",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
    ],
    liveLink: "https://elearn-lake.vercel.app",
    githubLink: "https://github.com/gomugomucode/elearn",
    relatedArticleLink: "https://medium.com/@gomugomucode/decoupled-lms-architectures",
    relatedArticleTitle: "Decoupling Large-Scale LMS Content Deliveries",
    metrics: [
      { label: "Content Load Time", value: "<1.2s" },
      { label: "Code Type Safety", value: "100%" },
      { label: "Database Speedup", value: "40%" }
    ],
    problem: "Traditional LMS solutions suffer from slow page load speeds and tightly coupled architectures. High payload delivery and excessive database roundtrips degrade search and dashboard performance when multiple courses load concurrently.",
    requirements: [
      "Sub-1.5s worldwide content initial load speed across mobile devices.",
      "Decoupled architecture enabling client and backend deployments to scale independently.",
      "Relational course hierarchy support with efficient database fetch queries.",
      "Stateless user session handling with zero server-side memory leaks."
    ],
    solution: "Decoupled the architecture completely by serving a static, highly optimized React client via global CDNs and running a lightweight, stateless Node.js/Express API. Built database query optimizations using precompiled joins and index mappings in MySQL to handle nested course structures.",
    architecture: [
      "Decoupled React Client served from global edge CDNs.",
      "Stateless REST API utilizing Node.js and Express.",
      "Relational MySQL persistence layer utilizing relational indexing for course trees.",
      "Vercel Edge caching configurations for static route delivery."
    ],
    tradeoffs: "Chose MySQL relational indexing over NoSQL document stores to guarantee strong relational integrity for prerequisite course dependencies, trading minor write flexibility for deterministic read query speeds.",
    features: [
      "Sub-second course catalog searching with client-side indexing.",
      "Hierarchical course category trees with single-query relational fetches.",
      "Stateless JWT user authentication & session management.",
      "Responsive progress tracking & video streaming playback integration."
    ],
    challenges: "Handling recursive folder structures and hierarchical course categories efficiently in a relational MySQL database without triggering exponential query loops.",
    lessons: "Leveraging structured database indexes and flattening dynamic relational queries into indexed lookup arrays dramatically increases runtime response speed and resource efficiency.",
    futureImprovements: "Migrating media asset storage to Cloudflare R2 bucket storage and implementing real-time WebSocket progress synchronization across devices."
  },
  "02": {
    id: "02",
    slug: "yatra-solana-ride-sharing",
    title: "Yatra — Solana Ride-Sharing",
    seoTitle: "Yatra Solana Ride-Sharing | Decentralized Web3 Protocol Case Study",
    seoDescription: "Architectural breakdown of Yatra: a Solana decentralized ride-sharing engine written in Rust smart contracts with Firebase RTDB signaling and Web3.js.",
    subtitle: "Decentralized atomic trip contracts and reputation ledger built on the Solana blockchain.",
    role: "Core Web3 Architect",
    year: "2024",
    client: "Hackathon Entry",
    tags: ["Solana", "Rust", "Next.js", "Firebase", "Web3.js", "Anchor"],
    keywords: ["Solana Developer", "Rust Smart Contracts", "Decentralized Ride Sharing", "Web3.js Protocol", "Firebase RTDB"],
    imageUrl: "/yatra.webp",
    screenshots: [
      "/yatra.webp",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200"
    ],
    liveLink: "https://yatraa-zeta.vercel.app/",
    githubLink: "https://github.com/gomugomucode/Yatra",
    relatedArticleLink: "https://medium.com/@gomugomucode/yatra-solana-ride-sharing-protocol",
    relatedArticleTitle: "Architecting Yatra — A Decentralized Ride-Sharing Protocol on Solana",
    metrics: [
      { label: "Tx Confirmation", value: "~400ms" },
      { label: "Gas Fee Per Ride", value: "<$0.0001" },
      { label: "Signaling Delay", value: "50ms" }
    ],
    problem: "Centralized ride-sharing apps take up to a 30% cut of driver earnings and suffer from centralized data security risks. Drivers have no sovereign ownership over their profile history, trip records, or reputational scores.",
    requirements: [
      "Atomic escrow smart contracts preventing unilateral ride fee cancellation.",
      "Sub-100ms real-time coordinate signaling between passenger and driver mobile apps.",
      "Cryptographic wallet-based identity verification eliminating centralized passwords.",
      "Sub-cent transaction fees ensuring protocol economic viability."
    ],
    solution: "Created an open-source decentralized ride-sharing engine on Solana. All trip status shifts (requested, accepted, completed) are verified using atomic smart contracts written in Rust. Used Firebase RTDB for sub-second location updates, and Web3.js client-side signatures to authenticate every trip event.",
    architecture: [
      "Rust Smart Program compiled to Solana BPF bytecode.",
      "Next.js client application with Web3 provider wallet connections.",
      "Firebase Realtime Database for quick coordinate syncing.",
      "Anchor framework testing suite mapping instruction executions."
    ],
    tradeoffs: "Separated real-time location telemetry off-chain (Firebase RTDB) while keeping ride payment state transitions on-chain (Solana Rust program), balancing instant UI updates with immutable financial verification.",
    features: [
      "Atomic ride transaction escrow on Solana blockchain ledger.",
      "Decentralized driver reputation scoring verified on-chain.",
      "Sub-50ms driver-rider location signaling via Firebase RTDB.",
      "Cryptographic wallet authentication eliminating centralized passwords."
    ],
    challenges: "Managing asynchronous off-chain signaling coordinates (Firebase) while enforcing absolute trust boundaries via atomic on-chain verification steps on the blockchain ledger.",
    lessons: "Decoupled real-time coordination feeds (off-chain) from critical state transitions (on-chain) are key to scaling blockchain architectures without overloading blocks.",
    futureImprovements: "Integrating Solana state compression for zero-cost reputation badges and implementing decentralized dispute resolution via community arbitration tokens."
  },
  "03": {
    id: "03",
    slug: "web3-loyalty-protocol",
    title: "Web3 Loyalty Protocol",
    seoTitle: "Web3 Loyalty Protocol Case Study | Solana & Next.js DApp",
    seoDescription: "Technical case study of a Solana Web3 loyalty rewards protocol featuring automated smart contract distributions, sub-cent transaction costs, and instant token settlement.",
    subtitle: "A high-performance loyalty rewards dApp featuring automated smart-contract distributions.",
    role: "Lead Dapp Developer",
    year: "2023",
    client: "Freelance",
    tags: ["Web3.js", "Solana", "Rust", "Next.js", "TypeScript", "Tailwind CSS"],
    keywords: ["Solana DApp", "Web3 Loyalty Program", "Rust Smart Contracts", "TypeScript Web3.js", "Token Minting"],
    imageUrl: "/solana.webp",
    screenshots: [
      "/solana.webp",
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1200"
    ],
    liveLink: "https://solana-loyalty-d-app.vercel.app/",
    githubLink: "https://github.com/gomugomucode/Solana-Loyalty-dApp",
    metrics: [
      { label: "Token Transfer", value: "Instant" },
      { label: "Tx Cost", value: "<$0.01" },
      { label: "Wallet Setup Time", value: "<2 Min" }
    ],
    problem: "Traditional corporate rewards programs suffer from fragmented platforms, high transaction friction, and dynamic expiration rules that build distrust with program members.",
    requirements: [
      "Instant programmatic minting and issuance of SPL loyalty tokens upon purchase triggers.",
      "Zero wallet setup friction for non-crypto native users.",
      "Sub-cent transaction gas overhead for enterprise rewards issuing.",
      "Transparent on-chain customer tier verification."
    ],
    solution: "Built a loyalty dApp that mints and issues dynamic program points directly to consumer cryptographic wallets. Built smart program distributions to handle points transfers, program enrollment, and reward redemptions with instant settlement times.",
    architecture: [
      "Solana program handles state for loyalty program balances.",
      "Next.js frontend with Tailwind interface details.",
      "TypeScript Web3.js transaction builders with automated wallet signature flows.",
      "Edge-cached REST requests fetching off-chain loyalty product details."
    ],
    tradeoffs: "Used Phantom & Solflare browser extensions for signature verification rather than custodial private keys, prioritizing user data sovereignty over zero-wallet signup flows.",
    features: [
      "Instant token minting and transfer settlement on Solana.",
      "Automated loyalty point rewards distribution upon checkout triggers.",
      "Seamless Phantom & Solflare wallet connectivity.",
      "Responsive customer reward dashboard with real-time balance feeds."
    ],
    challenges: "Handling smooth wallet connection edge cases across multiple mobile browsers where wallet injection APIs frequently conflict.",
    lessons: "Clean, asynchronous state management wrapper logic around third-party wallet interfaces prevents critical page crashes and improves mobile customer conversion rates.",
    futureImprovements: "Adding account abstraction (web3auth) for email-based social signups and automated reward redemption webhooks for Shopify/WooCommerce integrations."
  },
  "04": {
    id: "04",
    slug: "greenstar-suppliers",
    title: "Greenstar Suppliers",
    seoTitle: "Greenstar Suppliers Website Case Study | Next.js 16 & Prisma",
    seoDescription: "Production case study of Greenstar Suppliers: a Next.js 16 product catalogue and order enquiry web app for entrance & home automation in Nepal.",
    subtitle: "A Next.js 16 product catalogue and order enquiry platform for Nepal's leading entrance and home automation supplier.",
    role: "Full Stack Developer",
    year: "2025",
    client: "Greenstar Suppliers, Nepal",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Prisma", "PostgreSQL"],
    keywords: ["Next.js Developer Nepal", "Full Stack Developer Nepal", "Prisma PostgreSQL", "Home Automation Nepal", "Next.js 16 App Router"],
    imageUrl: "/greenstarphoto.png",
    screenshots: [
      "/greenstarphoto.png",
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200"
    ],
    liveLink: "https://www.greenstarsuppliers.com.np/",
    githubLink: "",
    relatedArticleLink: "https://medium.com/@gomugomucode/nextjs-edge-rendering",
    relatedArticleTitle: "Optimizing Next.js Edge Rendering for Production",
    metrics: [
      { label: "Order Channels", value: "3" },
      { label: "Tech Stack", value: "Next.js 16" },
      { label: "Market", value: "Nepal" }
    ],
    problem: "Local hardware and home automation suppliers in Nepal lacked a professional online presence to showcase entrance products — gate automation, boom barriers, and garage systems — and had no streamlined way to collect enquiries or route orders.",
    requirements: [
      "Dynamic hardware product catalogue with instant category filtering.",
      "Multi-channel order inquiry routes (Direct Call, WhatsApp, and Web Form).",
      "Persistent enquiry database storage backed by Prisma & PostgreSQL.",
      "Zero-downtime deployment architecture managed easily without non-technical CMS overhead."
    ],
    solution: "Built a full-featured Next.js 16 (App Router) website for Greenstar Suppliers with an animated hero product carousel, a structured product catalogue, per-product Call and WhatsApp order CTAs, a floating WhatsApp button, and a contact/enquiry form backed by a Prisma + PostgreSQL API with optional Nodemailer email notifications.",
    architecture: [
      "Next.js 16 App Router with React 19 and TypeScript for the frontend.",
      "Tailwind CSS 4 and Framer Motion for responsive layouts and smooth animations.",
      "Prisma ORM with PostgreSQL for persistent enquiry storage.",
      "Nodemailer backend for email notifications on new enquiries.",
      "Environment-driven contact config (phone, WhatsApp, email) via environment variables."
    ],
    tradeoffs: "Utilized environment-variable configuration for contact routing instead of an expensive headless CMS, enabling non-technical client team members to update phone numbers and branding without application maintenance fees.",
    features: [
      "Dynamic product catalogue with instant category filtering.",
      "Direct Call & WhatsApp ordering integrations tailored for Nepal's market.",
      "Prisma + PostgreSQL backend persisting customer enquiry submissions.",
      "Floating contact widget and animated hero banner carousel."
    ],
    challenges: "Ensuring the WhatsApp and call order flows worked reliably across Nepal's diverse mobile device landscape while keeping the product catalogue easy to manage and extend without a CMS.",
    lessons: "Environment-variable-driven contact details and a clean component architecture allow non-technical clients to update phone numbers and branding without touching application code.",
    futureImprovements: "Integrating a lightweight admin portal for real-time inventory updates and adding multi-language support for English and Nepali."
  },
  "05": {
    id: "05",
    slug: "yarshabyte-it-company",
    title: "YarshaByte — IT Company & Digital Solutions",
    seoTitle: "YarshaByte IT Company Case Study | Next.js & Modern Web Engineering",
    seoDescription: "In-depth case study of YarshaByte: an innovative IT company delivering software engineering, web development, and digital services built with Next.js, Tailwind CSS, and fluid motion design.",
    subtitle: "A modern IT company platform showcasing software development, IT consulting, cloud delivery, and bespoke digital solutions.",
    role: "Lead Full-Stack Engineer & Frontend Architect",
    year: "2026",
    client: "YarshaByte (IT Company)",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "IT Services", "Vercel"],
    keywords: [
      "YarshaByte",
      "IT Company Nepal",
      "Software Development Nepal",
      "Web Development Nepal",
      "Next.js Portfolio",
      "IT Consulting Kathmandu",
      "Framer Motion UI",
      "Modern Web Engineering"
    ],
    imageUrl: "/yarshabyte.webp",
    screenshots: [
      "/yarshabyte.webp"
    ],
    liveLink: "https://yarshabyte.com/",
    githubLink: "",
    metrics: [
      { label: "Performance Score", value: "99+" },
      { label: "Edge Delivery", value: "<80ms" },
      { label: "Interactive UX", value: "60 FPS" }
    ],
    problem: "Most IT companies and service firms in Nepal rely on generic, slow WordPress templates that fail to showcase technical excellence, lack fluid responsiveness, and underperform in lead generation.",
    requirements: [
      "Modern brand identity and tech-forward typographic layout reflecting an IT and software solutions company.",
      "Ultra-responsive 60 FPS scroll-driven and hover micro-animations.",
      "Optimized Core Web Vitals with near-instant Edge CDN delivery on Vercel.",
      "Streamlined client inquiry and multi-channel IT consultation pathways."
    ],
    solution: "Designed and built YarshaByte's web platform using Next.js App Router, TypeScript, and modern motion principles. Engineered modular service showcases for IT consulting, software development, and digital solutions with sub-80ms edge delivery.",
    architecture: [
      "Next.js App Router for server-rendered speed and edge streaming.",
      "TypeScript and Tailwind CSS design tokens for maintainable UI architecture.",
      "Framer Motion and keyframe SVG animations for interactive visual polish.",
      "Vercel Edge Network for rapid global delivery and sub-100ms response times."
    ],
    tradeoffs: "Prioritized lightweight CSS/SVG animation primitives over heavy 3D rendering engines, guaranteeing blazing-fast initial load times and smooth mobile browsing across Nepal's networks.",
    features: [
      "Comprehensive IT company showcase highlighting software services and client work.",
      "Dynamic navigation with smooth wave transitions and mobile-first menu.",
      "Direct client contact channels (WhatsApp, phone, social integrations).",
      "Fully responsive typography scale with fluid clamp calculations."
    ],
    challenges: "Achieving cinematic visual animations while sustaining 95+ performance scores on Google Lighthouse across mobile devices.",
    lessons: "Restricting animation triggers to GPU-accelerated CSS properties (transform, opacity) prevents thread blocking and preserves buttery 60 FPS interactions.",
    futureImprovements: "Implementing dynamic client portal integration and interactive project cost estimator modules."
  }
};
