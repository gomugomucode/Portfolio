import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");

const SITE_URL = "https://anupambaral.com.np";
const SITE_NAME = "Anupam Baral";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.webp`;

const sharedNavHtml = `
  <header>
    <nav aria-label="Main Navigation">
      <a href="/">Home</a> |
      <a href="/about">About</a> |
      <a href="/projects">Projects</a> |
      <a href="/blog">Blog</a> |
      <a href="/ai">AI Portfolio</a> |
      <a href="/open-source">Open Source</a> |
      <a href="/architecture">Architecture</a> |
      <a href="/uses">Uses</a> |
      <a href="/for-recruiters">For Recruiters</a> |
      <a href="/contact">Contact</a>
    </nav>
  </header>
`;

const sharedFooterHtml = `
  <footer>
    <p>&copy; ${new Date().getFullYear()} Anupam Baral (@gomugomucode). Full-Stack Developer & AI Engineer, Nepal.</p>
    <p>
      <a href="https://github.com/gomugomucode" target="_blank" rel="noopener noreferrer">GitHub</a> |
      <a href="https://linkedin.com/in/gomugomucode" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
      <a href="https://medium.com/@gomugomucode" target="_blank" rel="noopener noreferrer">Medium</a> |
      <a href="/privacy">Privacy Policy</a> |
      <a href="/terms">Terms of Service</a>
    </p>
  </footer>
`;

const routeMetadata = [
  {
    route: "/",
    title: "Anupam Baral (@gomugomucode) — Full-Stack Developer & AI Engineer",
    description:
      "Official portfolio of Anupam Baral (@gomugomucode), a Full-Stack Developer and AI Engineer from Nepal building web applications, AI systems, and software projects.",
    ogTitle:
      "Anupam Baral (@gomugomucode) — Full-Stack Developer & AI Engineer",
    ogDescription:
      "Official portfolio of Anupam Baral (@gomugomucode), a Full-Stack Developer and AI Engineer from Nepal building web applications, AI systems, and software projects.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <section>
          <p>Full-Stack Developer & AI Engineer · Butwal, Nepal</p>
          <h1>Anupam Baral</h1>
          <p>Anupam Baral is a Full-Stack Developer and AI Engineer from Nepal, known online as <strong>gomugomucode</strong> (@gomugomucode). I build production web applications with React, Next.js, and TypeScript, engineer intelligent Python microservices, and architect decentralized systems on Solana.</p>
          <p>Location: Butwal, Nepal (GMT+5:45). Available for Full-time Roles & Freelance Contracts.</p>
          <p><a href="/contact">Hire Me for Projects</a> | <a href="/Anupambaral-cv.docx">Download CV</a></p>
        </section>
        <section>
          <h2>Featured Production Projects & Case Studies</h2>
          <article>
            <h3><a href="/projects/e-learning-platform">E-Learning LMS Platform</a></h3>
            <p>Decoupled React LMS platform with MySQL query optimizations, sub-1.2s load speeds, and Vercel edge caching.</p>
          </article>
          <article>
            <h3><a href="/projects/yatra-solana-ride-sharing">Yatra — Solana Ride-Sharing Protocol</a></h3>
            <p>Decentralized ride-sharing engine on Solana with atomic trip escrow smart contracts, driver reputation tokens, and Firebase RTDB signaling.</p>
          </article>
          <article>
            <h3><a href="/projects/web3-loyalty-protocol">Web3 Loyalty Protocol</a></h3>
            <p>High-performance loyalty rewards dApp featuring automated smart-contract distributions, sub-cent transaction costs, and instant token settlement on Solana.</p>
          </article>
          <article>
            <h3><a href="/projects/greenstar-suppliers">Greenstar Suppliers</a></h3>
            <p>Next.js 16 product catalogue and order enquiry platform for entrance & home automation in Nepal.</p>
          </article>
          <article>
            <h3><a href="/projects/yarshabyte-it-company">YarshaByte — IT Company</a></h3>
            <p>Modern IT company web platform built with Next.js, highlighting software engineering, IT consulting, and digital solutions.</p>
          </article>
        </section>
        <section>
          <h2>Core Capabilities & Engineering Stack</h2>
          <p>Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion.</p>
          <p>Backend & Cloud: Python, FastAPI, Node.js, Express, PostgreSQL, MySQL, Supabase, Firebase.</p>
          <p>Web3 & Systems: Solana, Rust, Anchor Framework, Web3.js.</p>
        </section>
        <section>
          <h2>Verified Online Profiles</h2>
          <ul>
            <li><a href="https://github.com/gomugomucode" target="_blank" rel="noopener noreferrer">GitHub: @gomugomucode</a></li>
            <li><a href="https://linkedin.com/in/gomugomucode" target="_blank" rel="noopener noreferrer">LinkedIn: in/gomugomucode</a></li>
            <li><a href="https://medium.com/@gomugomucode" target="_blank" rel="noopener noreferrer">Medium: @gomugomucode</a></li>
                                  </ul>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile`,
        url: `${SITE_URL}/`,
        name: "Anupam Baral — Full-Stack Developer & AI Engineer | gomugomucode",
        description: "Full-Stack Developer and AI Engineer from Nepal.",
        mainEntity: {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          name: "Anupam Baral",
          alternateName: ["gomugomucode", "@gomugomucode"],
          url: `${SITE_URL}/`,
          image: `${SITE_URL}/my-photo.webp`,
          jobTitle: ["Full-Stack Developer", "AI Engineer"],
          description: "Full-Stack Developer and AI Engineer from Nepal.",
          nationality: {
            "@type": "Country",
            name: "Nepal",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Butwal",
            addressRegion: "Lumbini",
            addressCountry: "NP",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Tribhuvan University",
            sameAs: "https://en.wikipedia.org/wiki/Tribhuvan_University",
          },
          sameAs: [
            "https://github.com/gomugomucode",
            "https://linkedin.com/in/gomugomucode",
            "https://medium.com/@gomugomucode",
          ],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Anupam Baral — Full-Stack Developer & AI Engineer",
        alternateName: ["gomugomucode", "@gomugomucode"],
        description:
          "Anupam Baral (@gomugomucode) is a Full-Stack Developer and AI Engineer from Nepal, building web applications, AI systems, backend services, and open-source projects.",
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  },
  {
    route: "/about",
    title: "About Anupam Baral (@gomugomucode)",
    description:
      "Authoritative profile and biographical overview of Anupam Baral (@gomugomucode), a Full-Stack Developer and AI Engineer based in Nepal specializing in React, Next.js, Python, Supabase, and Solana.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <section>
          <p>01 — Identity & Background (@gomugomucode)</p>
          <h1>About Anupam Baral</h1>
          <p>Full-Stack Developer & AI Engineer building reliable, accessible web applications, scalable Python machine learning pipelines, and decentralized Web3 systems from Nepal.</p>
          <p>Location: Butwal, Nepal (GMT+5:45) | Education: BCA, Tribhuvan University | Specialization: React, Next.js, Python & AI</p>
        </section>
        <section>
          <h2>Who I Am</h2>
          <p>I am Anupam Baral, known across developer platforms as @gomugomucode. I am a Full-Stack Developer and AI Engineer based in Butwal, Nepal. Currently pursuing a Bachelor of Computer Applications (BCA) at Butwal Kalika Campus, I design production software systems, write technical breakdowns, and build open-source developer utilities.</p>
          <p>My engineering approach emphasizes type safety, verifiable performance benchmarks, and clean architectural separation across React, Next.js, Python FastAPI, and Solana Anchor.</p>
        </section>
        <section>
          <h2>What I Build</h2>
          <ul>
            <li><strong>Full-Stack Web Systems:</strong> React, Next.js, TypeScript, Tailwind CSS, PostgreSQL, Supabase. <a href="/projects">View Projects</a></li>
            <li><strong>AI & ML Microservices:</strong> Python, FastAPI, Pydantic, Scikit-Learn. <a href="/ai">Explore AI Work</a></li>
            <li><strong>Web3 & Decentralized Protocols:</strong> Solana, Rust, Anchor. <a href="/open-source">Open Source Hub</a></li>
          </ul>
        </section>
        <section>
          <h2>Verified Online Profiles</h2>
          <ul>
            <li><a href="https://github.com/gomugomucode" target="_blank" rel="noopener noreferrer">GitHub (@gomugomucode)</a></li>
            <li><a href="https://linkedin.com/in/gomugomucode" target="_blank" rel="noopener noreferrer">LinkedIn (in/gomugomucode)</a></li>
            <li><a href="https://medium.com/@gomugomucode" target="_blank" rel="noopener noreferrer">Medium (@gomugomucode)</a></li>
                      </ul>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${SITE_URL}/about#webpage`,
        url: `${SITE_URL}/about`,
        name: "About Anupam Baral (@gomugomucode) | Full Stack & AI Engineer",
        description:
          "Authoritative profile and biographical overview of Anupam Baral (@gomugomucode).",
      },
    ],
  },
  {
    route: "/projects",
    title: "Software Engineering Portfolio & Projects — Anupam Baral (@gomugomucode)",
    description:
      "Explore production projects built by Anupam Baral, featuring scalable web applications, AI/ML integrations, and open-source contributions.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <h1>Projects by Anupam Baral (@gomugomucode)</h1>
        <p>Explore production web applications, decentralized Web3 protocols, and AI microservices built by Anupam Baral.</p>
        <section>
          <article>
            <h2><a href="/projects/e-learning-platform">E-Learning LMS Platform</a></h2>
            <p>Decoupled React LMS platform with MySQL query optimizations, sub-1.2s load speeds, and Vercel edge caching.</p>
          </article>
          <article>
            <h2><a href="/projects/yatra-solana-ride-sharing">Yatra — Solana Ride-Sharing Protocol</a></h2>
            <p>Decentralized ride-sharing engine on Solana with atomic trip escrow smart contracts and Firebase RTDB signaling.</p>
          </article>
          <article>
            <h2><a href="/projects/web3-loyalty-protocol">Web3 Loyalty Protocol</a></h2>
            <p>Solana Web3 loyalty rewards protocol featuring automated smart contract distributions and instant token settlement.</p>
          </article>
          <article>
            <h2><a href="/projects/greenstar-suppliers">Greenstar Suppliers</a></h2>
            <p>Next.js 16 product catalogue and order enquiry web app for entrance & home automation in Nepal.</p>
          </article>
          <article>
            <h2><a href="/projects/yarshabyte-it-company">YarshaByte — IT Company</a></h2>
            <p>Modern IT company web platform built with Next.js, highlighting software engineering, IT consulting, and digital solutions.</p>
          </article>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${SITE_URL}/projects#webpage`,
        url: `${SITE_URL}/projects`,
        name: "Projects by Anupam Baral",
        description: "Explore production projects built by Anupam Baral.",
      },
    ],
  },
  {
    route: "/projects/e-learning-platform",
    title: "E-Learning LMS Platform — Anupam Baral (@gomugomucode)",
    description:
      "In-depth technical case study of a decoupled React LMS platform with MySQL query optimizations, sub-1.2s load speeds, and Vercel edge caching.",
    ogImage: `${SITE_URL}/elearning-preview.webp`,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <p><a href="/projects">&larr; Back to Projects</a></p>
        <h1>E-Learning LMS Platform — Architectural Case Study</h1>
        <p>Author: Anupam Baral (@gomugomucode) | Full Stack Engineer</p>
        <p>A high-performance decoupled Learning Management System built for production-scale content distribution.</p>
        <section>
          <h2>Problem & Constraints</h2>
          <p>Traditional LMS solutions suffer from slow page load speeds and tightly coupled architectures. High payload delivery and excessive database roundtrips degrade search and dashboard performance when multiple courses load concurrently.</p>
        </section>
        <section>
          <h2>Solution & Architecture</h2>
          <p>Decoupled the architecture completely by serving a static, highly optimized React client via global CDNs and running a lightweight, stateless Node.js/Express API. Built database query optimizations using precompiled joins and index mappings in MySQL to handle nested course structures.</p>
        </section>
        <section>
          <h2>Links</h2>
          <p><a href="https://elearn-lake.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a> | <a href="https://github.com/gomugomucode/elearn" target="_blank" rel="noopener noreferrer">GitHub Repository</a> | <a href="https://medium.com/@gomugomucode/decoupled-lms-architectures" target="_blank" rel="noopener noreferrer">Engineering Article</a></p>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        "@id": `${SITE_URL}/projects/e-learning-platform#software`,
        name: "E-Learning LMS Platform",
        description:
          "Decoupled React LMS platform with MySQL query optimizations.",
        codeRepository: "https://github.com/gomugomucode/elearn",
        programmingLanguage: "React, Node.js, Express, MySQL",
        url: `${SITE_URL}/projects/e-learning-platform`,
        author: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  },
  {
    route: "/projects/yatra-solana-ride-sharing",
    title: "Yatra: Solana Ride-Sharing Protocol — Anupam Baral (@gomugomucode)",
    description:
      "Architectural breakdown of Yatra: a Solana decentralized ride-sharing engine written in Rust smart contracts with Firebase RTDB signaling and Web3.js.",
    ogImage: `${SITE_URL}/yatra.webp`,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <p><a href="/projects">&larr; Back to Projects</a></p>
        <h1>Yatra — Solana Ride-Sharing Protocol Case Study</h1>
        <p>Author: Anupam Baral (@gomugomucode) | Core Web3 Architect</p>
        <p>Decentralized atomic trip contracts and reputation ledger built on the Solana blockchain.</p>
        <section>
          <h2>Problem & Constraints</h2>
          <p>Centralized ride-sharing apps take up to a 30% cut of driver earnings and suffer from centralized data security risks. Drivers have no sovereign ownership over their profile history, trip records, or reputational scores.</p>
        </section>
        <section>
          <h2>Solution & Architecture</h2>
          <p>Created an open-source decentralized ride-sharing engine on Solana. All trip status shifts are verified using atomic smart contracts written in Rust. Used Firebase RTDB for sub-second location updates, and Web3.js client-side signatures to authenticate every trip event.</p>
        </section>
        <section>
          <h2>Links</h2>
          <p><a href="https://yatraa-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a> | <a href="https://github.com/gomugomucode/Yatra" target="_blank" rel="noopener noreferrer">GitHub Repository</a> | <a href="https://medium.com/@gomugomucode/yatra-solana-ride-sharing-protocol" target="_blank" rel="noopener noreferrer">Engineering Article</a></p>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        "@id": `${SITE_URL}/projects/yatra-solana-ride-sharing#software`,
        name: "Yatra Solana Ride-Sharing",
        description: "Decentralized ride-sharing engine on Solana.",
        codeRepository: "https://github.com/gomugomucode/Yatra",
        programmingLanguage: "Rust, Solana, Next.js, Firebase",
        url: `${SITE_URL}/projects/yatra-solana-ride-sharing`,
        author: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  },
  {
    route: "/projects/web3-loyalty-protocol",
    title: "Web3 Loyalty Protocol — Anupam Baral (@gomugomucode)",
    description:
      "Technical case study of a Solana Web3 loyalty rewards protocol featuring automated smart contract distributions, sub-cent transaction costs, and instant token settlement.",
    ogImage: `${SITE_URL}/solana.webp`,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <p><a href="/projects">&larr; Back to Projects</a></p>
        <h1>Web3 Loyalty Protocol — Case Study</h1>
        <p>Author: Anupam Baral (@gomugomucode) | Lead Dapp Developer</p>
        <p>A high-performance loyalty rewards dApp featuring automated smart-contract distributions on Solana.</p>
        <section>
          <h2>Problem & Solution</h2>
          <p>Built a loyalty dApp that mints and issues dynamic program points directly to consumer cryptographic wallets. Built smart program distributions to handle points transfers, program enrollment, and reward redemptions with instant settlement times.</p>
        </section>
        <section>
          <h2>Links</h2>
          <p><a href="https://solana-loyalty-d-app.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a> | <a href="https://github.com/gomugomucode/Solana-Loyalty-dApp" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        "@id": `${SITE_URL}/projects/web3-loyalty-protocol#software`,
        name: "Web3 Loyalty Protocol",
        description:
          "Solana Web3 loyalty rewards protocol featuring automated smart contract distributions.",
        codeRepository: "https://github.com/gomugomucode/Solana-Loyalty-dApp",
        programmingLanguage: "Rust, Solana, Next.js, TypeScript",
        url: `${SITE_URL}/projects/web3-loyalty-protocol`,
        author: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  },
  {
    route: "/projects/greenstar-suppliers",
    title: "Greenstar Suppliers — Anupam Baral (@gomugomucode)",
    description:
      "Production case study of Greenstar Suppliers: a Next.js 16 product catalogue and order enquiry web app for entrance & home automation in Nepal.",
    ogImage: `${SITE_URL}/greenstarphoto.png`,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <p><a href="/projects">&larr; Back to Projects</a></p>
        <h1>Greenstar Suppliers — Case Study</h1>
        <p>Author: Anupam Baral (@gomugomucode) | Full Stack Developer</p>
        <p>A Next.js 16 product catalogue and order enquiry platform for Nepal's leading entrance and home automation supplier.</p>
        <section>
          <h2>Problem & Solution</h2>
          <p>Built a full-featured Next.js 16 (App Router) website with dynamic hardware product catalogue, category filtering, WhatsApp and Call order routing, and a PostgreSQL backend persisted via Prisma ORM.</p>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        "@id": `${SITE_URL}/projects/greenstar-suppliers#software`,
        name: "Greenstar Suppliers Website",
        description: "Next.js 16 product catalogue and order enquiry platform.",
        programmingLanguage:
          "Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL",
        url: `${SITE_URL}/projects/greenstar-suppliers`,
        author: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  },
  {
    route: "/projects/yarshabyte-it-company",
    title: "YarshaByte: IT Company — Anupam Baral (@gomugomucode)",
    description:
      "In-depth case study of YarshaByte: an innovative IT company delivering software engineering, web development, and digital services built with Next.js, Tailwind CSS, and fluid motion design.",
    ogImage: `${SITE_URL}/yarshabyte.webp`,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <p><a href="/projects">&larr; Back to Projects</a></p>
        <h1>YarshaByte — IT Company & Digital Solutions Case Study</h1>
        <p>Author: Anupam Baral (@gomugomucode) | Lead Full-Stack Engineer & Frontend Architect</p>
        <p>A modern IT company platform showcasing software development, IT consulting, cloud delivery, and bespoke digital solutions.</p>
        <section>
          <h2>Problem & Solution</h2>
          <p>Designed and built YarshaByte's web platform using Next.js App Router, TypeScript, and modern motion principles. Engineered modular service showcases for IT consulting, software development, and digital solutions with sub-80ms edge delivery.</p>
        </section>
        <section>
          <h2>Links</h2>
          <p><a href="https://yarshabyte.com/" target="_blank" rel="noopener noreferrer">Live IT Company Platform</a></p>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        "@id": `${SITE_URL}/projects/yarshabyte-it-company#software`,
        name: "YarshaByte IT Company & Digital Solutions",
        description:
          "Next.js IT company platform with fluid motion design and software engineering showcases.",
        programmingLanguage: "Next.js, TypeScript, Tailwind CSS, Framer Motion",
        url: `${SITE_URL}/projects/yarshabyte-it-company`,
        author: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  },
  {
    route: "/blog",
    title: "Engineering Blog & Technical Articles — Anupam Baral (@gomugomucode)",
    description:
      "Articles on software architecture, Solana Web3 smart contracts, React/Next.js performance, and Python machine learning pipelines.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <h1>Technical Articles & Engineering Logs</h1>
        <p>Written by Anupam Baral (@gomugomucode). Deep dives into system design, decentralized protocols, and scalable frontend architectures.</p>
        <section>
          <article>
            <h2><a href="/blog/yatra-solana-ride-sharing-protocol">Architecting Yatra — A Decentralized Ride-Sharing Protocol on Solana</a></h2>
            <p>Deep dive into engineering atomic ride contracts, driver reputation mechanisms, and real-time signalling systems using Rust, Web3.js, and Firebase.</p>
          </article>
          <article>
            <h2><a href="/blog/decoupled-lms-architectures">Decoupling Large-Scale LMS Content Deliveries</a></h2>
            <p>Analyzing MySQL persistence designs, decoupling frontend applications, and designing zero-latency CDN distributions for heavy educational platform architectures.</p>
          </article>
          <article>
            <h2><a href="/blog/type-safe-ai-pipelines">Type-Safe AI Inference: Connecting Python Models to TS Gateways</a></h2>
            <p>How to bridge Python machine learning backends with TypeScript API gateways using Pydantic and Zod structural runtime validations.</p>
          </article>
          <article>
            <h2><a href="/blog/nextjs-edge-rendering">Optimizing Next.js Edge Rendering for E-commerce</a></h2>
            <p>Strategies for achieving sub-second LCP on content-heavy e-commerce pages using Next.js Edge runtime, streaming SSR, and aggressive caching.</p>
          </article>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Anupam Baral Engineering Blog",
        url: `${SITE_URL}/blog`,
      },
    ],
  },
  {
    route: "/blog/yatra-solana-ride-sharing-protocol",
    title:
      "Architecting Yatra: Decentralized Ride-Sharing Protocol on Solana — Anupam Baral (@gomugomucode)",
    description:
      "A comprehensive deep dive into engineering atomic ride contracts, driver reputation mechanisms, and real-time signalling systems using Rust, Web3.js, and Firebase.",
    ogImage: `${SITE_URL}/yatra.webp`,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <p><a href="/blog">&larr; Back to Engineering Blog</a></p>
        <h1>Architecting Yatra — A Decentralized Ride-Sharing Protocol on Solana</h1>
        <p>Written by Anupam Baral (@gomugomucode) | Published on Medium</p>
        <article>
          <p>Centralized ride-sharing platforms retain up to 30% of driver revenue as commission overhead and store driver reputational ratings inside proprietary databases, locking drivers into single platform ecosystems.</p>
          <p>Yatra resolves this by establishing atomic peer-to-peer ride contracts on Solana via Anchor smart programs and streaming 50ms vehicle GPS telemetry off-chain via Firebase Realtime Database.</p>
          <p><a href="https://medium.com/@gomugomucode/yatra-solana-ride-sharing-protocol" target="_blank" rel="noopener noreferrer">Read Full Article on Medium &rarr;</a></p>
        </article>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline:
          "Architecting Yatra — A Decentralized Ride-Sharing Protocol on Solana",
        description:
          "Deep dive into engineering atomic ride contracts on Solana using Rust & Firebase.",
        url: `${SITE_URL}/blog/yatra-solana-ride-sharing-protocol`,
        author: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  },
  {
    route: "/blog/decoupled-lms-architectures",
    title:
      "Decoupling Large-Scale LMS Content Deliveries — Anupam Baral (@gomugomucode)",
    description:
      "Analyzing MySQL persistence designs, decoupling frontend applications, and designing zero-latency CDN distributions for heavy educational platform architectures.",
    ogImage: `${SITE_URL}/elearning-preview.webp`,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <p><a href="/blog">&larr; Back to Engineering Blog</a></p>
        <h1>Decoupling Large-Scale LMS Content Deliveries</h1>
        <p>Written by Anupam Baral (@gomugomucode) | Published on Medium</p>
        <article>
          <p>Monolithic learning platforms crash during synchronized exam windows when tens of thousands of students concurrently query course materials.</p>
          <p>This breakdown explores decoupling React presentation layers to edge CDNs while executing indexed MySQL queries across read-replicas.</p>
          <p><a href="https://medium.com/@gomugomucode/decoupled-lms-architectures" target="_blank" rel="noopener noreferrer">Read Full Article on Medium &rarr;</a></p>
        </article>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Decoupling Large-Scale LMS Content Deliveries",
        url: `${SITE_URL}/blog/decoupled-lms-architectures`,
        author: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  },
  {
    route: "/blog/type-safe-ai-pipelines",
    title:
      "Type-Safe AI Inference: Python Models to TS Gateways — Anupam Baral (@gomugomucode)",
    description:
      "How to bridge Python machine learning backends with TypeScript API gateways. Implement structural runtime validations to protect latency-critical production applications.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <p><a href="/blog">&larr; Back to Engineering Blog</a></p>
        <h1>Type-Safe AI Inference: Connecting Python Models to TS Gateways</h1>
        <p>Written by Anupam Baral (@gomugomucode)</p>
        <article>
          <p>Connecting Python ML models with TypeScript frontend gateways requires rigorous runtime validation to prevent silent JSON serialization errors.</p>
        </article>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline:
          "Type-Safe AI Inference: Connecting Python Models to TS Gateways",
        url: `${SITE_URL}/blog/type-safe-ai-pipelines`,
        author: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  },
  {
    route: "/blog/nextjs-edge-rendering",
    title:
      "Optimizing Next.js Edge Rendering for E-commerce — Anupam Baral (@gomugomucode)",
    description:
      "Strategies for achieving sub-second LCP on content-heavy e-commerce pages using Next.js Edge runtime, streaming SSR, and aggressive caching.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <p><a href="/blog">&larr; Back to Engineering Blog</a></p>
        <h1>Optimizing Next.js Edge Rendering for E-commerce</h1>
        <p>Written by Anupam Baral (@gomugomucode) | Published on Medium</p>
        <article>
          <p>Sub-second page load times directly correlate with e-commerce conversion rates. Next.js App Router and Edge Workers enable dynamic server-side rendering directly at global CDN nodes.</p>
          <p>Rather than blocking page renders on slow database queries, dynamic product detail grids stream down asynchronously using React Suspense boundaries.</p>
          <p><a href="https://medium.com/@gomugomucode/nextjs-edge-rendering" target="_blank" rel="noopener noreferrer">Read Full Article on Medium &rarr;</a></p>
        </article>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Optimizing Next.js Edge Rendering for E-commerce",
        description:
          "Strategies for achieving sub-second LCP on content-heavy e-commerce pages using Next.js Edge runtime, streaming SSR, and aggressive caching.",
        url: `${SITE_URL}/blog/nextjs-edge-rendering`,
        author: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  },
  {
    route: "/now",
    title: "What I'm Doing Now (/now) — Anupam Baral (@gomugomucode)",
    description:
      "A real-time snapshot of current engineering projects, active learning roadmap, reading list, and availability of Anupam Baral.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <h1>What I'm Doing Now — Anupam Baral (@gomugomucode)</h1>
        <p>Location: Butwal, Nepal. Last updated: 2026.</p>
        <section>
          <h2>Current Focus</h2>
          <p>Building high-throughput web systems with React and Next.js, exploring AI inference orchestration, and participating in open-source developer communities.</p>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "What I'm Doing Now | Anupam Baral",
        url: `${SITE_URL}/now`,
      },
    ],
  },
  {
    route: "/for-recruiters",
    title: "Fast-Track Hiring Guide for Recruiters — Anupam Baral (@gomugomucode)",
    description:
      "Comprehensive technical candidate breakdown for recruiters & hiring managers. Stack highlights, availability, timezones, and direct resume access.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <h1>Anupam Baral — Engineering Candidate Profile & Resume</h1>
        <p>Full-Stack Developer & AI Engineer based in Nepal (GMT+5:45). Available for Full-Time Roles & Freelance Contracts.</p>
        <section>
          <h2>Core Technical Stack</h2>
          <p>React, Next.js, TypeScript, Python, FastAPI, Supabase, PostgreSQL, MySQL, Solana, Tailwind CSS.</p>
          <p><a href="/Anupambaral-cv.docx">Download CV / Resume</a> | <a href="/contact">Contact Anupam Baral</a></p>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Engineering Candidate Profile & Resume",
        url: `${SITE_URL}/for-recruiters`,
      },
    ],
  },
  {
    route: "/ai",
    title: "AI & Machine Learning Engineering Portfolio — Anupam Baral (@gomugomucode)",
    description:
      "Python machine learning inference microservices, FastAPI type-safe gateways, LLM structured schema prompts, and AI systems by Anupam Baral.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <section>
          <p>04 — Specialized Work</p>
          <h1>AI Software & Machine Learning Portfolio</h1>
          <p>Explore production AI software pipelines, Python machine learning models, Pydantic schema validation gateways, and deterministic LLM prompt implementations by Anupam Baral (@gomugomucode).</p>
        </section>
        <section>
          <h2>Featured AI & Machine Learning Systems</h2>
          <article>
            <h3>Type-Safe AI Inference Gateway</h3>
            <p><strong>Tech Stack:</strong> Python, FastAPI, Pydantic, TypeScript, Zod, Docker</p>
            <p>Architected a type-safe API gateway bridging Python ML inference engines with TypeScript web clients. Enforces structural Pydantic runtime schema validation to eliminate undefined runtime errors.</p>
            <ul>
              <li>Sub-150ms inference response gateway with asynchronous route handlers</li>
              <li>Strict Pydantic & Zod schema validation across client-server boundaries</li>
              <li>Containerized Docker deployment isolating heavy ML dependencies</li>
            </ul>
          </article>
          <article>
            <h3>Deterministic LLM Output Schema Engine</h3>
            <p><strong>Tech Stack:</strong> Python, OpenAI API, Prompt Engineering, JSON Schema, Pydantic</p>
            <p>Designed a deterministic JSON schema wrapper for Large Language Model (LLM) APIs. Converts unstructured text responses into 100% compliant structured JSON data for downstream database storage.</p>
            <ul>
              <li>Guaranteed 100% schema compliance for extracted structured data</li>
              <li>Automated retry and fallback strategies for malformed model outputs</li>
              <li>Token usage & API cost tracking telemetry integration</li>
            </ul>
          </article>
          <article>
            <h3>Predictive Analytics & Feature Extraction Pipeline</h3>
            <p><strong>Tech Stack:</strong> Python, NumPy, Pandas, Scikit-Learn, Matplotlib</p>
            <p>Built end-to-end data preprocessing and classification pipelines using Pandas and Scikit-Learn. Performed feature engineering, missing value imputation, and model hyperparameter tuning.</p>
          </article>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "AI Software & Machine Learning Portfolio",
        url: `${SITE_URL}/ai`,
      },
    ],
  },
  {
    route: "/open-source",
    title: "Open Source Software & Developer Tools — Anupam Baral (@gomugomucode)",
    description:
      "Open-source developer utility libraries, Solana Web3 packages, React components, and GitHub repositories by Anupam Baral.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <section>
          <p>05 — Public Engineering</p>
          <h1>Open Source Hub & Contributions</h1>
          <p>A central index of open-source software repositories, Solana smart program experiments, developer tools, and contributions maintained by Anupam Baral (@gomugomucode).</p>
        </section>
        <section>
          <h2>Featured Public Repositories</h2>
          <article>
            <h3><a href="https://github.com/gomugomucode/elearn" target="_blank" rel="noopener noreferrer">elearn — Decoupled Learning Management System</a></h3>
            <p>Decoupled Learning Management System separating a static React client from a stateless Node.js/Express REST API and MySQL persistence store.</p>
            <p><strong>Tech Stack:</strong> React, Node.js, Express, MySQL, Vercel · MIT License</p>
          </article>
          <article>
            <h3><a href="https://github.com/gomugomucode/Yatra" target="_blank" rel="noopener noreferrer">Yatra — Solana Ride-Sharing Protocol</a></h3>
            <p>Decentralized ride-sharing engine built on Solana with Rust smart programs, Firebase RTDB signaling, and Web3.js signatures.</p>
            <p><strong>Tech Stack:</strong> Solana, Rust, Next.js, Firebase, Web3.js · MIT License</p>
          </article>
          <article>
            <h3><a href="https://github.com/gomugomucode/Solana-Loyalty-dApp" target="_blank" rel="noopener noreferrer">Solana-Loyalty-dApp — Web3 Loyalty Rewards</a></h3>
            <p>Solana customer loyalty dApp featuring automated smart program SPL token minting and rewards distribution.</p>
            <p><strong>Tech Stack:</strong> Solana, Rust, Next.js, Web3.js, Tailwind CSS · MIT License</p>
          </article>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Open Source Hub & Contributions",
        url: `${SITE_URL}/open-source`,
      },
    ],
  },
  {
    route: "/contact",
    title: "Contact & Hire Full-Stack & AI Engineer — Anupam Baral (@gomugomucode)",
    description:
      "Get in touch with Anupam Baral for freelance development work, open-source collaborations, AI software pipelines, or full-time engineering roles.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <header>
          <p>Collaboration & Contracts</p>
          <h1>Contact & Hire Full-Stack & AI Engineer</h1>
          <p>Get in touch with Anupam Baral (@gomugomucode) for full-stack web applications, AI/ML pipelines, decentralized Solana smart programs, or technical consulting contracts.</p>
        </header>
        <section>
          <h2>Direct Contact Channels</h2>
          <p>Primary Email: <a href="mailto:contact@anupambaral.com.np">contact@anupambaral.com.np</a></p>
          <p>Alternative Email: <a href="mailto:anupambaral.work@gmail.com">anupambaral.work@gmail.com</a></p>
          <p>Location: Butwal, Lumbini, Nepal (GMT+5:45). Available for global remote contracts.</p>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Hire Anupam Baral",
        url: `${SITE_URL}/contact`,
      },
    ],
  },
  {
    route: "/uses",
    title: "Developer Setup, Tooling & Tech Stack (/uses) — Anupam Baral (@gomugomucode)",
    description:
      "A detailed list of the hardware, code editor setup, terminal configuration, and AI tools used daily by Anupam Baral.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <section>
          <p>07 — Uses</p>
          <h1>Development Setup, Tooling & Tech Stack (/uses)</h1>
          <p>A curated look into the hardware, software, editor setup, terminal configuration, and AI engineering tools used daily by Anupam Baral (@gomugomucode).</p>
        </section>
        <section>
          <h2>Hardware & Workstation</h2>
          <p><strong>Nitro V16 Laptop:</strong> AMD Ryzen 7 8845HS, 16GB DDR5 RAM, 512GB NVMe SSD, RTX 4050 GPU.</p>
          <p><strong>High-DPI Dual Monitors:</strong> Custom 4K desktop display layout for multi-file IDE workflows.</p>
        </section>
        <section>
          <h2>Editor & IDE Configuration</h2>
          <p><strong>VS Code & Antigravity IDE:</strong> Customized with JetBrains Mono ligatures, Dark+ Modern high-contrast theme, ESLint, Prettier, and Tailwind CSS IntelliSense.</p>
        </section>
        <section>
          <h2>Terminal & Shell Environment</h2>
          <p><strong>PowerShell 7 & Starship:</strong> Fast cross-platform shell with customized Git status prompts, Node 20 LTS runtime, and GitHub CLI.</p>
        </section>
        <section>
          <h2>AI Workflows & Cloud Infrastructure</h2>
          <p><strong>AI Pair Programming:</strong> Google Gemini 1.5 Pro, Claude 3.5 Sonnet, GitHub Copilot.</p>
          <p><strong>Cloud & Hosting:</strong> Vercel edge deployment, Supabase PostgreSQL, Firebase RTDB.</p>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Uses — Development Setup & Tooling",
        url: `${SITE_URL}/uses`,
      },
    ],
  },
  {
    route: "/architecture",
    title: "Systems Architecture & Interactive Design — Anupam Baral (@gomugomucode)",
    description:
      "Interactive systems design, database schemas, API gateway flows, and architecture diagrams built by Anupam Baral.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <section>
          <p>08 — Architecture</p>
          <h1>System Architecture & Interactive Design</h1>
          <p>Interactive systems design, database schemas, API gateway flows, and architecture decision records engineered by Anupam Baral (@gomugomucode).</p>
        </section>
        <section>
          <h2>Production Architectural Blueprints</h2>
          <article>
            <h3>Yatra — Solana Ride-Sharing Escrow Architecture</h3>
            <p>Decoupled architecture separating high-frequency 50ms GPS telemetry from immutable 400ms Solana on-chain escrow account finality.</p>
            <p>Components: React 18 Mobile UI (TypeScript + Tailwind), Firebase Realtime DB (50ms telemetry), Solana Anchor Program (Rust escrow).</p>
          </article>
          <article>
            <h3>High-Concurrency LMS Read-Replica MySQL Architecture</h3>
            <p>Decoupled presentation layer with stateless Express API gateways querying indexed MySQL read-replicas during high-concurrency exam windows.</p>
            <p>Components: Vite Edge Presentation (React 18 + CDN), Express API Gateway (Node.js + JWT), MySQL Read Replicas.</p>
          </article>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Interactive System Architecture",
        url: `${SITE_URL}/architecture`,
      },
    ],
  },
  {
    route: "/playground",
    title: "Interactive Security & Algorithmic Playground — Anupam Baral (@gomugomucode)",
    description:
      "Interactive code playground showcasing security sanitization, rate limiting algorithms, and multi-domain fuzzy search engines.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <section>
          <p>Interactive Tools</p>
          <h1>Developer Playground & Algorithmic Demos</h1>
          <p>Interactive algorithmic demonstrations, XSS input sanitization tools, token-bucket rate limiters, and multi-domain fuzzy search engines engineered by Anupam Baral (@gomugomucode).</p>
        </section>
        <section>
          <h2>Available Playground Modules</h2>
          <ul>
            <li><strong>Security Sanitizer:</strong> Real-time XSS string escaping and HTML entity encoding.</li>
            <li><strong>Rate Limiter Engine:</strong> Sliding window and token-bucket algorithm visualizer.</li>
            <li><strong>Fuzzy Search Engine:</strong> Sub-millisecond multi-attribute search across developer projects.</li>
          </ul>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Developer Playground",
        url: `${SITE_URL}/playground`,
      },
    ],
  },
  {
    route: "/privacy",
    title: "Privacy Policy — Anupam Baral (@gomugomucode)",
    description:
      "Privacy policy and data protection standards for Anupam Baral's developer portfolio website.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <header>
          <p>Legal & Compliance</p>
          <h1>Privacy Policy</h1>
          <p>Last updated: July 01, 2026. Official privacy policy for anupambaral.com.np operated by Anupam Baral (@gomugomucode).</p>
        </header>
        <section>
          <h2>1. Data Collection & Processing</h2>
          <p>This website functions strictly as a professional developer portfolio. I do not store personal data. Information submitted via the contact form is transmitted securely to Web3Forms API to deliver email notifications without server caching.</p>
        </section>
        <section>
          <h2>2. Cookies & Tracking Technologies</h2>
          <p>This website does not deploy advertising pixels or invasive behavioral profiling cookies. The site runs cleanly with privacy-first analytics principles.</p>
        </section>
        <section>
          <h2>3. External Profile Links</h2>
          <p>This portfolio references external profiles on GitHub, LinkedIn, Medium, Twitter/X, and YouTube. External services operate under their respective privacy policies.</p>
        </section>
        <section>
          <h2>4. Contact & Inquiries</h2>
          <p>For questions regarding privacy, contact: <a href="mailto:contact@anupambaral.com.np">contact@anupambaral.com.np</a>.</p>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Privacy Policy | Anupam Baral",
        url: `${SITE_URL}/privacy`,
      },
    ],
  },
  {
    route: "/terms",
    title: "Terms of Service — Anupam Baral (@gomugomucode)",
    description:
      "Standard terms of service and usage conditions for Anupam Baral's developer portfolio website.",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <header>
          <p>Legal & Compliance</p>
          <h1>Terms of Service</h1>
          <p>Last updated: July 01, 2026. Terms and conditions for using anupambaral.com.np.</p>
        </header>
        <section>
          <h2>1. Intellectual Property & Code Samples</h2>
          <p>All original technical articles, case studies, and architectural illustrations published on this site are authored by Anupam Baral. Open-source code repositories are governed by their respective repository licenses (e.g., MIT License).</p>
        </section>
        <section>
          <h2>2. Portfolio Demonstration & Warranties</h2>
          <p>Case study metrics, benchmark charts, and code playgrounds are provided for technical demonstration purposes. Interactive demos are provided as-is without warranty.</p>
        </section>
        <section>
          <h2>3. Permitted Usage & Attribution</h2>
          <p>You may quote or reference portfolio articles provided standard academic or developer attribution is given with a link back to anupambaral.com.np.</p>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Terms of Service | Anupam Baral",
        url: `${SITE_URL}/terms`,
      },
    ],
  },
];

const prerender = () => {
  const indexHtmlPath = path.join(distDir, "index.html");
  if (!fs.existsSync(indexHtmlPath)) {
    console.error(
      "[Prerender] Error: dist/index.html does not exist. Run vite build first.",
    );
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, "utf8");

  routeMetadata.forEach((meta) => {
    let html = baseHtml;
    const currentUrl =
      meta.route === "/" ? `${SITE_URL}/` : `${SITE_URL}${meta.route}`;

    // Inject Title & Description
    html = html.replace(
      /<title>.*?<\/title>/gis,
      `<title>${meta.title}</title>`,
    );
    html = html.replace(
      /<meta\s+name="title"\s+content=".*?"\s*\/?>/gis,
      `<meta name="title" content="${meta.title}" />`,
    );
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/gis,
      `<meta name="description" content="${meta.description}" />`,
    );
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/gis,
      `<link rel="canonical" href="${currentUrl}" />`,
    );

    // Inject OpenGraph & Metadata
    const finalOgTitle = meta.ogTitle || meta.title;
    const finalOgDescription = meta.ogDescription || meta.description;
    const finalOgType = meta.ogType || (meta.route.startsWith("/blog/") || meta.route.startsWith("/projects/") ? "article" : "website");
    const finalOgImageAlt = meta.ogImageAlt || `${meta.title} — Anupam Baral`;

    html = html.replace(
      /<meta\s+property="og:type"\s+content=".*?"\s*\/?>/gis,
      `<meta property="og:type" content="${finalOgType}" />`,
    );
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/gis,
      `<meta property="og:title" content="${finalOgTitle}" />`,
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/gis,
      `<meta property="og:description" content="${finalOgDescription}" />`,
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/gis,
      `<meta property="og:url" content="${currentUrl}" />`,
    );
    html = html.replace(
      /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/gis,
      `<meta property="og:image" content="${meta.ogImage}" />`,
    );
    html = html.replace(
      /<meta\s+property="og:image:alt"\s+content=".*?"\s*\/?>/gis,
      `<meta property="og:image:alt" content="${finalOgImageAlt}" />`,
    );

    // Inject Twitter
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/gis,
      `<meta name="twitter:title" content="${finalOgTitle}" />`,
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/gis,
      `<meta name="twitter:description" content="${finalOgDescription}" />`,
    );
    html = html.replace(
      /<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/gis,
      `<meta name="twitter:url" content="${currentUrl}" />`,
    );
    html = html.replace(
      /<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/gis,
      `<meta name="twitter:image" content="${meta.ogImage}" />`,
    );

    // Inject Schema.org JSON-LD if present (unified @graph)
    if (meta.schema) {
      const graphData = Array.isArray(meta.schema)
        ? {
            "@context": "https://schema.org",
            "@graph": meta.schema.map((s) => {
              const { "@context": _, ...clean } = s;
              return clean;
            }),
          }
        : { "@context": "https://schema.org", ...meta.schema };
      const jsonLd = JSON.stringify(graphData);
      const schemaTag = `\n    <script type="application/ld+json" id="schema-jsonld" data-rh="true">${jsonLd}</script>\n  `;
      html = html.replace("</head>", `${schemaTag}</head>`);
    }

    // Inject Semantic Body HTML into <div id="root"></div> for zero-JS crawlers
    if (meta.bodyHtml) {
      html = html.replace(
        '<div id="root"></div>',
        `<div id="root">${meta.bodyHtml}</div>`,
      );
    }

    // Target output directory: write both clean HTML file and directory index.html
    if (meta.route === "/") {
      fs.writeFileSync(indexHtmlPath, html, "utf8");
      console.log(`[Prerender] Prerendered HTML: / -> dist/index.html`);
    } else {
      const cleanRoute = meta.route.replace(/^\//, "");

      // 1. Write clean URL file: dist/<route>.html (e.g. dist/about.html)
      const htmlFilePath = path.join(distDir, `${cleanRoute}.html`);
      const parentDir = path.dirname(htmlFilePath);
      if (!fs.existsSync(parentDir)) {
        fs.mkdirSync(parentDir, { recursive: true });
      }
      fs.writeFileSync(htmlFilePath, html, "utf8");

      // 2. Write directory index file: dist/<route>/index.html (e.g. dist/about/index.html)
      const routeSubDir = path.join(distDir, cleanRoute);
      if (!fs.existsSync(routeSubDir)) {
        fs.mkdirSync(routeSubDir, { recursive: true });
      }
      const dirIndexFilePath = path.join(routeSubDir, "index.html");
      fs.writeFileSync(dirIndexFilePath, html, "utf8");

      console.log(
        `[Prerender] Prerendered HTML: ${meta.route} -> dist/${cleanRoute}.html & dist/${cleanRoute}/index.html`,
      );
    }
  });

  // Generate a dedicated, genuine 404.html to eliminate Soft 404s
  let notFoundHtml = baseHtml;
  notFoundHtml = notFoundHtml.replace(
    /<title>.*?<\/title>/gis,
    `<title>Page Not Found (404) | Anupam Baral</title>`,
  );
  notFoundHtml = notFoundHtml.replace(
    /<meta\s+name="title"\s+content=".*?"\s*\/?>/gis,
    `<meta name="title" content="Page Not Found (404) | Anupam Baral" />`,
  );
  notFoundHtml = notFoundHtml.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/gis,
    `<meta name="description" content="The requested page could not be found on anupambaral.com.np." />`,
  );
  notFoundHtml = notFoundHtml.replace(
    /<meta\s+name="robots"\s+content=".*?"\s*\/?>/gis,
    `<meta name="robots" content="noindex, follow" />`,
  );
  notFoundHtml = notFoundHtml.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/gis,
    ``,
  );
  notFoundHtml = notFoundHtml.replace(
    '<div id="root"></div>',
    `<div id="root">
    ${sharedNavHtml}
    <main style="max-width: 800px; margin: 4rem auto; padding: 2rem; text-align: center;">
      <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">404 — Page Not Found</h1>
      <p style="font-size: 1.125rem; color: #888; margin-bottom: 2rem;">The page you requested does not exist on this server.</p>
      <p><a href="/" style="font-weight: 600; color: #c9923a;">Return to Home</a> | <a href="/projects">View Projects</a> | <a href="/about">About Anupam Baral</a> | <a href="/contact">Contact</a></p>
    </main>
    ${sharedFooterHtml}
  </div>`,
  );

  const notFoundPath = path.join(distDir, "404.html");
  fs.writeFileSync(notFoundPath, notFoundHtml, "utf8");
  console.log(`[Prerender] Generated dist/404.html (genuine 404 fallback)`);

  console.log(
    `[Prerender] Successfully prerendered ${routeMetadata.length} pages + 404.html with semantic HTML.`,
  );
};

prerender();
