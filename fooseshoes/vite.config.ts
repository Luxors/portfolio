import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
  },

  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@styles': '/src/assets/styles',
      '@img': '/src/assets/images',
    },
  },

  plugins: [],
});
