
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var varosRouter = require('./routes/varos_route')
var authRouter = require("./routes/authRouter")

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const cors = require('cors')
var corsOptions = {
    "credentials" : true,
    origin: "http://localhost:3000"

}
app.use(cors(corsOptions))
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/varos', varosRouter)
app.use("/auth", authRouter)
module.exports = app;
