const airbnbBaseStyleRules = require('eslint-config-airbnb-base/rules/style').rules;
const airbnbBaseVariablesRules = require('eslint-config-airbnb-base/rules/variables').rules;

module.exports = {
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint',
  ],
  'extends': [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  'rules': {
    '@typescript-eslint/camelcase': airbnbBaseStyleRules.camelcase,
    '@typescript-eslint/indent': airbnbBaseStyleRules.indent,
    '@typescript-eslint/no-array-constructor': airbnbBaseStyleRules['no-array-constructor'],
    '@typescript-eslint/no-unused-vars': airbnbBaseVariablesRules['no-unused-vars'],
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': ['**/*.spec.*'] }],
    'import/prefer-default-export': ['off'],
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': [
          '.ts',
        ],
      },
    },
    'import/core-modules': ['ember'],
  },
  'env': {
    'browser': true,
    'node': true,
    'jest': true,
    'commonjs': true,
    'es6': true,
  },
};
