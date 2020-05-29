var webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname + '/public',
    publicPath: 'http://localhost:8080/public/',
    filename: 'bundle.js',
    libraryTarget: 'amd'
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },

  target: 'node',

  externals: [nodeExternals()],
  // externals: {
  //   'react': 'react',
  //   'react-dom': 'react-dom',
  //   'react-router': 'react-router',
  //   'classnames': 'classnames'
  // }
}
