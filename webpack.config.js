const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  entry:{
    index: APP_PATH + '/js/index.js'
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js[x]?$/, loader: 'babel-loader', exclude: /node_modules/ , include: APP_PATH },
      { test: /\.(png|jpeg|gif)$/, loader: "url-loader?limit=100000" },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract( "style-loader", "css-loader!sass-loader" )
      },
    ]
  },
};
