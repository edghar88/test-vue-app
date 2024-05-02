// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    ignores: ['**/*.cjs', '**.d.ts', '**.config.*'],
  },
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    }
  },
  {
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: ['.vue']
      },
    },
  },
];
