var express = require('express');
var router = express.Router();
// 将生成数据的服务端方法引入index.js，默认执行构造数据
var GenerateDataService = require('../service/GenerateDataService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
