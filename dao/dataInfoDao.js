// 引入连接池
var pool = require('../conf/pool');

//SQL
var search = 'select * from goods_info where power=? and drive_way=? and type=?;';

module.exports = {
  searchTuitu: function(req, res, next){ 
      var params = req.body;
      console.log(params);
      //获取连接
      pool.getConnection(function(err, connection) {
        if(err){
          console.log(err)
          return res.send({code:'2',result:'服务器繁忙，请稍后重试！'})
        }
        // 访问数据库
        connection.query(search, [params.power,params.driveWay,params.type], function(err, result) {
          console.log(this.sql)
          if(err){
            console.log(err)
            return res.send({code:'2',result:'服务器繁忙，请稍后重试！'})
          }
    			console.log('----------------')
        	console.log(result)
    			return res.send({code:'0',result:result})

          // 释放连接 
          connection.release();
        })
    	})
  }
};
