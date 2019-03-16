/*
============================================
; Title:  HTTP Status Codes
; Author: Professor Krasso
; Modified by: Andrew Hemminger
; Date:   16 March 2019
; Description: Demonstrates how to programmatically set
;              Node.js status codes.
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 4.3'));
console.log('');

// start program
// declarations
var express = require("express");
var http = require("http");

// assignments
var app = express();

// requests
// 404 status code page not found
app.get("/not-found", function(request, response) {
  response.status(404);
  response.json({
    error: "Resource not found."
  });
});
// 410 status code page permanently unavailable
app.get("/gone", function(request, response) {
  response.status(410);
  response.json({
    error: "Resource permanently unavailable."
  });
});
// 200 status code OK
app.get("/ok", function(request, response) {
  response.status(200);
  response.json({
    message: "Successful page load."
  });
});
// 501 status code page not implemented
app.get("/not-implemented", function(request, response) {
  response.status(501);
  response.json({
    error: "Page not implemented."
  });
});
// start node server
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
// end program
