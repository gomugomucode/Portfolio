import { useState, useEffect, useMemo } from "react";
import { Search, Rss, BookMarked, Sparkles, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/layout/SectionShell";
import { BlogCard, type BlogPost } from "@/components/BlogCard";
import { siteConfig } from "@/lib/siteConfig";
import { fetchMediumArticles, FALLBACK_ARTICLES } from "@/lib/mediumFeed";
import {
  getBlogPostingSchema,
  getBreadcrumbSchema,
  getWebPageSchema,
} from "@/lib/schema";

const MEDIUM_USERNAME = "gomugomucode";
const CACHE_KEY = `medium_blog_posts_${MEDIUM_USERNAME}`;
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour
const POSTS_PER_PAGE = 3;

export interface ReadingPath {
  id: string;
  title: string;
  category: string;
  description: string;
  articleCount: string;
  link: string;
}

const readingPaths: ReadingPath[] = [
  {
    id: "solana-web3",
    title: "Solana & Web3 Protocol Architecture",
    category: "Web3",
    description: "Deep dives into Rust Anchor smart programs, atomic escrow contracts, BPF compilation, and Web3.js transaction builders.",
    articleCount: "2 Articles",
    link: "https://medium.com/@gomugomucode/yatra-solana-ride-sharing-protocol"
  },
  {
    id: "fullstack-perf",
    title: "Decoupled Systems & Database Optimization",
    category: "System Design",
    description: "Analyzing sub-1.2s content delivery budgets, relational MySQL index tuning, and stateless Express API gateways.",
    articleCount: "2 Articles",
    link: "https://medium.com/@gomugomucode/decoupled-lms-architectures"
  },
  {
    id: "ai-microservices",
    title: "Type-Safe AI & Python Microservices",
    category: "AI / ML",
    description: "Bridging Python machine learning inference engines to TypeScript clients with structural Pydantic validation schemas.",
    articleCount: "2 Articles",
    link: "https://medium.com/@gomugomucode/type-safe-ai-pipelines"
  }
];

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
  },
  {
    guid: "fallback-5",
    title: "Containerizing Complex Machine Learning Pipelines with Docker",
    pubDate: "2025-06-18 16:45:00",
    link: "https://medium.com/@gomugomucode/docker-ml-pipelines",
    author: "Anupam Baral",
    thumbnail: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=800",
    categories: ["Docker", "Python", "DevOps", "AI / ML"],
    excerpt: "A practical guide to packaging Python ML inference workflows into lightweight, multi-stage Docker containers with GPU acceleration and reproducible builds.",
    readingTime: "9 min read"
  },
  {
    guid: "fallback-6",
    title: "Mastering Row Level Security (RLS) in Supabase & PostgreSQL",
    pubDate: "2025-04-12 13:20:00",
    link: "https://medium.com/@gomugomucode/supabase-rls-security",
    author: "Anupam Baral",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
    categories: ["Supabase", "PostgreSQL", "Security", "Backend"],
    excerpt: "Designing bulletproof data access policies using PostgreSQL RLS and Supabase Auth JWT tokens for multi-tenant web applications.",
    readingTime: "6 min read"
  },
  {
    guid: "fallback-7",
    title: "Solana Smart Contract Security: Common Pitfalls in Rust Anchor",
    pubDate: "2025-02-28 08:30:00",
    link: "https://medium.com/@gomugomucode/solana-rust-security",
    author: "Anupam Baral",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800",
    categories: ["Solana", "Rust", "Security", "Web3"],
    excerpt: "Preventing account reentrancy, signer verification bypasses, and integer overflow vulnerabilities in Solana Anchor programs.",
    readingTime: "10 min read"
  },
  {
    guid: "fallback-8",
    title: "Building High-Throughput Node.js Microservices",
    pubDate: "2024-11-14 15:10:00",
    link: "https://medium.com/@gomugomucode/nodejs-microservices-throughput",
    author: "Anupam Baral",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
    categories: ["Node.js", "TypeScript", "Microservices", "Backend"],
    excerpt: "Architecting non-blocking asynchronous event loops, message queues, and Redis cluster caching for high-concurrency Node.js microservices.",
    readingTime: "7 min read"
  },
  {
    guid: "fallback-9",
    title: "Core Web Vitals Blueprint: Achieving 100/100 Lighthouse Scores",
    pubDate: "2024-09-05 12:00:00",
    link: "https://medium.com/@gomugomucode/core-web-vitals-100-blueprint",
    author: "Anupam Baral",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800",
    categories: ["Performance", "React", "SEO", "Frontend"],
    excerpt: "Comprehensive strategies for eliminating CLS shifts, optimizing LCP image loading, and reducing INP main-thread execution delays.",
    readingTime: "8 min read"
  }
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest" | "alphabetical" | "readingTime">("newest");

  useEffect(() => {
    let isMounted = true;
    fetchMediumArticles()
      .then((data) => {
        if (isMounted) {
          const blogPosts: BlogPost[] = data.map((art) => ({
            guid: art.id,
            title: art.title,
            slug: art.slug,
            pubDate: art.publishDate,
            link: art.link,
            thumbnail: art.featuredImage,
            categories: art.categories,
            readingTime: art.readingTime,
            excerpt: art.excerpt,
            author: art.author,
          }));
          setPosts(blogPosts);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Medium articles fetch error:", err);
        if (isMounted) {
          setError(true);
          const fallbackBlogPosts: BlogPost[] = FALLBACK_ARTICLES.map((art) => ({
            guid: art.id,
            title: art.title,
            slug: art.slug,
            pubDate: art.publishDate,
            link: art.link,
            thumbnail: art.featuredImage,
            categories: art.categories,
            readingTime: art.readingTime,
            excerpt: art.excerpt,
            author: art.author,
          }));
          setPosts(fallbackBlogPosts);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
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
      } else if (sortOrder === "alphabetical") {
        return a.title.localeCompare(b.title);
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

  const url = `${siteConfig.url}/blog`;
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
  ];

  const blogPostSchemas = (posts.length > 0 ? posts : FALLBACK_POSTS).map((post) =>
    getBlogPostingSchema({
      title: post.title,
      excerpt: post.excerpt,
      url: post.link,
      pubDate: post.pubDate,
      thumbnail: post.thumbnail,
      categories: post.categories,
      readingTime: post.readingTime,
    })
  );

  const schemas = [
    getBreadcrumbSchema(breadcrumbs),
    getWebPageSchema(
      "Technical Articles & Engineering Logs | Anupam Baral",
      "Articles on software architecture, Solana Web3 smart contracts, React/Next.js performance, and Python machine learning pipelines.",
      url,
      breadcrumbs
    ),
    ...blogPostSchemas,
  ];

  return (
    <SectionShell bordered={false}>
      <SEO
        title="Technical Articles & Engineering Logs | Anupam Baral"
        description="Articles on software engineering, Solana blockchain, React, TypeScript, Python, and machine learning pipelines."
        keywords="Anupam Baral Blog, Engineering Blog, Solana Web3 Developer Blog, React Articles, Python ML Nepal"
        canonicalUrl={url}
        schema={schemas}
      />

      <div className="flex flex-col gap-12">
        {/* Recommended Reading Paths Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <span className="label-mono flex items-center gap-1.5 text-primary">
              <BookMarked className="w-3.5 h-3.5" aria-hidden="true" /> Curated Reading Paths
            </span>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              aria-label="Subscribe to RSS Feed"
            >
              <Rss className="w-3 h-3 text-primary" aria-hidden="true" />
              RSS 2.0 Feed
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {readingPaths.map((path) => (
              <Card key={path.id} className="p-5 flex flex-col justify-between gap-4 border-border bg-card/40 hover:border-primary/40 transition-colors">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="font-mono text-[10px] text-primary border-primary/30">
                      {path.category}
                    </Badge>
                    <span className="text-[10px] font-mono text-muted-foreground">{path.articleCount}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {path.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {path.description}
                  </p>
                </div>

                <a
                  href={path.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-medium text-primary hover:underline inline-flex items-center gap-1 mt-1"
                >
                  Explore Path <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-4 border-t border-border">
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
            <div>
              <span className="label-mono block mb-3">05 — Engineering Logs</span>
              <h1 className="heading-display">Technical writing.</h1>
              <p className="text-body-sm max-w-sm mt-4">
                In-depth articles on database persistence, Solana Rust smart contracts, and Python ML pipelines. Documenting runtime benchmarks and production trade-offs.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Search engineering logs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 pl-10 pr-4 rounded-md border border-border bg-background text-sm interactive-focus placeholder:text-muted-foreground"
                  aria-label="Search articles"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Topic Category</label>
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
                  onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest" | "alphabetical" | "readingTime")}
                  className="h-9 px-3 rounded-md border border-border bg-background text-sm interactive-focus"
                  aria-label="Sort articles by"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="alphabetical">Alphabetical (A-Z)</option>
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

            {/* Read More on Medium Footer Banner */}
            <div className="mt-8 p-6 rounded-lg border border-border bg-card/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <h4 className="font-display text-base font-semibold text-foreground">
                  Looking for more engineering articles?
                </h4>
                <p className="text-xs text-muted-foreground">
                  Read all full-length articles, code walkthroughs, and technical breakdowns on my Medium publication.
                </p>
              </div>
              <a
                href="https://medium.com/@gomugomucode"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 text-xs font-mono font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 px-4 py-2.5 transition-all interactive-focus"
              >
                Read more on Medium
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

export default Blog;
