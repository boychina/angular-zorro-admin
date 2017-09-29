var db = require('./database');

//查询页面折线图部分数据
exports.findTopLineData = function(func) {
    db.collection("indexTopLineData").find({}, function(data) {
        func(data);
    });
}

//根据当前时间点，往数据库中定时插入告警数据数据
exports.insetVipUserAlarmData = function(parm) {
    db.collection('vipUserData').insert(parm);
}

//查询VIP用户模块部分数据
exports.findVipUserData = function(parm, func) {
    db.collection("vipUserData").find({
        "CreateTime": {
            "$lte" : parm.endTime,
            "$gt" : parm.startTime
        }
    }, function(data) {
        func(data);
    });
}

