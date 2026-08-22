import type { ElementType } from "react";
import { Laptop, Code2, Terminal, Sparkles } from "lucide-react";

export interface TechUseCategory {
  title: string;
  icon: ElementType;
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
