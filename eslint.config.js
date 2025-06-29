import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import mochaPlugin from "eslint-plugin-mocha";


export default defineConfig([
   mochaPlugin.configs.recommended,
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
]);

