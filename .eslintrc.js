module.exports = {
  extends: [
    'react-app',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended', // 重点
  ],
  rules: {
    'react-hooks/exhaustive-deps': 0,
    'prettier/prettier': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
