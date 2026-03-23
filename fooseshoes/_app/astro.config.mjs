// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://luxors.github.io',
  base: '/portfolio/fooseshoes',
  vite: {
    css: {
      transformer: 'lightningcss',
    },
  },
  build: {
    assets: 'sources',
  },
});
