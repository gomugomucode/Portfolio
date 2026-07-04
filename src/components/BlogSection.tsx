import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeader, SectionShell } from "./layout/SectionShell";
import AnimatedSection from "./AnimatedSection";
import { BlogCard, type BlogPost } from "./BlogCard";

const MEDIUM_USERNAME = "gomugomucode";
const CACHE_KEY = `medium_blog_posts_${MEDIUM_USERNAME}`;
const CACHE_DURATION_MS = 60 * 60 * 1000;

const FALLBACK_POSTS: BlogPost[] = [
  {
    guid: "fallback-1",
    title: "Architecting Yatra — A Decentralized Ride-Sharing Protocol on Solana",
    pubDate: "2026-02-15 09:00:00",
    link: "https://medium.com/@gomugomucode/yatra-solana-ride-sharing-protocol",
    author: "Anupam Baral",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
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
    categories: ["Python", "AI / ML", "TypeScript", "Pipelines"],
    excerpt: "How to bridge Python machine learning backends with TypeScript API gateways. Implement structural runtime validations to protect latency-critical production applications.",
    readingTime: "5 min read"
  }
];

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediumFeed = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { timestamp, data } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION_MS && data?.length > 0) {
            setPosts(data.slice(0, 3));
            setLoading(false);
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
          const parsedPosts = resData.items.slice(0, 3).map((item: any) => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = item.description || "";
            const plainText = tempDiv.textContent || tempDiv.innerText || "";
            const excerpt = plainText.trim().substring(0, 140) + "...";
            const wordCount = plainText.split(/\s+/).length;

            let finalThumbnail = item.thumbnail;
            if (!finalThumbnail || finalThumbnail === "") {
              const imgRegex = /<img[^>]+src="([^">]+)"/gi;
              const match = imgRegex.exec(item.content || item.description || "");
              finalThumbnail = match ? match[1] : "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800";
            }

            return {
              guid: item.guid || item.link,
              title: item.title,
              pubDate: item.pubDate,
              link: item.link,
              author: item.author || "Anupam Baral",
              categories: item.categories || ["Engineering"],
              excerpt,
              readingTime: `${Math.max(1, Math.ceil(wordCount / 200))} min read`,
              thumbnail: finalThumbnail,
            };
          });

          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), data: parsedPosts }),
          );
          setPosts(parsedPosts);
        } else {
          setPosts(FALLBACK_POSTS.slice(0, 3));
        }
      } catch {
        setPosts(FALLBACK_POSTS.slice(0, 3));
      } finally {
        setLoading(false);
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
            className="inline-flex items-center gap-2 label-mono text-muted-foreground hover:text-foreground transition-colors interactive-focus shrink-0 group"
          >
            View all
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse flex flex-col gap-4 border border-border rounded-md p-4 h-[400px]">
                <div className="w-full h-40 bg-muted rounded-md shrink-0" />
                <div className="h-4 bg-muted w-32 rounded-sm" />
                <div className="h-6 bg-muted w-3/4 rounded-sm" />
                <div className="h-16 bg-muted w-full rounded-sm" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {posts.map((post) => (
              <BlogCard key={post.guid} post={post} layout="vertical" />
            ))}
          </div>
        )}
      </AnimatedSection>
    </SectionShell>
  );
};

export default BlogSection;
