module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'class-methods-use-this': 'off',
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-unused-expressions': 'off',
    'no-restricted-globals': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
