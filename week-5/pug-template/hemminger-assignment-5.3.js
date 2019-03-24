/*
============================================
; Title:  Pug Templates
; Author: Professor Krasso
; Modified by: Andrew Hemminger
; Date:   23 March 2019
; Description: Demonstrates the Pug view engine.
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 5.3'));
console.log('');

// start program
// require statements
var express = require("express");
var http = require("http");
var path = require("path");
var pug = require("pug");

// assignments
var app = express();

// instructs express to look inside views folder for any files.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

// route
app.get("/", function(request, response) {
  response.render("index", {
    message: "Hello, this is my first page created using Pug!"
  });
});
// create node server
http.createServer(app).listen(8080, function() {
  console.log("Application started and listening on port 8080");
});
// end program
