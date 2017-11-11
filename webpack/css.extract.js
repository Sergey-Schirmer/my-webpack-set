const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function (paths) {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            publicPath: '../',
            fallback: 'style-loader',
            use: [
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    autoprefixer({
                      browsers: [
                        'ie >= 11',
                        'last 2 version'
                      ]
                    }),
                    cssnano({
                      preset: 'default',
                    })
                  ],
                }
              },
              {
                loader: 'sass-loader',
              }
            ],
          }),
        },
        {
          test: /\.css$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader',
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('./css/style.css'),
    ],
  };
};