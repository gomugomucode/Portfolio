import { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ExternalLink, ChevronRight, User, BookOpen, Share2, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/layout/SectionShell";
import { BlogCard } from "@/components/BlogCard";
import { fetchMediumArticles, type MediumArticle, FALLBACK_ARTICLES } from "@/lib/mediumFeed";
import { siteConfig } from "@/lib/siteConfig";
import { getBlogPostingSchema, getBreadcrumbSchema, getWebPageSchema } from "@/lib/schema";

const formatDate = (dateStr: string) => {
  try {
    const dateObj = new Date(dateStr.replace(/-/g, "/"));
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
};

const BlogArticlePreview = () => {
  const { slug } = useParams<{ slug: string }>();
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchMediumArticles()
      .then((data) => {
        if (isMounted) {
          setArticles(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setArticles(FALLBACK_ARTICLES);
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const article = useMemo(() => {
    if (!slug) return null;
    return articles.find((a) => a.slug === slug || a.id === slug) || null;
  }, [articles, slug]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return articles
      .filter((a) => a.slug !== article.slug)
      .filter((a) => a.categories.some((c) => article.categories.includes(c)))
      .slice(0, 3);
  }, [articles, article]);

  if (loading) {
    return (
      <SectionShell bordered={false}>
        <div className="max-w-4xl mx-auto py-24 flex flex-col gap-6 animate-pulse">
          <div className="h-4 bg-muted w-32 rounded" />
          <div className="h-10 bg-muted w-3/4 rounded" />
          <div className="w-full aspect-video bg-muted rounded-md" />
          <div className="h-20 bg-muted w-full rounded" />
        </div>
      </SectionShell>
    );
  }

  if (!article) {
    return (
      <SectionShell bordered={false}>
        <div className="max-w-3xl mx-auto py-32 text-center flex flex-col items-center gap-6">
          <h1 className="font-display text-3xl font-bold text-foreground">Article Preview Not Found</h1>
          <p className="text-body-sm text-muted-foreground">
            The requested engineering article preview could not be resolved.
          </p>
          <Button variant="outline" asChild className="gap-2">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4" /> Back to All Articles
            </Link>
          </Button>
        </div>
      </SectionShell>
    );
  }

  const url = `${siteConfig.url}/blog/${article.slug}`;
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: article.title, item: `/blog/${article.slug}` },
  ];

  const schemas = [
    getBlogPostingSchema({
      title: article.title,
      excerpt: article.excerpt,
      url,
      pubDate: article.publishDate,
      thumbnail: article.featuredImage,
      categories: article.categories,
      readingTime: article.readingTime,
    }),
    getBreadcrumbSchema(breadcrumbs),
    getWebPageSchema(
      `${article.title} | Anupam Baral`,
      article.excerpt,
      url,
      breadcrumbs
    ),
  ];

  return (
    <SectionShell bordered={false}>
      <SEO
        title={`${article.title} | Anupam Baral`}
        description={article.excerpt}
        keywords={article.categories.join(", ")}
        canonicalUrl={url}
        ogImage={article.featuredImage}
        ogType="article"
        publishDate={article.publishDate}
        author={article.author}
        schema={schemas}
      />

      {/* Visual Breadcrumb Navigation Trail */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8 label-mono text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground font-medium line-clamp-1">{article.title}</span>
      </nav>

      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {/* Back Link */}
        <div>
          <Link to="/blog" className="inline-flex items-center gap-2 label-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Articles Archive
          </Link>
        </div>

        {/* Article Header Metadata */}
        <header className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {article.categories.map((cat) => (
              <Badge key={cat} variant="default" className="font-mono text-[10px] uppercase tracking-wider">
                {cat}
              </Badge>
            ))}
          </div>

          <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-foreground font-medium">
                <User className="w-3.5 h-3.5 text-primary" />
                {article.author}
              </span>
              <span className="h-3 w-px bg-border" />
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(article.publishDate)}
              </span>
              <span className="h-3 w-px bg-border" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
            </div>

            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
            >
              Original on Medium <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </header>

        {/* Hero Featured Visual */}
        <div className="w-full aspect-[16/9] rounded-lg overflow-hidden border border-border bg-muted relative">
          <img
            src={article.featuredImage}
            alt={`Hero visual for ${article.title}`}
            width={1200}
            height={675}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1200";
            }}
          />
        </div>

        {/* Article Preview Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none text-body-sm sm:text-base leading-relaxed space-y-6">
          <div
            className="medium-content-preview [&_h2]:text-2xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-display [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_blockquote]:border-l-2 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6 [&_pre]:bg-muted [&_pre]:p-4 [&_pre]:rounded-md [&_pre]:overflow-x-auto [&_code]:font-mono [&_code]:text-xs [&_img]:rounded-md [&_img]:my-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Medium Continuation CTA Card */}
        <Card className="p-8 sm:p-10 border-primary/40 bg-gradient-to-br from-card via-card to-primary/[0.05] relative overflow-hidden flex flex-col gap-6 items-center text-center">
          <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Full Article Read
          </div>

          <div className="flex flex-col gap-2 max-w-xl">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Enjoying this article preview?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Read the complete, unedited full-length publication along with code repositories and interactive discussion comments directly on Medium.
            </p>
          </div>

          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm font-mono font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 px-6 py-3.5 transition-all shadow-md interactive-focus"
          >
            <BookOpen className="w-4 h-4" />
            Continue Reading Full Article on Medium
            <ExternalLink className="w-4 h-4" />
          </a>
        </Card>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="flex flex-col gap-6 pt-12 border-t border-border">
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Related Engineering Logs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <BlogCard key={rel.id} post={{
                  guid: rel.id,
                  title: rel.title,
                  slug: rel.slug,
                  pubDate: rel.publishDate,
                  link: rel.link,
                  thumbnail: rel.featuredImage,
                  categories: rel.categories,
                  readingTime: rel.readingTime,
                  excerpt: rel.excerpt,
                  author: rel.author,
                }} layout="vertical" />
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionShell>
  );
};

export default BlogArticlePreview;
