import { siteConfig } from "./siteConfig";

/**
 * Standard Schema.org JSON-LD Builders for Anupam Baral's Developer Portfolio
 * Strictly adheres to verified factual data (no fabricated organizations or fake contact numbers)
 */

// 1. Standalone Person Schema (Authoritative Entity Definition)
export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: "Anupam Baral",
  alternateName: ["gomugomucode", "@gomugomucode"],
  url: `${siteConfig.url}/`,
  image: `${siteConfig.url}/my-photo.webp`,
  jobTitle: ["Full-Stack Developer", "AI Engineer"],
  description: "Full-Stack Developer and AI Engineer from Nepal, known online as gomugomucode.",
  nationality: {
    "@type": "Country",
    name: "Nepal",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Butwal",
    addressRegion: "Lumbini",
    addressCountry: "NP",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Tribhuvan University",
    sameAs: "https://en.wikipedia.org/wiki/Tribhuvan_University",
  },
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.medium,
  ],
  knowsAbout: [
    "Full-Stack Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Artificial Intelligence",
    "Machine Learning",
    "Supabase",
    "Firebase",
    "PostgreSQL",
    "MySQL",
    "Solana",
    "Rust",
    "Tailwind CSS",
  ],
});

// 2. ProfilePage Schema (Standard for Personal Developer Homepages)
export const getProfilePageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteConfig.url}/#profile`,
  url: `${siteConfig.url}/`,
  name: "Anupam Baral (@gomugomucode) — Full-Stack Developer & AI Engineer",
  description: "Full-Stack Developer and AI Engineer from Nepal, known online as gomugomucode.",
  mainEntity: getPersonSchema(),
});

// 3. WebSite Schema
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: `${siteConfig.url}/`,
  name: "Anupam Baral (@gomugomucode)",
  alternateName: ["gomugomucode", "Anupam Baral"],
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.url}/#person`,
  },
  inLanguage: "en-US",
});

// 4. Breadcrumb Schema
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

// 5. WebPage Schema
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
  author: {
    "@id": `${siteConfig.url}/#person`,
  },
  breadcrumb: breadcrumbItems
    ? getBreadcrumbSchema(breadcrumbItems)
    : undefined,
  inLanguage: "en-US",
});

// 6. Project / SoftwareSourceCode Schema
export interface ProjectSchemaInput {
  title: string;
  description: string;
  tags: string[];
  slug?: string;
  githubLink?: string;
  liveLink?: string;
  imageUrl?: string;
  dateCreated?: string;
}

export const getProjectSchema = (project: ProjectSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  "@id": project.slug ? `${siteConfig.url}/projects/${project.slug}#software` : undefined,
  name: project.title,
  description: project.description,
  codeRepository: project.githubLink || siteConfig.social.github,
  programmingLanguage: project.tags.join(", "),
  runtimePlatform: "Node.js / Browser / Edge",
  author: {
    "@id": `${siteConfig.url}/#person`,
  },
  creator: {
    "@id": `${siteConfig.url}/#person`,
  },
  url: project.slug ? `${siteConfig.url}/projects/${project.slug}` : (project.liveLink || siteConfig.url),
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
  "@id": `${post.url}#article`,
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
    "@id": `${siteConfig.url}/#person`,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": post.url,
  },
  articleSection: post.categories.join(", "),
  inLanguage: "en-US",
});


// 9. ContactPage Schema
export const getContactPageSchema = (url: string) => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${url}#contactpage`,
  url,
  name: `Contact ${siteConfig.name} (@${siteConfig.username}) | Full Stack & AI Developer Nepal`,
  description: `Get in touch with ${siteConfig.name} for freelance software engineering, AI pipelines, or full-stack contracts.`,
  mainEntity: {
    "@id": `${siteConfig.url}/#person`,
  },
});
