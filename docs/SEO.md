# Enterprise SEO & Indexing Infrastructure

Search Engine Optimization Guide, Schema.org Specs, and Sitemap/Prerender Scripts.

---

## 1. Structured Data Schemas (JSON-LD)

The portfolio implements full **Schema.org** JSON-LD metadata across all pages via `src/lib/schema.ts`:
- **`Person`**: Author identity (`Anupam Baral`), job title, social profiles, location (`Butwal, Nepal`).
- **`WebSite`**: Primary URL (`https://anupambaral.com.np`), search action capabilities.
- **`BreadcrumbList`**: Visual & crawler navigation hierarchy (`Home > Blog > Article`).
- **`BlogPosting`**: Technical article metadata (headline, excerpt, publish date, author, category tags).
- **`SoftwareSourceCode`**: Project showcase metadata (repository URL, programming languages).

---

## 2. Automated Build Pipeline Scripts

- **`scripts/generate-sitemap.mjs`**: Automatically writes `public/sitemap.xml` and `dist/sitemap.xml` covering all 19 static routes and dynamic blog preview URLs.
- **`scripts/prerender.mjs`**: Injects static `<title>`, `<meta name="description">`, OpenGraph, Twitter Cards, and JSON-LD scripts directly into `dist/[route]/index.html`.
