import { useState, useEffect, useMemo } from "react";
import { Search } from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/SectionShell";
import { BlogCard, type BlogPost } from "@/components/BlogCard";

const MEDIUM_USERNAME = "gomugomucode";
const CACHE_KEY = `medium_blog_posts_${MEDIUM_USERNAME}`;
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour
const POSTS_PER_PAGE = 3;

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
  },
  {
    guid: "fallback-4",
    title: "Optimizing Next.js Edge Rendering for E-commerce",
    pubDate: "2025-08-10 10:00:00",
    link: "https://medium.com/@gomugomucode/nextjs-edge-rendering",
    author: "Anupam Baral",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    categories: ["React", "Next.js", "Performance"],
    excerpt: "Strategies for achieving sub-second LCP on content-heavy e-commerce pages using Next.js Edge runtime, streaming SSR, and aggressive caching.",
    readingTime: "7 min read"
  }
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest" | "readingTime">("newest");

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
          const parsedPosts = resData.items.map((item: Record<string, unknown>) => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = (item.description as string) || "";
            const plainText = tempDiv.textContent || tempDiv.innerText || "";
            const excerpt = plainText.trim().substring(0, 160) + "...";
            const wordCount = plainText.split(/\s+/).length;
            const readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

            const FALLBACK_THUMBNAIL =
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800";

            const descriptionHtml =
              (item.description as string) || "";
            const contentHtml =
              (item.content as string) || "";

            // 1) media:thumbnail/media:content first
            // rss2json typically provides `thumbnail`, but when missing, try og:image
            // and then first img.
            const thumbnailFromField =
              (item.thumbnail as string) || "";

            // 2) first <img> inside content
            const firstImgRegex =
              /<img[^>]+src="([^"]+)"/i;
            const firstImgMatch = firstImgRegex.exec(contentHtml || descriptionHtml);
            const firstImg = firstImgMatch?.[1] || "";

            // 3) OpenGraph image fallback
            const ogImageRegex = /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i;
            const ogMatch = ogImageRegex.exec(contentHtml || descriptionHtml);
            const ogImage = ogMatch?.[1] || "";

            // 4) final fallback
            const finalThumbnail =
              thumbnailFromField || firstImg || ogImage || FALLBACK_THUMBNAIL;

            return {
              guid: (item.guid as string) || (item.link as string),
              title: item.title as string,
              pubDate: item.pubDate as string,
              link: item.link as string,
              author: (item.author as string) || "Anupam Baral",
              thumbnail: finalThumbnail,
              categories: (item.categories as string[]) || ["Engineering"],
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

  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    posts.forEach((p) => p.categories.forEach((c) => cats.add(c)));
    return ["All", ...Array.from(cats).sort()];
  }, [posts]);

  const filteredAndSortedPosts = useMemo(() => {
    const filtered = posts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = selectedCategory === "All" || post.categories.includes(selectedCategory);
      return matchesSearch && matchesCat;
    });

    filtered.sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
      } else if (sortOrder === "oldest") {
        return new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime();
      } else if (sortOrder === "readingTime") {
        const timeA = parseInt(a.readingTime) || 0;
        const timeB = parseInt(b.readingTime) || 0;
        return timeA - timeB;
      }
      return 0;
    });

    return filtered;
  }, [posts, searchQuery, selectedCategory, sortOrder]);

  const visiblePosts = useMemo(() => filteredAndSortedPosts.slice(0, visibleCount), [filteredAndSortedPosts, visibleCount]);
  const hasMore = visibleCount < filteredAndSortedPosts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + POSTS_PER_PAGE);
  };

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://anupambaral.com.np/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://anupambaral.com.np/blog" },
  ],
};

  return (
    <SectionShell bordered={false}>
      <SEO
        title="Technical Writing | Anupam Baral"
        description="Articles on software engineering, Solana blockchain, TypeScript, and machine learning pipelines."
        keywords="Anupam Baral Blog, Engineering Blog, Solana Web3 Developer Blog, React Articles"
        canonicalUrl="https://anupambaral.com.np/blog"
        schema={breadcrumbSchema}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
          <div>
            <span className="label-mono block mb-3">05 — Writing</span>
            <h1 className="heading-display">Engineering logs.</h1>
            <p className="text-body-sm max-w-sm mt-4">
              Technical writing on database persistence, blockchain contract verification, and ML deployments. Documenting implementation details and runtime analysis.
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-md border border-border bg-background text-sm interactive-focus placeholder:text-muted-foreground"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Category</label>
              <div className="flex flex-wrap gap-2">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wide transition-colors interactive-focus ${
                      selectedCategory === cat
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground hover:bg-border"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Sort By</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest" | "readingTime")}
                className="h-9 px-3 rounded-md border border-border bg-background text-sm interactive-focus"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="readingTime">Reading Time</option>
              </select>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-12">
          {loading ? (
            <div className="flex flex-col gap-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse flex flex-col md:flex-row gap-6 border-b border-border pb-10">
                  <div className="flex-1 flex flex-col gap-4 order-2 md:order-1">
                    <div className="h-4 bg-muted w-32 rounded-sm" />
                    <div className="h-8 bg-muted w-3/4 rounded-sm" />
                    <div className="h-16 bg-muted w-full rounded-sm" />
                    <div className="h-8 bg-muted w-32 rounded-sm mt-2" />
                  </div>
                  <div className="w-full md:w-56 h-48 md:h-40 bg-muted rounded-md shrink-0 order-1 md:order-2" />
                </div>
              ))}
            </div>
          ) : (
            <>
              {visiblePosts.length > 0 ? (
                <div className="flex flex-col gap-10">
                  {visiblePosts.map((post) => (
                    <BlogCard key={post.guid} post={post} layout="horizontal" />
                  ))}

                  {hasMore && (
                    <div className="flex justify-center pt-6">
                      <Button onClick={handleLoadMore} variant="outline" className="gap-2">
                        Load More Articles
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="py-20 flex flex-col items-center justify-center text-center gap-4 bg-muted/30 rounded-md border border-border border-dashed">
                  <p className="text-body text-muted-foreground">
                    No articles found matching your criteria.
                  </p>
                  <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </>
          )}

          {error && !loading && (
            <p className="text-[11px] text-muted-foreground font-mono text-center">
              Showing cached logs due to Medium API rate-limits.
            </p>
          )}
        </div>
      </div>
    </SectionShell>
  );
};

export default Blog;
