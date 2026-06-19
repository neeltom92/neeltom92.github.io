import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output (default). No adapter needed for Cloudflare Pages —
// CF Pages serves the built `dist/` directly. In the Pages project set:
//   build command:    npm run build
//   build output dir: dist
//   (if the repo root is the Hugo repo, set the Pages "root directory"
//    to `astro-site` so it builds from here)
export default defineConfig({
  site: 'https://codeworks.cloud',
  integrations: [sitemap()],
});
