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
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const Employee = require('./models/employee');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

// mLab connection
const mongoDB = 'mongodb+srv://arhemminger:FES4pNAYHagHYAGo@ems-mdaxh.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
// connection validation
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connected error: '));
db.once('open', function() {
    console.log('Application connected to mLab MongoDB instance');
});

// set up CSRF protection.
let csrfProtection = csrf({ cookie: true });

// Initialize the express application
let app = express();

// Morgan logger
app.use(logger('short'));
// Body parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// Cookie parser
app.use(cookieParser());
// Helmet
app.use(helmet.xssFilter());
// CSRF protection
app.use(csrfProtection);

/* Intercepts all incoming requests and adds a CSRF token to the response. */
app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});

// instructs express to look inside views folder for any files.
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);

// routing
/**
 * Description: Redirects users to the 'index' page.
 * Type: HttpGet
 * Request: n/a
 * Response: index.ejs, Employee[]
 * URL: localhost:8080
 */
app.get('/', function(request, response) {
  Employee.find({}, function(error, employees) {
    if (error) {
      console.log(error);
      throw error;
    } else {
      console.log(employees);
      response.render('index', {
        title: 'EMS | Home',
        employees: employees
      })
    }
  });
});

/**
 * Description: Redirects users to the 'new' page.
 * Type: HttpGet
 * Request: n/a
 * Response: new.ejs
 * URL: localhost:8080/new
 */
app.get('/new', function(request, response) {
  response.render('new', {
    title: 'EMS | New',
    message: 'New Employee Entry Page'
  });
});

/**
 * Description: Processes a form submission.
 * Type: HttpPost
 * Request: textName
 * Response: index.ejs
 * URL: localhost:8080/process
 */
app.post('/process', function(request, response) {
  // console.log(request.body.txtName);
  if (!request.body.txtName) {
    response.status(400).send('Entries must have a name');
    return;
  }

  // get the request's form data
  const employeeName = request.body.txtName;
  console.log(employeeName);

  // create a employee model
  let employee = new Employee({
    name: employeeName
  });

  // save
  employee.save(function(error) {
    if (error) {
      console.log(error);
      throw error;
    } else {
      console.log(employeeName + ' saved successfully!');
      response.redirect('/');
    }
  });
});

/**
 * Description: Redirects users to the 'home' page'
 * Type: HttpGet
 * Request: queryName
 * Response: view.ejs, Employee[] | index.ejs
 * URL: localhost:8080/view/:queryName
 */
app.get('/view/:queryName', function(request, response) {
  var queryName = request.params['queryName'];

  Employee.find({'name': queryName}, function(error, employees) {
    if (error) {
      console.log(error);
      throw error;
    } else {
      console.log(employees);

      if (employees.length > 0) {
        response.render('view', {
          title: 'EMS | View',
          employee: employees
        })
      }
      else {
        response.redirect('/list');
      }
    }
  })
});

/**
 * Description: List view employee records.
 * Type: HttpGet
 * Request: n/a
 * Response: list.ejs
 * URL: localhost:8080/list
 */
app.get("/list", function(request, response) {
  Employee.find({}, function(error, employees) {
     if (error) throw error;
     response.render("list", {
         title: "Employee List",
         employee: employees
         //employees: employees
     });
  });
});

// create node server
http.createServer(app).listen(8080, function() {
  console.log('Application started and listening on port 8080');
});

//http.createServer(app).listen(app.get('port'), function() {
//  console.log('Application started and listening on port ' + app.get('port'));
//});
// end program
