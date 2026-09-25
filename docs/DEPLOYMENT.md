# Deployment & Edge Hosting Architecture

Vercel Deployment Architecture, HTTP Security Headers, and Static Site Generation (SSG).

---

## 🚀 Deployment Pipeline

1. **GitHub Trigger**: Pushing to `main` branch triggers GitHub Actions CI workflow ([`.github/workflows/ci.yml`](../.github/workflows/ci.yml)).
2. **Pre-rendering Engine**:
   - `vite build` creates bundle in `dist/`.
   - `node scripts/generate-sitemap.mjs` outputs `sitemap.xml` for 23 routes.
   - `node scripts/prerender.mjs` outputs static pre-rendered HTML for all public routes.
3. **Vercel Edge Distribution**: Deploys `dist/` with HTTP security headers specified in [`vercel.json`](../vercel.json).
