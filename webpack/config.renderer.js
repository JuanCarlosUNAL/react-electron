const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { spawn } = require('child_process');

const runElectronMain = () => {
  console.log('Electron main starting');
  spawn('yarn', ['electron', './dist/index.main.js']);
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
