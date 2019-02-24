/*
============================================
; Title:  Hello World
; Author: Professor Krasso
; Date:  24 February 2019
; Modified by: Andrew Hemminger
; Description: Exercise 1.5 – Hello World
;===========================================
*/
var header = require('../hemminger-header.js');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 1.5'));
console.log('\n');

// start program

var http = require("http");

function processRequest(req, res) {
    var body = "This is my Hello World assignment output! \n**Stay tuned for more to come!**";

    var contentLength = body.length;

    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });

    res.end(body);
}

var s = http.createServer(processRequest);

s.listen(8080);

// end program
