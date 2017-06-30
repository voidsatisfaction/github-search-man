var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
app.use('/', indexRouter);
app.use('/login',loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = app;
