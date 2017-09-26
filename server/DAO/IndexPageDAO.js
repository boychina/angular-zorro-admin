var db = require('./database');

// 查询页面折线图部分数据
exports.findTopLineChartData = function(func) {
    db.collection("indexTopLineData").find({}, function(data) {
        func(data);
    });
}