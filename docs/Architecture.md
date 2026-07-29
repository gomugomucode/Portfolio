# System Architecture Specification

Production Architecture & Engineering Design Document for `https://anupambaral.com.np`.

---

## 1. High-Level Architecture Diagram

```
 +-----------------------------------------------------------------------+
 |                            Vercel Edge CDN                            |
 |  (Global Anycast Network, HTTP/3, Brotli Compression, Security Headers) |
 +-----------------------------------+-----------------------------------+
                                     |
                                     v
 +-----------------------------------+-----------------------------------+
 |                   Static Prerendered Static HTML                      |
 |  (dist/index.html, dist/about, dist/projects, dist/blog/[slug], etc.) |
 +-----------------------------------+-----------------------------------+
                                     |
                                     v
 +-----------------------------------+-----------------------------------+
 |                  React 18 + Vite SPA Hydration                        |
 |   (Tailwind CSS, Lucide Icons, React Router v6, ErrorBoundary)       |
 +-----------------+---------------------------------+-------------------+
                   |                                 |
                   v                                 v
 +-----------------+---------------+   +-------------+-------------------+
 |    Medium RSS Parsing Engine    |   |    Resilient Form Processing    |
 | (DOMParser, AllOrigins, CORSProxy|   | (Zod Validation, Rate Limiter,    |
 | 6-Hr LocalStorage Cache)        |   | Web3Forms Direct API)             |
 +---------------------------------+   +-----------------------------------+
```

---

## 2. Component Hierarchy & Feature Boundaries

```
src/
├── components/          # Reusable UI & Layout Components
│   ├── layout/          # SectionShell, SectionHeader, Header, Footer
│   ├── ui/              # Primitive Shadcn/Radix UI Design Tokens
│   ├── BlogCard.tsx     # Normalized Medium Article Display Component
│   ├── BlogSection.tsx  # Homepage Writing Showcase (Latest 3 Articles)
│   ├── SEO.tsx          # Dynamic Head & JSON-LD Injection
│   └── ErrorBoundary.tsx# Top-level React Exception Catch Boundary
├── lib/                 # Core Business Logic & Data Engines
│   ├── apiClient.ts     # Resilient Fetch Wrapper (Retries, AbortSignal)
│   ├── mediumFeed.ts    # Medium RSS Fetching, XML DOMParser & Image Extractor
│   ├── security.ts      # Zod Form Schemas, Rate Limiter, XSS Escaping
│   ├── schema.ts        # Schema.org JSON-LD Builders
│   └── siteConfig.ts    # Single Source of Truth Metadata Configuration
├── pages/               # Route Views (Lazy-Loaded via Suspense)
└── test/                # Vitest Test Suites
```

---

## 3. Core Technical Decisions & Tradeoffs

1. **Static Pre-Rendering (SSG) via Post-Build Script**:
   - Rather than requiring heavy Node server runtimes, static routes and dynamic blog previews are pre-rendered at build time (`scripts/prerender.mjs`) into static HTML files (`dist/[route]/index.html`), delivering **0ms Time-to-First-Byte (TTFB)** on Edge CDNs.

2. **Client-Side Resilient Medium RSS Engine**:
   - Fetches live articles directly from Medium without server backends using a 4-tier proxy fallback pipeline and 6-hour browser caching.
