var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 8080
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.jsx')
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: './bundle.js'
  },
  module: {
    loaders:[
      { test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.(png|jpeg|gif)$/, include: path.resolve(__dirname, 'app'), loader:'file-loader?name=./build/imgs/[name].[ext]'},
      { test: /\.scss$/, include: path.resolve(__dirname, 'app'), loader: "style!css!sass"},
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};
