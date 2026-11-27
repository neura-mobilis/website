// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real domain once purchased
export default defineConfig({
  site: 'https://neura-mobilis.com',
  trailingSlash: 'always',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },
  // Scripts must ship as files: the CSP (public/_headers) allows no inline script.
  vite: { build: { assetsInlineLimit: 0 } },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en' } },
    }),
  ],
});
