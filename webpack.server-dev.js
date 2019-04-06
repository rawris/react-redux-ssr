const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file of our
  // server application
  entry: './src/index.js',
  plugins: [
    // new CleanWebpackPlugin(['build'], {
    //   watch: true
    // }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css"
    })
  ],
  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
