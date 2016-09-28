var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//load routes control
var routes = require('./routes/index');
var driver = require('./routes/driver');
var passenger = require('./routes/passenger');
var send_driver_post = require('./routes/send_driver_post');
var send_passenger_post = require('./routes/send_passenger_post');
//var reg = require('./routes/reg');

//var instance of project
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//route&dir match
app.use('/', routes);
app.use('/driver', driver);
app.use('/passenger', passenger);
app.use('/driver_post', send_driver_post);
app.use('/passenger_post', send_passenger_post);
//app.use('/reg',reg);
// catch 404 and forward to error handler
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log("unable to process(app.js)")
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
