const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: path.resolve(__dirname, "src/"),
              publicPath: './',
              useRelativePaths: true
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
    }),
    new CleanWebpackPlugin({
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
}