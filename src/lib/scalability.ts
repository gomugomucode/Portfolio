/**
 * Enterprise Scalability Contracts & Extension Point Interfaces
 */

export interface CMSProvider {
  name: "sanity" | "contentful" | "strapi" | "ghost";
  getPosts: () => Promise<unknown[]>;
  getProjects: () => Promise<unknown[]>;
}

export interface SupabaseConfig {
  url: string;
  anonKey: string;
  enableRLS: boolean;
}

export interface UserComment {
  id: string;
  articleSlug: string;
  authorName: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
}

export interface NewsletterSubscription {
  email: string;
  source: string;
  subscribedAt: string;
}

export interface LocalizationConfig {
  defaultLocale: "en" | "ne";
  supportedLocales: ("en" | "ne")[];
  translations: Record<string, Record<string, string>>;
}
