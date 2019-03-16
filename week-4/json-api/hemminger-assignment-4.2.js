/*
============================================
; Title:  JSON APIs
; Author: Professor Krasso
; Modified by: Andrew Hemminger
; Date:   16 March 2019
; Description: Demonstrates how to return JSON from
;              a Node.js server.
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 4.2'));
console.log('');

// start program
// declarations
var express = require("express");
var http = require("http");

// assignments
var app = express();

// requests
app.get("/customer/:id", function(request, response) {
  var id = parseInt(request.params.id, 10);

  response.json({
    firstName: "Douglas",
    lastName: "Crockford",
    employeeId: id
  });
});
// start node server
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
// end program
