const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const DEV_MODE = `${process.env.NODE_ENV}`;


module.exports = {
    entry: ['./src/js/main.js'],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/main.js'
    },
    mode: DEV_MODE,
    devtool: 'source-map',
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.js",
            jQuery: "jquery/dist/jquery.js",
            "window.jQuery": "jquery/dist/jquery.js",
        }),
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.optimization = {
        splitChunks: {
            chunks: 'async',
        },
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    sourceMap: false,
                    beautify: false,
                    comments: false,
                    compress: {
                        warnings: false
                    }
                }
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            })
        ]
    };
}