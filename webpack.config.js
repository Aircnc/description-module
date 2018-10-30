var path = require('path');

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  output: {
    filename: 'description.bundle.js',
    path: __dirname + '/public/dist'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { 
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
};