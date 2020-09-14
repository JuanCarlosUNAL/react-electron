const { spawn } = require('child_process');
const { exit } = require('process');
const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const runElectronMain = () => {
  const pathToMain = path.join('.', 'dist', 'index.main.js');

  console.log('Electron main starting');
  const child = spawn('yarn', ['electron', pathToMain], {shell: true});
  child.on('error', (...args) => {
    console.error('We have gotten an error: ', args);
    exit(1);
  });
  child.on('close', () => {
    exit(0);
  });
};

module.exports = [
  {
    mode: 'development',
    entry: './src/index.react.tsx',
    target: 'electron-renderer',
    devtool : 'source-map',
    resolve: {
      extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.tsx'],
    },
    plugins: [
      new ReactRefreshWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    module: {
      rules: [{
        test: /\.tsx?$/,
        include: /src/,
        use: ['ts-loader'],
      }],
    },
    devServer: {
      port: 8080,
      hot: true,
      before: runElectronMain,
    },
    output: {
      filename: 'index.renderer.js',
    },
  },
];
