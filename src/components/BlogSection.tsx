import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Clock, Calendar, ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { SectionHeader, SectionShell } from "./layout/SectionShell";
import AnimatedSection from "./AnimatedSection";

interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  categories: string[];
  readingTime?: string;
  excerpt?: string;
  thumbnail?: string;
}

const MEDIUM_USERNAME = "gomugomucode";
const CACHE_KEY = `medium_blog_posts_${MEDIUM_USERNAME}`;
const CACHE_DURATION_MS = 60 * 60 * 1000;

const FALLBACK_POSTS: BlogPost[] = [
  {
    guid: "fallback-1",
    title: "Architecting Yatra — A Decentralized Ride-Sharing Protocol on Solana",
    pubDate: "2026-02-15 09:00:00",
    link: "https://medium.com/@gomugomucode/yatra-solana-ride-sharing-protocol",
    categories: ["Web3", "Solana", "Rust"],
    excerpt:
      "Engineering atomic ride contracts, driver reputation mechanisms, and real-time signalling systems.",
    readingTime: "8 min read",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
  },
  {
    guid: "fallback-2",
    title: "Decoupling Large-Scale LMS Content Deliveries",
    pubDate: "2025-12-08 14:30:00",
    link: "https://medium.com/@gomugomucode/decoupled-lms-architectures",
    categories: ["React", "Node.js", "System Design"],
    excerpt:
      "MySQL persistence designs, decoupled frontends, and CDN distributions for educational platforms.",
    readingTime: "6 min read",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
  },
  {
    guid: "fallback-3",
    title: "Type-Safe AI Inference: Connecting Python Models to TS Gateways",
    pubDate: "2025-10-22 11:15:00",
    link: "https://medium.com/@gomugomucode/type-safe-ai-pipelines",
    categories: ["Python", "AI / ML", "TypeScript"],
    excerpt:
      "Bridging Python ML backends with TypeScript API gateways for production inference pipelines.",
    readingTime: "5 min read",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
  },
];

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

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>(FALLBACK_POSTS);

  useEffect(() => {
    const fetchMediumFeed = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { timestamp, data } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION_MS && data?.length > 0) {
            setPosts(data.slice(0, 3));
            return;
          }
        }

        const rssUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`,
        );

        if (!response.ok) throw new Error("Network request failed");

        const resData = await response.json();

        if (resData.status === "ok" && resData.items?.length > 0) {
          const parsedPosts = resData.items.slice(0, 3).map((item: Record<string, string>) => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = item.description || "";
            const plainText = tempDiv.textContent || tempDiv.innerText || "";
            const excerpt = plainText.trim().substring(0, 140) + "...";
            const wordCount = plainText.split(/\s+/).length;

            return {
              guid: item.guid || item.link,
              title: item.title,
              pubDate: item.pubDate,
              link: item.link,
              categories: item.categories || ["Engineering"],
              excerpt,
              readingTime: `${Math.max(1, Math.ceil(wordCount / 200))} min read`,
              thumbnail:
                item.thumbnail ||
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
            };
          });

          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), data: parsedPosts }),
          );
          setPosts(parsedPosts);
        }
      } catch {
        setPosts(FALLBACK_POSTS);
      }
    };

    fetchMediumFeed();
  }, []);

  return (
    <SectionShell id="writing">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader
            index="05 — Writing"
            title="Engineering logs."
            description="Technical writing on architecture, blockchain systems, and ML deployments."
            className="mb-0"
          />
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 label-mono text-muted-foreground hover:text-foreground transition-colors interactive-focus shrink-0"
          >
            View all
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {posts.map((post) => (
            <article
              key={post.guid}
              className="group flex flex-col border border-border rounded-md overflow-hidden bg-card hover:border-foreground/20 transition-colors duration-300"
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[16/10] overflow-hidden bg-muted"
              >
                <img
                  src={post.thumbnail}
                  alt=""
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
              </a>

              <div className="flex flex-col gap-3 p-5 flex-1">
                <div className="flex items-center gap-3 label-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.pubDate)}
                  </span>
                  <span className="h-3 w-px bg-border" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {post.readingTime || "5 min read"}
                  </span>
                </div>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group-hover:text-primary transition-colors"
                >
                  <h3 className="font-display text-lg font-medium tracking-tight text-foreground leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                </a>

                <p className="text-body-sm line-clamp-3 flex-1">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2">
                  {post.categories.slice(0, 2).map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 label-mono text-muted-foreground hover:text-foreground transition-colors mt-1"
                >
                  Read on Medium
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </SectionShell>
  );
};

export default BlogSection;
