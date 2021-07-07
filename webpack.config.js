const {resolve} = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = {
    entry: resolve(__dirname, 'js', 'main.js'),
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // тут еще нужно доделать
            {
                test: /\.mp3$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({template: resolve(__dirname, 'index.html')}),
        new BundleAnalyzerPlugin
    ]
}