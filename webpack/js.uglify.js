const webpack = require('webpack');
module.exports = function() {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false,
                }
            })
        ],
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }]
          }
        ]
      }
    };
};

