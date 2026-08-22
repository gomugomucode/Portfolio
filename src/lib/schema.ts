import { siteConfig } from "./siteConfig";

/**
 * Standard Schema.org JSON-LD Builders for Anupam Baral's Developer Portfolio
 * Strictly adheres to verified factual data (no fabricated organizations or fake contact numbers)
 */

// 1. ProfilePage Schema (Phase 7 standard for personal developer portfolio)
export const getProfilePageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteConfig.url}/#profile`,
  url: `${siteConfig.url}/`,
  name: `${siteConfig.name} | Full-Stack & AI Engineer`,
  description: siteConfig.description,
  mainEntity: {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    alternateName: siteConfig.handle,
    url: `${siteConfig.url}/`,
    image: siteConfig.ogImage,
    jobTitle: siteConfig.author.role,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Butwal",
      addressRegion: "Lumbini",
      addressCountry: "NP",
    },
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.medium,
      siteConfig.social.youtube,
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Artificial Intelligence",
      "Machine Learning",
      "Supabase",
      "Firebase",
      "Solana",
      "Web3 Development",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
});

// 2. Standalone Person Schema
export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.name,
  alternateName: siteConfig.handle,
  url: `${siteConfig.url}/`,
  image: siteConfig.ogImage,
  jobTitle: siteConfig.author.role,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Butwal",
    addressRegion: "Lumbini",
    addressCountry: "NP",
  },
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.twitter,
    siteConfig.social.medium,
    siteConfig.social.youtube,
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Artificial Intelligence",
    "Machine Learning",
    "Supabase",
    "Firebase",
    "Solana",
    "Web3 Development",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Tailwind CSS",
  ],
});

// 3. WebSite Schema
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: `${siteConfig.url}/`,
  name: `${siteConfig.name} - Full Stack & AI Developer Portfolio`,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.url}/#person`,
  },
  inLanguage: "en-US",
});

// 4. WebPage Schema
export const getWebPageSchema = (
  name: string,
  description: string,
  url: string,
  breadcrumbItems?: { name: string; item: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}#webpage`,
  url,
  name,
  description,
  isPartOf: {
    "@id": `${siteConfig.url}/#website`,
  },
  about: {
    "@id": `${siteConfig.url}/#person`,
  },
  breadcrumb: breadcrumbItems
    ? getBreadcrumbSchema(breadcrumbItems)
    : undefined,
  inLanguage: "en-US",
});

// 5. Breadcrumb Schema
export const getBreadcrumbSchema = (
  items: { name: string; item: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.item.startsWith("http") ? item.item : `${siteConfig.url}${item.item}`,
  })),
});

// 6. Project / SoftwareSourceCode Schema
export interface ProjectSchemaInput {
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  imageUrl?: string;
  dateCreated?: string;
}

export const getProjectSchema = (project: ProjectSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: project.title,
  description: project.description,
  codeRepository: project.githubLink || siteConfig.social.github,
  programmingLanguage: project.tags.join(", "),
  runtimePlatform: "Node.js / Browser",
  author: {
    "@id": `${siteConfig.url}/#person`,
  },
  creator: {
    "@id": `${siteConfig.url}/#person`,
  },
  url: project.liveLink || siteConfig.url,
  image: project.imageUrl
    ? project.imageUrl.startsWith("http")
      ? project.imageUrl
      : `${siteConfig.url}${project.imageUrl}`
    : siteConfig.ogImage,
});

// 7. BlogPosting Schema
export interface BlogPostingSchemaInput {
  title: string;
  excerpt: string;
  url: string;
  pubDate: string;
  thumbnail: string;
  categories: string[];
  readingTime?: string;
}

export const getBlogPostingSchema = (post: BlogPostingSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.excerpt,
  image: post.thumbnail.startsWith("http")
    ? post.thumbnail
    : `${siteConfig.url}${post.thumbnail}`,
  datePublished: post.pubDate,
  dateModified: post.pubDate,
  author: {
    "@id": `${siteConfig.url}/#person`,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": post.url,
  },
  articleSection: post.categories.join(", "),
  inLanguage: "en-US",
});

// 8. FAQ Schema
export interface FAQItem {
  question: string;
  answer: string;
}

export const getFAQSchema = (faqs: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// 9. ContactPage Schema
export const getContactPageSchema = (url: string) => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${url}#contactpage`,
  url,
  name: `Contact ${siteConfig.name} | Full Stack & AI Developer Nepal`,
  description: `Get in touch with ${siteConfig.name} for freelance web development, AI software engineering, or technical partnerships.`,
  mainEntity: {
    "@id": `${siteConfig.url}/#person`,
  },
});


