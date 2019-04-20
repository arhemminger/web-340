/*
============================================
; Title:  employee.js
; Author: Andrew Hemminger
; Date:   7 April 2019
; Description: File for the employee database model
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'EMS project'));
console.log('');

// start program
// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true },
  employeeId: {type: Number, required: true, unique: true },
  addedAt: {type: Date, default: Date.now }
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', EmployeeSchema);
// end program
