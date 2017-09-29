var IndexPageDAO = require('../DAO/IndexPageDAO');

//获取页面折线图部分数据
exports.getTopLineData = function(func) {
    IndexPageDAO.findTopLineData(function(data){
        let xAxis = [], amounts = [], parm = {};
        data.map((val) => {
            xAxis.push(val.time);
            amounts.push(val.amount);
        });
        parm = {
            "xAxis": xAxis,
            "amounts": amounts
        };
        func(parm);
    });
}

//根据当前时间点，往数据库中定时写入数据
var interval = setInterval(() => {
    console.log("time", new Date());
    let random = parseInt(10*Math.random()); //生成一个0~10之间的随机数
    let alarmParm = {};
    if(random >= 5){
        alarmParm = {
            "alarmType": random < 7 ? "critical" : "warning",
            "alarmEventType": random >= 7 ? "critical" : "warning",
            "alarmTime": parseInt(new Date().getTime()/1000)
        }
    } else {
        alarmParm = {
            "alarmType": random < 3 ? "critical" : "warning",
            "alarmEventType": random >= 3 ? "critical" : "warning",
            "alarmTime": parseInt(new Date().getTime()/1000)
        }
    }
    IndexPageDAO.insetVipUserAlarmData(alarmParm);
}, 10000);


// exports.createVipUserAlarmData = function(func) {
//     var interval = setInterval(() => {
//         let random = parseInt(10*Math.random()); //生成一个0~10之间的随机数
//         let alarmParm = {};
//         if(random >= 5){
//             alarmParm = {
//                 "alarmType": random < 7 ? "critical" : "warning",
//                 "alarmEventType": random >= 7 ? "critical" : "warning",
//                 "alarmTime": parseInt(new Date().getTime()/1000)
//             }
//         } else {
//             alarmParm = {
//                 "alarmType": random < 3 ? "critical" : "warning",
//                 "alarmEventType": random >= 3 ? "critical" : "warning",
//                 "alarmTime": parseInt(new Date().getTime()/1000)
//             }
//         }
//         IndexPageDAO.insetVipUserAlarmData(alarmParm, func);
//     }, 10000);
// }

//获取VIP用户模块的数据
exports.getVipUserData = function(func) {
    IndexPageDAO.findVipUserData(function(data){
        let criticalAlarm = 0,
            warningAlarm = 0,
            criticalEventAlarm = 0,
            warningEventAlarm = 0,
            alarmParm = {};
        data.map((val) => {
            if (val.alarmType === "critical") {
                criticalAlarm++;
            } else if (val.alarmType === 'warning') {
                warningAlarm++;
            } else {}

            if(val.alarmEventType === 'critical') {
                criticalEventAlarm++;
            } else if(val.alarmEventType === 'warning') {
                warningEventAlarm++;
            } else {}
        });
        alarmParm = {
            "criticalAlarm": criticalAlarm,
            "warningAlarm": warningAlarm,
            "criticalEventAlarm": criticalEventAlarm,
            "warningEventAlarm": warningEventAlarm
        }
        func(alarmParm);
    });
}