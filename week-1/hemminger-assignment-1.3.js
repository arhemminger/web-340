/*
============================================
; Title:  Modules
; Author: Professor Krasso
; Date:  24 February 2019
; Modified by: Andrew Hemminger
; Description: Exercise 1.3 – Modules
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 1.3'));
console.log('\n');

// start program

// initiating variables for url and parsed url
var url = require('url');

var parsedURL = url.parse('https://www.example.com/profile?name=andrew');

// output parsed sections of the url
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

// end program
