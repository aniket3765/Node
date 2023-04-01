//const http = require('http');
//const server = http.createServer(function (req, res) {
 // console.log(req)
  
//})

//server.listen(4000);

const http  = require('http');
const route = require('./route.js')
const server = http.createServer(route)

server.listen(4000);
