const autoprefixer = require('autoprefixer');
module.exports = function(paths) {
    return {
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    autoprefixer({
                      browsers:['ie >= 10', 'last 4 version']
                    })
                  ],
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: paths,
                  sourceMap: true
                }
              }
            ],
          },
        ]
      },
    };
};