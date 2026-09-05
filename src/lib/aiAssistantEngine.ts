/**
 * Indexed Portfolio AI Assistant Engine (Zero-Hallucination Query Engine)
 */

import { siteConfig } from "./siteConfig";
import { ENGINEERING_CASE_STUDIES } from "../data/caseStudies";

export interface AIQueryResponse {
  answer: string;
  matchedTopic: string;
  citations: { title: string; url: string }[];
}

export const aiAssistantEngine = {
  /**
   * Process visitor or recruiter queries against portfolio dataset
   */
  query: (userQuery: string): AIQueryResponse => {
    const q = userQuery.toLowerCase().trim();

    // Query 1: Payment systems / Escrow / E-commerce
    if (q.includes("payment") || q.includes("escrow") || q.includes("ecommerce") || q.includes("financial")) {
      return {
        matchedTopic: "Payment & Escrow Systems",
        answer: "Yes! Anupam engineered Yatra, a decentralized ride-sharing protocol on Solana that processes atomic ride escrows via Rust Anchor smart contracts. Trip funds are securely locked in Program Derived Address (PDA) accounts prior to driver dispatch.",
        citations: [
          { title: "Yatra Solana Protocol Case Study", url: "/projects/yatra-solana-ride-sharing" },
          { title: "Solana Loyalty Rewards Protocol", url: "/projects/web3-loyalty-protocol" },
        ],
      };
    }

    // Query 2: Docker / Containerization / DevOps
    if (q.includes("docker") || q.includes("container") || q.includes("devops") || q.includes("ci")) {
      return {
        matchedTopic: "Docker & DevOps Pipeline",
        answer: "Yes, Anupam utilizes multi-stage Docker builds to containerize Python machine learning workflows and Node.js microservices. All portfolio builds are enforced by GitHub Actions automated CI pipelines (`.github/workflows/ci.yml`).",
        citations: [
          { title: "Docker ML Containers Article", url: "/blog/docker-ml-pipelines" },
          { title: "GitHub Engineering Hub", url: "/open-source" },
        ],
      };
    }

    // Query 3: PostgreSQL / Databases / Prisma
    if (q.includes("postgres") || q.includes("sql") || q.includes("database") || q.includes("prisma")) {
      return {
        matchedTopic: "PostgreSQL & Database Architecture",
        answer: "Anupam works extensively with PostgreSQL, Prisma ORM, MySQL, and Supabase RLS. He built Greenstar Suppliers (Next.js 16 + Prisma/PostgreSQL) and engineered read-replica MySQL indexing for high-concurrency LMS architectures.",
        citations: [
          { title: "Greenstar Suppliers Catalogue", url: "/projects/greenstar-suppliers" },
          { title: "Decoupled LMS Case Study", url: "/projects/e-learning-platform" },
        ],
      };
    }

    // Query 4: React / Next.js / Frontend Stack
    if (q.includes("react") || q.includes("next") || q.includes("frontend") || q.includes("typescript")) {
      return {
        matchedTopic: "Frontend & React Stack",
        answer: "Anupam specializes in React 18, Next.js 16 (App Router), TypeScript, and Tailwind CSS. Every frontend application is built for sub-second load times, 100% type safety, and zero layout shift (CLS 0.00).",
        citations: [
          { title: "Projects Showcase", url: "/projects" },
          { title: "Executive Recruiter Profile", url: "/for-recruiters" },
        ],
      };
    }

    // Query 5: Best Performance / Speed / Core Web Vitals
    if (q.includes("performance") || q.includes("speed") || q.includes("fast") || q.includes("vitals")) {
      return {
        matchedTopic: "Performance Benchmarks & Web Vitals",
        answer: "The LMS Decoupled Architecture achieved a 67% load time reduction (from 3.4s to 1.1s) under 10,000 concurrent users. This portfolio itself runs with 0.00 CLS, < 1.2s LCP, and 18 static pre-rendered SSG pages.",
        citations: [
          { title: "LMS Performance Case Study", url: "/projects/e-learning-platform" },
          { title: "Production Readiness Spec", url: "/about" },
        ],
      };
    }

    // Query 6: Biggest Challenge / Architecture Failures
    if (q.includes("challenge") || q.includes("failure") || q.includes("reentrancy") || q.includes("difficult")) {
      return {
        matchedTopic: "Engineering Challenges & Lock Resolution",
        answer: "Anupam's biggest challenge was resolving Account Reentrancy bugs in Yatra's Solana Anchor smart contract when riders cancelled fares simultaneously during driver acceptance. Solved via state locks in Rust PDA contexts.",
        citations: [
          { title: "Yatra Systems Design", url: "/projects/yatra-solana-ride-sharing" },
          { title: "Interactive Architecture Diagrams", url: "/architecture" },
        ],
      };
    }

    // Query 7: Backend Stack / Python / Node.js
    if (q.includes("backend") || q.includes("python") || q.includes("node") || q.includes("api")) {
      return {
        matchedTopic: "Backend Architecture",
        answer: "Anupam's backend stack includes Node.js, Express, Python (FastAPI/Pydantic), Supabase, Firebase, and Rust. He designs stateless JWT API gateways and resilient API clients with exponential backoff retries.",
        citations: [
          { title: "Type-Safe AI Pipelines Log", url: "/blog/type-safe-ai-pipelines" },
          { title: "System Architecture Spec", url: "/about" },
        ],
      };
    }

    // Query 8: YarshaByte / IT Company
    if (q.includes("yarsha") || q.includes("it company") || q.includes("it consulting")) {
      return {
        matchedTopic: "YarshaByte IT Company Platform",
        answer: "Anupam architected and built the digital platform for YarshaByte, an IT company delivering software engineering, web development, and digital solutions for businesses in Nepal. Engineered with Next.js App Router, TypeScript, and Framer Motion for 99+ Lighthouse performance.",
        citations: [
          { title: "YarshaByte IT Company Case Study", url: "/projects/yarshabyte-it-company" },
          { title: "All Projects Showcase", url: "/projects" },
        ],
      };
    }

    // Default Fallback matching
    const matchingStudy = ENGINEERING_CASE_STUDIES.find((study) =>
      study.title.toLowerCase().includes(q) || study.problem.toLowerCase().includes(q)
    );

    if (matchingStudy) {
      return {
        matchedTopic: matchingStudy.title,
        answer: `${matchingStudy.title}: ${matchingStudy.problem} ${matchingStudy.architectureOverview}`,
        citations: [{ title: matchingStudy.title, url: `/projects/${matchingStudy.slug}` }],
      };
    }

    return {
      matchedTopic: "Portfolio Engineering Summary",
      answer: `Anupam Baral is a Full-Stack & AI Engineer specializing in React, Next.js, TypeScript, Python, PostgreSQL, Supabase, Firebase, and Solana Rust smart contracts. Over 5+ production applications engineered with sub-second page loads and strict type safety.`,
      citations: [
        { title: "Technical Skills & Matrix", url: "/about" },
        { title: "For Recruiters Portal", url: "/for-recruiters" },
      ],
    };
  },
};
