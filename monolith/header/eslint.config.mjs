import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: globals.browser } },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  // Override for CommonJS files (like under config directory webpack and path js files and postcss configs)
  {
    files: ['config/**/*.js', 'postcss.config.js'],
    languageOptions: { sourceType: 'script', globals: globals.node },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]);
