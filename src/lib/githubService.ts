import { apiClient } from "./apiClient";

export interface GitHubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string;
  url: string;
  homepage: string;
  stars: number;
  forks: number;
  language: string;
  topics: string[];
  updatedAt: string;
}

const GITHUB_USERNAME = "gomugomucode";
const CACHE_KEY = `github_repos_cache_${GITHUB_USERNAME}`;
const CACHE_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

export const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: "Yatra",
    fullName: "gomugomucode/Yatra",
    description: "Decentralized Ride-Sharing Protocol built on Solana with Rust Anchor smart contracts.",
    url: "https://github.com/gomugomucode/Yatra",
    homepage: "https://yatraa-zeta.vercel.app/",
    stars: 14,
    forks: 4,
    language: "Rust",
    topics: ["solana", "web3", "rust", "anchor", "firebase"],
    updatedAt: "2026-02-15T09:00:00Z",
  },
  {
    id: 2,
    name: "LMS-Decoupled",
    fullName: "gomugomucode/LMS-Decoupled",
    description: "High-Throughput Decoupled E-Learning Platform with MySQL and Node.js Stateless APIs.",
    url: "https://github.com/gomugomucode/LMS-Decoupled",
    homepage: "",
    stars: 8,
    forks: 2,
    language: "TypeScript",
    topics: ["react", "nodejs", "mysql", "express", "architecture"],
    updatedAt: "2025-12-08T14:30:00Z",
  },
  {
    id: 3,
    name: "Solana-Loyalty-dApp",
    fullName: "gomugomucode/Solana-Loyalty-dApp",
    description: "Solana Web3 loyalty rewards protocol featuring automated smart contract distributions.",
    url: "https://github.com/gomugomucode/Solana-Loyalty-dApp",
    homepage: "https://solana-loyalty-d-app.vercel.app/",
    stars: 11,
    forks: 3,
    language: "Rust",
    topics: ["solana", "web3", "rust", "nextjs", "typescript"],
    updatedAt: "2025-10-20T10:00:00Z",
  },
  {
    id: 4,
    name: "Greenstar-Suppliers-App",
    fullName: "gomugomucode/Greenstar-Suppliers-App",
    description: "Next.js 16 product catalogue and order enquiry web application for entrance & home automation.",
    url: "https://github.com/gomugomucode/Greenstar-Suppliers-App",
    homepage: "https://greenstarsuppliers.com.np",
    stars: 9,
    forks: 1,
    language: "TypeScript",
    topics: ["nextjs", "prisma", "postgresql", "tailwind"],
    updatedAt: "2025-08-14T11:00:00Z",
  },
];

export const githubService = {
  /**
   * Fetch featured user repositories from GitHub API with cache & failover
   */
  getUserRepos: async (): Promise<GitHubRepo[]> => {
    // Check LocalStorage Cache
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { timestamp, data } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL_MS && Array.isArray(data) && data.length > 0) {
          return data;
        }
      }
    } catch (e) {
      console.warn("[GitHubService] Cache read error:", e);
    }

    try {
      const apiUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`;
      const data = await apiClient.get<Record<string, unknown>[]>(apiUrl, {
        timeoutMs: 6000,
        retries: 1,
      });

      if (Array.isArray(data) && data.length > 0) {
        const repos: GitHubRepo[] = data.map((item) => ({
          id: item.id as number,
          name: item.name as string,
          fullName: item.full_name as string,
          description: (item.description as string) || "Open source software project.",
          url: item.html_url as string,
          homepage: (item.homepage as string) || "",
          stars: (item.stargazers_count as number) || 0,
          forks: (item.forks_count as number) || 0,
          language: (item.language as string) || "TypeScript",
          topics: (item.topics as string[]) || ["engineering"],
          updatedAt: item.updated_at as string,
        }));

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ timestamp: Date.now(), data: repos })
        );
        return repos;
      }
    } catch (err) {
      console.warn("[GitHubService] Live API fetch failed, serving curated fallbacks:", err);
    }

    return FALLBACK_REPOS;
  },
};
