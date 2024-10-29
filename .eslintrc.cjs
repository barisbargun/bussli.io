/* eslint-disable unicorn/prefer-string-raw */
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:vitest/legacy-recommended',
    'plugin:unicorn/recommended'
  ],
  plugins: ['simple-import-sort', 'import', 'tailwindcss', 'check-file'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true
      }
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',

    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-cycle': 'warn',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          // disables cross-feature imports:
          // eg. src/features/discussions should not import from src/features/comments, etc.
          {
            target: './src/features/editor-canvas',
            from: './src/features',
            except: ['./editor-canvas']
          },
          {
            target: './src/features/file-uploader',
            from: './src/features',
            except: ['./file-uploader']
          },
          {
            target: './src/features/workflows',
            from: './src/features',
            except: ['./workflows']
          },
          // enforce unidirectional codebase:

          // e.g. src/app can import from src/features but not the other way around
          {
            target: './src/features',
            from: './src/app'
          },

          // e.g src/features and src/app can import from these shared modules but not the other way around
          {
            target: ['./src/components', './src/hooks', './src/lib', './src/types', './src/utils'],
            from: ['./src/features', './src/app']
          }
        ]
      }
    ],

    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],

    'prettier/prettier': [
      'warn',
      {
        usePrettierrc: false
      }
    ],

    'check-file/filename-naming-convention': [
      'error',
      {
        '**/*.{ts,tsx}': 'KEBAB_CASE'
      },
      {
        ignoreMiddleExtensions: true
      }
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        '!(src/app)/**/*': 'KEBAB_CASE',
        '!(**/__tests__)/**/*': 'KEBAB_CASE'
      }
    ],
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        replacements: {
          props: false,
          prev: false,
          docs: false,
          params: false,
          ref: false,
          env: false,
          e: false
        }
      }
    ],
    'unicorn/no-empty-file': 'off'
  },
  overrides: [
    {
      files: ['src/assets/**/*.ts'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'unicorn/prevent-abbreviations': 'off'
      }
    }
  ]
}
