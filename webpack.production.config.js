const webpack = require('webpack');
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// var purify = require("purifycss-webpack-plugin");

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
          'strip-loader?strip[]=debug,strip[]=console.log'
        ],
        exclude: /node_modules/,
        // query: {
        //   'plugins': ['lodash'],
        //   'presets': ['es2015']
        // }
      },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract('style', 'css'),
      // }
      // {
      //   test: /\.css$/,
      //   loader: "css-loader"
      // }
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
      // new ExtractTextPlugin("style.css", { allChunks: true }),
      // new purify({
      //  basePath: __dirname,
      //  paths: [
      //      "test/*.html",
      //      "test/*.html"
      //  ]
      // }),
      new webpack.optimize.OccurenceOrderPlugin(true),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        comments: false,
        sourceMap: true,
        mangle: true,
        minimize: true
      }),
    ],
};