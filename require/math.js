
define(['str'], function (str) {

    var math = {
        add: function (x, y) {
            return x + y + str;
        },
        bodyWidth: function () {
            return $('body').width();
        },
        bodyHeight: function () {
            return $('body').height();
        }

    }

    return math;
})