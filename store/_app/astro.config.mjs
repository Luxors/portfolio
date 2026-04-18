// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import { loadEnv } from 'vite';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line no-undef
const { BASE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: 'https://luxors.github.io',
  base: BASE_URL,
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
