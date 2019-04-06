const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
  // Tell webpack to run babel on every file it runs through
  mode: 'development',
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        "plugins": ["transform-class-properties"],
        presets: [
          'react',
          'stage-0',
          ['env', {
            targets: {
              browsers: ['last 2 versions']
            }
          }]
        ]
      }
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it use publicPath in webpackOptions.output
            publicPath: './public/static/css'
          }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            importLoader: 2,
            minimize: true
          }
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            // Necessary for external CSS imports to work
            // https://github.com/facebookincubator/create-react-app/issues/2677
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              }),
            ],
          },
        },
      ]
    }
    ]
  }
};