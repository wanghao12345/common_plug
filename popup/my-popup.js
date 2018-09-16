/**
 * Created by wanghao on 2018/9/14
 */
(function(global, factory, plug){
    factory.call(global, global.jQuery, plug);

}(typeof window === 'undefined' ? this : window, function($, plug){

    //默认配置
    var __defs__ = {
        title: '提示',
        popupOutWidth: '800px', //提示框的宽度
        mainContent: '', //主内容
        queryCallback: function () {}, //确定回调函数
        cancerCallback: function () {} //取消回调函数
    };

    var Popup = function () {

    };
    Popup.prototype.init = function () {
        this.data = $.extend(__defs__, options);
        this.creatDom();
    };
    Popup.prototype.creatDom = function () {
        console.log('创建弹窗DOM');
        //弹框的头部
        var popup_title = '<div class="my-popup-title">\n' +
            '    <div class="title">'+this.data.title+'</div>\n' +
            '    <div class="close btn" data-btn-name="关闭">×</div>\n' +
            '</div>';
        //弹框的主要内容部分
        var popup_content = '<div class="my-popup-content" id="my-popup-content">'+this.data.mainContent+'</div>';
        //弹框的按钮部分
        var popup_button = '<div class="my-popup-bottom">\n' +
            '    <button class="query btn" data-btn-name="确定">确定</button>\n' +
            '    <button class="cancer btn" data-btn-name="取消">取消</button>\n' +
            '</div>';
        var popup_main = popup_title + popup_content + popup_button;
        //弹框的盒子
        this.popup_box = '<div class="my-popup-bg-box">\n' +
            '<div class="my-popup-box" style="width: '+this.data.popupOutWidth+'">'+popup_main+'</div>\n' +
            '</div>';

        $('body').append(this.popup_box);
        this.bindEvent();
    };
    Popup.prototype.bindEvent = function () {
        var _this = this;
        console.log('绑定弹窗事件');
        $('body').on('click', '.my-popup-bg-box .btn', function () {
            var btnName = $(this).data('btnName');
            //关闭弹窗
            if (btnName == '关闭') {
                _this.closePopup();
            }
            //点击确定
            if (btnName == '确定') {
                _this.data.queryCallback();
            }
            //点击取消
            if (btnName == '取消') {
                _this.data.cancerCallback();
            }

            console.log('13');
        })
    };
    Popup.prototype.addMainDom = function (dom) {
        $('#my-popup-content').append(dom);
    };
    Popup.prototype.closePopup = function () {
        console.log('关闭弹窗');
        $('body .my-popup-bg-box').remove();
    };


   /* var methods = {
        /!**
         * 初始化
         * @param options
         *!/
        init: function (options) {
            this.data = $.extend(__defs__, options);
            this.creatDom();
            return this;
        },
        /!**
         * 创建弹窗DOM
         *!/
        creatDom: function () {
            console.log('创建弹窗DOM');
            //弹框的头部
            var popup_title = '<div class="my-popup-title">\n' +
                '    <div class="title">'+this.data.title+'</div>\n' +
                '    <div class="close btn" data-btn-name="关闭">×</div>\n' +
                '</div>';
            //弹框的主要内容部分
            var popup_content = '<div class="my-popup-content" id="my-popup-content">'+this.data.mainContent+'</div>';
            //弹框的按钮部分
            var popup_button = '<div class="my-popup-bottom">\n' +
                '    <button class="query btn" data-btn-name="确定">确定</button>\n' +
                '    <button class="cancer btn" data-btn-name="取消">取消</button>\n' +
                '</div>';
            var popup_main = popup_title + popup_content + popup_button;
            //弹框的盒子
            this.popup_box = '<div class="my-popup-bg-box">\n' +
                '<div class="my-popup-box" style="width: '+this.data.popupOutWidth+'">'+popup_main+'</div>\n' +
                '</div>';

            $('body').append(this.popup_box);
            this.bindEvent();
        },
        /!**
         * 绑定弹窗事件
         *!/
        bindEvent: function () {
            var _this = this;
            console.log('绑定弹窗事件');
            $('body').on('click', '.my-popup-bg-box .btn', function () {
                var btnName = $(this).data('btnName');
                //关闭弹窗
                if (btnName == '关闭') {
                    _this.closePopup();
                }
                //点击确定
                if (btnName == '确定') {
                    _this.data.queryCallback();
                }
                //点击取消
                if (btnName == '取消') {
                    _this.data.cancerCallback();
                }

                console.log('13');
            })



        },
        /!**
         * 增加主要内容的DOM
         *!/
        addMainDom: function(dom){
            $('#my-popup-content').append(dom);

        },



        /!**
         * 关闭弹窗DOM
         *!/
        closePopup: function () {
            console.log('关闭弹窗');
            $('body .my-popup-bg-box').remove();
        }


    }*/
    $.fn[plug] = function (method) {
        if (methods[method]) { //调用方法
            console.log('方法');
            return methods[method]();
        }else if(typeof method === 'object' || !method){ //初始化
            console.log('对象');
            return methods.init(method);
        }else{
            $.error('Method ' + method + ' does not exit')
        }




    };




    //扩展配置
    $.fn[plug].extendDefaults = function (type, ops) {
        $.extend(type, ops)
    }




}, "myPopup"));

