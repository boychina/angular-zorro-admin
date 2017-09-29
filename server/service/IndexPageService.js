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
// var interval = setInterval(() => {
//     console.log("time", new Date());
//     let random = parseInt(10*Math.random()); //生成一个0~10之间的随机数
//     let alarmParm = {};
//     if(random >= 5){
//         alarmParm = {
//             "alarmType": random < 7 ? "critical" : "warning",
//             "alarmEventType": random >= 7 ? "critical" : "warning",
//             "alarmTime": parseInt(new Date().getTime()/1000)
//         }
//     } else {
//         alarmParm = {
//             "alarmType": random < 3 ? "critical" : "warning",
//             "alarmEventType": random >= 3 ? "critical" : "warning",
//             "alarmTime": parseInt(new Date().getTime()/1000)
//         }
//     }
//     IndexPageDAO.insetVipUserAlarmData(alarmParm);
// }, 10000);

//利用setTimeout模拟setInterval时间随机在数据库插入数据
var speed = 10000;
var timeout = setTimeout(function(){
    console.log("time", new Date());
    let random = parseInt(10*Math.random()); //生成一个0~10之间的随机数
    speed = parseInt(Math.random() * (60000 - 2000 + 1) + 2000); //产生告警的速度是随机的，2 ~ 60秒之间
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

    timeout = setTimeout(arguments.callee,speed); //函数调用自身，注意这里的argument.callee属性(箭头函数没有这个属性)
},speed);

//获取VIP用户模块的数据
exports.getVipUserData = function(parm, func) {
    IndexPageDAO.findVipUserData(parm, function(data){
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