import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import svelteParser from "svelte-eslint-parser";
import svelteConfig from "./svelte.config.js";

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["**/*.svelte", "*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        svelteConfig,
        parser: tsParser,
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    ignores: [".svelte-kit/**"],
  },
];
