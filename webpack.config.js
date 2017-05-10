var path = require('path')

module.exports = {
  entry: './src/modules/index.js',
  output: {
    filename: 'modules.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'gtModules',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  externals: { react: 'React' },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
