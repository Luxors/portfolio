// @ts-check
import { defineConfig } from 'astro/config';
import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  site: 'https://luxors.github.io',
  base: '/portfolio/fooseshoes',
  vite: {
    css: {
      transformer: 'lightningcss',
    },
  },
  integrations: [db()],
});
