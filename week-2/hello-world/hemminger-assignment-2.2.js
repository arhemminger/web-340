/*
============================================
; Title:  Hello World with Express
; Author: Professor Krasso
; Date:  2 March 2019
; Modified by: Andrew Hemminger
; Description: Exercise 2.2 – Hello World with Express
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 2.2'));
console.log('\n');

// start program
// set requirement for express and http
var express = require('express');
var http = require('http');

var app = express();

// setting console output when a request is received
app.use(function(req, res)
{
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n')
})

// setting console output when the node server is started
http.createServer(app).listen(8080, function()
{
      console.log('Application started on port %s', 8080);
});

// end program
