const path = require('path');
const { sources } = require('webpack');

module.exports = {
  entry: {
    'browser-source2': './html/browser-source.html',
    'browser-source': './src/browser-source.ts',
    'control-panel': './src/control-panel.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true,
        }
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.html'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};