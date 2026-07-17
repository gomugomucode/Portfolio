# Sprint 7 — Production Quality Refinement (Plan Tracker)

## Step 0 — Audit completion
- [x] Mobile nav: audited `src/components/Navbar.tsx`, `src/components/Layout.tsx`, `src/index.css`.
- [x] Global design tokens: audited `src/index.css`, UI primitives (Button/Badge/Card), and key sections.
- [x] Blog homepage + blog page: audited `src/components/BlogSection.tsx`, `src/pages/Blog.tsx`, `src/components/BlogCard.tsx`.
- [x] Projects: audited `src/components/ProjectsSection.tsx`, `src/pages/Projects.tsx`, `src/components/ProjectCard.tsx`.
- [x] SEO runtime + baseline: audited `src/components/SEO.tsx`, `index.html`, `public/robots.txt`, `public/manifest.json`.

## Step 1 — Mobile Navigation Fix (no visual redesign from scratch)
- [x] Refactor `src/components/Navbar.tsx` mobile menu into premium drawer:
  - [x] Solid background + correct backdrop blur
  - [x] Overlay/backdrop with high contrast
  - [x] Correct z-index & stacking
  - [x] Smooth open/close animation
  - [x] Close button
  - [x] Lock page scrolling while menu open
  - [x] Close on link click
  - [x] Close on outside click
  - [x] Active page highlighting (mobile)
  - [x] Keyboard accessibility (ESC close, focus management)


## Step 2 — Global Color Consistency Standardization
- [x] Normalize shared surfaces/borders/hover/shadows to ONE design system using tokens from `src/index.css`
- [x] Remove ad-hoc background/border/hover classes in Blog/Projects pages and align to UI primitives.


## Step 3 — Blog Homepage (exactly 3)
- [x] Enforce latest 3 on fresh + cached paths in `src/components/BlogSection.tsx`
- [x] Ensure “Show More Articles” button routes to `/blog`


## Step 4 — Blog Page knowledge hub
- [ ] Set initial 6 articles in `src/pages/Blog.tsx`
- [ ] Load more adds 3 without refresh
- [ ] Improve Medium parsing + thumbnail extraction with robust fallbacks
- [ ] Ensure cards render: image, category, published date, reading time, title, excerpt, “Read on Medium →”


## Step 5 — Projects Homepage
- [ ] Confirm exactly 3 featured projects and View All Projects link to `/projects`

## Step 6 — Projects Page premium filtering/search
- [ ] Add/ensure “Technology” filter
- [ ] Improve sorting semantics
- [ ] Ensure responsive layout + hover animations + image quality

## Step 7 — SEO finalization
- [ ] Update `public/robots.txt`
- [ ] Generate correct `public/sitemap.xml` with required routes
- [ ] Verify `src/components/SEO.tsx` (canonical, og/twitter, JSON-LD shape)
- [ ] Reconcile duplication with `index.html`

## Step 8 — Accessibility
- [ ] Validate heading hierarchy, ARIA, contrast, focus-visible, keyboard navigation, skip link
- [ ] Ensure Lighthouse accessibility target is met

## Step 9 — Performance
- [ ] Reduce CLS/LCP risk (stable skeletons, image sizes)
- [ ] Confirm image lazy loading + decode async
- [ ] Font loading improvements if any

## Step 10 — Verification
- [ ] `npm run build`
- [ ] Fix all TS/ESLint errors/warnings
- [ ] Verify no broken links/images/sitemap errors/SEO errors

