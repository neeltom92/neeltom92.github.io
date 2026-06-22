---
name: codeworks-design
description: Use this skill to generate well-branded interfaces and assets for the Codeworks "Terminal Noir" brand (Neel Thomas Thelly / codeworks.cloud) — production code or throwaway prototypes/mocks. Contains design guidelines, colors, type, fonts, assets, and a UI kit of components for prototyping an operator-console / status-page aesthetic.
user-invocable: true
---

Read `readme.md` in this skill first — it is the full design guide (content
fundamentals, visual foundations, iconography, manifest). Then explore the other
files as needed:

- `styles.css` + `tokens/` — the CSS custom properties and `@font-face`/font
  imports. Link `styles.css` to inherit the whole token system.
- `components/core/` — reusable React primitives (`Button`, `Chip`, `StatusDot`,
  `Eyebrow`, `ReadoutPanel`, `ProjectCard`, `TimelineItem`, `SkillCard`,
  `Channel`). Each has a `.prompt.md` with usage; `core.card.html` shows them all.
- `ui_kits/portfolio/` — a full interactive recreation of the portfolio site to
  copy patterns and composition from.
- `guidelines/` — foundation specimen cards (color, type, spacing, brand motifs).
- `assets/images/` — avatar, gallery photos, favicons.

**The brand in brief:** operator-console / terminal-noir. Deep ink canvas
(`#0a0e0d`) + faint dot grid + grain/scanline/glow atmosphere; one electric-lime
accent (`#c9f25b`) with amber (`#ffb454`) only for open-source signals; oversized
UPPERCASE **Bricolage Grotesque** display against small **JetBrains Mono** machine
data; a pulsing lime status LED as the signature mark; the whole thing framed as a
status page ("all systems operational"). No emoji; icons are unicode glyphs (`↗ ↓
→ ·`) and the `▮` block.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets
out and produce static HTML files for the user to view. If working on production
code, copy assets and follow the rules here to design natively in this brand.

If invoked without specific guidance, ask the user what they want to build, ask a
few focused questions, then act as an expert designer who outputs HTML artifacts
_or_ production code as the need dictates — always staying inside the Terminal
Noir system above.
