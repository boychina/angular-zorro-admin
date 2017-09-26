var express = require('express');
var router = express.Router();
var IndexPageService = require('../service/IndexPageService');

//获取页面折线图部分数据
router.post('/getTopLineChartsData', function(req, res) {
    IndexPageService.getTopLineChartsData(function(data){
        res.send(data);
    });
});

module.exports = router;