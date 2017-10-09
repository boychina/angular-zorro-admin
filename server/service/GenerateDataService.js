var IndexPageDAO = require('../DAO/GenerateDataDAO');

//利用setTimeout模拟setInterval时间随机在数据库插入数据
var alarmSpeed = 10000;
var generateAlarmData = setTimeout(function(){
    console.log("alarm", new Date());
    let random = parseInt(10*Math.random()); //生成一个0~9之间的随机数
    alarmSpeed = parseInt(Math.random() * (60000 - 2000 + 1) + 2000); //产生告警的速度是随机的，2 ~ 60秒之间
    let alarmParm = {};
    if(random > 5){
        alarmParm = {
            "alarmType": "critical",
            "alarmTime": parseInt(new Date().getTime()/1000)
        }
    } else {
        alarmParm = {
            "alarmType": "warning",
            "alarmTime": parseInt(new Date().getTime()/1000)
        }
    }
    IndexPageDAO.insetVipUserAlarmData(alarmParm);

    generateAlarmData = setTimeout(arguments.callee,alarmSpeed); //函数调用自身，注意这里的argument.callee属性(箭头函数没有这个属性)
},alarmSpeed);


//随机生成alarmEvent告警数据
var alarmEventSpeed = 20000;
var generateAlarmEventData = setTimeout(function(){
    console.log("alarmEvent", new Date());
    let random = parseInt(10*Math.random()); //生成一个0~9之间的随机数
    alarmEventSpeed = parseInt(Math.random() * (60000 -2000 + 1) +2000); //产生告警的速度是随机的，2 ~ 60秒之间
    let alarmEventParm = {};
    if(random > 5){
        alarmEventParm = {
            "alarmEventType": "critical",
            "alarmTime": parseInt(new Date().getTime()/1000)
        }
    } else {
        alarmEventParm = {
            "alarmEventType": "warning",
            "alarmTime": parseInt(new Date().getTime()/1000)
        }
    }
    IndexPageDAO.insetVipUserAlarmData(alarmEventParm);

    generateAlarmEventData = setTimeout(arguments.callee, alarmEventSpeed); //调用函数自身
}, alarmEventSpeed);