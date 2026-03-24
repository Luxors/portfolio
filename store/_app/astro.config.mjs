// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://luxors.github.io',
  base: '/portfolio/store',
  vite: {
    css: {
      transformer: 'lightningcss',
    },
  },
  outDir: '../',
  build: {
    assets: 'assets',
  },
});
