import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Database, Cpu, Calendar, Shield, CheckCircle2, Image as ImageIcon, ChevronRight, BookOpen, Layers, Lightbulb, Scale } from "lucide-react";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/SectionShell";
import { siteConfig } from "@/lib/siteConfig";
import {
  getProjectSchema,
  getBreadcrumbSchema,
  getWebPageSchema,
} from "@/lib/schema";

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
      { label: "System Uptime", value: "99.9%" },
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
    imageUrl: "/greenstar.webp",
    screenshots: [
      "/greenstar.webp",
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200"
    ],
    liveLink: "",
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
  }
};

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? caseStudies[id] : null;

  if (!project) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-32 text-center flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <h1 className="font-display text-2xl font-medium tracking-tight text-foreground">
          Project Case Study Not Found
        </h1>
        <p className="text-sm text-muted-foreground max-w-md">
          The requested project case study could not be resolved.
        </p>
        <Link to="/projects">
          <Button variant="outline" className="gap-2 font-mono uppercase text-[11px] tracking-widest">
            <ArrowLeft className="w-4 h-4" />
            Back to All Work
          </Button>
        </Link>
      </div>
    );
  }

  const url = `${siteConfig.url}/project/${project.id}`;
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Projects", item: "/projects" },
    { name: project.title, item: `/project/${project.id}` },
  ];

  const schemas = [
    getProjectSchema({
      title: project.title,
      description: project.subtitle,
      tags: project.tags,
      githubLink: project.githubLink,
      liveLink: project.liveLink,
      imageUrl: project.imageUrl,
    }),
    getBreadcrumbSchema(breadcrumbs),
    getWebPageSchema(
      project.seoTitle,
      project.seoDescription,
      url,
      breadcrumbs
    ),
  ];

  return (
    <SectionShell bordered={false}>
      <SEO
        title={project.seoTitle}
        description={project.seoDescription}
        keywords={project.keywords.join(", ")}
        canonicalUrl={url}
        ogImage={`${siteConfig.url}${project.imageUrl}`}
        ogType="article"
        schema={schemas}
      />

      {/* Visual Breadcrumb Trail */}
      <nav aria-label="Breadcrumb navigation" className="flex items-center gap-2 mb-6 label-mono text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" aria-hidden="true" />
        <Link to="/projects" className="hover:text-foreground transition-colors">Projects</Link>
        <ChevronRight className="w-3 h-3" aria-hidden="true" />
        <span className="text-foreground font-medium line-clamp-1">{project.title}</span>
      </nav>

      {/* Back CTA */}
      <div className="mb-12">
        <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to All Projects Archive
        </Link>
      </div>

      {/* Header Info */}
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="font-mono text-xs text-primary border-primary/30">
            Case Study • {project.year}
          </Badge>
          <span className="text-xs font-mono text-muted-foreground">{project.client}</span>
        </div>

        <h1 className="heading-display max-w-4xl">
          {project.title}
        </h1>
        <p className="text-body max-w-3xl">
          {project.subtitle}
        </p>

        {/* Technical Pills & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 px-4 py-2.5 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium rounded-md border border-border hover:bg-muted text-foreground active:scale-95 px-4 py-2.5 transition-all"
              >
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="w-full aspect-video border border-border/40 rounded-md overflow-hidden bg-muted mb-16 relative">
        <img
          src={project.imageUrl}
          alt={`Visual mockup of ${project.title}`}
          width={1200}
          height={675}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200";
          }}
        />
      </div>

      {/* Grid contents */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Metadata Rail */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
          <Card className="p-6 flex flex-col gap-4">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground block">
                Role
              </span>
              <span className="text-sm font-medium text-foreground">
                {project.role}
              </span>
            </div>
            <div className="h-[1px] bg-border/40" />
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground block">
                Timeline / Year
              </span>
              <span className="text-sm font-medium text-foreground flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                {project.year}
              </span>
            </div>
            <div className="h-[1px] bg-border/40" />
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground block">
                Environment
              </span>
              <span className="text-sm font-medium text-foreground">
                {project.client}
              </span>
            </div>
          </Card>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Verified Performance Metrics
            </span>
            <div className="flex flex-col gap-3">
              {project.metrics.map((metric) => (
                <Card key={metric.label} className="px-6 py-4 flex justify-between items-center">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {metric.label}
                  </span>
                  <span className="text-sm font-semibold text-primary font-mono">
                    {metric.value}
                  </span>
                </Card>
              ))}
            </div>
          </div>

          {/* Contextual Link to Engineering Article */}
          {project.relatedArticleLink && (
            <Card className="p-6 bg-primary/[0.04] border-primary/20 flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" /> Related Engineering Log
              </span>
              <h4 className="font-display text-sm font-medium leading-snug">
                {project.relatedArticleTitle}
              </h4>
              <a
                href={project.relatedArticleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:underline"
              >
                Read Article on Medium →
              </a>
            </Card>
          )}
        </div>

        {/* Right Editorial Storytelling Section */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          {/* Problem */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xl font-medium tracking-tight text-foreground flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" aria-hidden="true" />
              1. The Problem
            </h3>
            <p className="text-body-sm sm:text-base leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Context & Requirements */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xl font-medium tracking-tight text-foreground flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" aria-hidden="true" />
              2. Context & Core Requirements
            </h3>
            <ul className="flex flex-col gap-2 pt-1">
              {project.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-md border border-border bg-card/40 text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" aria-hidden="true" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xl font-medium tracking-tight text-foreground flex items-center gap-2">
              <Database className="w-5 h-5 text-primary" aria-hidden="true" />
              3. The Technical Solution
            </h3>
            <p className="text-body-sm sm:text-base leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Key Features */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xl font-medium tracking-tight text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
              4. Key Capabilities & Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-md border border-border bg-card/40 text-body-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xl font-medium tracking-tight text-foreground flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
              5. Architecture Breakdown
            </h3>
            <ul className="flex flex-col gap-3 text-body-sm sm:text-base pl-4 border-l border-border">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Trade-offs & Decisions */}
          <div className="flex flex-col gap-3 p-5 rounded-lg border border-border bg-muted/30">
            <h3 className="font-display text-base font-medium text-foreground flex items-center gap-2">
              <Scale className="w-4 h-4 text-primary" aria-hidden="true" />
              6. Technical Decisions & Trade-offs
            </h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed font-mono text-xs">
              {project.tradeoffs}
            </p>
          </div>

          {/* Screenshots Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="flex flex-col gap-4 pt-2">
              <h3 className="font-display text-xl font-medium tracking-tight text-foreground flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-primary" aria-hidden="true" />
                7. Screenshots & Interface Previews
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots.map((shot, idx) => (
                  <div key={idx} className="aspect-video rounded-md border border-border overflow-hidden bg-muted">
                    <img
                      src={shot}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      width={600}
                      height={337}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Lessons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
            <div className="flex flex-col gap-2">
              <h4 className="label-mono text-foreground flex items-center gap-1.5">
                Challenges
              </h4>
              <p className="text-body-sm leading-relaxed">
                {project.challenges}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="label-mono text-foreground flex items-center gap-1.5">
                Lessons learned
              </h4>
              <p className="text-body-sm leading-relaxed">
                {project.lessons}
              </p>
            </div>
          </div>

          {/* Future Improvements */}
          <div className="p-5 rounded-lg border border-primary/20 bg-primary/[0.03] flex flex-col gap-2">
            <h4 className="label-mono text-primary flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" aria-hidden="true" /> Future Improvements & Roadmap
            </h4>
            <p className="text-body-sm text-foreground/90 font-mono text-xs">
              {project.futureImprovements}
            </p>
          </div>
        </div>
      </div>

      {/* Internal Navigation Footer: Prev / Next */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-16 mt-20 border-t border-border">
        {project.id !== "01" ? (
          <Link
            to={`/project/0${parseInt(project.id) - 1}`}
            className="group flex flex-col gap-2 p-6 border border-border rounded-md bg-card hover:border-primary/50 transition-colors"
          >
            <span className="label-mono flex items-center gap-2">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
              Previous Case Study
            </span>
            <span className="font-display text-lg font-medium text-foreground">
              {caseStudies[`0${parseInt(project.id) - 1}`]?.title || "Previous"}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {project.id !== Object.keys(caseStudies).length.toString().padStart(2, "0") ? (
          <Link
            to={`/project/0${parseInt(project.id) + 1}`}
            className="group flex flex-col items-end gap-2 p-6 border border-border rounded-md bg-card hover:border-primary/50 transition-colors text-right"
          >
            <span className="label-mono flex items-center gap-2 justify-end">
              Next Case Study
              <ArrowLeft className="w-3.5 h-3.5 rotate-180 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-medium text-foreground">
              {caseStudies[`0${parseInt(project.id) + 1}`]?.title || "Next"}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </SectionShell>
  );
};

export default ProjectDetails;
