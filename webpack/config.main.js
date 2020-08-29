const HtmlWebpackPlugin = require('html-webpack-plugin');
const { spawn } = require('child_process')

module.exports = [
  {
    // mode: 'development',
    entry: './src/index.main.ts',
    target: 'electron-main',
    module: {
      rules: [{
        test: /\.tsx?$/,
        include: /src/,
        use: ['ts-loader']
      }]
    },
    output: {
      filename: 'index.main.js'
    }
  }
];