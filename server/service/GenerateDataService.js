var IndexPageDAO = require('../DAO/GenerateDataDAO');

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