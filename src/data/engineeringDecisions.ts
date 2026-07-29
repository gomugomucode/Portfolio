/**
 * Engineering Decision Rationale & Architectural Tradeoffs
 */

export interface EngineeringDecision {
  technology: string;
  category: "Frontend" | "Backend" | "Database" | "Blockchain" | "DevOps";
  whyChosen: string;
  keyBenefits: string[];
  tradeoffsAccepted: string;
  alternativesRejected: { name: string; reasonRejected: string }[];
}

export const ENGINEERING_DECISIONS: EngineeringDecision[] = [
  {
    technology: "React 18 + Vite",
    category: "Frontend",
    whyChosen: "Delivers instant HMR during development, minimal production bundle overhead, and seamless integration with modern component libraries.",
    keyBenefits: [
      "Sub-second production build times",
      "Virtual DOM reconciliation for high-concurrency UI updates",
      "Large open-source ecosystem & component tooling",
    ],
    tradeoffsAccepted: "Client-side rendering requires explicit static pre-rendering scripts (SSG) to achieve optimal Search Engine indexing.",
    alternativesRejected: [
      {
        name: "Vanilla HTML/JS",
        reasonRejected: "Lacks component state management and component reusability for complex dynamic dashboards.",
      },
      {
        name: "Gatsby",
        reasonRejected: "Slower build times and heavy GraphQL schema overhead for lightweight static sites.",
      },
    ],
  },
  {
    technology: "Next.js 16 (App Router)",
    category: "Frontend",
    whyChosen: "Chosen for enterprise client applications requiring automatic hybrid Server Components, streaming SSR, and edge route handlers.",
    keyBenefits: [
      "Zero-bundle-size React Server Components",
      "Built-in image optimization & automatic font preloading",
      "Native Edge API routes",
    ],
    tradeoffsAccepted: "Tighter coupling to Vercel ecosystem deployment patterns.",
    alternativesRejected: [
      {
        name: "Custom SSR Express Server",
        reasonRejected: "Requires manual maintenance of server hydration, bundle splitting, and cache headers.",
      },
    ],
  },
  {
    technology: "Rust + Solana Anchor",
    category: "Blockchain",
    whyChosen: "Selected for Web3 smart contract programs due to memory safety guarantees, zero garbage collection pauses, and Solana's 400ms block finality.",
    keyBenefits: [
      "Memory safety without garbage collection overhead",
      "400ms transaction finality for real-time consumer UX",
      "Sub-cent execution fees per transaction",
    ],
    tradeoffsAccepted: "Steeper learning curve and strict ownership/borrowing memory rules.",
    alternativesRejected: [
      {
        name: "Solidity / EVM",
        reasonRejected: "12-15 second block finality and high gas fee volatility make consumer ride-sharing micro-transactions unviable.",
      },
    ],
  },
  {
    technology: "PostgreSQL + Prisma ORM",
    category: "Database",
    whyChosen: "ACID transactional compliance, rich relational querying, index optimization, and type-safe database migrations.",
    keyBenefits: [
      "Type-safe auto-generated TypeScript queries",
      "Declarative database schema migrations",
      "Robust relational indexing & full-text search capabilities",
    ],
    tradeoffsAccepted: "Requires schema migration management compared to schemaless NoSQL stores.",
    alternativesRejected: [
      {
        name: "MongoDB",
        reasonRejected: "Lack of enforced foreign key constraints increases risk of data inconsistency in relational e-commerce systems.",
      },
    ],
  },
];
