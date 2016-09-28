var express = require('express');
var router = express.Router();
var db = require('../dao/db_control');
/* GET home page. */

router.post('/', function(req,res,next){
    console.log("**** routes/send_passenger_post/post ****");
    console.log(req);
    db.save_passenger_data(req,res,next);
    res.redirect('/passenger');
});

module.exports = router;