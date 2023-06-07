//const http = require('http');
//const server = http.createServer(function (req, res) {
 // console.log(req)
  
//})

//server.listen(4000);

//const http  = require('http');
//const route = require('./route.js')
//const server = http.createServer(route)

//server.listen(4000);
const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('middleware');
    next();
});

app.use((req, res, next)=>{
    console.log('middleware 2');
    res.send('<h1>hello Express</h1>')
});

app.listen(3000);
