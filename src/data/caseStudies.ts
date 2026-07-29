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
