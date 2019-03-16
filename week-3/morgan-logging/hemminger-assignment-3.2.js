/*
============================================
; Title:  Logging
; Author: Professor Krasso
; Date:  10 March 2019
; Modified by: Andrew Hemminger
; Description: Exercise 3.2 – Logging
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 3.2'));
console.log('');

// start program
// declarations
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

// assignments
var app = express();

app.set('views', path.resolve(__dirname, 'views')); // Telling Express that the 'views' directory houses the views
app.set('view engine', 'ejs'); // Tell Express to use the EJS view engine

app.use(logger('short'));

// set a response message for any requests with / and nothing after it.
app.get('/', function(request, response){
    response.render('index', {
      message: 'My first attempt at introducing Morgan Logger!'
    });
});

// create a server and output run status.
http.createServer(app).listen(8080, function() {
    console.log('Application started on port %s', 8080);
});
// end program
