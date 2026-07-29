/**
 * Production-Grade Medium RSS Feed Fetcher, Normalizer & Caching Engine
 */

export interface MediumArticle {
  id: string;
  title: string;
  slug: string;
  link: string;
  publishDate: string;
  updatedDate: string;
  categories: string[];
  readingTime: string;
  author: string;
  featuredImage: string;
  content: string;
  excerpt: string;
  wordCount: number;
}

const MEDIUM_USERNAME = "gomugomucode";
const CACHE_KEY = `medium_articles_normalized_${MEDIUM_USERNAME}`;
const CACHE_DURATION_MS = 6 * 60 * 60 * 1000; // 6 hours

export const FALLBACK_ARTICLES: MediumArticle[] = [
  {
    id: "fallback-1",
    title: "Architecting Yatra — A Decentralized Ride-Sharing Protocol on Solana",
    slug: "yatra-solana-ride-sharing-protocol",
    link: "https://medium.com/@gomugomucode/yatra-solana-ride-sharing-protocol",
    publishDate: "2026-02-15 09:00:00",
    updatedDate: "2026-02-15 09:00:00",
    author: "Anupam Baral",
    featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
    categories: ["Web3", "Solana", "Rust", "Architecture"],
    excerpt: "A comprehensive deep dive into engineering atomic ride contracts, driver reputation mechanisms, and real-time signalling systems using Rust, Web3.js, and Firebase.",
    readingTime: "8 min read",
    wordCount: 1650,
    content: `
      <p>Decentralized application design requires balancing high throughput with immutable financial execution. On centralized platforms like Uber or Lyft, up to 30% of driver earnings are retained as platform overhead. Furthermore, driver profile data and reputational ratings remain locked within proprietary databases.</p>
      
      <h2>1. Escrow Smart Program Architecture in Rust</h2>
      <p>Using Solana's Anchor framework, Yatra models every ride as an atomic escrow account. When a passenger requests a ride, trip funds are transferred into a Program Derived Address (PDA) escrow account.</p>
      
      <pre><code>pub fn request_ride(ctx: Context&lt;RequestRide&gt;, estimated_fare: u64) -&gt; Result&lt;()&gt; {
    let trip_account = &amp;mut ctx.accounts.trip_account;
    trip_account.passenger = *ctx.accounts.passenger.key;
    trip_account.status = RideStatus::Requested;
    trip_account.fare = estimated_fare;
    
    // Transfer funds to Escrow PDA
    solana_program::program::invoke(
        &amp;system_instruction::transfer(
            ctx.accounts.passenger.key,
            trip_account.to_account_info().key,
            estimated_fare
        ),
        &amp;[ctx.accounts.passenger.to_account_info(), trip_account.to_account_info()]
    )?;
    Ok(())
}</code></pre>

      <h2>2. Off-Chain Realtime Signaling via Firebase</h2>
      <p>To avoid transaction spam on the Solana blockchain for minute GPS coordinate changes, vehicle telemetry is routed off-chain through Firebase Realtime Database with 50ms latency windows. On-chain state mutations occur only during ride acceptance, pickup verification, and completion settlement.</p>

      <blockquote>"Decoupling telemetry from ledger verification allowed Yatra to achieve real-time UX without overloading Solana block limits."</blockquote>

      <h2>3. Driver Reputation Ledger</h2>
      <p>Ratings are cryptographically signed by passengers upon trip completion and recorded on an immutable driver reputation ledger, guaranteeing driver data sovereignty.</p>
    `
  },
  {
    id: "fallback-2",
    title: "Decoupling Large-Scale LMS Content Deliveries",
    slug: "decoupled-lms-architectures",
    link: "https://medium.com/@gomugomucode/decoupled-lms-architectures",
    publishDate: "2025-12-08 14:30:00",
    updatedDate: "2025-12-08 14:30:00",
    author: "Anupam Baral",
    featuredImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
    categories: ["React", "Node.js", "Express", "System Design"],
    excerpt: "Analyzing MySQL persistence designs, decoupling frontend applications, and designing zero-latency CDN distributions for heavy educational platform architectures.",
    readingTime: "6 min read",
    wordCount: 1200,
    content: `
      <p>Monolithic Learning Management Systems (LMS) frequently degrade under load during peak exam windows or synchronized course launches. By decoupling the presentation layer from backend APIs, web applications achieve zero-downtime scalability.</p>

      <h2>1. Relational Database Indexing Strategy</h2>
      <p>Hierarchical course category trees can cause recursive database loops. To resolve this, precompiled index lookup arrays map parent-child category relationships in MySQL.</p>

      <pre><code>SELECT c.id, c.title, COUNT(m.id) as total_modules
FROM courses c
LEFT JOIN modules m ON c.id = m.course_id
WHERE c.status = 'published'
GROUP BY c.id
ORDER BY c.featured DESC;</code></pre>

      <h2>2. Stateless API & Edge Caching</h2>
      <p>The backend Node.js / Express API operates completely statelessly using short-lived JWT tokens, allowing Vercel Edge CDNs to cache static course catalogue payloads globally.</p>

      <blockquote>"Decoupled rendering cut global content load times from 3.4s down to under 1.2s across mobile networks."</blockquote>
    `
  },
  {
    id: "fallback-3",
    title: "Type-Safe AI Inference: Connecting Python Models to TS Gateways",
    slug: "type-safe-ai-pipelines",
    link: "https://medium.com/@gomugomucode/type-safe-ai-pipelines",
    publishDate: "2025-10-22 11:15:00",
    updatedDate: "2025-10-22 11:15:00",
    author: "Anupam Baral",
    featuredImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
    categories: ["Python", "AI / ML", "TypeScript", "Pipelines"],
    excerpt: "How to bridge Python machine learning backends with TypeScript API gateways. Implement structural runtime validations to protect latency-critical production applications.",
    readingTime: "5 min read",
    wordCount: 980,
    content: `
      <p>Python dominates the machine learning ecosystem due to libraries like PyTorch and Scikit-Learn. However, dynamic typing in Python often leads to untyped dictionary responses that break frontend React applications.</p>

      <h2>1. Pydantic Runtime Validation in FastAPI</h2>
      <p>By enforcing strict Pydantic schemas at the Python API boundary, model outputs are validated before serialization.</p>

      <pre><code>from pydantic import BaseModel, Field

class ModelInferenceRequest(BaseModel):
    prompt: str = Field(..., min_length=3)
    max_tokens: int = Field(default=256, le=2048)

class InferenceResponse(BaseModel):
    generated_text: str
    confidence_score: float
    latency_ms: float</code></pre>

      <h2>2. Shared Zod Contracts on TypeScript Frontend</h2>
      <p>Using OpenAPI schema generators, Pydantic types automatically map to TypeScript Zod schemas, maintaining end-to-end type safety.</p>
    `
  },
  {
    id: "fallback-4",
    title: "Optimizing Next.js Edge Rendering for E-commerce",
    slug: "nextjs-edge-rendering",
    link: "https://medium.com/@gomugomucode/nextjs-edge-rendering",
    publishDate: "2025-08-10 10:00:00",
    updatedDate: "2025-08-10 10:00:00",
    author: "Anupam Baral",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    categories: ["React", "Next.js", "Performance"],
    excerpt: "Strategies for achieving sub-second LCP on content-heavy e-commerce pages using Next.js Edge runtime, streaming SSR, and aggressive caching.",
    readingTime: "7 min read",
    wordCount: 1400,
    content: `
      <p>Sub-second page load times directly correlate with e-commerce conversion rates. Next.js App Router and Edge Workers enable dynamic server-side rendering directly at global CDN nodes.</p>

      <h2>1. React 19 Streaming & Suspense</h2>
      <p>Rather than blocking page renders on slow database queries, dynamic product detail grids stream down asynchronously using React Suspense boundaries.</p>
    `
  },
  {
    id: "fallback-5",
    title: "Containerizing Complex Machine Learning Pipelines with Docker",
    slug: "docker-ml-pipelines",
    link: "https://medium.com/@gomugomucode/docker-ml-pipelines",
    publishDate: "2025-06-18 16:45:00",
    updatedDate: "2025-06-18 16:45:00",
    author: "Anupam Baral",
    featuredImage: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=800",
    categories: ["Docker", "Python", "DevOps", "AI / ML"],
    excerpt: "A practical guide to packaging Python ML inference workflows into lightweight, multi-stage Docker containers with GPU acceleration and reproducible builds.",
    readingTime: "9 min read",
    wordCount: 1800,
    content: `
      <p>Reproducibility is the biggest hurdle in machine learning deployment. Multi-stage Docker builds separate heavy training dependencies from slim production inference runtimes.</p>
    `
  },
  {
    id: "fallback-6",
    title: "Mastering Row Level Security (RLS) in Supabase & PostgreSQL",
    slug: "supabase-rls-security",
    link: "https://medium.com/@gomugomucode/supabase-rls-security",
    publishDate: "2025-04-12 13:20:00",
    updatedDate: "2025-04-12 13:20:00",
    author: "Anupam Baral",
    featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
    categories: ["Supabase", "PostgreSQL", "Security", "Backend"],
    excerpt: "Designing bulletproof data access policies using PostgreSQL RLS and Supabase Auth JWT tokens for multi-tenant web applications.",
    readingTime: "6 min read",
    wordCount: 1150,
    content: `
      <p>Securing multi-tenant software starts at the database level. Row Level Security policies enforce strict tenant boundaries regardless of API access bugs.</p>
    `
  },
  {
    id: "fallback-7",
    title: "Solana Smart Contract Security: Common Pitfalls in Rust Anchor",
    slug: "solana-rust-security",
    link: "https://medium.com/@gomugomucode/solana-rust-security",
    publishDate: "2025-02-28 08:30:00",
    updatedDate: "2025-02-28 08:30:00",
    author: "Anupam Baral",
    featuredImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800",
    categories: ["Solana", "Rust", "Security", "Web3"],
    excerpt: "Preventing account reentrancy, signer verification bypasses, and integer overflow vulnerabilities in Solana Anchor programs.",
    readingTime: "10 min read",
    wordCount: 2100,
    content: `
      <p>Smart contract security audits require verifying account ownership checks and preventing unauthorized instruction execution.</p>
    `
  },
  {
    id: "fallback-8",
    title: "Building High-Throughput Node.js Microservices",
    slug: "nodejs-microservices-throughput",
    link: "https://medium.com/@gomugomucode/nodejs-microservices-throughput",
    publishDate: "2024-11-14 15:10:00",
    updatedDate: "2024-11-14 15:10:00",
    author: "Anupam Baral",
    featuredImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
    categories: ["Node.js", "TypeScript", "Microservices", "Backend"],
    excerpt: "Architecting non-blocking asynchronous event loops, message queues, and Redis cluster caching for high-concurrency Node.js microservices.",
    readingTime: "7 min read",
    wordCount: 1350,
    content: `
      <p>Node.js event loops excel at I/O-bound concurrency. Offloading heavy CPU tasks to worker threads keeps API gateways responsive.</p>
    `
  },
  {
    id: "fallback-9",
    title: "Core Web Vitals Blueprint: Achieving 100/100 Lighthouse Scores",
    slug: "core-web-vitals-100-blueprint",
    link: "https://medium.com/@gomugomucode/core-web-vitals-100-blueprint",
    publishDate: "2024-09-05 12:00:00",
    updatedDate: "2024-09-05 12:00:00",
    author: "Anupam Baral",
    featuredImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800",
    categories: ["Performance", "React", "SEO", "Frontend"],
    excerpt: "Comprehensive strategies for eliminating CLS shifts, optimizing LCP image loading, and reducing INP main-thread execution delays.",
    readingTime: "8 min read",
    wordCount: 1550,
    content: `
      <p>Optimizing web performance requires systematic auditing of Critical Rendering Paths, dynamic asset preloading, and CSS layout containment.</p>
    `
  }
];

/**
 * Generate clean URL-friendly slug from title
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

/**
 * 6-Level Priority Strategy for Extracting Featured Image
 */
const extractFeaturedImage = (
  item: Element,
  itemObj: Record<string, unknown>,
  contentHtml: string,
  descriptionHtml: string
): string => {
  const DEFAULT_PLACEHOLDER =
    "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800";

  // Priority 1: media:content
  const mediaContent = item.getElementsByTagName("media:content")[0];
  if (mediaContent && mediaContent.getAttribute("url")) {
    return mediaContent.getAttribute("url")!;
  }

  // Priority 2: media:thumbnail
  const mediaThumbnail = item.getElementsByTagName("media:thumbnail")[0];
  if (mediaThumbnail && mediaThumbnail.getAttribute("url")) {
    return mediaThumbnail.getAttribute("url")!;
  }

  // Priority 3: og:image from content or RSS object fields
  if (itemObj.thumbnail && typeof itemObj.thumbnail === "string" && itemObj.thumbnail !== "") {
    return itemObj.thumbnail;
  }

  // Priority 4: First <img> tag inside content:encoded
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/i;
  const contentMatch = imgRegex.exec(contentHtml);
  if (contentMatch && contentMatch[1]) {
    return contentMatch[1];
  }

  // Priority 5: First <img> tag inside description
  const descMatch = imgRegex.exec(descriptionHtml);
  if (descMatch && descMatch[1]) {
    return descMatch[1];
  }

  // Priority 6: Fallback placeholder
  return DEFAULT_PLACEHOLDER;
};

/**
 * Extract clean text excerpt and calculate word count / reading time
 */
const extractContentDetails = (htmlString: string) => {
  if (typeof window === "undefined") {
    const plainText = htmlString.replace(/<[^>]+>/g, " ").trim();
    const words = plainText.split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
    const excerpt = plainText.substring(0, 160) + "...";
    return { plainText, wordCount, readingTime, excerpt };
  }

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  const plainText = (tempDiv.textContent || tempDiv.innerText || "").trim();
  const words = plainText.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
  const excerpt = plainText.substring(0, 160) + "...";

  return { plainText, wordCount, readingTime, excerpt };
};

/**
 * Parse Medium RSS XML string using DOMParser
 */
const parseMediumXml = (xmlString: string): MediumArticle[] => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const items = xmlDoc.getElementsByTagName("item");

  const articles: MediumArticle[] = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const title = item.getElementsByTagName("title")[0]?.textContent || "Untitled Article";
    const link = item.getElementsByTagName("link")[0]?.textContent || `https://medium.com/@${MEDIUM_USERNAME}`;
    const pubDate = item.getElementsByTagName("pubDate")[0]?.textContent || new Date().toISOString();
    const creator = item.getElementsByTagName("dc:creator")[0]?.textContent || "Anupam Baral";
    
    // Extract categories
    const categoryNodes = item.getElementsByTagName("category");
    const categories: string[] = [];
    for (let c = 0; c < categoryNodes.length; c++) {
      const cat = categoryNodes[c].textContent;
      if (cat && !categories.includes(cat)) categories.push(cat);
    }
    if (categories.length === 0) categories.push("Engineering");

    // Extract HTML content
    const contentEncoded = item.getElementsByTagName("content:encoded")[0]?.textContent || "";
    const description = item.getElementsByTagName("description")[0]?.textContent || "";
    const fullHtml = contentEncoded || description;

    const { wordCount, readingTime, excerpt } = extractContentDetails(fullHtml);
    const featuredImage = extractFeaturedImage(item, {}, contentEncoded, description);

    const slug = slugify(title);
    const guid = item.getElementsByTagName("guid")[0]?.textContent || slug;

    articles.push({
      id: guid,
      title,
      slug,
      link,
      publishDate: pubDate,
      updatedDate: pubDate,
      categories,
      readingTime,
      author: creator,
      featuredImage,
      content: fullHtml,
      excerpt,
      wordCount,
    });
  }

  return articles;
};

import { apiClient } from "./apiClient";

/**
 * Fetch Medium Articles with 6-Hour Cache and Resilient Failover Strategy
 */
export const fetchMediumArticles = async (): Promise<MediumArticle[]> => {
  // Check LocalStorage Cache
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { timestamp, data } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION_MS && Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch (err) {
    console.warn("[Medium RSS] Cache read error:", err);
  }

  const feedUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;

  // Strategy 1: Direct Fetch via AllOrigins Raw Proxy (XML parsing)
  try {
    const xmlText = await apiClient.get<string>(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`,
      { timeoutMs: 6000, retries: 1 }
    );
    if (typeof xmlText === "string" && xmlText.includes("<rss")) {
      const parsed = parseMediumXml(xmlText);
      if (parsed.length > 0) {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: parsed }));
        return parsed;
      }
    }
  } catch (e1) {
    console.warn("[Medium RSS] Strategy 1 (AllOrigins Raw) failed:", e1);
  }

  // Strategy 2: CORSProxy.io (XML parsing)
  try {
    const xmlText = await apiClient.get<string>(
      `https://corsproxy.io/?${encodeURIComponent(feedUrl)}`,
      { timeoutMs: 6000, retries: 1 }
    );
    if (typeof xmlText === "string" && xmlText.includes("<rss")) {
      const parsed = parseMediumXml(xmlText);
      if (parsed.length > 0) {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: parsed }));
        return parsed;
      }
    }
  } catch (e2) {
    console.warn("[Medium RSS] Strategy 2 (Corsproxy.io) failed:", e2);
  }

  // Strategy 3: RSS2JSON API Fallback
  try {
    const data = await apiClient.get<Record<string, unknown>>(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`,
      { timeoutMs: 6000, retries: 1 }
    );
    if (data && data.status === "ok" && Array.isArray(data.items) && data.items.length > 0) {
      const parsed: MediumArticle[] = data.items.map((item: Record<string, unknown>) => {
        const contentHtml = (item.content as string) || (item.description as string) || "";
        const { wordCount, readingTime, excerpt } = extractContentDetails(contentHtml);
        const title = item.title as string;
        const slug = slugify(title);

        const imgMatch = /<img[^>]+src=["']([^"']+)["']/i.exec(contentHtml);
        const featuredImage =
          (item.thumbnail as string) ||
          imgMatch?.[1] ||
          "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800";

        return {
          id: (item.guid as string) || (item.link as string) || slug,
          title,
          slug,
          link: item.link as string,
          publishDate: item.pubDate as string,
          updatedDate: item.pubDate as string,
          categories: (item.categories as string[]) || ["Engineering"],
          readingTime,
          author: (item.author as string) || "Anupam Baral",
          featuredImage,
          content: contentHtml,
          excerpt,
          wordCount,
        };
      });

      localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: parsed }));
      return parsed;
    }
  } catch (e3) {
    console.warn("[Medium RSS] Strategy 3 (RSS2JSON) failed:", e3);
  }

  // Strategy 4: Fallback to Curated Fallback Articles
  console.log("[Medium RSS] Loading graceful local fallback dataset.");
  return FALLBACK_ARTICLES;
};
