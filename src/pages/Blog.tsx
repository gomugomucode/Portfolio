import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Clock, Calendar } from "lucide-react";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  categories: string[];
  readingTime?: string;
  excerpt?: string;
}

const MEDIUM_USERNAME = "gomugomucode";
const CACHE_KEY = `medium_blog_posts_${MEDIUM_USERNAME}`;
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour

// Curated fallback posts matching Anupam's real profile and technical portfolio v2 brand tone
const FALLBACK_POSTS: BlogPost[] = [
  {
    guid: "fallback-1",
    title: "Architecting Yatra — A Decentralized Ride-Sharing Protocol on Solana",
    pubDate: "2026-02-15 09:00:00",
    link: "https://medium.com/@gomugomucode/yatra-solana-ride-sharing-protocol",
    author: "Anupam Baral",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
    description: "A comprehensive deep dive into engineering atomic ride contracts, driver reputation mechanisms, and real-time signalling systems using Rust, Web3.js, and Firebase.",
    categories: ["Web3", "Solana", "Rust", "Architecture"],
    excerpt: "A comprehensive deep dive into engineering atomic ride contracts, driver reputation mechanisms, and real-time signalling systems using Rust, Web3.js, and Firebase.",
    readingTime: "8 min read"
  },
  {
    guid: "fallback-2",
    title: "Decoupling Large-Scale LMS Content Deliveries",
    pubDate: "2025-12-08 14:30:00",
    link: "https://medium.com/@gomugomucode/decoupled-lms-architectures",
    author: "Anupam Baral",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
    description: "Analyzing MySQL persistence designs, decoupling frontend applications, and designing zero-latency CDN distributions for heavy educational platform architectures.",
    categories: ["React", "Node.js", "Express", "System Design"],
    excerpt: "Analyzing MySQL persistence designs, decoupling frontend applications, and designing zero-latency CDN distributions for heavy educational platform architectures.",
    readingTime: "6 min read"
  },
  {
    guid: "fallback-3",
    title: "Type-Safe AI Inference: Connecting Python Models to TS Gateways",
    pubDate: "2025-10-22 11:15:00",
    link: "https://medium.com/@gomugomucode/type-safe-ai-pipelines",
    author: "Anupam Baral",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
    description: "How to bridge Python machine learning backends with TypeScript API gateways. Implement structural runtime validations to protect latency-critical production applications.",
    categories: ["Python", "AI / ML", "TypeScript", "Pipelines"],
    excerpt: "How to bridge Python machine learning backends with TypeScript API gateways. Implement structural runtime validations to protect latency-critical production applications.",
    readingTime: "5 min read"
  }
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMediumFeed = async () => {
      try {
        // 1. Check client-side localStorage cache
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { timestamp, data } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION_MS && data && data.length > 0) {
            setPosts(data);
            setLoading(false);
            return;
          }
        }

        // 2. Fetch using rss2json converter
        const rssUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
        );

        if (!response.ok) throw new Error("Network request failed");
        
        const resData = await response.json();
        
        if (resData.status === "ok" && resData.items && resData.items.length > 0) {
          const parsedPosts = resData.items.map((item: any) => {
            // Strip HTML to get text excerpt
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = item.description || "";
            const plainText = tempDiv.textContent || tempDiv.innerText || "";
            
            // Build 150-char clean excerpt
            const excerpt = plainText.trim().substring(0, 160) + "...";
            
            // Estimate reading time (average 200 words per minute)
            const wordCount = plainText.split(/\s+/).length;
            const readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

            return {
              guid: item.guid || item.link,
              title: item.title,
              pubDate: item.pubDate,
              link: item.link,
              author: item.author || "Anupam Baral",
              thumbnail: item.thumbnail || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
              description: item.description || "",
              categories: item.categories || ["Engineering"],
              excerpt,
              readingTime
            };
          });

          // Cache parsed posts
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), data: parsedPosts })
          );
          setPosts(parsedPosts);
        } else {
          // Empty or invalid response, fallback
          setPosts(FALLBACK_POSTS);
        }
      } catch (err) {
        console.error("Medium feed failed to load, loading graceful fallbacks.", err);
        setError(true);
        setPosts(FALLBACK_POSTS);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumFeed();
  }, []);

  const formatDate = (dateStr: string) => {
    try {
      const dateObj = new Date(dateStr.replace(/-/g, "/")); // normalize timezone parse
      return dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-24">
      <SEO
        title="Technical Writing | Anupam Baral"
        description="Articles on software engineering, Solana blockchain, TypeScript, and machine learning pipelines."
        keywords="Anupam Baral Blog, Engineering Blog, Solana Web3 Developer Blog, React Articles"
        canonicalUrl="https://anupambaral.com.np/blog"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Sticky Left Rail (col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-2 lg:sticky lg:top-28">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            05 — WRITING
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase">
            Engineering<br />Logs.
          </h1>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-sm mt-4">
            Technical writing on database persistence, blockchain contract verification, and ML deployments. Documenting implementation details and runtime analysis.
          </p>
        </div>

        {/* Right Feed (col-span-8) */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          {loading ? (
            <div className="flex flex-col gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="animate-pulse flex flex-col gap-4 border-b border-border/40 pb-8">
                  <div className="h-4 bg-muted w-24 rounded-sm" />
                  <div className="h-6 bg-muted w-3/4 rounded-sm" />
                  <div className="h-16 bg-muted w-full rounded-sm" />
                  <div className="h-4 bg-muted w-32 rounded-sm" />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              {posts.map((post) => (
                <article
                  key={post.guid}
                  className="flex flex-col gap-4 border-b border-border/40 pb-12 last:border-b-0 last:pb-0 group"
                >
                  {/* Meta Indicators */}
                  <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.pubDate)}
                    </span>
                    <span className="h-3 w-[1px] bg-border/60" />
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime || "5 min read"}
                    </span>
                  </div>

                  {/* Title */}
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group-hover:text-primary transition-colors duration-300"
                  >
                    <h2 className="font-display text-2xl font-bold tracking-tight text-foreground leading-snug">
                      {post.title}
                    </h2>
                  </a>

                  {/* Excerpt */}
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.categories.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="default" className="font-mono text-[9px] tracking-wider">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Link */}
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium rounded-md bg-primary text-primary-foreground hover:brightness-110 active:scale-95 px-4 py-2.5 transition-all self-start mt-3"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Read on Medium
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </article>
              ))}
            </div>
          )}

          {error && !loading && (
            <p className="text-xs text-muted-foreground font-mono mt-4">
              Showing cached fallback logs due to connection rate-limits.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
