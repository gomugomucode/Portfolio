# Web Performance & Core Web Vitals Optimization

Optimization Strategies, Asset Management, and Core Web Vitals Threshold Specifications.

---

## 1. Core Web Vitals Metric Targets

| Metric | Target | Description |
| :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | `< 1.2s` | Fast visual hero loading via `<link rel="preload">` WebP images and font preconnects. |
| **CLS (Cumulative Layout Shift)** | `0.00` | Zero layout shifts via explicit `width` and `height` attributes on all image elements. |
| **INP (Interaction to Next Paint)**| `< 50ms` | Minimal main-thread blocking; deferred analytics scripts. |
| **FID (First Input Delay)** | `< 10ms` | Fast event listener registration. |

---

## 2. Code Splitting & Chunk Optimization

- **Route Splitting**: All pages lazy-loaded via React `lazy()` and `Suspense`.
- **Pre-rendering**: SSG script generates static HTML files (`dist/[route]/index.html`), allowing instantaneous initial paint.
