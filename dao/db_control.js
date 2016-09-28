/**
 * Created by lee on 9/3/16.
 */
var mysql = require('mysql');
var $sql = require('./user_sql');
var $db = require('./config');

module.exports = {
    get_driver_data: function (req, res, next) {
        var client = mysql.createConnection($db.mysql_config);
        client.connect();
        //var sql = "select * from driver_info";
        console.log("**** read driver data **** ");
        client.query($sql.queryAllDriver, function (err, results, fields) {
            if (err) {
                throw err;
            }
            if (results) {
                // 返回json
                // res.json(results);
                var arr = [];
                for (var i = 0; i < results.length; i++) {
                    var driver = {
                        id: results[i].id,
                        pick_up_location: results[i].pick_up_location,
                        drop_down_location: results[i].drop_down_location,
                        start_date: results[i].start_date,
                        start_time: results[i].start_time,

                        name: results[i].name,
                        age: results[i].age,
                        language: results[i].language,

                        price: results[i].price,
                        seat: results[i].seat,
                        car_type: results[i].car_type,
                        contact_phone: results[i].contact_phone,
                        contact_email: results[i].contact_email
                    };
                    arr.push(driver);
                }
                res.render('temp', {
                    "role": "driver",
                    "data": arr.reverse()
                });
            }
            client.end();
        });

    },
    get_passenger_data: function (req, res, next) {
        var client = mysql.createConnection($db.mysql_config);
        client.connect();
        console.log("**** read driver data **** ");
        client.query($sql.queryAllPassenger, function (err, results, fields) {
            if (err) {
                throw err;
            }
            if (results) {
                var arr = [];
                for (var i = 0; i < results.length; i++) {
                    var passenger = {
                        id: results[i].id,
                        pick_up_location: results[i].pick_up_location,
                        drop_down_location: results[i].drop_down_location,
                        start_date: results[i].start_date,
                        start_time: results[i].start_time,

                        name: results[i].name,
                        age: results[i].age,
                        language: results[i].language,

                        price: results[i].price,
                        seat: results[i].seat,
                        car_type: results[i].car_type,
                        contact_phone: results[i].contact_phone,
                        contact_email: results[i].contact_email
                    };
                    arr.push(passenger);
                }
                res.render('temp', {//render index page
                    "role": "passenger",
                    "data": arr.reverse()
                });
            }
            client.end();
        });

    },
    save_driver_data: function (req,res,next){
        var client = mysql.createConnection($db.mysql_config);
        var sql = $sql.insertDriver;
        client.connect();
        console.log("**** query driver data **** ");
        var post = [
            req.body.pick_up_location,
            req.body.drop_down_location,
            req.body.start_date,
            req.body.start_time,
            req.body.name,
            req.body.age,
            req.body.phone,
            req.body.email,
            req.body.language,
            req.body.price,
            req.body.seat,
            req.body.car_type
        ];
        console.log(req.body.pick_up_location);
        console.log(req.body.drop_down_location);
        console.log('////////////////');
        console.log(post);
        console.log('////////////////');
        client.query(sql,post,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
            console.log('--------------------------INSERT----------------------------');
            console.log('INSERT Driver Row:/n',result);
            console.log('-----------------------------------------------------------------\n\n');
        });
        //res.render('driver');
        client.end();
    },
    save_passenger_data: function (req,res,next){
        var client = mysql.createConnection($db.mysql_config);
        var sql = $sql.insertPassenger;
        client.connect();
        console.log("**** query passenger data ****");
        var post = [
            req.body.pick_up_location,
            req.body.drop_down_location,
            req.body.start_date,
            req.body.start_time,
            req.body.name,
            req.body.age,
            req.body.phone,
            req.body.email,
            req.body.language,
            req.body.price,
            req.body.seat,
            req.body.car_type
        ];
        console.log(req.body.pick_up_location);
        console.log(req.body.drop_down_location);
        console.log('////////////////');
        console.log(post);
        console.log('////////////////');
        client.query(sql,post,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
            console.log('--------------------------INSERT----------------------------');
            console.log('INSERT Passenger Row:',result);
            console.log('-----------------------------------------------------------------\n\n');
        });
        client.end();
    }

};