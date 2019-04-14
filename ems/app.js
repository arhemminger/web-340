/*
============================================
; Title:  EMS
; Author: Professor Krasso
; Modified by: Andrew Hemminger
; Date:   13 April 2019
; Description: EMS - User Interface Development
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'EMS project'));
console.log('');

// start program
// require statements
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const mongoose = require('mongoose');
const Employee = require('./models/employee');
const helmet = require("helmet");

// assignments
var app = express();

// mLab connection
const mongoDB = "mongodb+srv://arhemminger:FES4pNAYHagHYAGo@ems-mdaxh.mongodb.net/test?retryWrites=true";
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

// instructs express to look inside views folder for any files.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
// helmet
app.use(helmet.xssFilter());

// route
app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page"
  });
});

app.get("/", function(request, response) {
  response.render("index", {
    message:"XSS Prevention Example"
  });
});

// model
var newEmp = new Employee({
  firstName: "Malcolm",
  lastName: "Reynolds"
});

// create node server
http.createServer(app).listen(8080, function() {
  console.log("Application started and listening on port 8080");
});
// end program
