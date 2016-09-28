/**
 * Created by lee on 9/13/16.
 */
var express = require('express');
var router = express.Router();
var db = require('../dao/db_control');

router.get('/', function(req, res, next) {
    db.get_passenger_data(req, res, next);
});

module.exports = router;