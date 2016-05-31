// 实现与MySQL交互
var mysql = require('mysql');

//MySQL数据库连接配置
var conf = {
  mysql: {
    host: 'localhost', 
    user: 'root', //用户名
    password: 'root', //密码
    database:'wf', //数据库
    port: 3306 //端口
  }
};

// 创建连接池，提升性能
var pool = mysql.createPool({
    host        : conf.mysql.host,
    user        : conf.mysql.user,
    password    : conf.mysql.password,
    database    : conf.mysql.database,
    port        : conf.mysql.port
});

module.exports = pool;