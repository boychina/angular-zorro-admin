var express = require('express');
var router = express.Router();
var IndexPageService = require('../service/IndexPageService');

//获取页面折线图部分数据
router.post('/getTopLineData', function(req, res) {
    IndexPageService.getTopLineData(function(data){
        res.send(data);
    });
});

//根据当前时间点，往数据库中定时写入数据
// router.post('/createVipUserAlarmData', function(req, res) {
//     IndexPageService.createVipUserAlarmData(function(data){
//         // res.send("创建告警成功！"); //这里不能res.send(),否则就会停止循环
//         // res.redirect('back');
//     })
// })

//获取VIP用户模块的数据
router.post('/getVipUserData', function(req, res) {
    let endTime = (req.endTime && req.endTime !== "") ? req.endTime : new Date().getTime();
    let startTime = endTime - 1000*60*15;
    let parm = {
        startTime: startTime/1000,
        endTime: endTime/1000
    };
    IndexPageService.getVipUserData(parm, function(data){
        res.send(data);
    })
})

module.exports = router;