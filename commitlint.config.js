import { defineConfig } from 'cz-git'

// https://cz-git.qbb.sh/
// https://commitlint.js.org/
export default defineConfig({
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 80],
    'body-max-length': [2, 'always', Infinity],
  },
})
