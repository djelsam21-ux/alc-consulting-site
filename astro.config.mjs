// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ Cambia esta URL por tu dominio definitivo antes de desplegar (sirve para canonical, hreflang y sitemap).
const SITE_URL = 'https://alc-consulting.es';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        new URL(page).pathname !== '/' &&
        !page.includes('/gracias/') &&
        !page.includes('/thank-you/') &&
        !page.includes('/merci/'),
    }),
  ],
});
