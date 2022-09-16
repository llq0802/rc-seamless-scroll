module.exports = {
  extends: [
    'react-app',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended', // 重点
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
