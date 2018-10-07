const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    devtool: "source-map",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/main.css",
        }),
        /*new OptimizeCssAssetsPlugin({
            assetNameRegExp: /main\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        }),*/
    ],
    mode: 'development',
    entry: {
        'js/main.js': './static/src/js/index.js',
        'css/main.js': path.resolve(__dirname, "./static/src/scss/main.scss")
    },
    output: {
        path: path.resolve(__dirname, './static/dist'),
        filename: '[name]'
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        }, {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                    outputPath: "./fonts"
                }
            }]
        }]
    },
    watch: true,
}