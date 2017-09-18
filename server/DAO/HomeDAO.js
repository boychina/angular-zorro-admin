var db = require('./database');

// 查找home页菜单数据
exports.findMenusData = function(func){
    db.collection("home").find({}, function(data){
        console.log('3', data);
        func(data);
    });
}