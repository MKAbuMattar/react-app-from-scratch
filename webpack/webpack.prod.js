const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [miniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(sass)$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Codevolution'),
    }),

    new miniCssExtractPlugin({ filename: './assets/css/[name].[hash].css' }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin(),
  ],
}
