const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin')
const webpack = require('webpack');
require('dotenv').config();

module.exports = function (env, argv) {

  const nodeEnv = process.env.NODE_ENV
  const domain = process.env.DOMAIN
  const subDirName = process.env.SUB_DIR

  const isDevelopment = nodeEnv === 'development';
  const localHost = 'http://localhost:3000'

  let render = {
    domain: isDevelopment ? localHost : `${domain}/${subDirName}`,
    subDir: isDevelopment ? '' : `/${subDirName}`, 
  }

  return {
    mode: nodeEnv,
    entry: [
      path.resolve(__dirname, 'src/index.jsx')
    ],
    output: {
      path: path.resolve(__dirname, 'public'),
      publicPath: "/",
      filename: 'app.js'
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.ts$|\.tsx$/,
          loader: 'ts-loader',
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        ___SUBDIR___: JSON.stringify(render.subDir)
      }),
      new HtmlWebpackPlugin(
        {
          template: "./src/index.html",
          filename: "./index.html",
          inject: false,
        }),
        new HtmlReplaceWebpackPlugin([
          {
            pattern: '___DOMAIN___',
            replacement: render.domain
          }
        ])
    ]
  }
};