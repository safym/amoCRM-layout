module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'prefer-const': 'warn',
    'no-console': 'warn',
    quotes: ['warn', 'single', { avoidEscape: true }],
    'jsx-quotes': ['warn', 'prefer-double'],
    indent: ['warn', 2, { SwitchCase: 1 }],
    'max-len': ['warn', { code: 120 }],
    'react/prop-types': ['off'],
  },
}
