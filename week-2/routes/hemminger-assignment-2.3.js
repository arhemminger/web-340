/*
============================================
; Title:  Routes
; Author: Professor Krasso
; Date:  3 March 2019
; Modified by: Andrew Hemminger
; Description: Exercise 2.3 – Routes
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 2.3'));
console.log('\n');

// start program
// setting requirements for express and http
var express = require('express');
var http = require('http');

var app = express();

// routes to handle page requests with output for validation.
app.get('/', function(req, res){
    res.end('Welcome to the homepage.\n');
});

app.get('/about', function(req, res){
    res.end('Welcome to the about page.\n');
});

app.get('/contact', function(req, res){
    res.end('Welcome to the contact page.\n');
});
// return 404 on an invalid request
app.use(function(req, res)
{
    res.statsCode= 404;
    res.end('404!\n');
});

// server created to start listening on port 3000 for incoming traffic.
http.createServer(app).listen(3000, function() {
  console.log('Application started on port %s', 3000);
});

// end program
