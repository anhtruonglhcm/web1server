module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'no-console': 'off',
    'object-curly-newline': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
