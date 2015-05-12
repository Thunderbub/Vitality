#!/usr/bin/nodejs
var http = require('http');
var server = http.createServer(function(req,res){
res.writeHead (200);
res.end('Hello World');
});
server.listen(8080);
console.log('Hello World');
console.log('Server running at http://localhost:8080/');http
