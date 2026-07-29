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

const routeMetadata = [
  {
    route: "/",
    title: "Anupam Baral | Full Stack Developer & AI Engineer Nepal",
    description: "Anupam Baral is a Full Stack Developer & AI Engineer in Nepal. Specialized in React, Next.js, TypeScript, Python, Supabase, Firebase, and Solana.",
    keywords: "Full Stack Developer Nepal, React Developer Nepal, Next.js Developer, Python Developer, AI Developer Nepal, Supabase Developer, Firebase Developer, Solana Developer",
    ogImage: DEFAULT_IMAGE,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        "name": SITE_NAME,
        "alternateName": "@gomugomucode",
        "url": SITE_URL,
        "image": DEFAULT_IMAGE,
        "jobTitle": "Full Stack Developer & AI Engineer",
        "description": "Anupam Baral is a Full Stack Developer & AI Engineer based in Nepal. Specializing in React, Next.js, TypeScript, Python, Supabase, Firebase, and Solana Web3 development.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Butwal",
          "addressRegion": "Lumbini",
          "addressCountry": "NP"
        },
        "sameAs": [
          "https://github.com/gomugomucode",
          "https://linkedin.com/in/gomugomucode",
          "https://x.com/gomugomucode",
          "https://medium.com/@gomugomucode",
          "https://youtube.com/@gomugomucode"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": `${SITE_NAME} - Full Stack Developer Nepal`,
        "description": "Portfolio of Anupam Baral, Full Stack Developer and AI Engineer in Nepal."
      }
    ]
  },
  {
    route: "/about",
    title: "About Anupam Baral | Full Stack Developer & AI Engineer Nepal",
    description: "Learn about Anupam Baral, a Full Stack Developer and AI Engineer based in Nepal with expertise in React, Next.js, Python, TypeScript, Supabase, and Solana.",
    keywords: "About Anupam Baral, Software Engineer Nepal, React Developer Nepal, Full Stack Developer Nepal, Python Developer",
    ogImage: DEFAULT_IMAGE,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${SITE_URL}/about#webpage`,
        "url": `${SITE_URL}/about`,
        "name": "About Anupam Baral | Full Stack Developer & AI Engineer Nepal",
        "description": "Learn about Anupam Baral, a Full Stack Developer and AI Engineer based in Nepal."
      }
    ]
  },
  {
    route: "/projects",
    title: "Projects by Anupam Baral | React, Next.js, Python & Solana",
    description: "Explore production projects built by Anupam Baral, featuring scalable web applications, AI/ML integrations, and open-source contributions.",
    keywords: "Anupam Baral Projects, gomugomucode GitHub, React Projects, Next.js Case Studies, Solana Developer Nepal",
    ogImage: DEFAULT_IMAGE,
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
    route: "/project/01",
    title: "E-Learning LMS Platform Case Study | React, Node.js & MySQL",
    description: "In-depth technical case study of a decoupled React LMS platform with MySQL query optimizations, sub-1.2s load speeds, and Vercel edge caching.",
    keywords: "React LMS, Decoupled Architecture, Node.js Express API, MySQL Indexing, Vercel Edge Caching",
    ogImage: `${SITE_URL}/elearning-preview.webp`,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        "name": "E-Learning LMS Platform",
        "description": "Decoupled React LMS platform with MySQL query optimizations.",
        "codeRepository": "https://github.com/gomugomucode/elearn",
        "programmingLanguage": "React, Node.js, Express, MySQL",
        "url": "https://elearn-lake.vercel.app"
      }
    ]
  },
  {
    route: "/project/02",
    title: "Yatra Solana Ride-Sharing | Decentralized Web3 Protocol Case Study",
    description: "Architectural breakdown of Yatra: a Solana decentralized ride-sharing engine written in Rust smart contracts with Firebase RTDB signaling and Web3.js.",
    keywords: "Solana Developer, Rust Smart Contracts, Decentralized Ride Sharing, Web3.js Protocol, Firebase RTDB",
    ogImage: `${SITE_URL}/yatra.webp`,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        "name": "Yatra Solana Ride-Sharing",
        "description": "Decentralized ride-sharing engine on Solana.",
        "codeRepository": "https://github.com/gomugomucode/Yatra",
        "programmingLanguage": "Rust, Solana, Next.js, Firebase",
        "url": "https://yatraa-zeta.vercel.app/"
      }
    ]
  },
  {
    route: "/project/03",
    title: "Web3 Loyalty Protocol Case Study | Solana & Next.js DApp",
    description: "Technical case study of a Solana Web3 loyalty rewards protocol featuring automated smart contract distributions, sub-cent transaction costs, and instant token settlement.",
    keywords: "Solana DApp, Web3 Loyalty Program, Rust Smart Contracts, TypeScript Web3.js, Token Minting",
    ogImage: `${SITE_URL}/solana.webp`,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        "name": "Web3 Loyalty Protocol",
        "description": "Solana Web3 loyalty rewards protocol featuring automated smart contract distributions.",
        "codeRepository": "https://github.com/gomugomucode/Solana-Loyalty-dApp",
        "programmingLanguage": "Rust, Solana, Next.js, TypeScript",
        "url": "https://solana-loyalty-d-app.vercel.app/"
      }
    ]
  },
  {
    route: "/project/04",
    title: "Greenstar Suppliers Website Case Study | Next.js 16 & Prisma",
    description: "Production case study of Greenstar Suppliers: a Next.js 16 product catalogue and order enquiry web app for entrance & home automation in Nepal.",
    keywords: "Next.js Developer Nepal, Full Stack Developer Nepal, Prisma PostgreSQL, Home Automation Nepal, Next.js 16 App Router",
    ogImage: `${SITE_URL}/greenstar.webp`,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        "name": "Greenstar Suppliers Website",
        "description": "Next.js 16 product catalogue and order enquiry platform.",
        "programmingLanguage": "Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL"
      }
    ]
  },
  {
    route: "/blog",
    title: "Technical Articles & Engineering Logs | Anupam Baral",
    description: "Articles on software architecture, Solana Web3 smart contracts, React/Next.js performance, and Python machine learning pipelines.",
    keywords: "Anupam Baral Blog, Engineering Blog, Solana Web3 Developer Blog, React Articles, Python ML Nepal",
    ogImage: DEFAULT_IMAGE,
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
    keywords: "Solana, Web3, Rust, Architecture, Yatra",
    ogImage: `${SITE_URL}/yatra.webp`,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Architecting Yatra — A Decentralized Ride-Sharing Protocol on Solana",
        "description": "Deep dive into engineering atomic ride contracts on Solana using Rust & Firebase.",
        "url": `${SITE_URL}/blog/yatra-solana-ride-sharing-protocol`
      }
    ]
  },
  {
    route: "/blog/decoupled-lms-architectures",
    title: "Decoupling Large-Scale LMS Content Deliveries | Anupam Baral",
    description: "Analyzing MySQL persistence designs, decoupling frontend applications, and designing zero-latency CDN distributions for heavy educational platform architectures.",
    keywords: "React, Node.js, Express, MySQL, Decoupled Architecture",
    ogImage: `${SITE_URL}/elearning-preview.webp`,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Decoupling Large-Scale LMS Content Deliveries",
        "url": `${SITE_URL}/blog/decoupled-lms-architectures`
      }
    ]
  },
  {
    route: "/blog/type-safe-ai-pipelines",
    title: "Type-Safe AI Inference: Connecting Python Models to TS Gateways | Anupam Baral",
    description: "How to bridge Python machine learning backends with TypeScript API gateways. Implement structural runtime validations to protect latency-critical production applications.",
    keywords: "Python, FastAPI, TypeScript, Pydantic, Zod, AI / ML",
    ogImage: DEFAULT_IMAGE,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Type-Safe AI Inference: Connecting Python Models to TS Gateways",
        "url": `${SITE_URL}/blog/type-safe-ai-pipelines`
      }
    ]
  },
  {
    route: "/now",
    title: "What I'm Doing Now | Anupam Baral",
    description: "A real-time snapshot of current engineering projects, active learning roadmap, reading list, and availability of Anupam Baral.",
    keywords: "Now page, Anupam Baral status, current software projects",
    ogImage: DEFAULT_IMAGE,
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
    html = html.replace(/<title>.*?<\/title>/gi, `<title>${meta.title}</title>`);
    html = html.replace(/<meta name="title" content=".*?" \/>/gi, `<meta name="title" content="${meta.title}" />`);
    html = html.replace(/<meta name="description" content=".*?" \/>/gi, `<meta name="description" content="${meta.description}" />`);
    html = html.replace(/<meta name="keywords" content=".*?" \/>/gi, `<meta name="keywords" content="${meta.keywords}" />`);
    html = html.replace(/<link rel="canonical" href=".*?" \/>/gi, `<link rel="canonical" href="${currentUrl}" />`);

    // Inject OpenGraph
    html = html.replace(/<meta property="og:title" content=".*?" \/>/gi, `<meta property="og:title" content="${meta.title}" />`);
    html = html.replace(/<meta property="og:description" content=".*?" \/>/gi, `<meta property="og:description" content="${meta.description}" />`);
    html = html.replace(/<meta property="og:url" content=".*?" \/>/gi, `<meta property="og:url" content="${currentUrl}" />`);
    html = html.replace(/<meta property="og:image" content=".*?" \/>/gi, `<meta property="og:image" content="${meta.ogImage}" />`);

    // Inject Twitter
    html = html.replace(/<meta name="twitter:title" content=".*?" \/>/gi, `<meta name="twitter:title" content="${meta.title}" />`);
    html = html.replace(/<meta name="twitter:description" content=".*?" \/>/gi, `<meta name="twitter:description" content="${meta.description}" />`);
    html = html.replace(/<meta name="twitter:url" content=".*?" \/>/gi, `<meta name="twitter:url" content="${currentUrl}" />`);
    html = html.replace(/<meta name="twitter:image" content=".*?" \/>/gi, `<meta name="twitter:image" content="${meta.ogImage}" />`);

    // Inject Schema.org JSON-LD if present
    if (meta.schema) {
      const jsonLd = JSON.stringify(meta.schema);
      const schemaTag = `\n    <script type="application/ld+json">${jsonLd}</script>\n  `;
      html = html.replace("</head>", `${schemaTag}</head>`);
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

  console.log(`[Prerender] Successfully prerendered ${routeMetadata.length} pages.`);
};

prerender();
