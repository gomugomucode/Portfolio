# Design System & Visual Architecture

Design System Tokens, Typography Scale, Spacing, and Motion Physics for `anupambaral.com.np`.

---

## 🎨 Color Tokens & Dark Mode Aesthetics
- **Primary**: Dynamic HSL Tailored Brand Token (`hsl(var(--primary))`).
- **Background**: High-contrast Dark Mode Surface (`hsl(var(--background))`).
- **Card Surfaces**: Subtle Card Elevation (`bg-card / border-border/60`).
- **Glassmorphism**: `backdrop-blur-md` and `bg-background/98` for mobile navigation drawers and modals.

---

## 🔤 Typography Hierarchy
- **Display Headings**: Font Display (`Syne / Outfit`).
- **Body Text**: Sans Serif (`Inter`).
- **Code & Metadata**: Monospace (`JetBrains Mono`).

---

## ⚡ Motion & Physics Rules
- Built with **Framer Motion**:
  - `transition: { duration: 0.2, ease: "easeOut" }`
  - Reduced Motion fallback enabled via `useReducedMotion()`.
