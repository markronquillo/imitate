const resolve = require('path').resolve;

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const SRC = './src';
const DEST = './public';

module.exports = { 

    context: __dirname,

    entry: ['./src/js/index', './src/css/index'],

    output: {
        path: resolve(__dirname, './src/public'),
        filename: '[name].js',
    } ,

    module: {
        rules: [
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin([ './public' ]),

        new ExtractTextPlugin({
            filename: '[name].css',
        }),

        new CopyWebpackPlugin([
            { from: `src/public/index.html`, to: '.'}
        ]),
    ]
}
