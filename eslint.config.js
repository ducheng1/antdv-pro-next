import antfu from '@antfu/eslint-config'
import pluginPrettier from 'eslint-plugin-prettier/recommended'

export default antfu(
  {
    javascript: true,
    typescript: true,
    type: true,
    vue: true,
    unocss: true,
    rules: {
      'e18e/prefer-static-regex': 'off',
      'antfu/consistent-list-newline': 'off',
      'antfu/if-newline': 'off',
      'unocss/order': 'error',
      'unocss/order-attributify': 'error',
      'unocss/enforce-class-compile': ['error', { prefix: '--uno' }],
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
        },
      ],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/slot-name-casing': ['error', 'camelCase'],
      'vue/component-options-name-casing': ['error', 'PascalCase'],
    },
  },
  pluginPrettier,
)
