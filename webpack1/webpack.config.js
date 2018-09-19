/**
 * Created by wanghao on 2018/9/18
 */

const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口
    entry: './src/app.js',
    //出口
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].bundle.js'
    },
    module:{
      rules: [
          {
              test: /\.js$/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets:[
                          ['@babel/preset-env', {
                                targets: {
                                    browsers: ['> 1%', 'last 2 version']
                                }
                          }]
                      ]
                  }
              }
          }
      ]
    },
    //插件
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
}

