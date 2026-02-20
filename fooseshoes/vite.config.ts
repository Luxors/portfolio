import { defineConfig } from 'vite';

import autoprefixer from 'autoprefixer';

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: true,
    cssMinify: 'lightningcss',
  },

  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@styles': '/src/assets/styles',
      '@img': '/src/assets/images',
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },

  plugins: [],
});
