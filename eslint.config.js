import antfu from '@antfu/eslint-config'
import pluginPrettier from 'eslint-plugin-prettier/recommended'

export default antfu(
  {
    javascript: true,
    typescript: true,
    type: true,
    vue: true,
    rules: {
      'e18e/prefer-static-regex': 'off',
    },
  },
  {
    files: ['**/*.vue'],
  },
  pluginPrettier,
)
