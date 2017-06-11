/**
 * Created by Administrator on 2017/6/11 0011.
 */
new Vue({
    el: '#detailsTittleBox .tittle',
    data: {
        message: '新Tittle'
    }
});
new Vue({
    el: '#detailsTittleBox .detailsTypes',
    data: {
        message2: '新帖子'
    }
});

new Vue({

    el: '#detailsTittleBox .detailsTime',
    data: {
        message3: '2017-06-07'
    }
});

new Vue({
    el: '#detailsTittleBox .newsFrom',
    data: {
        message4: '新华社'
    }
});



new Vue({
    el: '#detailsInform p',
    data: {
        message5: '综合消息，10日，中国南方多地有大到暴雨，气象部门亦发布暴雨预警，多地已陆续启动相应等级的应急响应。根据气象部门的预报，江南北部等地仍将有较强降雨，国土部与气象局也于昨晚联合发布地质灾害气象风险预警。昨日白天，安徽江苏等地出现强降雨。安徽中北部、江苏中南部、湖北西南部等地出现大到暴雨，安徽淮南和滁州、江苏沿江一带出现大暴雨，最大小时雨强有60～88毫米。据中央气象台10日18时发布的天气公报，江南北部等地有较强降雨，华北黄淮等地多阵雨或雷阵雨。据预报，受低涡切变线影响，10日夜间至12日，江南北部等地有较强降雨。预计，10日20时至11日20时，湖南中北部、贵州西南部和东南部、湖北东南部、江西北部、安徽南部、浙江中北部、云南西部等地有大到暴雨，其中，湖南中部局地有大暴雨；上述部分地区并伴有短时强降水、雷暴大风等强对流天气，最大小时雨强可达30～50毫米，局地超过70毫米。为此，中央气象台发布了暴雨蓝色预警。此外，预计10日夜间至13日，内蒙古中部及华北、黄淮北部等地多阵雨或雷阵雨天气，其中，河北东部、山西东北部、天津、山东西北部等地的部分地区有中雨或大雨，河北东部和山东西北部局地有暴雨；上述部分地区并伴有雷雨大风或局地冰雹天气，河北东部、山东北部局地最大小时雨强有20～40毫米。'
    }
});

new Vue({
    el: '#detailsFooter .news .num',
    data: {
        message6: '120'
    }
});

new Vue({
    el: '#detailsFooter .good .num',
    data: {
        message7: '20'
    }
});

new Vue({
    el: '#video',
    data: {
        url: 'src/1.mp4'
    }
});

/*评论*/
new Vue({
    el: '#commentHead .num',
    data: {
        message: '12'
    }
});

var sitesList=
    [
        { name: 'Runoob' ,good: '14',time: '10分钟前',inform: '综合消息，10日，中国南方多地有大到暴雨，气象部门亦发布暴雨预警，多地已陆....'   },
        { name: 'Runo' ,good: '12',time: '10分钟前',inform: '综合消息，10日，中国南方多地有大到暴雨，气象部门亦发布暴雨预警，多地已陆....'   },
        { name: 'Run' ,good: '13',time: '10分钟前',inform: '综合消息，10日，中国南方多地有大到暴雨，气象部门亦发布暴雨预警，多地已陆....'   },
        { name: 'Run33' ,good: '14',time: '10分钟前',inform: '综合消息，10日，中国南方多地有大到暴雨，气象部门亦发布暴雨预警，多地已陆....'   },
        { name: 'Rub' ,good: '15',time: '10分钟前',inform: '综合消息，10日，中国南方多地有大到暴雨，气象部门亦发布暴雨预警，多地已陆....'   },
        { name: 'Runo4' ,good: '16',time: '10分钟前',inform: '综合消息，10日，中国南方多地有大到暴雨，气象部门亦发布暴雨预警，多地已陆....'   }

    ]
;
new Vue({
    el: '#commendInfomBox',
    data: {
        sites: sitesList
    }
});

new Vue({
    el: '#commentFooter .news .num',
    data: {
        message6: '15'
    }
});