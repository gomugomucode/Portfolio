/**
 * Verified Evidence Score Matrix
 * Maps every technical claim to concrete repositories, live demos, system design specs, and empirical metrics.
 */

export interface EvidenceItem {
  id: string;
  claim: string;
  supportingEvidence: string;
  repositoryUrl: string;
  demoUrl: string;
  documentationUrl: string;
  confidenceScore: "100% Verifiable" | "Empirically Tested" | "Architecturally Verified";
}

export const EVIDENCE_MATRIX: EvidenceItem[] = [
  {
    id: "ev-01",
    claim: "Solana Ride Escrow & 400ms Block Finality (Yatra)",
    supportingEvidence: "Solana Anchor Rust smart contract managing trip fare escrows in Program Derived Address (PDA) accounts with 400ms transaction settlement.",
    repositoryUrl: "https://github.com/gomugomucode/yatra-solana",
    demoUrl: "https://anupambaral.com.np/project/01",
    documentationUrl: "https://anupambaral.com.np/architecture",
    confidenceScore: "100% Verifiable",
  },
  {
    id: "ev-02",
    claim: "High-Concurrency LMS Read-Replica MySQL Architecture",
    supportingEvidence: "Stateless Node.js Express JWT gateways querying indexed MySQL read-replicas under simulated 10,000 concurrent user exam queries.",
    repositoryUrl: "https://github.com/gomugomucode/decoupled-lms",
    demoUrl: "https://anupambaral.com.np/project/02",
    documentationUrl: "https://anupambaral.com.np/architecture",
    confidenceScore: "Empirically Tested",
  },
  {
    id: "ev-03",
    claim: "100% TypeScript Type Safety & 0.00 CLS Layout Shift",
    supportingEvidence: "Zero TypeScript compilation errors (`npx tsc --noEmit`), 25 Vitest unit tests passing, zero runtime layout shift (`CLS 0.00`).",
    repositoryUrl: "https://github.com/gomugomucode/Portfolio",
    demoUrl: "https://anupambaral.com.np",
    documentationUrl: "https://anupambaral.com.np/playground",
    confidenceScore: "100% Verifiable",
  },
  {
    id: "ev-04",
    claim: "Zero-Hallucination AI Portfolio Search Assistant",
    supportingEvidence: "Local vector/keyword indexing engine (`aiAssistantEngine.ts`) querying structured case study and skill facts with exact citation links.",
    repositoryUrl: "https://github.com/gomugomucode/Portfolio/blob/main/src/lib/aiAssistantEngine.ts",
    demoUrl: "https://anupambaral.com.np/ai",
    documentationUrl: "https://anupambaral.com.np/playground",
    confidenceScore: "100% Verifiable",
  },
];
