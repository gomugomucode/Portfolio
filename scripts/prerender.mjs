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
      <a href="https://x.com/gomugomucode" target="_blank" rel="noopener noreferrer">X</a> |
      <a href="/privacy">Privacy Policy</a> |
      <a href="/terms">Terms of Service</a>
    </p>
  </footer>
`;

const routeMetadata = [
  {
    route: "/",
    title: "Anupam Baral (gomugomucode) | Full Stack & AI Engineer",
    description: "Official portfolio of Anupam Baral (@gomugomucode), a Full-Stack Developer & AI Engineer in Nepal building React, Next.js, Python, and Solana Web3 systems.",
    keywords: "Full Stack Developer Nepal, React Developer Nepal, Next.js Developer, Python Developer, AI Developer Nepal, Supabase Developer, Firebase Developer, Solana Developer, Anupam Baral, gomugomucode",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <section>
          <p>Anupam Baral — Full Stack & AI Engineer (@gomugomucode)</p>
          <h1>Anupam Baral — Full-Stack Developer & AI Engineer</h1>
          <p>I'm Anupam Baral (@gomugomucode), a Full-Stack Developer and AI Engineer based in Nepal. I specialize in building modern web applications with React, Next.js, and TypeScript, engineering intelligent Python microservices, and architecting decentralized systems on Solana.</p>
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
            <h3><a href="/projects/yarshabyte-agency">YarshaByte — Creative Digital Agency</a></h3>
            <p>Modern creative digital agency platform built with Next.js, fluid typography, and bespoke web design.</p>
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
            <li><a href="https://x.com/gomugomucode" target="_blank" rel="noopener noreferrer">X (Twitter): @gomugomucode</a></li>
            <li><a href="https://youtube.com/@gomugomucode" target="_blank" rel="noopener noreferrer">YouTube: @gomugomucode</a></li>
            <li><a href="https://www.google.com/maps/place/Anupam+Baral+-+AI%2FML+%26+Full-Stack+Developer/@28.397455,84.1301506,7z/data=!3m1!4b1!4m6!3m5!1s0x85dbafd39ae92f89:0x13b3b1f0138c19d0!8m2!3d28.397455!4d84.1301506!16s%2Fg%2F11zc_q7f9c" target="_blank" rel="noopener noreferrer">Google Business Profile</a></li>
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
        "url": `${SITE_URL}/`,
        "name": "Anupam Baral (gomugomucode) | Full Stack & AI Engineer",
        "description": "Official portfolio of Anupam Baral (@gomugomucode), a Full-Stack Developer & AI Engineer in Nepal building React, Next.js, Python, and Solana Web3 systems.",
        "mainEntity": {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          "name": SITE_NAME,
          "alternateName": ["gomugomucode", "@gomugomucode"],
          "url": `${SITE_URL}/`,
          "image": `${SITE_URL}/my-photo.webp`,
          "jobTitle": "Full-Stack Developer & AI Engineer",
          "description": "Anupam Baral is a Full Stack Developer and AI Engineer based in Nepal. Specializing in React, Next.js, TypeScript, Python, Supabase, Firebase, and Solana Web3 development.",
          "nationality": {
            "@type": "Country",
            "name": "Nepal"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Butwal",
            "addressRegion": "Lumbini",
            "addressCountry": "NP"
          },
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Tribhuvan University",
            "sameAs": "https://en.wikipedia.org/wiki/Tribhuvan_University"
          },
          "sameAs": [
            "https://github.com/gomugomucode",
            "https://linkedin.com/in/gomugomucode",
            "https://x.com/gomugomucode",
            "https://medium.com/@gomugomucode",
            "https://youtube.com/@gomugomucode",
            "https://www.google.com/maps/place/Anupam+Baral+-+AI%2FML+%26+Full-Stack+Developer/@28.397455,84.1301506,7z/data=!3m1!4b1!4m6!3m5!1s0x85dbafd39ae92f89:0x13b3b1f0138c19d0!8m2!3d28.397455!4d84.1301506!16s%2Fg%2F11zc_q7f9c"
          ]
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": `${SITE_URL}/`,
        "name": `${SITE_NAME} - Full Stack & AI Developer Portfolio`,
        "alternateName": "gomugomucode",
        "description": "Portfolio of Anupam Baral, Full Stack Developer and AI Engineer in Nepal."
      }
    ]
  },
  {
    route: "/about",
    title: "About Anupam Baral (@gomugomucode) | Full Stack & AI Engineer",
    description: "Authoritative profile and biographical overview of Anupam Baral (@gomugomucode), a Full-Stack Developer and AI Engineer based in Nepal specializing in React, Next.js, Python, Supabase, and Solana.",
    keywords: "About Anupam Baral, gomugomucode, Software Engineer Nepal, React Developer Nepal, Full Stack Developer Nepal, Python AI Developer",
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
            <li><a href="https://x.com/gomugomucode" target="_blank" rel="noopener noreferrer">X / Twitter (@gomugomucode)</a></li>
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
        "url": `${SITE_URL}/about`,
        "name": "About Anupam Baral (@gomugomucode) | Full Stack & AI Engineer",
        "description": "Authoritative profile and biographical overview of Anupam Baral (@gomugomucode)."
      }
    ]
  },
  {
    route: "/projects",
    title: "Projects by Anupam Baral | React, Next.js, Python & Solana",
    description: "Explore production projects built by Anupam Baral, featuring scalable web applications, AI/ML integrations, and open-source contributions.",
    keywords: "Anupam Baral Projects, gomugomucode GitHub, React Projects, Next.js Case Studies, Solana Developer Nepal",
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
            <h2><a href="/projects/yarshabyte-agency">YarshaByte — Creative Digital Agency</a></h2>
            <p>Modern creative digital agency platform built with Next.js, fluid typography, and bespoke web design.</p>
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
        "url": `${SITE_URL}/projects`,
        "name": "Projects by Anupam Baral",
        "description": "Explore production projects built by Anupam Baral."
      }
    ]
  },
  {
    route: "/projects/e-learning-platform",
    title: "E-Learning LMS Platform Case Study | React, Node.js & MySQL",
    description: "In-depth technical case study of a decoupled React LMS platform with MySQL query optimizations, sub-1.2s load speeds, and Vercel edge caching.",
    keywords: "React LMS, Decoupled Architecture, Node.js Express API, MySQL Indexing, Vercel Edge Caching",
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
        "name": "E-Learning LMS Platform",
        "description": "Decoupled React LMS platform with MySQL query optimizations.",
        "codeRepository": "https://github.com/gomugomucode/elearn",
        "programmingLanguage": "React, Node.js, Express, MySQL",
        "url": `${SITE_URL}/projects/e-learning-platform`,
        "author": {
          "@id": `${SITE_URL}/#person`
        }
      }
    ]
  },
  {
    route: "/projects/yatra-solana-ride-sharing",
    title: "Yatra Solana Ride-Sharing | Decentralized Web3 Protocol Case Study",
    description: "Architectural breakdown of Yatra: a Solana decentralized ride-sharing engine written in Rust smart contracts with Firebase RTDB signaling and Web3.js.",
    keywords: "Solana Developer, Rust Smart Contracts, Decentralized Ride Sharing, Web3.js Protocol, Firebase RTDB",
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
        "name": "Yatra Solana Ride-Sharing",
        "description": "Decentralized ride-sharing engine on Solana.",
        "codeRepository": "https://github.com/gomugomucode/Yatra",
        "programmingLanguage": "Rust, Solana, Next.js, Firebase",
        "url": `${SITE_URL}/projects/yatra-solana-ride-sharing`,
        "author": {
          "@id": `${SITE_URL}/#person`
        }
      }
    ]
  },
  {
    route: "/projects/web3-loyalty-protocol",
    title: "Web3 Loyalty Protocol Case Study | Solana & Next.js DApp",
    description: "Technical case study of a Solana Web3 loyalty rewards protocol featuring automated smart contract distributions, sub-cent transaction costs, and instant token settlement.",
    keywords: "Solana DApp, Web3 Loyalty Program, Rust Smart Contracts, TypeScript Web3.js, Token Minting",
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
        "name": "Web3 Loyalty Protocol",
        "description": "Solana Web3 loyalty rewards protocol featuring automated smart contract distributions.",
        "codeRepository": "https://github.com/gomugomucode/Solana-Loyalty-dApp",
        "programmingLanguage": "Rust, Solana, Next.js, TypeScript",
        "url": `${SITE_URL}/projects/web3-loyalty-protocol`,
        "author": {
          "@id": `${SITE_URL}/#person`
        }
      }
    ]
  },
  {
    route: "/projects/greenstar-suppliers",
    title: "Greenstar Suppliers Website Case Study | Next.js 16 & Prisma",
    description: "Production case study of Greenstar Suppliers: a Next.js 16 product catalogue and order enquiry web app for entrance & home automation in Nepal.",
    keywords: "Next.js Developer Nepal, Full Stack Developer Nepal, Prisma PostgreSQL, Home Automation Nepal, Next.js 16 App Router",
    ogImage: `${SITE_URL}/greenstar.webp`,
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
        "name": "Greenstar Suppliers Website",
        "description": "Next.js 16 product catalogue and order enquiry platform.",
        "programmingLanguage": "Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL",
        "url": `${SITE_URL}/projects/greenstar-suppliers`,
        "author": {
          "@id": `${SITE_URL}/#person`
        }
      }
    ]
  },
  {
    route: "/projects/yarshabyte-agency",
    title: "YarshaByte Creative Agency Case Study | Next.js & Modern Web Design",
    description: "In-depth case study of YarshaByte: a cutting-edge creative digital agency and web development platform built with Next.js, Tailwind CSS, and fluid motion design.",
    keywords: "YarshaByte, Creative Digital Agency Nepal, Next.js Portfolio, Web Design Nepal, Framer Motion UI",
    ogImage: `${SITE_URL}/yarshabyte.webp`,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <p><a href="/projects">&larr; Back to Projects</a></p>
        <h1>YarshaByte — Creative Digital Agency Case Study</h1>
        <p>Author: Anupam Baral (@gomugomucode) | Lead Creative Technologist & Engineer</p>
        <p>A modern digital agency platform showcasing bespoke web design, interactive branding, and high-performance development.</p>
        <section>
          <h2>Problem & Solution</h2>
          <p>Designed and built YarshaByte using Next.js App Router, Tailwind CSS, and modern motion principles. Integrated custom SVG path morphing, responsive typography scaling, and modular component architecture to deliver a visceral, agency-grade digital experience.</p>
        </section>
        <section>
          <h2>Links</h2>
          <p><a href="https://yarshabyte.vercel.app/" target="_blank" rel="noopener noreferrer">Live Agency Site</a></p>
        </section>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        "@id": `${SITE_URL}/projects/yarshabyte-agency#software`,
        "name": "YarshaByte Creative Digital Agency",
        "description": "Next.js creative digital agency platform with fluid motion design.",
        "programmingLanguage": "Next.js, TypeScript, Tailwind CSS, Framer Motion",
        "url": `${SITE_URL}/projects/yarshabyte-agency`,
        "author": {
          "@id": `${SITE_URL}/#person`
        }
      }
    ]
  },
  {
    route: "/blog",
    title: "Technical Articles & Engineering Logs | Anupam Baral",
    description: "Articles on software architecture, Solana Web3 smart contracts, React/Next.js performance, and Python machine learning pipelines.",
    keywords: "Anupam Baral Blog, Engineering Blog, Solana Web3 Developer Blog, React Articles, Python ML Nepal",
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
        "name": "Anupam Baral Engineering Blog",
        "url": `${SITE_URL}/blog`
      }
    ]
  },
  {
    route: "/blog/yatra-solana-ride-sharing-protocol",
    title: "Architecting Yatra — A Decentralized Ride-Sharing Protocol on Solana | Anupam Baral",
    description: "A comprehensive deep dive into engineering atomic ride contracts, driver reputation mechanisms, and real-time signalling systems using Rust, Web3.js, and Firebase.",
    keywords: "Solana, Web3, Rust, Architecture, Yatra, Anupam Baral",
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
        "headline": "Architecting Yatra — A Decentralized Ride-Sharing Protocol on Solana",
        "description": "Deep dive into engineering atomic ride contracts on Solana using Rust & Firebase.",
        "url": `${SITE_URL}/blog/yatra-solana-ride-sharing-protocol`,
        "author": {
          "@id": `${SITE_URL}/#person`
        }
      }
    ]
  },
  {
    route: "/blog/decoupled-lms-architectures",
    title: "Decoupling Large-Scale LMS Content Deliveries | Anupam Baral",
    description: "Analyzing MySQL persistence designs, decoupling frontend applications, and designing zero-latency CDN distributions for heavy educational platform architectures.",
    keywords: "React, Node.js, Express, MySQL, Decoupled Architecture, Anupam Baral",
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
        "headline": "Decoupling Large-Scale LMS Content Deliveries",
        "url": `${SITE_URL}/blog/decoupled-lms-architectures`,
        "author": {
          "@id": `${SITE_URL}/#person`
        }
      }
    ]
  },
  {
    route: "/blog/type-safe-ai-pipelines",
    title: "Type-Safe AI Inference: Connecting Python Models to TS Gateways | Anupam Baral",
    description: "How to bridge Python machine learning backends with TypeScript API gateways. Implement structural runtime validations to protect latency-critical production applications.",
    keywords: "Python, FastAPI, TypeScript, Pydantic, Zod, AI / ML, Anupam Baral",
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
        "headline": "Type-Safe AI Inference: Connecting Python Models to TS Gateways",
        "url": `${SITE_URL}/blog/type-safe-ai-pipelines`,
        "author": {
          "@id": `${SITE_URL}/#person`
        }
      }
    ]
  },
  {
    route: "/blog/nextjs-edge-rendering",
    title: "Optimizing Next.js Edge Rendering for E-commerce | Anupam Baral",
    description: "Strategies for achieving sub-second LCP on content-heavy e-commerce pages using Next.js Edge runtime, streaming SSR, and aggressive caching.",
    keywords: "Next.js, Edge Rendering, React, E-commerce, Performance, Anupam Baral",
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
        "headline": "Optimizing Next.js Edge Rendering for E-commerce",
        "description": "Strategies for achieving sub-second LCP on content-heavy e-commerce pages using Next.js Edge runtime, streaming SSR, and aggressive caching.",
        "url": `${SITE_URL}/blog/nextjs-edge-rendering`,
        "author": {
          "@id": `${SITE_URL}/#person`
        }
      }
    ]
  },
  {
    route: "/now",
    title: "What I'm Doing Now | Anupam Baral",
    description: "A real-time snapshot of current engineering projects, active learning roadmap, reading list, and availability of Anupam Baral.",
    keywords: "Now page, Anupam Baral status, current software projects",
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
        "name": "What I'm Doing Now | Anupam Baral",
        "url": `${SITE_URL}/now`
      }
    ]
  },
  {
    route: "/for-recruiters",
    title: "Engineering Candidate Profile & Resume | Anupam Baral",
    description: "Comprehensive technical candidate breakdown for recruiters & hiring managers. Stack highlights, availability, timezones, and direct resume access.",
    keywords: "Hire Anupam Baral, Full Stack Engineer Resume, Senior React Developer, Python AI Engineer Nepal",
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
        "name": "Engineering Candidate Profile & Resume",
        "url": `${SITE_URL}/for-recruiters`
      }
    ]
  },
  {
    route: "/ai",
    title: "AI Software & Machine Learning Portfolio | Anupam Baral",
    description: "Python machine learning inference microservices, FastAPI type-safe gateways, LLM structured schema prompts, and AI systems by Anupam Baral.",
    keywords: "AI Engineer Nepal, Python Machine Learning, FastAPI Gateway, Pydantic Zod, LLM Schema Prompts",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <h1>AI Software & Machine Learning Portfolio</h1>
        <p>Engineered by Anupam Baral (@gomugomucode). Type-safe Python inference microservices, FastAPI gateways, and LLM structured prompt pipelines.</p>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "AI Software & Machine Learning Portfolio",
        "url": `${SITE_URL}/ai`
      }
    ]
  },
  {
    route: "/open-source",
    title: "Open Source Hub & Contributions | Anupam Baral",
    description: "Open-source developer utility libraries, Solana Web3 packages, React components, and GitHub repositories by Anupam Baral.",
    keywords: "gomugomucode Open Source, GitHub Developer Nepal, Web3.js Utilities, React Open Source",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <h1>Open Source Hub & Contributions</h1>
        <p>Open-source repositories, developer tooling, and smart contract modules maintained by Anupam Baral (@gomugomucode).</p>
        <p><a href="https://github.com/gomugomucode" target="_blank" rel="noopener noreferrer">Visit GitHub Profile &rarr;</a></p>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Open Source Hub & Contributions",
        "url": `${SITE_URL}/open-source`
      }
    ]
  },
  {
    route: "/contact",
    title: "Hire Anupam Baral | Contact Full Stack & AI Developer Nepal",
    description: "Get in touch with Anupam Baral for freelance development work, open-source collaborations, AI software pipelines, or full-time engineering roles.",
    keywords: "Hire Anupam Baral, Freelance Developer Nepal, Contact gomugomucode, React Developer Hire, Python AI Developer",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <h1>Contact Anupam Baral | Hire a Full Stack & AI Developer</h1>
        <p>Get in touch for software engineering contracts, web applications, or full-time roles.</p>
        <p>Email: <a href="mailto:contact@anupambaral.com.np">contact@anupambaral.com.np</a></p>
        <p>Location: Butwal, Nepal (GMT+5:45)</p>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Hire Anupam Baral",
        "url": `${SITE_URL}/contact`
      }
    ]
  },
  {
    route: "/uses",
    title: "Uses — Development Setup & Tooling | Anupam Baral",
    description: "A detailed list of the hardware, code editor setup, terminal configuration, and AI tools used daily by Anupam Baral.",
    keywords: "Anupam Baral Uses, Development Hardware, VS Code Setup, Developer Workstation Nepal",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <h1>Developer Setup & Tooling — Uses</h1>
        <p>Hardware, editor configuration, terminal environment, and developer tools used daily by Anupam Baral (@gomugomucode).</p>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Uses — Development Setup & Tooling",
        "url": `${SITE_URL}/uses`
      }
    ]
  },
  {
    route: "/architecture",
    title: "Interactive System Architecture & Systems Design | Anupam Baral",
    description: "Interactive systems design, database schemas, API gateway flows, and architecture diagrams built by Anupam Baral.",
    keywords: "System Architecture, Systems Design, Solana Escrow Architecture, MySQL Read Replicas",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <h1>System Architecture & Interactive Design</h1>
        <p>Interactive architectural decision records and systems designs built by Anupam Baral (@gomugomucode).</p>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Interactive System Architecture",
        "url": `${SITE_URL}/architecture`
      }
    ]
  },
  {
    route: "/playground",
    title: "Developer Playground & Algorithmic Demos | Anupam Baral",
    description: "Interactive code playground showcasing security sanitization, rate limiting algorithms, and multi-domain fuzzy search engines.",
    keywords: "Developer Playground, XSS Sanitizer, Multi Domain Fuzzy Search, JavaScript Algorithms",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <h1>Developer Playground & Algorithmic Demos</h1>
        <p>Interactive algorithmic demonstrations and security tools built by Anupam Baral (@gomugomucode).</p>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Developer Playground",
        "url": `${SITE_URL}/playground`
      }
    ]
  },
  {
    route: "/privacy",
    title: "Privacy Policy | Anupam Baral",
    description: "Privacy policy and data protection standards for Anupam Baral's developer portfolio website.",
    keywords: "Anupam Baral Privacy Policy, Data Protection",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <h1>Privacy Policy</h1>
        <p>Privacy policy and data protection standards for anupambaral.com.np.</p>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy | Anupam Baral",
        "url": `${SITE_URL}/privacy`
      }
    ]
  },
  {
    route: "/terms",
    title: "Terms of Service | Anupam Baral",
    description: "Standard terms of service and usage conditions for Anupam Baral's developer portfolio website.",
    keywords: "Anupam Baral Terms of Service, Legal",
    ogImage: DEFAULT_IMAGE,
    bodyHtml: `
      ${sharedNavHtml}
      <main>
        <h1>Terms of Service</h1>
        <p>Terms of service for anupambaral.com.np operated by Anupam Baral (@gomugomucode).</p>
      </main>
      ${sharedFooterHtml}
    `,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service | Anupam Baral",
        "url": `${SITE_URL}/terms`
      }
    ]
  }
];

const prerender = () => {
  const indexHtmlPath = path.join(distDir, "index.html");
  if (!fs.existsSync(indexHtmlPath)) {
    console.error("[Prerender] Error: dist/index.html does not exist. Run vite build first.");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, "utf8");

  routeMetadata.forEach((meta) => {
    let html = baseHtml;
    const currentUrl = meta.route === "/" ? `${SITE_URL}/` : `${SITE_URL}${meta.route}`;

    // Inject Title & Description
    html = html.replace(/<title>.*?<\/title>/gis, `<title>${meta.title}</title>`);
    html = html.replace(/<meta\s+name="title"\s+content=".*?"\s*\/?>/gis, `<meta name="title" content="${meta.title}" />`);
    html = html.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/gis, `<meta name="description" content="${meta.description}" />`);
    html = html.replace(/<meta\s+name="keywords"\s+content=".*?"\s*\/?>/gis, `<meta name="keywords" content="${meta.keywords}" />`);
    html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/gis, `<link rel="canonical" href="${currentUrl}" />`);

    // Inject OpenGraph
    html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/gis, `<meta property="og:title" content="${meta.title}" />`);
    html = html.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/gis, `<meta property="og:description" content="${meta.description}" />`);
    html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/gis, `<meta property="og:url" content="${currentUrl}" />`);
    html = html.replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/?>/gis, `<meta property="og:image" content="${meta.ogImage}" />`);

    // Inject Twitter
    html = html.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/gis, `<meta name="twitter:title" content="${meta.title}" />`);
    html = html.replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/gis, `<meta name="twitter:description" content="${meta.description}" />`);
    html = html.replace(/<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/gis, `<meta name="twitter:url" content="${currentUrl}" />`);
    html = html.replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/gis, `<meta name="twitter:image" content="${meta.ogImage}" />`);

    // Inject Schema.org JSON-LD if present
    if (meta.schema) {
      const jsonLd = JSON.stringify(meta.schema);
      const schemaTag = `\n    <script type="application/ld+json" id="schema-jsonld" data-rh="true">${jsonLd}</script>\n  `;
      html = html.replace("</head>", `${schemaTag}</head>`);
    }

    // Inject Semantic Body HTML into <div id="root"></div> for zero-JS crawlers
    if (meta.bodyHtml) {
      html = html.replace('<div id="root"></div>', `<div id="root">${meta.bodyHtml}</div>`);
    }

    // Target output directory
    let outputFilePath;
    if (meta.route === "/") {
      outputFilePath = indexHtmlPath;
    } else {
      const routeSubDir = path.join(distDir, meta.route.replace(/^\//, ""));
      if (!fs.existsSync(routeSubDir)) {
        fs.mkdirSync(routeSubDir, { recursive: true });
      }
      outputFilePath = path.join(routeSubDir, "index.html");
    }

    fs.writeFileSync(outputFilePath, html, "utf8");
    console.log(`[Prerender] Prerendered HTML: ${meta.route} -> ${path.relative(projectRoot, outputFilePath)}`);
  });

  console.log(`[Prerender] Successfully prerendered ${routeMetadata.length} pages with semantic HTML body content.`);
};

prerender();
