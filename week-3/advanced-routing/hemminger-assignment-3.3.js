/*
============================================
; Title:  Advanced Routing
; Author: Professor Krasso
; Modified by: Andrew Hemminger
; Date:   10 March 2019
; Description: Demonstrates advanced routing
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 3.2'));
console.log('');

// start program
// set require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

// declare the views path and ejs engine
app.set("views", path.resolve(__dirname, "views")); // Telling Express that the 'views' directory houses the views
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

//
app.get("/:employeeId", function(request, response) {
  var employeeId = parseInt(request.params.employeeId, 10);

  response.render("index", {
    employeeId: employeeId
  });
});

// create a server and output run status.
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
// end program
