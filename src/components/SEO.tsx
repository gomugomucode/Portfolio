import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/lib/siteConfig";

export interface SEOProps {
  title?: string;
  description?: string;
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
  noIndex?: boolean;
}

export default function SEO({
  title,
  description = siteConfig.description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = siteConfig.ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  schema,
  author = siteConfig.author.name,
  publishDate,
  noIndex = false,
}: SEOProps) {
  const fullTitle = title
    ? title.includes(siteConfig.name)
      ? title
      : `${title} | ${siteConfig.name}`
    : `${siteConfig.name} (${siteConfig.username}) | Full Stack & AI Engineer`;

  const finalOgTitle = ogTitle || title || `${siteConfig.name} (${siteConfig.username}) | Full Stack Developer Nepal`;
  const finalOgDescription = ogDescription || description;

  // Normalize canonical: Root always has trailing slash, subroutes have no trailing slash
  let currentUrl = canonicalUrl || `${siteConfig.url}/`;
  if (currentUrl === siteConfig.url) {
    currentUrl = `${siteConfig.url}/`;
  } else if (currentUrl.length > `${siteConfig.url}/`.length && currentUrl.endsWith("/")) {
    currentUrl = currentUrl.replace(/\/+$/, "");
  }

  const combinedKeywords = keywords
    ? `${keywords}, ${siteConfig.primaryKeywords.join(", ")}, ${siteConfig.secondaryKeywords.join(", ")}`
    : `${siteConfig.primaryKeywords.join(", ")}, ${siteConfig.secondaryKeywords.join(", ")}`;

  return (
    <Helmet>
      {/* Primary Metadata */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={combinedKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={siteConfig.name} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <link rel="canonical" href={currentUrl} />

      {/* Search Console & Webmaster Verification */}
      {siteConfig.verification.google && (
        <meta name="google-site-verification" content={siteConfig.verification.google} />
      )}
      {siteConfig.verification.bing && (
        <meta name="msvalidate.01" content={siteConfig.verification.bing} />
      )}

      {/* Social Identity Links (rel="me") */}
      <link rel="me" href={siteConfig.social.github} />
      <link rel="me" href={siteConfig.social.linkedin} />
      <link rel="me" href={siteConfig.social.twitter} />
      <link rel="me" href={siteConfig.social.medium} />
      <link rel="me" href={siteConfig.social.youtube} />

      {/* Theme & PWA */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* OpenGraph / Facebook */}
      <meta property="og:site_name" content={`${siteConfig.name} (@${siteConfig.username})`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${siteConfig.name} (${siteConfig.username}) Portfolio`} />
      <meta property="og:locale" content="en_US" />

      {/* Article Specific Meta */}
      {ogType === "article" && publishDate && (
        <meta property="article:published_time" content={publishDate} />
      )}
      {ogType === "article" && <meta property="article:author" content={author} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:creator" content={siteConfig.handle} />
      <meta name="twitter:site" content={siteConfig.handle} />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data (JSON-LD) with data-rh for Helmet Hydration */}
      {schema && (
        <script type="application/ld+json" id="schema-jsonld" data-rh="true">
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
