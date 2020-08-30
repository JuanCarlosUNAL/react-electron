module.exports = [
  {
    entry: './src/index.main.ts',
    target: 'electron-main',
    module: {
      rules: [{
        test: /\.tsx?$/,
        include: /src/,
        use: ['ts-loader'],
      }],
    },
    output: {
      filename: 'index.main.js',
    },
  },
];
