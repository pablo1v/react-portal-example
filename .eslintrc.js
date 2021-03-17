module.exports = {
  root: true,
  extends: [
    '@hitechline/eslint-config/web',
    '@hitechline/eslint-config/typescript',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
};
