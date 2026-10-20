# Codebase Change Log (`change.md`)

This document records all modifications, file diffs, and architectural enhancements performed on the developer portfolio codebase.

---

## 1. Hero Section Modifications

### `src/components/HeroSection.tsx`
* **Changes**:
  - Removed the floating frosted-glass text overlay badge (`Full-Stack · AI Engineer / Web3 & Intelligent Architecture`) from the portrait card container.
  - Converted sub-card headings (`Full-Stack & AI Roles` and `Engineering Contracts`) from `<h3>` to semantic `<h2>` elements to maintain a strict, accessible document heading outline under `<h1>ANUPAM BARAL</h1>`.
* **Rationale**: Cleaned visual clutter on the hero portrait while ensuring screen readers and web crawlers encounter a logical heading hierarchy (`h1` -> `h2`).

---

## 2. Priority 0 (P0) — Critical Indexing & Entity Resolution

### `src/pages/NotFound.tsx`
* **Changes**:
  - Imported `SEO` component from `@/components/SEO`.
  - Added `<SEO title="Page Not Found (404) — Anupam Baral (@gomugomucode)" description="The requested page could not be found on anupambaral.com.np." noIndex={true} />`.
* **Rationale**: Fixed the Soft 404 trap where client-side navigation to broken URLs left the document `<head>` claiming to be the canonical indexable homepage.

### `src/pages/ProjectDetails.tsx`
* **Changes**:
  - In the `if (!project)` error fallback view, added `<SEO title="Project Case Study Not Found (404) — Anupam Baral (@gomugomucode)" description="The requested project case study could not be resolved." noIndex={true} />`.
* **Rationale**: Prevents search engines from indexing non-existent project slugs as valid indexable 200 OK pages.

### `src/pages/BlogArticlePreview.tsx`
* **Changes**:
  - Imported `getPersonSchema` from `@/lib/schema` and added `getPersonSchema()` into the `schemas` array.
  - Added `<SEO title="Article Preview Not Found (404) — Anupam Baral (@gomugomucode)" description="The requested engineering article preview could not be resolved." noIndex={true} />` in the `if (!article)` fallback branch.
  - Initialized `articles` state with `FALLBACK_ARTICLES` and `loading` to `false` for immediate synchronous metadata availability on initial render.
* **Rationale**: Resolves dangling `@id: "https://anupambaral.com.np/#person"` references for `author` and `publisher` required by Google's Rich Results validator. Prevents empty metadata scrapes by crawlers that do not execute client-side asynchronous fetch calls.

### `src/components/SEO.tsx`
* **Changes**:
  - Added support for the `keywords` prop: `{keywords && <meta name="keywords" content={keywords} />}`.
  - Conditionally omitted the canonical tag when `noIndex={true}`: `{!noIndex && <link rel="canonical" href={currentUrl} />}`.
  - Refactored multi-entity Schema.org JSON-LD output to wrap multiple schemas in a single unified `@graph`:
    ```tsx
    {schema && (
      <script type="application/ld+json" id="schema-jsonld" data-rh="true">
        {JSON.stringify(
          Array.isArray(schema)
            ? {
                "@context": "https://schema.org",
                "@graph": schema.map((s) => {
                  const { "@context": _, ...cleanSchema } = s;
                  return cleanSchema;
                }),
              }
            : { "@context": "https://schema.org", ...schema }
        )}
      </script>
    )}
    ```
* **Rationale**: Aligns JSON-LD output with Google Search Central guidelines (preferring `@graph` over bare JSON arrays) and prevents 404/noindex error pages from signaling canonical URLs.

---

## 3. Priority 1 (P1) — Prerender Content, OpenGraph & Core Web Vitals

### `scripts/prerender.mjs`
* **Changes**:
  - **Thin Content Replacement**: Replaced 1-sentence placeholder strings with complete, semantic HTML sections (including tech stacks, features, and descriptions) for routes:
    - `/ai` (AI & Machine Learning Engineering Portfolio)
    - `/open-source` (Open Source Software & Developer Hub)
    - `/uses` (Development Setup, Tooling & Tech Stack)
    - `/architecture` (Systems Architecture & Interactive Design)
    - `/playground` (Interactive Security & Algorithmic Playground)
    - `/privacy` (Privacy Policy)
    - `/terms` (Terms of Service)
    - `/contact` (Contact & Collaboration)
  - **Dynamic OpenGraph Meta**:
    - Replaced hardcoded `og:type="website"` with dynamic `og:type` (`"article"` for `/blog/` and `/projects/`, `"website"` for general pages).
    - Injected route-specific `og:image:alt` attributes based on the page title.
  - **Unified `@graph` Schema**: Structured multi-entity JSON-LD with `@graph` in the static HTML generation loop.
  - **Optimized Titles**: Updated prerender route metadata titles to match search-intent-optimized titles.
* **Rationale**: Eliminates Google's "Thin Content with Little or No Added Value" penalty on prerendered static pages and ensures social share cards render accurate rich previews without executing JavaScript.

### `index.html`
* **Changes**:
  - Removed `<link rel="preload" href="/mypic1.webp" as="image" type="image/webp" fetchpriority="high" />`.
* **Rationale**: Stops subpages (such as `/privacy`, `/terms`, `/blog`) from wasting mobile bandwidth and competing with critical CSS/JS chunks for an image that is only rendered on the homepage hero section.

---

## 4. Priority 2 (P2) — Layout Stability & Knowledge Graph

### `src/components/ProjectsSection.tsx`
* **Changes**:
  - Added explicit `width={1200}` and `height={675}` to `<img src={project.imageUrl} ... />`.
* **Rationale**: Enforces aspect ratio calculation by the browser before image download, eliminating Cumulative Layout Shift (CLS).

### `src/components/CertificatesSection.tsx`
* **Changes**:
  - Added explicit `width={600}` and `height={450}` to certificate thumbnail images.
  - Added explicit `width={1200}` and `height={850}` to the full-size certificate modal image.
* **Rationale**: Eliminates layout jumping when certificates are rendered or previewed.

### `src/lib/schema.ts`
* **Changes**:
  - In `getPersonSchema()`, expanded the `sameAs` array:
    ```ts
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.medium,
      siteConfig.social.twitter,
      siteConfig.social.youtube,
      siteConfig.social.googleMaps,
    ],
    ```
* **Rationale**: Consolidates entity signals for Google's Knowledge Graph by linking Twitter/X (`@gomugomucode`), YouTube, and the Google Maps business place profile.

---

## 5. Priority 3 (P3) — Search Intent Title Optimizations

Updated page titles across `src/pages/` and `scripts/prerender.mjs` to target keyword search intent:

| Page | Previous Title | Search-Intent Optimized Title |
| :--- | :--- | :--- |
| **Blog** | `Blog — Anupam Baral (@gomugomucode)` | `Engineering Blog & Technical Articles — Anupam Baral (@gomugomucode)` |
| **Projects** | `Projects — Anupam Baral (@gomugomucode)` | `Software Engineering Portfolio & Projects — Anupam Baral (@gomugomucode)` |
| **Uses** | `Uses — Anupam Baral (@gomugomucode)` | `Developer Setup, Tooling & Tech Stack (/uses) — Anupam Baral (@gomugomucode)` |
| **Architecture** | `Architecture — Anupam Baral (@gomugomucode)` | `Systems Architecture & Interactive Design — Anupam Baral (@gomugomucode)` |
| **AI Portfolio** | `AI Portfolio — Anupam Baral (@gomugomucode)` | `AI & Machine Learning Engineering Portfolio — Anupam Baral (@gomugomucode)` |
| **Open Source** | `Open Source — Anupam Baral (@gomugomucode)` | `Open Source Software & Developer Tools — Anupam Baral (@gomugomucode)` |
| **For Recruiters**| `For Recruiters — Anupam Baral (@gomugomucode)` | `Fast-Track Hiring Guide for Recruiters — Anupam Baral (@gomugomucode)` |
| **Playground** | `Playground — Anupam Baral (@gomugomucode)` | `Interactive Security & Algorithmic Playground — Anupam Baral (@gomugomucode)` |
| **Contact** | `Contact — Anupam Baral (@gomugomucode)` | `Contact & Hire Full-Stack & AI Engineer — Anupam Baral (@gomugomucode)` |
| **Now** | `Now — Anupam Baral (@gomugomucode)` | `What I'm Doing Now (/now) — Anupam Baral (@gomugomucode)` |
