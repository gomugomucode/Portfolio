Token Implementation Plan — Design Foundation

Purpose
- Provide exact CSS variable names, Tailwind config mappings, and a safe migration plan to implement the approved Design Foundation without changing component markup.
- Deliverables: `:root` variable block to insert into `src/index.css`, `tailwind.config.ts` color/spacing/font mappings, migration steps, testing checklist.

1) CSS Variables (to add/replace in `:root` in `src/index.css`)

/* Core neutrals */
--bg-900: #0f0f0f;
--surface-800: #151515;
--surface-700: #1b1b1b;
--card: #161616;

/* Text */
--text-primary: #f5f2ec; /* base foreground */
--text-secondary: #d7d2c8;
--text-muted: #9e988f;

/* Accent */
--accent-500: #d8c3a5;
--accent-600: #c2a985;
--accent-100: rgba(216,195,165,0.06);

/* Interaction states */
--hover: rgba(245,242,236,0.04);
--active: rgba(245,242,236,0.06);
--selection: rgba(216,195,165,0.16);
--focus: rgba(216,195,165,0.28);

/* Borders & code */
--border: rgba(245,242,236,0.10);
--code-bg: #0b0b0b;
--code-border: rgba(255,255,255,0.03);

/* Semantic */
--success: #8ad38a;
--warning: #f7c46c;
--error: #e07a6a;

/* Spacing tokens */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
--space-32: 128px;

/* Radii */
--r-sm: 6px;
--r-md: 10px;
--r-lg: 16px;

/* Elevation (examples) */
--e-1: 0 1px 6px rgba(0,0,0,0.22), 0 0 0 1px rgba(245,242,236,0.02);
--e-2: 0 6px 18px rgba(0,0,0,0.28), 0 0 0 1px rgba(245,242,236,0.03);
--e-3: 0 20px 40px rgba(0,0,0,0.32);

/* Grid */
--content-max: 1400px;
--content-width: 720px;
--rail-width: 320px;

2) Tailwind config mapping (suggested edits to `tailwind.config.ts`)

// extend: {
//   colors: {
//     background: 'var(--bg-900)',
//     surface: 'var(--surface-800)',
//     elevated: 'var(--surface-700)',
//     card: 'var(--card)',
//     foreground: 'var(--text-primary)',
//     muted: 'var(--text-muted)',
//     subtle: { foreground: 'var(--text-secondary)' },
//     primary: { DEFAULT: 'var(--accent-500)', 600: 'var(--accent-600)', 100: 'var(--accent-100)' },
//     success: 'var(--success)',
//     warning: 'var(--warning)',
//     destructive: 'var(--error)',
//     border: 'var(--border)',
//   },
//   spacing: {
//     1: '4px', 2: '8px', 3: '12px', 4: '16px', 6: '24px', 8: '32px', 12: '48px', 16: '64px', 24: '96px', 32: '128px'
//   },
//   borderRadius: { sm: 'var(--r-sm)', md: 'var(--r-md)', lg: 'var(--r-lg)' },
// }

Font families (suggested)
// fontFamily: {
//   sans: ['Inter', 'Instrument Sans', 'system-ui', 'sans-serif'],
//   display: ['Playfair Display', 'serif'],
//   mono: ['JetBrains Mono', 'monospace'],
// }

3) Typography tokens (to export as CSS variables or tailwind fontSizes)

--font-base: 16px;
--fs-0: 12px; /* label */
--fs-1: 14px;
--fs-2: 16px; /* body */
--fs-3: 18px; /* lead */
--fs-4: 20px; /* h3 */
--fs-5: 28px; /* h2 */
--fs-6: 42px; /* h1 tablet */
--fs-7: 56px; /* h1 desktop */

Line-height tokens
--lh-tight: 1.05;
--lh-heading: 1.15;
--lh-body: 1.5;

4) Implementation steps (safe migration)

Step 0 — Prep branch & backups
- Create branch `design/tokens-phase0` and ensure tests/build pass before changes.

Step 1 — Add variables
- Add the `:root` block (from section 1) to the top of `src/index.css` inside `@layer base` replacing current `:root` values. Keep the previous values commented for quick rollback.

Step 2 — Tailwind mapping
- Update `tailwind.config.ts` extend map to reference new CSS variables (example mapping provided above). Do not remove old color tokens yet; refer new names as aliases.

Step 3 — Typography tokens
- Define CSS variables for font sizes and line-heights in `:root`. Update `@layer components` classes (`heading-display`, `text-body`, etc.) to use those variables (e.g., `font-size: var(--fs-7)` etc.). Keep previous class names for compatibility.

Step 4 — Spacing tokens
- Add spacing tokens to `:root` and update the `section-shell` helper to use `--space-16` etc. Do not mass-replace spacing classes; adjust `section-shell` and any global spacing utilities first.

Step 5 — Border & radius
- Replace `--border` and `--radius` usages in `:root` with new tokens. Update components that depend on radius classes (`borderRadius` mapping) if needed.

Step 6 — Shadows
- Add elevation tokens and incrementally apply `--e-2` to `.card` and selected elevated components. Keep minimal changes to avoid visual regressions.

Step 7 — Icons & motion
- Record token guidance in `design/` folder (done). No immediate code changes unless you want to swap icon set stroke weight.

Step 8 — QA & rollback plan
- Run visual smoke tests in dev server. Compare before/after snapshots for Hero, Projects list, Blog list.
- If issues found, revert specific token edits or restore commented values and iterate.

5) Testing checklist
- Visual sanity: open homepage, ensure H1 is readable and background colors apply; check nav contrast.
- Accessibility: test text contrast for body and small labels using Lighthouse/axe (WCAG AA targets).
- Components: both `Button` variants, `Badge`, `Card` should visually match expectations; inspect focus ring.
- Cross-browser: check Chrome/FF/Safari and mobile viewports.

6) Rollout plan (phased)
- Phase A (low risk): Add CSS variables and tailwind mapping, update `section-shell` and global tokens. Verify site visually.
- Phase B: Update typographic classes (`heading-display`, `text-body`) to use new tokens in a controlled set (Hero + SectionHeader). Verify.
- Phase C: Apply border/radius/shadow tokens to cards and inputs.
- Phase D: Full site sweep to ensure spacing and colors unify; cleanup old tokens.

7) Developer notes & conventions
- Use CSS variables for color values to allow runtime theming.
- Use tailwind `theme.extend` to expose tokens to utility classes where necessary.
- Keep original tokens commented for quick rollback/review.

8) File locations to edit (suggested order)
- `src/index.css` — add `:root` variables and typography tokens
- `tailwind.config.ts` — add mapping to colors, spacing, fonts
- `src/components/ui/*` — small updates for button paddings and radii after tokens are added (low-risk)

9) Deliverables
- This `Token-Implementation-Plan.md` in `design/`
- Optional: perform Step 1–2 in a branch upon your approval to implement tokens directly.

Next step
- Do you want me to implement Step 1–2 (add `:root` variables and update `tailwind.config.ts`) in a feature branch now? If yes I will commit small, reversible changes and push for your review.