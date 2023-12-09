module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@src': './src',
            '@hooks': './src/hooks',
          },
        },
      ],
      ['babel-plugin-styled-components'],
    ],
  };
};
