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

//获取VIP用户模块的数据
exports.getVipUserData = function(func) {
    IndexPageDAO.findVipUserData(func);
}