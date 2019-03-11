/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Modified by: Andrew Hemminger
; Date:   10 March 2019
; Description: Base server configurations for
;              a fully working Express application.
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 3.4'));
console.log('');

// start program
// set require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Telling Express that the 'views' directory houses the views
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

// render the home page on empty parameter url request
app.get("/", function(request, response) {
  response.render("index", {
    message: "home page"
  });
});

// render the /about page on request
app.get("/about", function(request, response) {
  response.render("about", {
    message: "about page"
  });
});

// render the /contact page on request
app.get("/contact", function(request, response) {
  response.render("contact", {
    message: "contact page"
  });
});

// render the /products page on request
app.get("/products", function(request, response) {
  response.render("products", {
    message: "products page"
  });
});

// start a node server on port 8080
http.createServer(app).listen(8080, function() {
  console.log("Application started on port %s.", 8080);
});
// end program
