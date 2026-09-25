import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeader, SectionShell } from "./layout/SectionShell";
import AnimatedSection from "./AnimatedSection";
import { BlogCard, type BlogPost } from "./BlogCard";
import { fetchMediumArticles, FALLBACK_ARTICLES } from "@/lib/mediumFeed";

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchMediumArticles()
      .then((data) => {
        if (isMounted) {
          const blogPosts: BlogPost[] = data.slice(0, 3).map((art) => ({
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
      .catch(() => {
        if (isMounted) {
          const fallbackPosts: BlogPost[] = FALLBACK_ARTICLES.slice(0, 3).map((art) => ({
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
          setPosts(fallbackPosts);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <SectionShell id="writing">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader
            index="07 — Writing"
            title="Engineering logs."
            description="Technical writing on architecture, blockchain systems, and ML deployments."
            className="mb-0"
          />
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-tech text-xs uppercase tracking-wider text-accent hover:text-foreground transition-colors interactive-focus shrink-0 group font-semibold"
          >
            Show More Articles
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse flex flex-col gap-4 border border-border-soft rounded-2xl p-4 h-[400px]">
                <div className="w-full h-40 bg-muted rounded-xl shrink-0" />
                <div className="h-4 bg-muted w-32 rounded-full" />
                <div className="h-6 bg-muted w-3/4 rounded-md" />
                <div className="h-16 bg-muted w-full rounded-md" />
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
