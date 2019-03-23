/*
============================================
; Title:  EJS Templates
; Author: Professor Krasso
; Modified by: Andrew Hemminger
; Date:   23 March 2019
; Description: Demonstrates EJS 'if-else-render' operations.
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 5.2'));
console.log('');

// start program
// declarations
var express = require("express");
var http = require("http");
var path = require("path");

// assignments
var app = express();

// instructs express to look inside views folder for any files.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// data to display in the EJS page
var people = ["Addy Osmani", "Evan Hahn", "David Flanagan", "McLovin"];

// routes
app.get("/", function(request, response) {
  response.render("index", {
    names: people
  });
});
// create node server
http.createServer(app).listen(8080, function() {
  console.log("Application started and listening on port 8080");
});
// end program
