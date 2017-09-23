var IndexPageDAO = require('../DAO/IndexPageDAO');

//获取页面折线图部分数据
exports.getChartsData = function(func) {
    IndexPageDAO.findChartsData(func);
}