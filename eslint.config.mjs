import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginCypress from 'eslint-plugin-cypress/flat'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' }
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginCypress.configs.recommended,
  {
    rules: {
      'cypress/no-xpath': 'error',
      'indent': [
        'error',
        2
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'quotes': [
        'error',
        'single'
      ],
      'semi': [
        'error',
        'never'
      ],
      'no-trailing-spaces': [
        'error'
      ],
      'no-multiple-empty-lines': [
        'error',
        { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }
      ],
      'eol-last': [
        'error'
      ]
    }
  },
  pluginJs.configs.recommended,
]
