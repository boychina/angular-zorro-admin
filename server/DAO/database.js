//引入mysql模块
var mysql = require('mysql');
//链接数据库
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password : 'zhaohuan123!',
	database : 'HelloWorld'
})
connection.connect();
//查询数据
var sql = 'SELECT * FROM websites';
connection.query(sql,function (err,result) {
	if(err){
		console.log('error:', err.message);
		return;
	}
	console.log('-----------------查询----------------');
	console.log(result);
	console.log('-----------------查询结束----------------');
})
 
//增加数据
var addsql = 'INSERT INTO websites(name,age,sex) VALUES(?,?,?)';
var addsqlparams = ['汪丹萍','24','女'];
connection.query(addsql,addsqlparams,function (err,result) {
	if(err){
		console.log('error');
		return;
	}
	console.log('-----------------新增成功----------------');
	console.log(result);
	console.log('-----------------结束----------------');
})
 
//修改数据
var modsql = 'UPDATE websites SET name = ?,age = ? WHERE id = ?';
var modsqlparams = ['吕雪源love','26','1'];
connection.query(modsql,modsqlparams,function (err,result) {
	if(err){
		console.log('err');
		return;
	}
	console.log('--------------------------------');
	console.log(result);
	console.log('--------------------------------');
})
 
//删除数据
var delsql = 'DELETE FROM websites where id = 2';
connection.query(delsql,function (err,result) {
	if(err){
		console.log('err');
		return;
	}
	console.log('----------删除-------------');
	console.log(result);
})
 
 
connection.end();