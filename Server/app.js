var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let dotenv = require('dotenv').config();


// Routes initialization
let AdminRouter= require('./Routes/Admin');
let RsvpRouter = require('./Routes/RSVP');

let mysql = require('./db/MySQL');


var app = express();

app.use(express.static("../build"));
app.get('/', ( req , res ) => {
  res.sendFile('build/index.html');
});



// Cors Initialization
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',AdminRouter);
app.use('/',RsvpRouter);

module.exports = app;
