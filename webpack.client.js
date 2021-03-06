const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base.js');
const AssetsPlugin = require('assets-webpack-plugin')
const assetsPluginInstance = new AssetsPlugin()
const CompressionPlugin = require('compression-webpack-plugin');


const config = {
  // Tell webpack the root file of our
  // server application
  entry: {
    index: './src/client/client.js'
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
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
        terserOptions: {
          ecma: 6,
        },
        cache: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [

    new CleanWebpackPlugin(['publicTemp'], {
      exclude: [
        'manifest.json',
        'service-worker.js',
        'robots.txt',
        'article.xml',
        'category.xml',
        'collections.xml',
        'experience.xml',
        'pages.xml',
        'products.xml',
        'profile.xml',
        'review.xml',
        'sitemap.xml',
        'user.xml'
      ],
      watch: true
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "../css/[name].[hash].css"
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
    // new CompressionPlugin({
    //   algorithm: 'gzip'
    // })

  ],
  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/static/js/',
    path: path.resolve(__dirname, 'publicTemp', 'static', 'js')
  }
};


module.exports = merge(baseConfig, config);
