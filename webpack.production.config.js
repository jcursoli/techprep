const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
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
          'babel-loader',
          //'strip-loader?strip[]=debug,strip[]=console.log'
        ],
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new webpack.optimize.OccurenceOrderPlugin(true),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({ //minify all the things
        compress: { warnings: false },
        comments: false,
        sourceMap: true,
        mangle: true,
        minimize: true
      }),
    ],
};