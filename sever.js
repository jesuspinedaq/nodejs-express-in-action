var express = require('express');
var http = require('http');
var morgan = require('morgan');
var path = require('path');

var app = express();

var publicPath = path.resolve(__dirname,'public');
app.use(express.static(publicPath));

app.use(morgan('short'));

app.use(function(req,res){
    res.writeHead(200, {"content-type":"text/plain"})
    res.end('Hello world');
});

http.createServer(app)
    .listen(3000);