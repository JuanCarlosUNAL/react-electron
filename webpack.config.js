const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    entry: {
      electron: './src/index.ts',
      react: './src/react.tsx'
    },
    target: 'electron-main',
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: ['react']
      })
    ],
    module: {
      rules: [{
        test: /\.tsx?$/,
        include: /src/,
        use: ['ts-loader']
      }]
    },
    output: {
      // path: __dirname + '/dist',
      filename: '[name].js'
    }
  }
];