var express = require('express');
var router = express.Router();
var IndexPageService = require('../service/IndexPageService');

//获取页面折线图部分数据
router.post('/getTopLineData', function(req, res) {
    IndexPageService.getTopLineData(function(data){
        res.send(data);
    });
});

//获取VIP用户模块的数据
router.post('/getVipUserData', function(req, res) {
    IndexPageService.getVipUserData(function(data){
        res.send(data);
    })
})

module.exports = router;