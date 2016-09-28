var express = require('express');
var router = express.Router();
var db = require('../dao/db_control');
/* GET home page. */
router.get('', function(req, res, next) {
  //db.get_driver_data(req, res, next);
  res.render('index', { title: 'City Link'});
});

module.exports = router;

