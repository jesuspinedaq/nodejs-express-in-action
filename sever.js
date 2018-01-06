var express = require('express');
var http = require('http');

var app = express();

app.use(function(req,res){
    console.log('Income request to:', req.url);
    res.end('hello');
});

http.createServer(app)
    .listen(3000);