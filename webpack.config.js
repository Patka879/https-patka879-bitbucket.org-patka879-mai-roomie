const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 443,
  },
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html" 
    }),
  ],
  target: 'web'
}