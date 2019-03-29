/*
============================================
; Title:  Mongoose
; Author: Professor Krasso
; Modified by: Andrew Hemminger
; Date:   28 March 2019
; Description: Using the Mongoose extension
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 6.3'));
console.log('');

// start program
// declarations
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

// mLab connection
var mongoDB = "mongodb+srv://arhemminger:FES4pNAYHagHYAGo@ems-mdaxh.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, {
  useMongoClient: true
});
// connection validation
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

// application
var app = express();
app.use(logger("short"));

// create server
http.createServer(app).listen(8080, function() {
  console.log("Application connected to port 8080");
});
// end program
