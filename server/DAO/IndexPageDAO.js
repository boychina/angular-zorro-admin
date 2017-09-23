var db = require('./database');

// 查询页面折线图部分数据
exports.findChartsData = function(func) {
    db.collection("indexpage").find({}, function(data) {
        func(data);
    });
}