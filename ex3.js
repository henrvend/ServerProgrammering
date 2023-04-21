'use strict';

const fs = require('fs');
const http = require('http');
const uc = require('upper-case');

http.createServer(function(req, res){
    console.log('tjohej');
    let content = fs.readFileSync('./html.html').toString();
    let contentUC = uc.upperCase(content);
    res.writeHead(200, { 'Constent-Type': 'text/html'});
    res.end(contentUC);
}).listen(3002);