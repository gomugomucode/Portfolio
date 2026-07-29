/**
 * Visitor Personalization Engine & Browsing Memory Service
 */

const STORAGE_KEYS = {
  RECENT_PROJECTS: "portfolio_recent_projects",
  RECENT_BLOGS: "portfolio_recent_blogs",
  READING_PROGRESS: "portfolio_reading_progress",
};

const EXPIRATION_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

export interface ViewedItem {
  id: string;
  title: string;
  category: string;
  timestamp: number;
}

export interface ReadingProgress {
  slug: string;
  progressPercent: number;
  lastScrollPosition: number;
  updatedAt: number;
}

export const personalizationEngine = {
  /**
   * Track recently viewed project
   */
  trackProjectView: (project: { id: string; title: string; category: string }) => {
    try {
      const items = personalizationEngine.getViewedProjects();
      const filtered = items.filter((i) => i.id !== project.id);
      const updated: ViewedItem[] = [
        { ...project, timestamp: Date.now() },
        ...filtered,
      ].slice(0, 5); // Keep top 5

      localStorage.setItem(STORAGE_KEYS.RECENT_PROJECTS, JSON.stringify(updated));
    } catch (e) {
      console.warn("[Personalization] Failed to save viewed project:", e);
    }
  },

  /**
   * Get list of recently viewed projects
   */
  getViewedProjects: (): ViewedItem[] => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.RECENT_PROJECTS);
      if (!raw) return [];
      const items: ViewedItem[] = JSON.parse(raw);
      const now = Date.now();
      return items.filter((i) => now - i.timestamp < EXPIRATION_MS);
    } catch {
      return [];
    }
  },

  /**
   * Track recently read blog
   */
  trackBlogView: (blog: { id: string; title: string; category: string }) => {
    try {
      const items = personalizationEngine.getViewedBlogs();
      const filtered = items.filter((i) => i.id !== blog.id);
      const updated: ViewedItem[] = [
        { ...blog, timestamp: Date.now() },
        ...filtered,
      ].slice(0, 5);

      localStorage.setItem(STORAGE_KEYS.RECENT_BLOGS, JSON.stringify(updated));
    } catch (e) {
      console.warn("[Personalization] Failed to save viewed blog:", e);
    }
  },

  /**
   * Get list of recently viewed blogs
   */
  getViewedBlogs: (): ViewedItem[] => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.RECENT_BLOGS);
      if (!raw) return [];
      const items: ViewedItem[] = JSON.parse(raw);
      const now = Date.now();
      return items.filter((i) => now - i.timestamp < EXPIRATION_MS);
    } catch {
      return [];
    }
  },

  /**
   * Save article reading progress
   */
  saveReadingProgress: (slug: string, progressPercent: number, scrollPos: number) => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.READING_PROGRESS);
      const map: Record<string, ReadingProgress> = raw ? JSON.parse(raw) : {};
      map[slug] = {
        slug,
        progressPercent: Math.min(100, Math.max(0, Math.round(progressPercent))),
        lastScrollPosition: scrollPos,
        updatedAt: Date.now(),
      };
      localStorage.setItem(STORAGE_KEYS.READING_PROGRESS, JSON.stringify(map));
    } catch (e) {
      console.warn("[Personalization] Failed to save reading progress:", e);
    }
  },

  /**
   * Get reading progress for an article
   */
  getReadingProgress: (slug: string): ReadingProgress | null => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.READING_PROGRESS);
      if (!raw) return null;
      const map: Record<string, ReadingProgress> = JSON.parse(raw);
      return map[slug] || null;
    } catch {
      return null;
    }
  },
};
