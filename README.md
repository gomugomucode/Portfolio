# Anupam Baral — Engineering Portfolio & Technical Log

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-4.1-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![Build Status](https://img.shields.io/badge/SSG-Prerendered-success)](#-ssg--performance-pipeline)

A production-grade, highly performant personal website and technical portfolio built for software engineering, system design, and product leadership visibility. Engineered with a strict focus on typography, performance, accessibility, zero-compromise developer aesthetics, and quantifiable proof of technical work.

---

## ⚡ Key Features & Pages

- **Interactive Playground (`/playground`)**: Real-time interactive components, state machine visualizers, design token sandbox, and algorithmic simulations.
- **System Architecture & ADRs (`/architecture`)**: Interactive system design diagrams, architectural decision records, and trade-off matrices.
- **Case Studies & Deep Dives (`/projects`)**: Production engineering case studies detailing system constraints, metrics, architectural trade-offs, and verifiable code evidence.
- **Engineering Log / Blog (`/blog`)**: RSS integration with Medium, equipped with client-side caching, search, category filtering, and fallback mechanisms.
- **Developer Tooling & Setup (`/uses`)**: Complete hardware, operating system, terminal, editor, and developer tooling breakdown.
- **SSG Prerendering & Edge Optimized**: Custom post-build HTML prerendering pipeline for instantaneous FCP and LCP scores.
- **Automated SEO & JSON-LD**: Dynamically injected meta tags and Google Rich Snippet JSON-LD schemas (`WebSite`, `Person`, `BreadcrumbList`, `Article`, `TechArticle`).

---

## 🛠️ Architecture & Tech Stack

### Core Framework & Runtime
- **Framework**: [React 18.3](https://react.dev/) paired with [Vite 8](https://vitejs.dev/)
- **Language**: [TypeScript 5.8](https://www.typescriptlang.org/) (Strict mode enabled)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)

### UI & Styling System
- **Styling**: [Tailwind CSS v3.4](https://tailwindcss.com/) with `@tailwindcss/typography` & custom CSS token hierarchy (`src/index.css`)
- **UI Primitives**: Custom unstyled components backed by [Radix UI](https://www.radix-ui.com/) (`@radix-ui/react-*`)
- **Icons & Animations**: [Lucide React](https://lucide.dev/) icons & [Framer Motion](https://www.framer.com/motion/) micro-interactions
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) toast notifications

### State Management & Data Pipeline
- **Async State**: [TanStack Query v5](https://tanstack.com/query) for RSS feed caching and async state management
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) schema validation
- **Contact Handling**: Serverless email dispatch via [Web3Forms](https://web3forms.com/)

### Build, SSG & Optimization Pipeline
- **Sitemap Generation**: Custom ES script (`scripts/generate-sitemap.mjs`) generating `public/sitemap.xml`
- **SSG Prerenderer**: Post-build Node/JSDOM static site pre-renderer (`scripts/prerender.mjs`)
- **Image Converter**: Automated WebP asset optimization script (`scripts/convert-to-webp.mjs`) using Sharp

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm 9+ or bun 1.0+

### Setup & Run Locally

```bash
# Clone the repository
git clone https://github.com/gomugomucode/portfolio.git

# Navigate into the project folder
cd portfolio

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📜 Available NPM Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **`npm run dev`** | `vite` | Starts local development server with HMR. |
| **`npm run build`** | `vite build && node scripts/...` | Compiles production assets, generates `sitemap.xml`, and executes SSG prerendering. |
| **`npm run preview`** | `vite preview` | Previews the production build locally. |
| **`npm run test`** | `vitest run` | Runs unit & component tests once via Vitest. |
| **`npm run test:watch`** | `vitest` | Launches Vitest in interactive watch mode. |
| **`npm run lint`** | `eslint .` | Lints codebase using ESLint v9 rules. |

---

## 🧪 Testing & Quality Assurance

The codebase maintains strict verification and quality standards with unit, component, and security tests:

```bash
# Run all unit tests
npm run test
```

Current test suites cover:
- `security.test.ts`: Input sanitization, CSP rules, and security policies
- `playground.test.ts`: Interactive state machine and playground logic
- `evidenceMatrix.test.ts`: Verifiable technical evidence & metrics tracking
- `searchService.test.ts`: Client-side search and tag filtering routines
- `aiAssistant.test.ts`: Contextual prompt parsing and helper rules
- `caseStudies.test.ts`: Case study metadata & routing consistency

---

## 📁 Directory Layout

```
Portfolio/
├── .github/              # CI/CD workflows and GitHub actions
├── docs/                 # Extensive technical documentation (18+ guidebooks)
├── public/               # Static public assets (robots.txt, sitemap.xml, images)
├── scripts/              # Build, SSG prerendering & asset pipeline scripts
│   ├── convert-to-webp.mjs
│   ├── generate-sitemap.mjs
│   └── prerender.mjs
├── src/
│   ├── components/       # Reusable UI components & section layouts
│   ├── data/             # Case studies, evidence matrix & project schemas
│   ├── hooks/            # Custom React hooks (theme, media queries, RSS)
│   ├── lib/              # Utility helper functions & API clients
│   ├── pages/            # Top-level page routes (Home, Blog, Architecture, etc.)
│   └── test/             # Vitest unit test suites & setup
├── package.json          # Dependency declarations & build scripts
├── tailwind.config.ts    # Custom design system configuration
└── vite.config.ts        # Vite configuration & alias mappings
```

---

## 📚 Technical Documentation Index

Detailed architectural and operational documentation is available in the [`docs/`](file:///c:/Users/Anupam%20Baral/Desktop/Portfolio/docs) folder:

- [Architecture Overview](file:///c:/Users/Anupam%20Baral/Desktop/Portfolio/docs/Architecture.md) — System design and component relationship model.
- [Engineering Decisions](file:///c:/Users/Anupam%20Baral/Desktop/Portfolio/docs/ENGINEERING_DECISIONS.md) — Key architectural tradeoffs and technical rationale.
- [Design System](file:///c:/Users/Anupam%20Baral/Desktop/Portfolio/docs/DESIGN_SYSTEM.md) — Design tokens, color palette, typography rules.
- [SEO & Metadata](file:///c:/Users/Anupam%20Baral/Desktop/Portfolio/docs/SEO.md) — Structured data schemas (JSON-LD), canonical tags, meta strategy.
- [Performance Engineering](file:///c:/Users/Anupam%20Baral/Desktop/Portfolio/docs/Performance.md) — Lighthouse optimization, asset loading, SSG pre-rendering.
- [Security Model](file:///c:/Users/Anupam%20Baral/Desktop/Portfolio/docs/Security.md) — XSS prevention, headers, sanitization.
- [Expert Panel Audit](file:///c:/Users/Anupam%20Baral/Desktop/Portfolio/docs/EXPERT_PANEL_AUDIT.md) — Technical evaluation and evidence verification.
- [Hiring Funnel & Conversion](file:///c:/Users/Anupam%20Baral/Desktop/Portfolio/docs/HIRING_FUNNEL.md) — Design for recruiters and hiring managers.
- [Production Readiness](file:///c:/Users/Anupam%20Baral/Desktop/Portfolio/docs/PRODUCTION_READINESS.md) — Deployment checklist and verification matrices.

---

## 📦 Production Deployment

The project builds to standard static output in `dist/` with static HTML prerendered for every route:

1. **Environment Config**: Set `VITE_APP_URL` or substitute Web3Forms `access_key` in `src/components/ContactSection.tsx` if desired.
2. **Build Execution**:
   ```bash
   npm run build
   ```
3. **Deploy Output**: Deploy the generated `dist/` directory to **Vercel**, **Netlify**, **Cloudflare Pages**, or AWS S3/CloudFront.

---

*Designed and engineered with precision by [Anupam Baral](https://anupambaral.com.np).*