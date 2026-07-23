import { Calendar, Clock, ExternalLink, BookOpen } from "lucide-react";
import { Badge } from "./ui/badge";

export interface BlogPost {
  guid: string;
  title: string;
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
  if (layout === "horizontal") {
    return (
      <article className="group flex flex-col md:flex-row gap-6 md:gap-8 border-b border-border pb-10 last:border-b-0 last:pb-0 transition-colors duration-300">
        <div className="flex flex-col gap-4 flex-1 order-2 md:order-1">
          <div className="flex items-center gap-4 label-mono">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              {formatDate(post.pubDate)}
            </span>
            <span className="h-3 w-px bg-border" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
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

        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full md:w-56 h-48 md:h-40 shrink-0 overflow-hidden rounded-md border border-border bg-muted order-1 md:order-2 relative"
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
        </a>
      </article>
    );
  }

  return (
    <article className="group flex flex-col h-full border border-border rounded-md overflow-hidden bg-card hover:border-foreground/20 hover:[box-shadow:var(--e-2)] transition-all duration-300">
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-[16/10] overflow-hidden bg-muted relative w-full"
      >
        <img
          src={post.thumbnail}
          alt={`Thumbnail image for article: ${post.title}`}
          width={640}
          height={400}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800";
          }}
        />
      </a>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center gap-3 label-mono">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3" aria-hidden="true" />
            {formatDate(post.pubDate)}
          </span>
          <span className="h-3 w-px bg-border" aria-hidden="true" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3" aria-hidden="true" />
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

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {post.categories.slice(0, 2).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 label-mono text-muted-foreground hover:text-foreground transition-colors mt-3"
        >
          Read on Medium
          <ExternalLink className="w-3 h-3 opacity-60" />
        </a>
      </div>
    </article>
  );
};
