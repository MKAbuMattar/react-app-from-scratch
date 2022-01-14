const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// const { DefinePlugin } = require('webpack')
// const dotenv = require('dotenv')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {},
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'assets/js/[name].[hash].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', './public/favicon.ico'),
          to: './',
        },
        {
          from: path.resolve(__dirname, '..', './public/logo192.png'),
          to: './',
        },
        {
          from: path.resolve(__dirname, '..', './public/logo512.png'),
          to: './',
        },
        {
          from: path.resolve(__dirname, '..', './public/manifest.webmanifest'),
          to: './',
        },
        {
          from: path.resolve(__dirname, '..', './public/_redirects'),
          to: './',
        },
        {
          from: path.resolve(__dirname, '..', './public/robots.txt'),
          to: './',
        },
      ],
    }),
    // new DefinePlugin(
    //   Object.keys(dotenv.config().parsed).reduce((prev, next) => {
    //     prev[`process.env.${next}`] = JSON.stringify(
    //       dotenv.config().parsed[next],
    //     )
    //     return prev
    //   }, {}),
    // ),
  ],
}
