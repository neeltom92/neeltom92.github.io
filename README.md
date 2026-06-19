# Neel Thomas Thelly — portfolio (Astro)

Personal portfolio / résumé site. Migrated from Hugo (hugo-coder) to **Astro**.
Pure static output — deploys to **Cloudflare Pages** with no adapter or runtime.

Design: a bespoke "status page" theme (console-porcelain surface, Times New Roman +
IBM Plex Mono, status-LED + uptime-bar motifs). 100% of the markup is owned here —
no theme submodule.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # -> dist/  (static site)
npm run preview    # serve the built dist/ locally
```

## Deploy — Cloudflare Pages

Connect the repo, then set:

| Setting           | Value                                  |
|-------------------|----------------------------------------|
| Build command     | `npm run build`                        |
| Build output dir  | `dist`                                 |
| Root directory    | `astro-site` (only if this lives in a subdir of the repo) |
| Node version      | 18+ (set `NODE_VERSION=20` env var if needed) |

`public/_headers` (PDF inline display) and `public/robots.txt` are copied into
`dist/` and honored by Cloudflare Pages automatically. `@astrojs/sitemap`
generates `sitemap-index.xml` at build time (`site` is set in `astro.config.mjs`).

## Structure

```
src/
  layouts/
    Base.astro      # <head>, SEO/OG/Twitter, JSON-LD, nav, footer
    Prose.astro     # wrapper for markdown pages (about / projects)
  pages/
    index.astro     # hero + status banner + components + uptime + skills + closing
    contact.astro
    resume.astro    # PDF viewer + off-duty gallery
    about.md
    projects.md
  styles/global.css # ported from the old Hugo custom.scss (+ base reset/nav)
public/             # resume.pdf, images/, favicons, _headers, robots.txt
```
