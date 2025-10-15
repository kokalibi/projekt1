var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var personsRouter = require('./routes/persons');
var markaRouter = require('./routes/markaRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const cros = require('cors');
var corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            
}
app.use(cros(corsOptions)); 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/persons.json', personsRouter);
app.use('/marka', markaRouter);

module.exports = app;
