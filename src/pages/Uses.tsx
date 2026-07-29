import { Laptop, Terminal, Cpu, Code2, Sparkles, Wrench } from "lucide-react";
import SEO from "@/components/SEO";
import { SectionHeader, SectionShell } from "@/components/layout/SectionShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/siteConfig";

export interface TechUseCategory {
  title: string;
  icon: typeof Laptop;
  description: string;
  items: { name: string; detail: string; tag?: string }[];
}

export const USES_CATEGORIES: TechUseCategory[] = [
  {
    title: "Hardware & Machine",
    icon: Laptop,
    description: "Daily development workstation and mobile engineering setup.",
    items: [
      { name: "Nitro V16 Laptop", detail: "AMD Ryzen 7 8845HS, 16GB DDR5 RAM, 512GB NVMe SSD, RTX 4050", tag: "Primary Workstation" },
      { name: "High-DPI Dual Monitors", detail: "Custom 4K dual display desktop layout for multi-file IDE workflows", tag: "Display" },
    ],
  },
  {
    title: "Editor & IDE Setup",
    icon: Code2,
    description: "Code editor environment, font, theme, and key extensions.",
    items: [
      { name: "VS Code & Antigravity IDE", detail: "Primary code editor customized for rapid TypeScript & Python development", tag: "Editor" },
      { name: "JetBrains Mono & Inter", detail: "Monospace font with ligatures for code, crisp Inter font for design systems", tag: "Typography" },
      { name: "Dark+ Modern Theme", detail: "Minimal high-contrast dark theme engineered to reduce eye strain", tag: "Theme" },
      { name: "Essential Extensions", detail: "ESLint, Prettier, Tailwind CSS IntelliSense, GitLens, Pylance", tag: "Tooling" },
    ],
  },
  {
    title: "Terminal & Shell Environment",
    icon: Terminal,
    description: "Command line shell, prompt configuration, and command utilities.",
    items: [
      { name: "Windows PowerShell 7", detail: "Configured with Starship prompt and custom Git aliases", tag: "Shell" },
      { name: "Node.js & npm / npx", detail: "Node 20 LTS runtime for Vite, pre-rendering scripts, and SSG pipeline", tag: "Runtime" },
      { name: "Git & GitHub CLI", detail: "Command line version control and PR management", tag: "Version Control" },
    ],
  },
  {
    title: "AI Workflows & Engineering Tools",
    icon: Sparkles,
    description: "AI assistants and developer productivity tools integrated into daily workflow.",
    items: [
      { name: "Google Gemini 1.5 Pro & Claude 3.5", detail: "Pair programming, architectural review, and doc synthesis", tag: "AI Pair Programmer" },
      { name: "ChatGPT Plus & GitHub Copilot", detail: "Code autocomplete, test suite generation, and SQL query tuning", tag: "AI Tooling" },
      { name: "Vercel & Postman", detail: "Deployment hosting, edge routing, and REST API testing", tag: "DevOps & API" },
    ],
  },
];

const Uses = () => {
  const url = `${siteConfig.url}/uses`;

  return (
    <SectionShell bordered={false}>
      <SEO
        title="Uses — Development Setup & Hardware | Anupam Baral"
        description="A curated look into the hardware, software, editor setup, terminal configuration, and AI engineering tools used daily by Anupam Baral."
        canonicalUrl={url}
      />

      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <header className="flex flex-col gap-4">
          <SectionHeader
            index="07 — Uses"
            title="Development setup & tooling."
            description="A detailed list of the hardware, code editor setup, terminal configuration, and AI tools I use daily."
          />
        </header>

        <div className="grid grid-cols-1 gap-8">
          {USES_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card key={cat.title} className="p-6 flex flex-col gap-6">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      {cat.title}
                    </h2>
                    <p className="text-xs text-muted-foreground">{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-4 rounded-md bg-muted/40 border border-border/60 flex flex-col gap-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-mono text-sm font-semibold text-foreground">
                          {item.name}
                        </h3>
                        {item.tag && (
                          <Badge variant="outline" className="font-mono text-[9px]">
                            {item.tag}
                          </Badge>
                        )}
                      </div>
                      <p className="text-body-sm text-muted-foreground leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
};

export default Uses;
