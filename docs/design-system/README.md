# Codeworks — "Terminal Noir" Design System

A design system distilled from the personal portfolio of **Neel Thomas Thelly**, a
Senior DevOps / SRE / AIOps engineer (codeworks.cloud). The brand frames an
engineer's career as a **status page**: a deep operator-console canvas, a single
electric-lime phosphor accent, oversized editorial display type, and machine
metadata everywhere — uptime, live LEDs, "all systems operational."

> **Aesthetic in one line:** operator-console / terminal-noir — deep ink canvas,
> oversized Bricolage Grotesque display, JetBrains Mono machine data, one electric
> lime accent, grain + scanline + glow atmosphere, cinematic staggered reveals.

## Sources

This system was built by reading the live portfolio source (the source of truth —
read it for deeper fidelity):

- **GitHub:** https://github.com/neeltom92/neeltom92.github.io — Astro static site
  (migrated from Hugo). `src/styles/global.css` is the canonical stylesheet
  ("v2 Terminal Noir"); `src/pages/*.astro` + `src/layouts/Base.astro` are the
  page structures replicated in the Portfolio UI kit.
- Related work referenced in content: https://github.com/neeltom92/claude-code-observability
- Explore the repo further to recreate views with higher fidelity.

> ⚠️ **Note on the live README:** the repo's top-level `README.md` prose still
> describes an *older* "console-porcelain, Times New Roman" theme. That is stale —
> `global.css` (Terminal Noir) is what actually renders, and is what this system
> encodes.

---

## Content fundamentals

How the brand writes. The voice is **a calm senior operator** — precise,
lowercase-machine for labels, confident-editorial for headlines. It reframes a
résumé in the language of an SRE status page without ever becoming cute.

- **Person & address:** First person ("I keep large-scale systems reliable"),
  speaking directly to a hiring reader. Warm but spare.
- **Two registers running in parallel:**
  - **Machine voice** (mono, lowercase, `·`-separated): eyebrows, nav, status
    lines, metadata. e.g. *"all systems operational"*, *"open to senior SRE ·
    platform · AI-infra roles"*, *"Mesa, AZ · remote · 2015 → now"*,
    *"uptime history · career log"*.
  - **Editorial voice** (display, often UPPERCASE): names and headlines.
    e.g. *"A decade keeping systems up"*, *"Reliable systems — now with AI in the
    loop."*
- **The status-page conceit is the throughline.** Projects are "components,"
  jobs are an "uptime history," skills are "monitored systems · toolchain," the
  closing CTA sits in a band, and *"▮ operational — every role shipped and stayed
  up."* This metaphor is the brand. Use it; don't dilute it.
- **Casing:** Section eyebrows are Title/sentence case content rendered UPPERCASE
  by CSS with wide tracking. Headlines are UPPERCASE display. Body is sentence
  case. Nav + small labels are lowercase.
- **Numbers carry weight, sparingly:** *10+ years*, *100M+ users*, *6TB+/day*,
  *$336K/yr*, *$210M neobank*, *125+ Kubernetes services*. Concrete scale, never
  vanity metrics.
- **Punctuation:** the middot `·` is the brand separator. Arrows are written into
  copy: `↗` (external/outbound), `↓` (download), `→` (flow). The `//` comment
  prefix appears in the footer tagline (*"// reliable systems — now with AI in the
  loop"*).
- **No emoji.** Iconography is unicode glyphs and the `▮` block only (see below).
- **Tone test:** would a composed on-call engineer write it on a status page?
  If it's hypey or padded, cut it.

---

## Visual foundations

**Color.** A deep ink canvas with a faint teal cast — `--bg #0a0e0d`, panels
`--bg-elev #111716`, wells `--bg-sunk #0c1110`. Text runs near-white `--ink
#eef3f0` → `--ink-2` → `--muted` → `--faint`. There is exactly **one accent**:
electric-lime phosphor `--accent #c9f25b` (brighter `--accent-ink #d8ff72` for
links/hover, dim `--accent-deep #9cc23f` for eyebrows). **Amber `--amber #ffb454`**
is the *only* secondary signal, reserved for the open-source marker. Borders are
translucent white (`rgba(238,243,240,0.09 / 0.17)`), never solid grey. Never
introduce a second hue; never use lime and amber as fills on the same element.

**Type.** Two families. **Bricolage Grotesque** (display/body) — set oversized,
`font-weight: 800`, tight `letter-spacing: -0.025em → -0.04em`, line-height
`~0.92`, frequently UPPERCASE for hero/section/closing titles. **JetBrains Mono**
(machine) — eyebrows, nav, status, chips, panel rows, captions; wide tracking
(`0.26em` eyebrows), often lowercase/uppercase. The tension between huge serif-ish
display and small mono data IS the typographic identity.

**Backgrounds & atmosphere.** Every page is the deep canvas + a faint **radial
dot-grid** (`26px`). Over it sit three fixed overlays: **`.fx-grain`** (4% fractal
noise, `overlay` blend), **`.fx-scan`** (subtle horizontal scanlines), and
**`.fx-glow`** (lime + teal radial corner glows). Content sits above on
`z-index: 2`. No photographic hero backgrounds; imagery is confined to the résumé
gallery.

**Motion.** Signature easing `cubic-bezier(0.2, 0.7, 0.2, 1)`. Hero elements
**rise** in once (opacity + 18px translate). Scroll sections **reveal** via
IntersectionObserver with staggered `data-d` delays (`.08s` steps). Live LED dots
**pulse** a lime box-shadow halo (2.6s). All motion is gated behind
`prefers-reduced-motion`. No bounce, no infinite decorative loops beyond the LED.

**Hover / press.** Buttons lift `translateY(-2px)`; ghost buttons wash
`--accent-dim` + lime border + lime text; the primary lime button brightens and
gains a lime glow (`--shadow-cta`). Cards lift `translateY(-4px)` with a deep
black drop shadow (`--shadow-card-hover`) and a **lime bar wipes down the left
edge** (`scaleY` 0→1). Contact rows wash faint and **indent** on hover. Links go
`--accent-ink`. No explicit press/active state beyond the hover transform.

**Borders, radius, shadow.** Hairline translucent-white borders do most of the
structural work; shadows are sparse. Radii: chips `6px`, buttons `8px`, skill
cards `12px`, panels & project cards `14px`, nav CTA pill `999px`, dots `50%`.
Two shadows only: the deep-black card-hover lift and the lime CTA glow; plus the
lime dot halo.

**Layout.** `--maxw 78rem`, fluid `--pad clamp(1.15rem, 4.5vw, 3rem)`. Asymmetric
grids: hero is `1fr / 19rem` (content + readout panel); projects & skills are
2-col (a lone final project spans full width); résumé is `1.55fr / 1fr`. Sticky
blurred nav; generous `clamp(3.5rem, 9vw, 7rem)` section padding separated by
hairlines.

**Cards.** Flat `--bg-elev` rectangles, 14px radius, hairline border, **no shadow
at rest** — they lift, glow black, and grow the lime left-edge bar on hover. The
console **ReadoutPanel** is the one gradient surface
(`linear-gradient(180deg, --bg-elev, --bg-sunk)`) with a labelled header.

---

## Iconography

The brand is **deliberately icon-light** — no icon font, no SVG icon set, no
emoji. Its "icons" are:

- **Unicode glyphs in copy:** `↗` external/outbound link, `↓` download, `→`
  progression/flow, `·` separator.
- **The `▮` block** — a lime half-block prefixing skill-card headers (a phosphor
  "byte"/cursor mark).
- **The status LED** — a small lime (or amber) dot with a glowing/pulsing
  box-shadow. This is the single most important brand mark; it stands in for a
  logo and signals "live / operational." See `StatusDot`.
- **Wordmark:** `neel.thelly` set in JetBrains Mono with a leading live LED;
  footer uses the full `NEEL THOMAS THELLY` in heavy uppercase display.
- **Favicons** are in `assets/images/` (`favicon-16/32`, `apple-touch-icon`).

If a build genuinely needs line icons, add a CDN set with a thin, monoline stroke
(e.g. Lucide) so it reads as machine UI — and flag it as an addition, since the
source uses none.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link; `@import`s every token file.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `SKILL.md` — Agent-Skill manifest (portable to Claude Code).
- `_ds_bundle.js`, `_ds_manifest.json` — **auto-generated**, do not edit.

**Components** — `components/core/` (namespace shown by `check_design_system`)
- `Button` · `Chip` · `StatusDot` · `Eyebrow` · `ReadoutPanel` (+ `PanelRow`) ·
  `ProjectCard` · `TimelineItem` · `SkillCard` · `Channel`
- Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`; the directory's
  `core.card.html` is the showcase.

**Guidelines (foundation cards)** — `guidelines/`
- Colors: Canvas & Surfaces · Accent — Electric Lime · Text & Lines
- Type: Display — Bricolage Grotesque · Machine — JetBrains Mono · Type Scale
- Spacing: Spacing Scale · Radii & Lift
- Brand: Live LED · Atmosphere · Career = Uptime Log

**UI kit** — `ui_kits/portfolio/`
- `index.html` — interactive recreation (Home ▸ Contact ▸ Résumé ▸ About) with
  the real hero, work grid, career timeline, skills, closing band, nav & footer.
- `data.js`, `chrome.jsx`, `Home.jsx`, `screens.jsx`, `README.md`.

**Assets** — `assets/images/`
- `avatar.jpg`, `N90.jpg`, gallery (`desk`, `shuttle`, `astronaut`, `hooverdam`,
  `grandcanyon`), favicons, apple-touch-icon.

---

## Substitutions & caveats

- **Fonts** load from **Google Fonts** (Bricolage Grotesque + JetBrains Mono) via
  `@import` in `tokens/fonts.css` — same source as the live site. To self-host,
  download both and add local `@font-face` rules there.
- **Résumé PDF** is not bundled; the UI kit's résumé view shows a labelled
  placeholder where the live site embeds the PDF.
