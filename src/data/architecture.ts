import type { ElementType } from "react";
import { Layout, Server, Database, KeyRound, Globe, Cloud } from "lucide-react";

export interface ArchitectureDiagramSpec {
  id: string;
  title: string;
  category: "Blockchain" | "Full-Stack" | "AI & ML" | "DevOps & Edge";
  description: string;
  components: { name: string; role: string; tech: string }[];
  flowSteps: string[];
  metrics: { label: string; value: string }[];
}

export const ARCHITECTURE_DIAGRAMS: ArchitectureDiagramSpec[] = [
  {
    id: "yatra-solana-escrow",
    title: "Yatra — Solana Ride-Sharing Escrow Architecture",
    category: "Blockchain",
    description:
      "Decoupled architecture separating high-frequency 50ms GPS telemetry from immutable 400ms Solana on-chain escrow account finality.",
    components: [
      { name: "React 18 Mobile UI", role: "Rider & Driver Interface", tech: "TypeScript + Tailwind" },
      { name: "Firebase Realtime DB", role: "50ms Telemetry Stream", tech: "WebSocket Signal Engine" },
      { name: "Solana Anchor Program", role: "Escrow & Rating NFTs", tech: "Rust + PDA Accounts" },
    ],
    flowSteps: [
      "1. Passenger requests trip -> Solana Anchor Program locks fare in PDA Escrow Account.",
      "2. Driver accepts ride -> Firebase Realtime DB streams 50ms vehicle GPS coordinates off-chain.",
      "3. Trip completes -> Solana Anchor Program releases escrow payout & mints rating NFT.",
    ],
    metrics: [
      { label: "Block Finality", value: "400ms" },
      { label: "Telemetry Latency", value: "50ms" },
      { label: "Driver Overhead Savings", value: "98%" },
    ],
  },
  {
    id: "lms-read-replicas",
    title: "High-Concurrency LMS Read-Replica MySQL Architecture",
    category: "Full-Stack",
    description:
      "Decoupled presentation layer with stateless Express API gateways querying indexed MySQL read-replicas during high-concurrency exam windows.",
    components: [
      { name: "Vite Edge Presentation", role: "Static Asset Distribution", tech: "React 18 + Edge CDN" },
      { name: "Express API Gateway", role: "Stateless Auth & Routing", tech: "Node.js + JWT" },
      { name: "MySQL Read Replicas", role: "Exam Queries & Lookup", tech: "Indexed MySQL Database" },
    ],
    flowSteps: [
      "1. Student logs in -> Express API verifies stateless JWT signature without session lookup.",
      "2. Course catalogue queried -> Load balancer routes read traffic to MySQL read-replicas.",
      "3. Exam submission -> Master MySQL node processes transactional writes cleanly.",
    ],
    metrics: [
      { label: "Concurrent Users Tested", value: "10,000" },
      { label: "Catalogue Load Latency", value: "1.1s" },
      { label: "Code Type Safety", value: "100%" },
    ],
  },
];

export interface ArchitectureNode {
  layer: string;
  name: string;
  technology: string;
  description: string;
  icon: ElementType;
}

export const getProjectArchitectureNodes = (projectId: string): ArchitectureNode[] => {
  switch (projectId) {
    case "01":
      return [
        {
          layer: "1. Frontend Layer",
          name: "Client Application",
          technology: "React 19 + TypeScript + Tailwind",
          description: "Decoupled static UI served globally from edge CDN nodes.",
          icon: Layout,
        },
        {
          layer: "2. API Gateway",
          name: "Stateless REST Service",
          technology: "Node.js + Express.js",
          description: "Lightweight stateless controllers mapping API requests.",
          icon: Server,
        },
        {
          layer: "3. Persistence Layer",
          name: "Relational Database",
          technology: "MySQL (Indexed Joins)",
          description: "Relational indexed schema managing course hierarchies.",
          icon: Database,
        },
        {
          layer: "4. Authentication",
          name: "Session Security",
          technology: "Stateless JWT Bearer Auth",
          description: "Token-based user authentication and route guards.",
          icon: KeyRound,
        },
        {
          layer: "5. External Delivery",
          name: "Content CDN",
          technology: "Vercel Edge Network",
          description: "Sub-1.2s static asset caching & video streaming.",
          icon: Globe,
        },
        {
          layer: "6. Deployment",
          name: "Global Edge Infrastructure",
          technology: "Vercel + Cloud Hosting",
          description: "Automated CI/CD git integration and edge distribution.",
          icon: Cloud,
        },
      ];
    case "02":
      return [
        {
          layer: "1. Frontend Layer",
          name: "Web3 Passenger UI",
          technology: "Next.js 16 + Web3.js",
          description: "Responsive trip request interface & wallet connector.",
          icon: Layout,
        },
        {
          layer: "2. Realtime Signaling",
          name: "Location Coordination",
          technology: "Firebase Realtime DB",
          description: "Sub-50ms driver-rider coordinate sync feed.",
          icon: Server,
        },
        {
          layer: "3. Smart Program",
          name: "Atomic Trip Escrow",
          technology: "Rust + Solana BPF",
          description: "Immutable smart contract program managing trip state.",
          icon: Database,
        },
        {
          layer: "4. Authentication",
          name: "Cryptographic Identity",
          technology: "Phantom / Solflare Wallet",
          description: "Keypair signature verification eliminating passwords.",
          icon: KeyRound,
        },
        {
          layer: "5. External APIs",
          name: "Solana RPC Gateway",
          technology: "Solana Mainnet RPC",
          description: "Direct JSON-RPC calls submitting raw transactions.",
          icon: Globe,
        },
        {
          layer: "6. Deployment",
          name: "Decentralized Edge",
          technology: "Solana Ledger + Vercel",
          description: "On-chain smart program + edge client app hosting.",
          icon: Cloud,
        },
      ];
    case "03":
      return [
        {
          layer: "1. Frontend Layer",
          name: "Loyalty Dashboard",
          technology: "Next.js + TypeScript",
          description: "Customer points balance & reward redemption portal.",
          icon: Layout,
        },
        {
          layer: "2. Transaction Builder",
          name: "Program Instruction Provider",
          technology: "Web3.js + Anchor",
          description: "Client-side transaction builder and instruction serializer.",
          icon: Server,
        },
        {
          layer: "3. Smart Program",
          name: "SPL Token Rewards Program",
          technology: "Rust Smart Program",
          description: "Programmatic token minting & balance management.",
          icon: Database,
        },
        {
          layer: "4. Authentication",
          name: "Wallet Signature Guard",
          technology: "Solflare / Phantom API",
          description: "Client-side wallet signature session verification.",
          icon: KeyRound,
        },
        {
          layer: "5. External APIs",
          name: "Product Metadata API",
          technology: "REST API Gateway",
          description: "Edge-cached REST endpoints serving reward item details.",
          icon: Globe,
        },
        {
          layer: "6. Deployment",
          name: "Edge DApp Host",
          technology: "Vercel Platform",
          description: "Instant global distribution for decentralized Web3 DApp.",
          icon: Cloud,
        },
      ];
    case "04":
    default:
      return [
        {
          layer: "1. Frontend Layer",
          name: "Product Catalogue Web App",
          technology: "Next.js 16 App Router",
          description: "Interactive entrance automation showcase & category filters.",
          icon: Layout,
        },
        {
          layer: "2. Backend API",
          name: "Server Actions & Handlers",
          technology: "Next.js 16 Server Actions",
          description: "Server-side order inquiry processing and validation.",
          icon: Server,
        },
        {
          layer: "3. Database Layer",
          name: "Relational Storage",
          technology: "PostgreSQL + Prisma ORM",
          description: "Type-safe database persistence for customer order records.",
          icon: Database,
        },
        {
          layer: "4. Authentication",
          name: "Session Guard",
          technology: "Environment Security Rules",
          description: "Secure contact configuration and API key protection.",
          icon: KeyRound,
        },
        {
          layer: "5. External APIs",
          name: "Order Communication Channels",
          technology: "WhatsApp Gateway + Nodemailer",
          description: "Direct WhatsApp click-to-chat & email notifications.",
          icon: Globe,
        },
        {
          layer: "6. Deployment",
          name: "Production Cloud",
          technology: "Vercel + Cloud PostgreSQL",
          description: "Sub-second static catalog delivery across Nepal.",
          icon: Cloud,
        },
      ];
  }
};
