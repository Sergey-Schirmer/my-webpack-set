module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(svg|jpg|jpge|png)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    },
                },
            ],
        },
    };
};