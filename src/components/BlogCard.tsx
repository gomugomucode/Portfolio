import { Link } from "react-router-dom";
import { Calendar, Clock, ExternalLink, BookOpen, ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { slugify } from "@/lib/mediumFeed";

export interface BlogPost {
  guid: string;
  title: string;
  slug?: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  categories: string[];
  readingTime: string;
  excerpt: string;
  author?: string;
}

interface BlogCardProps {
  post: BlogPost;
  layout?: "horizontal" | "vertical";
}

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

export const BlogCard = ({ post, layout = "vertical" }: BlogCardProps) => {
  const articleSlug = post.slug || slugify(post.title);
  const previewUrl = `/blog/${articleSlug}`;

  if (layout === "horizontal") {
    return (
      <article className="group flex flex-col md:flex-row gap-6 md:gap-8 border-b border-border-soft pb-10 last:border-b-0 last:pb-0 transition-colors duration-300">
        <div className="flex flex-col gap-4 flex-1 order-2 md:order-1">
          <div className="flex items-center gap-4 font-tech text-xs text-muted-foreground uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
              {formatDate(post.pubDate)}
            </span>
            <span className="h-3 w-px bg-border-soft" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
              {post.readingTime || "5 min read"}
            </span>
          </div>

          <Link
            to={previewUrl}
            className="block group-hover:text-accent transition-colors duration-300"
          >
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground leading-snug">
              {post.title}
            </h2>
          </Link>

          <p className="text-body-sm line-clamp-3 text-muted-foreground">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {post.categories.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="font-tech text-[10px] uppercase tracking-wider rounded-full border-border-soft">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-3">
            <Link
              to={previewUrl}
              className="inline-flex items-center gap-2 text-xs font-tech uppercase tracking-wider font-semibold rounded-full bg-accent text-white hover:bg-foreground active:scale-95 px-5 py-2.5 transition-all shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Read Preview
              <ArrowRight className="w-3 h-3" />
            </Link>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors px-3 py-2.5"
            >
              Medium <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        <Link
          to={previewUrl}
          className="block w-full md:w-56 h-48 md:h-40 shrink-0 overflow-hidden rounded-2xl border border-border-soft bg-muted order-1 md:order-2 relative"
        >
          <img
            src={post.thumbnail}
            alt={`Thumbnail image for article: ${post.title}`}
            width={400}
            height={280}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800";
            }}
          />
        </Link>
      </article>
    );
  }

  return (
    <article className="group flex flex-col h-full border border-border-soft rounded-2xl overflow-hidden bg-card/60 hover:border-accent/40 hover:shadow-lg transition-all duration-300">
      <Link
        to={previewUrl}
        className="block aspect-[16/10] overflow-hidden bg-muted relative w-full"
      >
        <img
          src={post.thumbnail}
          alt={`Thumbnail image for article: ${post.title}`}
          width={640}
          height={400}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800";
          }}
        />
      </Link>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center gap-3 font-tech text-[11px] uppercase tracking-wider text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-accent" aria-hidden="true" />
            {formatDate(post.pubDate)}
          </span>
          <span className="h-3 w-px bg-border-soft" aria-hidden="true" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-accent" aria-hidden="true" />
            {post.readingTime || "5 min read"}
          </span>
        </div>

        <Link
          to={previewUrl}
          className="block group-hover:text-accent transition-colors"
        >
          <h3 className="font-display text-lg font-bold tracking-tight text-foreground leading-snug line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-body-sm text-muted-foreground line-clamp-3 flex-1">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {post.categories.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="font-tech text-[10px] uppercase tracking-wider rounded-full border-border-soft">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border-soft">
          <Link
            to={previewUrl}
            className="inline-flex items-center gap-1.5 text-xs font-tech uppercase tracking-wider font-semibold text-accent hover:text-foreground transition-colors"
          >
            Read Preview <ArrowRight className="w-3 h-3" />
          </Link>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-tech uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            Medium <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>
    </article>
  );
};

