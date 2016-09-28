var express = require('express');
var router = express.Router();
var db = require('../dao/db_control');
/* GET home page. */

router.post('/', function(req,res,next){
    console.log("**** routes/send_driver_post/post ****")
    db.save_driver_data(req,res,next);
    res.redirect('/driver');
});

module.exports = router;



