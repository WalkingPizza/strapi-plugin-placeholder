'use strict';

module.exports = {
  extends: ['eslint:recommended', 'prettier', 'plugin:node/recommended'],
  env: {
    es6: true,
    node: true,
  },
  globals: {
    strapi: 'readonly',
  },
  rules: {
    strict: ['error', 'global'],
    'node/no-unpublished-require': 'off',
    'require-atomic-updates': 'off',
    'no-process-exit': 'off',
    'no-return-await': 'error',
    'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],
    'node/exports-style': ['error', 'module.exports'],
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/no-callback-literal': 'error',
    'node/handle-callback-err': 'error',
    'one-var': ['error', 'never'],
  },
};
