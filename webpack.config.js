const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: ["./front/App.jsx"],
    output: {
        path: __dirname + "/front/bundle",
        filename: "bundle.js",
        devtoolModuleFilenameTemplate: '[resourcePath]',
        devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
    },
    module: {
        loaders: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ["", ".js", ".jsx" ]
    },
    plugins: [
        new LiveReloadPlugin()
    ]
};