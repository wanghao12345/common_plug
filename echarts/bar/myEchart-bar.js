/**
 * Created by wanghao on 2018/9/11
 */
(function(global, factory, plug){
    factory.call(global, global.jQuery, plug);

}(typeof window === 'undefined' ? this : window, function($, plug){

    //题目
    var __title__ = {
        show: true,
        text: ''
    }

    //默认配置
    var __defs__ = {
        type: 'bar',
        title: __title__
    }




    $.fn[plug] = function (ops) {
        //扩展默认值
        var that = $.extend(this, __defs__, ops);

    }

    //扩展配置
    $.fn[plug].extendDefaults = function (type, ops) {
        $.extend(type, ops)
    }




}, "myBar"));

