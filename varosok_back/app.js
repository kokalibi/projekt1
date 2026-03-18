var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var lakossagRouter = require('./routes/lakossag');
var varosokRouter = require('./routes/varosok');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/lakossag', lakossagRouter);
app.use('/varosok', varosokRouter);

module.exports = app;
