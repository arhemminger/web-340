/*
============================================
; Title:  fruits
; Author: Professor Krasso
; Modified by: Andrew Hemminger
; Date:   7 April 2019
; Description: Function used in a Chai test.
;===========================================
*/
var header = require('./hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 7.3'));
console.log('');

// start program
function fruits(str) {
  return str.split(",");
}

module.exports = fruits;
// end program
