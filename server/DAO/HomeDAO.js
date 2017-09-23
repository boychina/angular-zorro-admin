var db = require('./database');

// 查找home页菜单数据
exports.findMenusData = function(func) {
    db.collection("menus").find({}, function(data) {
        func(data);
    });
}