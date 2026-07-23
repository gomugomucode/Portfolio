import { Link } from "react-router-dom";
import { ArrowLeft, Github, Code, Trophy, GitPullRequest, GitMerge, ExternalLink, Star, GitFork, ShieldCheck } from "lucide-react";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/SectionShell";
import { siteConfig } from "@/lib/siteConfig";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";
import { trackSocialClick } from "@/lib/analytics";

export interface OpenSourceRepo {
  id: string;
  name: string;
  fullName: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  license: string;
  techStack: string[];
  role: string;
}

const openSourceRepos: OpenSourceRepo[] = [
  {
    id: "elearn",
    name: "elearn",
    fullName: "gomugomucode/elearn",
    description: "Decoupled Learning Management System separating a static React client from a stateless Node.js/Express REST API and MySQL persistence store.",
    url: "https://github.com/gomugomucode/elearn",
    stars: 12,
    forks: 4,
    license: "MIT",
    techStack: ["React", "Node.js", "Express", "MySQL", "Vercel"],
    role: "Creator & Maintainer"
  },
  {
    id: "Yatra",
    name: "Yatra",
    fullName: "gomugomucode/Yatra",
    description: "Decentralized ride-sharing engine built on Solana with Rust smart programs, Firebase RTDB signaling, and Web3.js signatures.",
    url: "https://github.com/gomugomucode/Yatra",
    stars: 18,
    forks: 6,
    license: "MIT",
    techStack: ["Solana", "Rust", "Next.js", "Firebase", "Web3.js"],
    role: "Core Hackathon Architect"
  },
  {
    id: "Solana-Loyalty-dApp",
    name: "Solana-Loyalty-dApp",
    fullName: "gomugomucode/Solana-Loyalty-dApp",
    description: "Solana customer loyalty dApp featuring automated smart program SPL token minting and rewards distribution.",
    url: "https://github.com/gomugomucode/Solana-Loyalty-dApp",
    stars: 15,
    forks: 5,
    license: "MIT",
    techStack: ["Solana", "Rust", "Next.js", "Web3.js", "Tailwind CSS"],
    role: "Creator & Maintainer"
  },
  {
    id: "Portfolio",
    name: "Portfolio",
    fullName: "gomugomucode/Portfolio",
    description: "Production-grade developer portfolio engine built with React 19, TypeScript, Tailwind CSS, WCAG 2.1 AA accessibility, and Schema.org JSON-LD.",
    url: "https://github.com/gomugomucode/Portfolio",
    stars: 8,
    forks: 2,
    license: "MIT",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "SEO"],
    role: "Creator & Maintainer"
  }
];

const OpenSourceHub = () => {
  const url = `${siteConfig.url}/open-source`;
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Open Source", item: "/open-source" },
  ];

  const schemas = [
    getWebPageSchema(
      "Open Source Repositories & Community Hub | Anupam Baral",
      "Explore open-source repositories, developer tools, Rust Solana programs, and contributions by Anupam Baral (@gomugomucode).",
      url,
      breadcrumbs
    ),
    getBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <SectionShell bordered={false}>
      <SEO
        title="Open Source Repositories & Community Hub | Anupam Baral"
        description="Explore open-source software repositories, developer tools, Solana Rust programs, and GitHub contributions by Anupam Baral (@gomugomucode)."
        keywords="Anupam Baral Open Source, gomugomucode GitHub, Open Source Developer Nepal, Solana Rust Programs, React Developer Tools"
        canonicalUrl={url}
        schema={schemas}
      />

      {/* Header & Back Link */}
      <div className="flex flex-col gap-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors w-fit">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Portfolio
        </Link>

        <div>
          <span className="label-mono flex items-center gap-1.5 text-primary mb-3">
            <Code className="w-4 h-4" aria-hidden="true" /> Open Source & Community
          </span>
          <h1 className="heading-display">Building in public.</h1>
          <p className="text-body max-w-2xl mt-4">
            A central index of open-source software repositories, Solana smart program experiments, developer tools, and contributions maintained by Anupam Baral (<a href="https://github.com/gomugomucode" target="_blank" rel="noopener noreferrer" className="text-primary underline">@gomugomucode</a>).
          </p>
        </div>

        {/* GitHub Stats Bar */}
        <Card className="p-6 bg-gradient-to-r from-primary/[0.08] to-transparent border-primary/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase tracking-wider">
              <Github className="w-4 h-4" aria-hidden="true" />
              GitHub Profile: @gomugomucode
            </div>
            <p className="text-body-sm text-foreground/90 font-medium mt-0.5">
              100% Open Source MIT Licensed Repositories • Active Contributor
            </p>
          </div>

          <a
            href="https://github.com/gomugomucode"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocialClick("github", "https://github.com/gomugomucode")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-foreground text-background font-mono text-xs font-medium hover:bg-foreground/90 transition-colors shrink-0 interactive-focus"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            Follow @gomugomucode on GitHub
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </Card>
      </div>

      {/* Main Grid Content */}
      <div className="flex flex-col gap-12">
        {/* Main Repositories Grid */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" aria-hidden="true" />
              Maintained Open Source Repositories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openSourceRepos.map((repo) => (
              <Card key={repo.id} className="p-6 flex flex-col justify-between border-border bg-card/40 hover:border-primary/40 transition-colors gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-semibold text-lg text-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <Code className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                      {repo.name}
                    </a>
                    <Badge variant="outline" className="font-mono text-[10px] text-primary border-primary/30">
                      {repo.role}
                    </Badge>
                  </div>

                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-3 border-t border-border/40">
                  <div className="flex flex-wrap gap-1.5">
                    {repo.techStack.map((tech) => (
                      <Badge key={tech} variant="default" className="font-mono text-[10px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                      License: {repo.license}
                    </span>

                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                        {repo.stars} Stars
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
                        {repo.forks} Forks
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Hackathons & Community Contributions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <Card className="p-6 flex flex-col gap-4 border-border bg-card/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                <Trophy className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Hackathon Entry</span>
                <h3 className="font-display text-base font-semibold text-foreground">Solana Global Hackathon</h3>
              </div>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Architected and submitted <strong>Yatra</strong>, a decentralized ride-sharing protocol engine written in Rust smart programs with sub-400ms transaction finality.
            </p>
          </Card>

          <Card className="p-6 flex flex-col gap-4 border-border bg-card/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <GitPullRequest className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Community Involvement</span>
                <h3 className="font-display text-base font-semibold text-foreground">Pull Requests & Code Reviews</h3>
              </div>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Actively participating in open-source developer discussions, submitting pull requests, and providing technical feedback on Web3 & React developer tools.
            </p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-6">
          <a
            href="https://github.com/gomugomucode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="default" className="gap-2">
              <GitMerge className="w-4 h-4" aria-hidden="true" />
              Collaborate on Open Source GitHub Repositories
            </Button>
          </a>
        </div>
      </div>
    </SectionShell>
  );
};

export default OpenSourceHub;
