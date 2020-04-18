const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Ruta de inicio de JS
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js' // Ruta de salida de JS
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',  // Ruta de salida de HTML
      template: './src/index.html' // Ruta de inicio de HTML
    })
  ],
  module: {
    rules: [
      {
        test: /\.css/, // Loader para CSS
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/, // Loader para SCSS
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // Loader para imagenes y GIFs
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}