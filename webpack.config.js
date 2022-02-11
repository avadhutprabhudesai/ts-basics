const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  /**
   * Setting target as 'web' is important
   * Without this, webpack-dev-server does not work with .browserslistrc file
   */
  target: 'web',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    compress: true,
    port: 3000,
  },
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.json', '.scss', '.css', '.ts', '.tsx'],
    alias: {
      assets: path.join(__dirname, 'src/assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin({
      exclude: 'node_modules',
      failOnWarning: true,
    }),
    // new StylelintPlugin({
    //   emitError: true,
    //   emitWarning: true,
    //   failOnError: true,
    //   failOnWarning: true,
    // }),
  ],
};
