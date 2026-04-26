import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://flexrenta.ru',
  integrations: [sitemap()],
  output: 'static',
});
