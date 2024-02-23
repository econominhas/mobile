module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '~/@types': './src/types',
            '~/assets': './src/assets',
            '~/components': './src/components',
            '~/contexts': './src/contexts',
            '~/hooks': './src/hooks',
            '~/navigation': './src/navigation',
            '~/screens': './src/screens',
            '~/services': './src/services',
            '~/utils': './src/utils',
            '~/storage': './src/storage',
            '~/constants': './src/constants',
            '~/dtos': './src/dtos',
          },
        },
      ],
    ],
  };
};
