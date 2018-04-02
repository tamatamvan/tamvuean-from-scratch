'use strict'

module.exports = {
  mode: 'development',
  entry: [
    './src/main.js'
  ],
  devServer: {
    inline: true,
    port: 8888,
    contentBase: './'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
}