import { siteConfig } from "./siteConfig";

/**
 * Standard Schema.org JSON-LD Builders for Anupam Baral's Developer Portfolio
 */

// 1. Person Schema
export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.name,
  alternateName: siteConfig.handle,
  url: siteConfig.url,
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
    siteConfig.social.facebook,
    siteConfig.social.instagram,
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
    "TailwindCSS",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Independent Software Engineer & Consultant",
  },
});

// 2. WebSite Schema
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: `${siteConfig.name} - Full Stack Developer Nepal`,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.url}/#person`,
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/projects?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

// 3. Organization Schema
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: `${siteConfig.name} Technologies`,
  alternateName: siteConfig.handle,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  founder: {
    "@id": `${siteConfig.url}/#person`,
  },
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.twitter,
    siteConfig.social.medium,
    siteConfig.social.youtube,
    siteConfig.social.facebook,
    siteConfig.social.instagram,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.author.email,
    contactType: "customer service",
    availableLanguage: ["English", "Nepali"],
  },
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
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
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
