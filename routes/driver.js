//加载express
var express = require('express');

//通过express获取Router对象
var router = express.Router();

//加载postDao
var db = require('../dao/db_control');

//拦截/post请求
/*router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});*/

/**
 * @param  {[type]} req   [description]
 * @param  {[type]} res   [description]
 * @param  {[type]} next) {db_connector.query(req, res, next);} [description]
 * @return {[type]}       [description]
 */
router.get('/', function(req, res, next) {
    db.get_driver_data(req,res);
});

module.exports = router;