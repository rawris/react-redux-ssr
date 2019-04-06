const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base.js');
const AssetsPlugin = require('assets-webpack-plugin')
const assetsPluginInstance = new AssetsPlugin()


const config = {
  // Tell webpack the root file of our
  // server application
  entry: {
    index: './src/client/client.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "../css/[name].css"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    // new ServiceWorkerWebpackPlugin({
    //   entry: path.join(__dirname, 'public/service-worker.js'),
    //   publicPath: '/'
    // }),

  ],
  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/static/js/',
    path: path.resolve(__dirname, 'public', 'static', 'js')
  }
};


module.exports = merge(baseConfig, config);
