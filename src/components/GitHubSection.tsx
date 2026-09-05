import { useEffect, useState } from "react";
import { Github, Star, GitFork, ExternalLink, Code, Activity } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { SectionHeader, SectionShell } from "./layout/SectionShell";
import AnimatedSection from "./AnimatedSection";
import { trackSocialClick } from "@/lib/analytics";

export interface GitHubRepo {
  id: string;
  name: string;
  fullName: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  topics: string[];
}

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: "elearn",
    name: "elearn",
    fullName: "gomugomucode/elearn",
    description: "A decoupled, high-performance Learning Management System with sub-1.2s content load speeds and MySQL relational query indexing.",
    url: "https://github.com/gomugomucode/elearn",
    stars: 12,
    forks: 4,
    language: "TypeScript",
    topics: ["react", "nodejs", "express", "mysql", "decoupled-architecture"]
  },
  {
    id: "Yatra",
    name: "Yatra",
    fullName: "gomugomucode/Yatra",
    description: "Decentralized ride-sharing engine built on Solana with Rust smart programs, Firebase RTDB location signaling, and Web3.js signatures.",
    url: "https://github.com/gomugomucode/Yatra",
    stars: 18,
    forks: 6,
    language: "Rust",
    topics: ["solana", "rust", "anchor", "web3", "firebase"]
  },
  {
    id: "Solana-Loyalty-dApp",
    name: "Solana-Loyalty-dApp",
    fullName: "gomugomucode/Solana-Loyalty-dApp",
    description: "Solana customer loyalty dApp featuring automated smart program token minting and rewards distribution.",
    url: "https://github.com/gomugomucode/Solana-Loyalty-dApp",
    stars: 15,
    forks: 5,
    language: "TypeScript",
    topics: ["solana", "rust", "nextjs", "web3js", "spl-token"]
  },
  {
    id: "Portfolio",
    name: "Portfolio",
    fullName: "gomugomucode/Portfolio",
    description: "Production-grade portfolio web app built with React 19, TypeScript, Tailwind CSS, accessibility standards, and Schema.org JSON-LD.",
    url: "https://github.com/gomugomucode/Portfolio",
    stars: 8,
    forks: 2,
    language: "TypeScript",
    topics: ["react", "typescript", "tailwindcss", "seo", "vite"]
  }
];

const GITHUB_USERNAME = "gomugomucode";
const CACHE_KEY = `github_pinned_repos_${GITHUB_USERNAME}`;
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour

export const GitHubSection = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { timestamp, data } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION_MS && data && data.length > 0) {
            setRepos(data);
            return;
          }
        }

        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        if (!res.ok) throw new Error("GitHub API failed");

        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const parsed: GitHubRepo[] = data.slice(0, 4).map((repo: Record<string, unknown>) => ({
            id: String(repo.id),
            name: String(repo.name),
            fullName: String(repo.full_name),
            description: (repo.description as string) || "Open source repository.",
            url: String(repo.html_url),
            stars: Number(repo.stargazers_count || 0),
            forks: Number(repo.forks_count || 0),
            language: (repo.language as string) || "TypeScript",
            topics: (repo.topics as string[]) || ["open-source", "developer-tools"]
          }));

          localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: parsed }));
          setRepos(parsed);
        }
      } catch (err) {
        console.warn("Using fallback GitHub repository data due to API limits.", err);
        setRepos(FALLBACK_REPOS);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <SectionShell id="github">
      <AnimatedSection>
        <SectionHeader
          index="05 — Open Source"
          title="GitHub activity & open source contributions."
        />

        <div className="flex flex-col gap-8">
          {/* GitHub Header Profile Bar */}
          <div className="p-6 rounded-lg border border-border bg-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <Github className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">@gomugomucode</h3>
                  <Badge variant="outline" className="font-mono text-[10px] text-primary border-primary/30">
                    <Activity className="w-3 h-3 mr-1 inline-block" /> Active
                  </Badge>
                </div>
                <p className="text-body-sm text-muted-foreground">
                  Building open-source software tools, Solana Rust smart contracts, and TypeScript web applications.
                </p>
              </div>
            </div>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick("github", `https://github.com/${GITHUB_USERNAME}`)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-foreground text-background font-mono text-xs font-medium hover:bg-foreground/90 transition-colors shrink-0 interactive-focus"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              View Profile on GitHub
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Repositories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo) => (
              <Card
                key={repo.id}
                className="p-6 flex flex-col justify-between border-border hover:border-primary/40 transition-colors duration-300 gap-4"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-semibold text-base text-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <Code className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                      {repo.name}
                    </a>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`View ${repo.name} source code on GitHub`}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>

                  <p className="text-body-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {repo.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-3 border-t border-border/40">
                  <div className="flex flex-wrap gap-1.5">
                    {repo.topics.slice(0, 4).map((topic) => (
                      <span key={topic} className="px-2 py-0.5 rounded bg-muted/60 text-[10px] font-mono text-muted-foreground">
                        #{topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block" aria-hidden="true" />
                      {repo.language}
                    </span>

                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {loading && (
            <p className="text-xs font-mono text-muted-foreground text-center animate-pulse">
              Syncing latest GitHub open-source repositories...
            </p>
          )}
        </div>
      </AnimatedSection>
    </SectionShell>
  );
};

export default GitHubSection;
