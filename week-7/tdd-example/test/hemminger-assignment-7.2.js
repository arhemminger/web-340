/*
============================================
; Title:  TDD in Action
; Author: Professor Krasso
; Modified by: Andrew Hemminger
; Date:   7 April 2019
; Description: Demonstrations how to create a TDD unit test.
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 7.2'));
console.log('');

// start program
// declarations
var assert = require("assert");

// error in String#split to test the mocha chai extension.
describe("String#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});
// end program
