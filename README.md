# Anupam Baral — Portfolio & Engineering Log

A premium, production-grade personal brand and technical portfolio built with React, Vite, TypeScript, and Tailwind CSS. 
Designed with a rigorous focus on typography, performance, accessibility, and zero-compromise developer aesthetics.

## 🚀 Quick Start

Ensure you have Node.js 18+ installed.

```bash
# Clone the repository
git clone https://github.com/gomugomucode/portfolio.git

# Navigate into the directory
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🛠️ Architecture & Tech Stack
- **Framework**: React 18 (Vite compiler)
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS (Custom design system, no preset components)
- **Routing**: React Router DOM (v6)
- **Icons**: Lucide React
- **Animations**: Framer Motion (Route transitions ready)
- **Forms**: Web3Forms (Serverless email routing)

## 📦 Production Deployment

This application is fully optimized for edge deployments on platforms like **Vercel**, **Netlify**, or **Cloudflare Pages**.

### Deployment Checklist
1. **Environment Variables**:
   - No `.env` secrets are strictly required for the core build. 
   - Ensure you replace the `access_key` in `src/components/ContactSection.tsx` if routing to a different Web3Forms inbox.
2. **Analytics Configuration**:
   - In `index.html`, uncomment the `Google Analytics 4` and `Microsoft Clarity` blocks and inject your unique Measurement IDs.
   - Add your `google-site-verification` tag to activate Search Console.
3. **Build Command**:
   ```bash
   npm run build
   ```
4. **Output Directory**: `dist/`

## 🔎 SEO & Discoverability
- **Dynamic Metadata**: The `<SEO />` component strictly types and injects unique `<title>`, `<meta name="description">`, canonical tags, and Open Graph parameters per route.
- **Structured Data (JSON-LD)**: `WebSite`, `Person`, `BreadcrumbList`, and `Article` schemas are natively generated for Google rich snippets.
- **Sitemap & Robots**: A statically compiled `sitemap.xml` maps all exact case study routes and is whitelisted in `robots.txt`.

## 🎨 Visual Identity System
- **Typography**: Inter (System UI) and JetBrains Mono (Code/Labels).
- **Colors**: Monochromatic high-contrast dark theme with a strict `border-border` and `bg-background` token hierarchy.
- **Assets**: The favicon and Open Graph assets (`logo.png`, `og-image.png`) are located in the `/public` directory.

## 🚧 Maintenance Notes & v2 Roadmap
- The Medium RSS feed is fetched client-side. If the Medium rate limit is hit, the application gracefully reverts to the hardcoded `FALLBACK_POSTS`.
- Future improvements should focus on **Framer Motion page transitions** (`AnimatePresence`) and implementing **AVIF** image formats to squeeze the last 2% of performance out of the Lighthouse score.

---
*Designed and engineered in Nepal by [Anupam Baral](https://anupambaral.com.np).*