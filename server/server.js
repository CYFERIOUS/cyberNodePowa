var http = require('http');
var fs = require('fs');

var read = fs.readFileSync(__dirname + '/../index.html', 'utf-8');

var server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type' : 'text/html'});
    var message = "data interpolation";
    read = read.replace('{message}', message);
    res.end(read);


}).listen(2209,'127.0.0.1');

module.exports = server;