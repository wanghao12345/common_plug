require.config({
    paths: {
        'jquery': 'lib/jquery-3.3.1',
        'math': './math',
        'str': './str'
    }
})



require(['jquery', 'math'], function ($, math) {
    alert(math.add(1, 2));
    alert(math.bodyWidth());
    alert(math.bodyHeight());
})