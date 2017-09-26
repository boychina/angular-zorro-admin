var IndexPageDAO = require('../DAO/IndexPageDAO');

//获取页面折线图部分数据
exports.getTopLineChartsData = function(func) {
    IndexPageDAO.findTopLineChartData(function(data){
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