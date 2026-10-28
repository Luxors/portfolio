import eslintPluginAstro from "eslint-plugin-astro";
import js from "@eslint/js";
import ts from "typescript-eslint";

export default [
  {
    ignores: [
      "node_modules/",
      "sourses/",
      "dist/",
      ".astro/",
      "public/",
      "postcss.config.cjs",
    ],
  },

  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
];
