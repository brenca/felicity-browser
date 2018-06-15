'use strict';

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/felicity-browser.js',
  output: {
    library: 'Felicity',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/dist',
    filename: 'felicity-browser.js'
  },
  module: {
    loaders: [
      {
        // need to babelify felicity, joi, isemail, hoek, and topo's lib
        test: /[\\\/]node_modules[\\\/](felicity[\\\/]lib[\\\/]|joi[\\\/]lib[\\\/]|isemail[\\\/]lib[\\\/]|hoek[\\\/]lib[\\\/]|topo[\\\/]lib[\\\/])/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  node: {
    global: true,
    Buffer: true,
    crypto: 'empty',
    net: 'empty',
    dns: 'empty'
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};
