var HomeDAO = require('../DAO/HomeDAO');

//请求home页菜单数据
exports.getMenusData = function(func) {
    HomeDAO.findMenusData(func);
}