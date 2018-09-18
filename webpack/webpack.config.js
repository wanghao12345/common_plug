/**
 * Created by wanghao on 2018/9/17
 */
const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');




module.exports = {
    //入口
    entry: {
        main: "./script/main.js",
        a: "./script/a.js",
        b: "./script/b.js",
        c: "./script/c.js"

    },
    //出口
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].[chunkhash].js',
        publicPath: 'http://cdn.com/' //上线做准备
    },
    //插件
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            title: 'Hello World',
            date: new Date(),
            minify: { //压缩html
                removeComments: true, //清除注释
                collapseWhitespace: true  //清除空格
            }
        }),
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'a.html',
            inject: 'body',
            title: 'Hello a.html',
            chunks:['a']
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            inject: 'body',
            title: 'Hello b.html',
            chunks:['b']
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            inject: 'body',
            title: 'Hello c.html',
            chunks:['c']
        }),









    ]
}