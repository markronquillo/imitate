const resolve = require('path').resolve;
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DEBUG = process.env.NODE_ENV !== 'production'
const SRC = './src';
const DEST = './public';

module.exports = { 

    context: __dirname,

    entry: {
        './assets/js/app': './src/js/index', 
        './assets/css/app': './src/css/index', 
    },

    output: {
        path: resolve(__dirname, './public'),
        filename: '[name].js',
        pathinfo: Boolean(DEBUG),
        devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
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
                exclude: /node_modules/,
                use: [
                    'babel-loader'

                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin([ './public' ]),

        // Copying files directly
        new CopyWebpackPlugin([
           { from: `./src/public`, to: '.' }
        ], {
            debug: true
        }),

        // Compress React (and others)
        new webpack.EnvironmentPlugin({
            NODE_ENV: process.env.NODE_ENV || 'development',
            VERSION: getVersion()
        }),

        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
    ],

    devtool: DEBUG ? 'source-map' : 'hidden-source-map',
}

function getVersion () {
  return require('child_process')
    .execSync('git describe --always --tags --dirty')
    .toString()
    .trim()

}
