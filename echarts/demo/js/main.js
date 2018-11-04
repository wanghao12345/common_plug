/**
 * Created by wanghao on 2018/10/30
 */
require.config({
    paths: {
        'jquery': './jquery-3.3.1',
        'echarts': './echarts',
        'mapChina': 'http://echarts.baidu.com/gallery/vendors/echarts/map/js/china.js',
        'map': './map'
    }
})



require(['jquery', 'map'], function ($, map) {
    map.test();
})