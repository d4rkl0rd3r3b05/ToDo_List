//General Dependencies===============================================
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//DB Dependencies====================================================
var mongoose = require('mongoose');


//Configuration Dependencies=========================================
var mongoDB = require('./config/config-mongo-db');


//Configurations=====================================================
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));


//DB Connection======================================================
mongoose.connect(mongoDB.url);


//Routes=============================================================
var api = require('./routes/api/api-target')(app);
var appRouters = require('./routes/application/route-application')(app);


module.exports = app;
