/* eslint-env node */
import '@rushstack/eslint-patch/modern-module-resolution';

export default {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'typescript-eslint/parser',
    ecmaVersion: 'latest'
  },
  globals: {
    require: true,
    module: true,
  }
}
