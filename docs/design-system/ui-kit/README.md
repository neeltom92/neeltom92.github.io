# Portfolio UI kit — codeworks.cloud

An interactive, high-fidelity recreation of Neel Thomas Thelly's portfolio site
("Terminal Noir"), composed from this design system's primitives.

## Run
Open `index.html`. It loads React + Babel, the compiled `_ds_bundle.js`, and the
global `styles.css`, then renders a single-page app with client-side routing.

## Screens
- **Home** (`Home.jsx`) — hero (name + role + `ReadoutPanel` service summary),
  Projects grid (`ProjectCard`), career **uptime history** (`TimelineItem`),
  Skills (`SkillCard`), and the closing CTA band.
- **Contact / Résumé / About** (`screens.jsx`) — contact channels in a
  `ReadoutPanel` (`Channel`), the résumé document frame + off-duty photo gallery,
  and the prose About page.

## Structure
- `data.js` — all content (`window.DATA`): projects, roles, skills, channels,
  gallery, about. Lifted verbatim from the live `index.astro` / `contact.astro` /
  `resume.astro`.
- `chrome.jsx` — `Atmosphere` (grain/scan/glow), sticky `Nav`, `Footer`.
- `index.html` — kit-only chrome CSS (nav/hero/footer/section furniture that
  isn't a reusable primitive) + the app shell & router.

Component primitives (`Button`, `Chip`, `StatusDot`, `Eyebrow`, `ReadoutPanel`,
`ProjectCard`, `TimelineItem`, `SkillCard`, `Channel`) come from
`window.<Namespace>` exposed by `_ds_bundle.js` — they are **not** re-implemented
here.

## Caveats
- The résumé PDF isn't bundled; that pane shows a placeholder.
- Nav links route within the SPA; external links (GitHub, LinkedIn, …) open out.
