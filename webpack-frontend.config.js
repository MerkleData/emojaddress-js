const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle-front.js'
  },
  devServer: {
    host: '0.0.0.0',
    publicPath: '/assets/',
    contentBase: path.resolve(__dirname, "./dist"),
    watchContentBase: true,
    compress: true,
    port: 9001
  },
  devtool: 'inline-source-map',
}