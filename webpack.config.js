var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');


module.exports = {
    entry: "./components/Root",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'entry.js',
        publicPath: 'dist/'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.png$/,
            loader: "file-loader"
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }]
    }
};