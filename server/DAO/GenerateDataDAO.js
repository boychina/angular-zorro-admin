var db = require('./databaseByMongo');

//根据当前时间点，往数据库中定时插入告警数据数据
exports.insetVipUserAlarmData = function(parm){
    db.collection('vipUserData').insert(parm);
}