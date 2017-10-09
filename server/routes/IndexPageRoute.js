var express = require('express');
var router = express.Router();
var IndexPageService = require('../service/IndexPageService');

//获取页面折线图部分数据
router.post('/getTopLineData', function(req, res) {
    console.log(">>>>",req);
    IndexPageService.getTopLineData(function(data){
        res.send(data);
    });
});

//获取VIP用户模块的数据
router.post('/getVipUserData', function(req, res) {
    let endTime = (req.endTime && req.endTime !== "") ? req.endTime : new Date().getTime();
    let timeLeng = req.timeLength ? req.timeLength : 15;    //默认时间间隔是15分钟
    let startTime = endTime - 1000*60*timeLeng*2;           //向前查时间间隔的两倍
    let midTime = endTime - 1000*60*timeLeng;               //保存中间时间点进行数据比较

    let parm = {
        startTime: startTime/1000,
        endTime: endTime/1000,
        midTime: midTime/1000
    };
    IndexPageService.getVipUserData(parm, function(data){
        res.send(data);
    })
})

module.exports = router;