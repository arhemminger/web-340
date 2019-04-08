/*
============================================
; Title:  Mocha and Chai
; Author: Professor Krasso
; Modified by: Andrew Hemminger
; Date:   7 April 2019
; Description: Demonstrates how to create a Chai test.
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 7.3'));
console.log('');

// start program
// declarations
var fruits = require("../fruits");

var chai = require("chai");
var assert = chai.assert;

describe("fruits", function() {
  it("should return an array of fruits", function() {
    var f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  });
});
// end program
