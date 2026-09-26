# Commit + PR: Codeworks consulting rework + SEO

## Context
Site reworked from job-seeker portfolio to Codeworks (AI infra & SRE consulting, Phoenix metro). SEO added. User asked to run locally before committing; dev server running at http://127.0.0.1:4321, all routes 200 (404 route 404). Resume page + PDF unchanged vs origin/main.

## Files
- Modified: src/layouts/Base.astro, src/layouts/Prose.astro, src/pages/{index,about,contact}.astro, src/styles/global.css
- New: src/pages/404.astro, public/llms.txt, public/images/og.png
- Exclude: .context/ (scratch, untracked)

## Steps
1. `git add` the files above only (not .context/).
2. Commit: `feat: rebrand site as Codeworks AI infra & SRE consultancy, add local SEO`
   (with Co-Authored-By trailer).
3. `git push -u origin HEAD`
4. `gh pr create --base main` with summary of rework + SEO + off-site checklist, ending with Claude Code attribution.

## Verification
- `npm run build` passes (6 pages, sitemap excludes 404).
- JSON-LD parses: ProfessionalService, Person, FAQPage, 4× Service.
- Merge to main triggers GitHub Pages deploy workflow; after deploy, submit sitemap in Search Console.
