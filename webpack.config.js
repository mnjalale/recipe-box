var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry:[
        'babel-polyfill',
        './src/index.js'
    ],
    output:{
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            {test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')}
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin('style.css')
    ]
}