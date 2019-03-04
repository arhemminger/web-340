/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Modified by: Andrew Hemminger
; Date:   3 March 2019
; Description: Creates a Node.js server and returns
;              the index.ejs page
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 2.4'));
console.log('\n');

// start program
// require statements
const http = require('http');
const express = require('express');
const path = require('path');

// initialize the application
let app = express();

app.set('views', path.resolve(__dirname, 'views')); // Tell Express the views are in the 'views' directory
app.set('view engine', 'ejs'); // Tell Express to use the EJS view engine

/**
 * Returns the index.ejs page
 */
app.get('/', function(request, response) {
  response.render('index', {
    firstName: 'Andrew',
    lastName: "Hemminger",
    address: "700 S 72nd St"
  });
});

/**
 * Creates a new server to listen on the port 8080.
 */
http.createServer(app).listen(8080, function() {
  console.log('EJS-Views app started on port 8080.');
});
// end program
