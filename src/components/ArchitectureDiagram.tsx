import React from "react";
import { Layout, Server, Database, KeyRound, Globe, Cloud, ArrowDown } from "lucide-react";

export interface ArchitectureNode {
  layer: string;
  name: string;
  technology: string;
  description: string;
  icon: React.ElementType;
}

export interface ArchitectureDiagramProps {
  projectTitle: string;
  nodes: ArchitectureNode[];
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  projectTitle,
  nodes,
}) => {
  return (
    <div className="w-full p-6 md:p-8 rounded-lg border border-border bg-card/60 backdrop-blur-sm flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-semibold">
          System Flow & Visual Architecture
        </span>
        <h4 className="font-display text-lg font-medium text-foreground">
          {projectTitle} — System Component Flow
        </h4>
      </div>

      {/* Visual Flow Nodes Stack */}
      <div className="flex flex-col items-center gap-3 relative py-2">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isLast = index === nodes.length - 1;

          return (
            <React.Fragment key={node.layer + node.name}>
              {/* Node Box */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-12 items-center p-4 rounded-md border border-border bg-background/80 hover:border-primary/40 transition-colors duration-200 gap-4 shadow-sm">
                <div className="sm:col-span-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                      {node.layer}
                    </span>
                    <span className="text-sm font-medium font-display text-foreground">
                      {node.name}
                    </span>
                  </div>
                </div>

                <div className="sm:col-span-4 flex items-center">
                  <span className="px-2.5 py-1 rounded bg-muted text-xs font-mono text-foreground font-medium">
                    {node.technology}
                  </span>
                </div>

                <div className="sm:col-span-4 text-xs text-muted-foreground leading-relaxed">
                  {node.description}
                </div>
              </div>

              {/* Connecting Flow Arrow */}
              {!isLast && (
                <div className="flex items-center justify-center py-1 text-primary/70" aria-hidden="true">
                  <ArrowDown className="w-4 h-4 animate-pulse" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

// Preset Architecture Node Generators per Project
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
