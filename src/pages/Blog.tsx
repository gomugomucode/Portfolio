import { useState, useEffect, useMemo } from "react";
import { ExternalLink, BookOpen, Clock, Calendar } from "lucide-react";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/SectionShell";

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
const POSTS_PER_PAGE = 4;

const FALLBACK_POSTS: BlogPost[] = [
  {
    guid: "fallback-1",
    title: "Architecting Yatra — A Decentralized Ride-Sharing Protocol on Solana",
    pubDate: "2026-02-15 09:00:00",
    link: "https://medium.com/@gomugomucode/yatra-solana-ride-sharing-protocol",
    author: "Anupam Baral",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
    description: "A comprehensive deep dive into engineering atomic ride contracts...",
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
    description: "Analyzing MySQL persistence designs...",
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
    description: "How to bridge Python machine learning backends with TypeScript...",
    categories: ["Python", "AI / ML", "TypeScript", "Pipelines"],
    excerpt: "How to bridge Python machine learning backends with TypeScript API gateways. Implement structural runtime validations to protect latency-critical production applications.",
    readingTime: "5 min read"
  }
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  useEffect(() => {
    const fetchMediumFeed = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { timestamp, data } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION_MS && data && data.length > 0) {
            setPosts(data);
            setLoading(false);
            return;
          }
        }

        const rssUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
        );

        if (!response.ok) throw new Error("Network request failed");
        
        const resData = await response.json();
        
        if (resData.status === "ok" && resData.items && resData.items.length > 0) {
          const parsedPosts = resData.items.map((item: any) => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = item.description || "";
            const plainText = tempDiv.textContent || tempDiv.innerText || "";
            const excerpt = plainText.trim().substring(0, 160) + "...";
            const wordCount = plainText.split(/\s+/).length;
            const readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

            // Extract thumbnail fallback if not explicitly provided
            let finalThumbnail = item.thumbnail;
            if (!finalThumbnail) {
              const imgRegex = /<img[^>]+src="([^">]+)"/g;
              const match = imgRegex.exec(item.content || item.description || "");
              finalThumbnail = match ? match[1] : "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800";
            }

            return {
              guid: item.guid || item.link,
              title: item.title,
              pubDate: item.pubDate,
              link: item.link,
              author: item.author || "Anupam Baral",
              thumbnail: finalThumbnail,
              description: item.description || "",
              categories: item.categories || ["Engineering"],
              excerpt,
              readingTime
            };
          });

          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), data: parsedPosts })
          );
          setPosts(parsedPosts);
        } else {
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
      const dateObj = new Date(dateStr.replace(/-/g, "/"));
      return dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const visiblePosts = useMemo(() => posts.slice(0, visibleCount), [posts, visibleCount]);
  const hasMore = visibleCount < posts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + POSTS_PER_PAGE);
  };

  return (
    <SectionShell bordered={false}>
      <SEO
        title="Technical Writing | Anupam Baral"
        description="Articles on software engineering, Solana blockchain, TypeScript, and machine learning pipelines."
        keywords="Anupam Baral Blog, Engineering Blog, Solana Web3 Developer Blog, React Articles"
        canonicalUrl="https://anupambaral.com.np/blog"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-4 flex flex-col gap-3 lg:sticky lg:top-28">
          <span className="label-mono">05 — Writing</span>
          <h1 className="heading-display">Engineering logs.</h1>
          <p className="text-body-sm max-w-sm mt-2">
            Technical writing on database persistence, blockchain contract verification, and ML deployments. Documenting implementation details and runtime analysis.
          </p>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-12">
          {loading ? (
            <div className="flex flex-col gap-12">
              {[1, 2].map((i) => (
                <div key={i} className="animate-pulse flex flex-col md:flex-row gap-6 border-b border-border pb-10">
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="h-4 bg-muted w-24 rounded-sm" />
                    <div className="h-6 bg-muted w-3/4 rounded-sm" />
                    <div className="h-16 bg-muted w-full rounded-sm" />
                    <div className="h-4 bg-muted w-32 rounded-sm" />
                  </div>
                  <div className="w-full md:w-48 h-32 bg-muted rounded-md shrink-0" />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              {visiblePosts.map((post) => (
                <article
                  key={post.guid}
                  className="flex flex-col-reverse md:flex-row gap-8 md:gap-10 border-b border-border pb-10 last:border-b-0 last:pb-0 group"
                >
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex items-center gap-4 label-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.pubDate)}
                      </span>
                      <span className="h-3 w-px bg-border" />
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime || "5 min read"}
                      </span>
                    </div>

                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group-hover:text-primary transition-colors duration-300"
                    >
                      <h2 className="font-display text-2xl font-medium tracking-tight text-foreground leading-snug">
                        {post.title}
                      </h2>
                    </a>

                    <p className="text-body-sm line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.categories.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="default" className="font-mono text-[9px] tracking-wider">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 px-4 py-2.5 transition-all self-start mt-3"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      Read on Medium
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </div>

                  {post.thumbnail && (
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full md:w-48 lg:w-56 h-40 md:h-36 shrink-0 overflow-hidden rounded-md border border-border"
                    >
                      <img
                        src={post.thumbnail}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    </a>
                  )}
                </article>
              ))}

              {hasMore && (
                <div className="flex justify-center pt-6">
                  <Button onClick={handleLoadMore} variant="outline" className="gap-2">
                    Load More
                  </Button>
                </div>
              )}
            </div>
          )}

          {error && !loading && (
            <p className="text-xs text-muted-foreground font-mono mt-4 text-center">
              Showing cached fallback logs due to connection rate-limits.
            </p>
          )}
        </div>
      </div>
    </SectionShell>
  );
};

export default Blog;
