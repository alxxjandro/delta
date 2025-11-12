import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    ignores: ['node_modules', 'dist', 'build'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      semi: ['warn', 'never'],
      quotes: ['warn', 'single'],
      'no-unused-vars': ['warn'],
      'no-console': ['warn', { allow: ['error', 'warn'] }],
      'prettier/prettier': 'warn',
    },
  },
]
