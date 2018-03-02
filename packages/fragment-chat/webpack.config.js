var webpack = require('webpack')

module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname + '/public',
    publicPath: 'http://localhost:3000/public/',
    filename: 'bundle.js',
    libraryTarget: 'amd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-router': 'react-router',
    'classnames': 'classnames'
  }
}
