/*
============================================
; Title:  EMS
; Author: Professor Krasso
; Modified by: Andrew Hemminger
; Date:   13 April 2019
; Description: EMS - User Interface Development
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'EMS project'));
console.log('');

// start program
// require statements
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const Employee = require('./models/employee');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

// set up CSRF protection.
let csrfProtection = csrf({ cookie: true });

// Initialize the express application
let app = express();

// mLab connection
const mongoDB = 'mongodb+srv://arhemminger:FES4pNAYHagHYAGo@ems-mdaxh.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
// connection validation
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connected error: '));
db.once('open', function() {
    console.log('Application connected to mLab MongoDB instance');
});

// instructs express to look inside views folder for any files.
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);

// Morgan logger
app.use(logger('short'));
// Body parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// Cookie parser
app.use(cookieParser());
// Helmet
app.use(helmet.xssFilter());
// CSRF protection
app.use(csrfProtection);

/* Intercepts all incoming requests and adds a CSRF token to the response. */
app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});

// route
app.get('/', function(request, response) {
  response.render('index', {
    title: 'Home page'
  });
});

app.get('/', function(request, response) {
  response.render('index', {
    message:'XSS Prevention Example'
  });
});

// model
var newEmp = new Employee({
  firstName: 'Malcolm',
  lastName: 'Reynolds'
});

// create node server
http.createServer(app).listen(8080, function() {
  console.log('Application started and listening on port 8080');
});
// end program
