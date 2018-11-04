/**
 * Created by wanghao on 2018/10/30
 */
define(['jquery', 'echarts', 'mapChina'], function ($, echarts, mapChina) {
    var map = {
        test: function () {
            var myChart = echarts.init(document.getElementById('map-box'));
            // var option = {
            //     tooltip: {
            //         show: false, //不显示提示标签
            //         formatter: '{b}', //提示标签格式
            //         backgroundColor:"#ff7f50",//提示标签背景颜色
            //         textStyle:{color:"#fff"} //提示标签字体颜色
            //     },
            //     bmap: {
            //         center: [104.114129, 37.550339],
            //         zoom: 1
            //     },
            //     series: [{
            //         type: 'map',
            //         roam: true, //放大缩小
            //         mapType: 'china',
            //         label: {
            //             normal: {
            //                 show: false,//显示省份标签
            //                 textStyle:{color:"white"}//省份标签字体颜色
            //             },
            //             emphasis: {//对应的鼠标悬浮效果
            //                 show: false,
            //                 textStyle:{color:"#800080"}
            //             }
            //         },
            //         itemStyle: {
            //             normal: {
            //                 borderWidth: .5,//区域边框宽度
            //                 borderColor: '#cfcfcf',//区域边框颜色
            //                 areaColor:"#015593",//区域颜色
            //                 opacity: 0.5
            //             },
            //             emphasis: {
            //                 borderWidth: .5,
            //                 borderColor: 'white',
            //                 areaColor:"#1a8ce1",
            //             }
            //         },
            //         data:[
            //             {name:'福建', selected:true}//福建为选中状态
            //         ]
            //     }],
            // };


            myChart.setOption(option);
            // myChart.on('mouseover', function (params) {
            //     var dataIndex = params.dataIndex;
            //     console.log(params);
            // });











        }
    }

    return map;

})