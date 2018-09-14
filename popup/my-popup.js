/**
 * Created by wanghao on 2018/9/14
 */
(function(global, factory, plug){
    factory.call(global, global.jQuery, plug);

}(typeof window === 'undefined' ? this : window, function($, plug){


    /**
     * 弹窗对象
     * @constructor
     */
    var Popup = function () {

        this.init();
    };
    /**
     * 初始化弹窗
     */
    Popup.prototype.init = function () {
        console.log('初始化');
        this.creatDom();
        this.bindEvent();
    };
    /**
     * 创建弹窗DOM
     */
    Popup.prototype.creatDom = function(){
        console.log('创建弹窗DOM');
        //弹框的头部
        var popup_title = '<div class="my-popup-title">\n' +
                          '    <div class="title">提示</div>\n' +
                          '    <div class="close">×</div>\n' +
                          '</div>';
        //弹框的主要内容部分
        var popup_content = '<div class="my-popup-content"></div>';
        //弹框的按钮部分
        var popup_button = '<div class="my-popup-bottom">\n' +
                           '    <button class="query">确定</button>\n' +
                           '    <button class="cancer">取消</button>\n' +
                           '</div>';
        var popup_main = popup_title + popup_content + popup_button;
        //弹框的盒子
        var popup_box = '<div class="my-popup-bg-box">\n' +
                            '<div class="my-popup-box">'+popup_main+'</div>\n' +
                        '</div>';

        $('body').append(popup_box);

    };
    /**
     * 绑定弹窗事件
     */
    Popup.prototype.bindEvent = function () {
        console.log('绑定弹窗事件');


    }




    //默认配置
    var __defs__ = {
        type: 'bar',
        title: '提示'
    };
    $.fn[plug] = function (ops) {
        //扩展默认值
        var that = $.extend(this, __defs__, ops);
        var myPop = new Popup();

    };




    //扩展配置
    $.fn[plug].extendDefaults = function (type, ops) {
        $.extend(type, ops)
    }




}, "myPopup"));

