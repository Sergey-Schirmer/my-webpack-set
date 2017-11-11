const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const fonts = require('./webpack/fonts');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const pageslist = require( './webpack/pageslist');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build:  path.join(__dirname, 'build')
};

const jsEntrys = {};

const htmlPagesList = pageslist.map((item)=>{
  jsEntrys[item] = PATHS.source + `/pages/${item}/${item}.js`;
  return new HtmlWebpackPlugin({
    filename: item + '.html',
    chunks:   [item, 'common'],
    template: PATHS.source + `/pages/${item}/${item}.pug`
  })
});

const common = merge([
  {
    entry:   jsEntrys,
    output:  {
      path:     PATHS.build,
      filename: 'js/[name].js'
    },
    plugins: [
      ...htmlPagesList,

      new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
      }),

      new webpack.ProvidePlugin({
        "$":"jquery",
        "jQuery":"jquery",
        "window.jQuery":"jquery"
      })
    ]
  },
  pug(),
  fonts(),
  images()
]);

module.exports = function (env) {
  if (env === 'production') {
    return merge([
      common,
      extractCSS(),
      uglifyJS()
    ]);
  }
  if (env === 'development') {
    return merge([
      common,
      devserver(),
      sass(),
      css()
    ]);
  }
};










