const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'react-hot',
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    devtool: 'eval',
    hot: true,
    historyApiFallback: true,
    contentBase: './',
    outputPath: './',
  },
  devtool: 'eval',
  plugins: [
      // Allows for sync with browser while developing (like BorwserSync)
      new webpack.HotModuleReplacementPlugin(),
      // Allows error warninggs but does not stop compiling. Will remove when eslint is added
      new webpack.NoErrorsPlugin(),
    ],
};