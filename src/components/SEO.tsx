import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  twitterCard?: "summary_large_image" | "summary";
  schema?: Record<string, unknown> | Record<string, unknown>[];
  author?: string;
  publishDate?: string;
}

export default function SEO({
  title,
  description,
  keywords = "Anupam Baral, Full Stack Developer, AI/ML Engineer, React Developer, Node.js Developer, Solana Developer",
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = "https://anupambaral.com.np/og-image.webp",
  ogType = "website",
  twitterCard = "summary_large_image",
  schema,
  author = "Anupam Baral",
  publishDate,
}: SEOProps) {
  const currentUrl = canonicalUrl || "https://anupambaral.com.np";
  const finalTitle = title;
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="Anupam Baral Portfolio" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Article Specific Meta */}
      {ogType === "article" && publishDate && (
        <meta property="article:published_time" content={publishDate} />
      )}
      {ogType === "article" && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:creator" content="@gomugomucode" />
      <meta name="twitter:site" content="@gomugomucode" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(
            Array.isArray(schema)
              ? schema.map((s) => ({ "@context": "https://schema.org", ...s }))
              : { "@context": "https://schema.org", ...schema }
          )}
        </script>
      )}
    </Helmet>
  );
}
