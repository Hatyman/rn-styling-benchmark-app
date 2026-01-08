module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '^@/(.+)': './src/\\1',
          },
        },
      ],
      [
        'react-native-unistyles/plugin',
        {
          debug: false,
          root: 'src',
        },
      ],
    ],
  };
};
