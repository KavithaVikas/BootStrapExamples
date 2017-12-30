let path = require("path");

let config = {
    entry: path.resolve(__dirname, "src/app"),
    output: {
        path: path.resolve(__dirname, "src/app/dist"),
        filename: "bundle.js"
    },
    module:{
        rules:[
            {test:/\.js?/,include:path.resolve(__dirname, "src"),loader:"babel-loader"},
            {test:/\.(jpe?g|png|gif)$/i, loader:"file-loader?name=images/[name].[ext]"},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    }

}
module.exports = config;