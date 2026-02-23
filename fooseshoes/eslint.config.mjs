import eslintPluginAstro from 'eslint-plugin-astro';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import astroParser from 'astro-eslint-parser';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {},
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
      '.astro/',
      'public/',
      'postcss.config.cjs',
    ],
  },
];