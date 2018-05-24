process.env.NODE_ENV = 'production'
const path = require('path')
const config = require('../config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require("../webpack.config.js")

const webpackConfig = merge(baseWebpackConfig, {
    devtool : '#source-map',
    output:{
        path:path.resolve(__dirname,'../dist/'+ process.env.npm_package_version),
        filename:"js/[name].[chunkhash].js",
        chunkFilename:"js/[id].[chunkhash].js",
        publicPath:config.assetsPublicPath || '/'
    },
    plugins :[
        new webpack.DefinePlugin({
            'process.env': {
            NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        //提取多入库的公共模块
        Object.keys(config.page).length >= 2 ? new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks:2
        }):()=>{},
        //抽取从node_modules引入的模块，如vue
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vender',
            minChunks:function(module,count){
                var sPath = module.resource;
                // console.log(sPath,count);
                return sPath &&
                    /\.js$/.test(sPath) &&
                    sPath.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
            }
        }),
        //将webpack runtime 和一些复用部分抽取出来
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks:Infinity
        }),
        //将import()异步加载复用的公用模块再进行提取
        new webpack.optimize.CommonsChunkPlugin({
            // name: ['app','home'],
            async: 'vendor-async',
            children: true,
            deepChildren:true,
            minChunks:2
        }),
    ]
})
if(config.uglifyJs){
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: config.sourceMap,
            compress: {
            warnings: false
            }
        }),
    ])
}
if(config.sourceMap){
    module.exports.devtool = false
}
module.exports = webpackConfig
