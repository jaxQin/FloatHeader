/*
 * @Author: jaxQin
 * @Date:   2017-04-10 17:40:40
 * @Last Modified by:   jaxQin
 * @Last Modified time: 2017-04-11 09:48:23
 */

;
(function($, win, document, undefined) {
    "use strict";
    // 声明组件名称
    var pluginName = "FloatHeader";
    // 默认配置参数
    var defaults = {
            speed: "0.2"
        }
        // 构造函数
    var FloatHeader = function(element, options) {
            //当前组件名称
            this._name = pluginName;
            // 初始化
            this._init(element, options)
        }
        // 程序方法
    FloatHeader.prototype = {
            //构造函数
            constructor: FloatHeader,
            //初始化函数
            _init: function(element, options) {
                var self = this;
                //合并输入的参数 合并的时候需要合并到一个空对象上 避免影响到配置项
                self.config = $.extend({}, defaults, options || {});
                self._scroll(element)
            },
            _scroll: function(ele) {
                var $ele = $(ele),
                    self = this;
                var $nav = $(ele),
                    navTop = $nav.offset().top,
                    navH = $nav.outerHeight(),
                    winTop_1 = 0,

                    holder = $('<div>');
                $(win).on('scroll', function() {
                    var winTop_2 = $(win).scrollTop();
                    holder.css('height', navH);
                    //开始浮动，不过不显示

                    if (winTop_2 > navTop ) {
                        holder.show().insertBefore($nav);
                        $nav.addClass('fixed-nav');
                    } else {
                        holder.hide();
                        $nav.removeClass('fixed-nav');
                    }
                    //判断鼠标向上滚动，显示出来
                    if (winTop_2 > winTop_1 ) {
                        console.log(22)
                        $nav.removeClass('fixed-nav-appear');
                    } else if (winTop_2 < winTop_1) {
                        $nav.addClass('fixed-nav-appear');
                    }
                    winTop_1 = $(win).scrollTop();
                })
            }
        }
        //将组件设置到jQuery中
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            new FloatHeader(this,options)
        });
    }
})(jQuery, window, document)
