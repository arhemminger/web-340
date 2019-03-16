/*
============================================
; Title:  cURL
; Author: Professor Krasso
; Modified by: Andrew Hemminger
; Date:   16 March 2019
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 4.4'));
console.log('');

// start program
// declarations
var express = require("express");
var http = require("http");

// assignments
var app = express();

// requests
// GET request returning HTTP status code 200.
app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});
// PUT request retuning custom message.
app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});
// POST request retuning custom message.
app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});
// DELETE request retuning custom message.
app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});
// start node server
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
// end program
