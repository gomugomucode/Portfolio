Layout System — Editorial-first Design Spec

Purpose
- Provide a page-level layout and spacing system to reframe the portfolio as an editorial, high-impact site. This spec targets Milestones 1–3: global grid/baseline, hero recomposition, and SectionShell normalization.

Global rules
- Baseline grid: 8px unit. Typographic baseline rhythm: 24px (3 × 8px).
- Section vertical spacing tokens:
  - tight: 32px (4 × 8px)
  - regular: 64px (8 × 8px)
  - spacious: 96–128px (12–16 × 8px)
- Container & grid:
  - 12-column layout, max content width: 1400px (matches existing max-w-7xl).
  - Content column (reading width) target: 680–760px on desktop.
  - Editorial split: left content column = 60–66% (approx columns 1–8 or 1–9), right meta rail = 34–40% (approx columns 10–12 or 10–12 depending on 12-col allocation).
- Measure:
  - Paragraph measure: 60–75 characters. Enforce with `max-width` on body text containers.
- Headline scale (modular): base font-size (body) = 16px
  - H1 ≈ 48–56px (3rem–3.5rem) desktop, 36–42px tablet, 28–32px mobile
  - H2 ≈ 28–34px
  - H3 ≈ 20–22px
  - Tight leading for H1 (1.02–1.1), relaxed for body (1.5)

Visual anchors & grammar
- Right rail: reserve for a single, subtle anchor per section (large numeral, monogram, vertical social links, or micro-metrics). Opacity 6–10% for numeral; color neutral (primary hue at low opacity).
- Section numerals: large, semi-transparent (approx 220–320px tall) aligned to the top of the section, anchored to the rail.
- Image treatments: consistent aspect ratio for project thumbnails (e.g., 16:10); crop centers; consistent fixed height per breakpoint.

Hero composition (desktop)
- Grid: hero spans full width; inside the 12-col grid:
  - Left editorial stack: columns 1–8 (content column)
  - Right rail: columns 9–12 (meta rail)
- Left stack order (top → bottom): status badge (mono label), `label` (name), H1 (two lines max), lead paragraph (max 60–75ch), CTA row (primary + secondary)
- CTAs: horizontally aligned, visually grouped, placed directly under the lead paragraph to keep the left column a single reading flow.
- Right rail composition:
  - Top: large translucent numeral (section index) or monogram
  - Middle: vertical micro-cred stack (location, availability, short metrics)
  - Bottom: vertical social icons (stacked)

Hero composition (mobile)
- Collapse to single column with left editorial stack first, then rail elements beneath or fixed to bottom-left as a floating element.
- Ensure primary CTA visible above the fold on 390–430px viewports.

SectionShell normalization
- Replace ad-hoc paddings with tokens: use `--section-vertical` variable depending on breakpoint.
- All section containers use the same left alignment and left margin as hero (create `--content-left` to unify horizontal rhythm).

Acceptance criteria (visual)
- When viewing hero on 1440px width, H1 is left aligned to the content column edge; right rail displays the large numeral at low opacity; top fold clearly shows H1 + CTA.
- Project rows align to a 12-col grid; image heights are identical across rows on desktop.
- Blog grid shows consistent thumbnail aspect and left column measure within 60–75 chars.

Tailwind / CSS guidance (examples)
- CSS variables to add in `:root` (design-only):
  --space-4: 32px; --space-8: 64px; --space-12: 96px;
  --content-max: 1400px; --content-width: 720px; --rail-width: 360px;
  --baseline: 8px; --typographic-baseline: 24px;

- Example utility classes (conceptual):
  .section-regular { padding-top: var(--space-8); padding-bottom: var(--space-8); }
  .content-column { max-width: var(--content-width); }
  .editorial-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; }
  .left-8 { grid-column: 1 / span 8; }
  .rail-4 { grid-column: 9 / span 4; }

Notes
- This is a layout-first approach—components remain unchanged in style; only placement/spacing and small layout utility classes will be added.
- The right rail is intentionally subtle—its purpose is to create visual tension and balance, not to add new content.

Deliverables for Milestones 1–3
- This spec (Layout-Spec.md) — created.
- Responsive hero mockup (HTML/CSS) demonstrating editorial split — created in `design/mockups/hero-mock.html`.
- SectionShell example adjustments (guidance above).

Next step
- Review this spec and the hero mockup. If approved, I will produce the layout CSS changes in the project (non-destructive: new utility classes and SectionShell updates) and re-run a visual critique.
