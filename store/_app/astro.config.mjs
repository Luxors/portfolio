// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://luxors.github.io',
  vite: {
    css: {
      transformer: 'lightningcss',
    },
  },
  image: {
    service: passthroughImageService(),
  },
  outDir: '../',
  build: {
    assets: 'assets',
  },
});
