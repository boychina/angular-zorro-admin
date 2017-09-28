var db = require('./database');

//查询页面折线图部分数据
exports.findTopLineData = function(func) {
    db.collection("indexTopLineData").find({}, function(data) {
        func(data);
    });
}

//查询VIP用户模块部分数据
exports.findVipUserData = function(func) {
    db.collection("vipUserData").find({}, function(data) {
        func(data);
    });
}