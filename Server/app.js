let express = require('express');
let path = require('path');
let logger = require('morgan');
let dotenv = require('dotenv').config();
let cookieparser = require('cookie-parser')

// Routes initialization
let AdminRouter= require('./Routes/Admin');
let RsvpRouter = require('./Routes/RSVP')
var app = express();

// These must go before the routes otherwise the routes wont receive the data
app.use(cookieparser())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath))

// Need to specify different route points from the one below so it doesn't return one or the other.
app.use('/api/',RsvpRouter);
app.use('/api/u', AdminRouter);

app.get('/*', ( req , res ) => res.sendFile(path.join(buildPath, "index.html")));



module.exports = app;
