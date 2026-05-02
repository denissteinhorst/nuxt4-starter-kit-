// eslint.config.mjs
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    ignores: ['node_modules', '.output', '.dist'],
  },

  // Your custom rules layer
  {
    rules: {
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
        },
      ],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      'eol-last': ['error', 'always'],
      'vue/no-multiple-template-root': 'off',
    },
  }
)
