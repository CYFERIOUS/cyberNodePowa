var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type' : 'text/html'});
    var message = "data interpolation";
    fs.createReadStream(__dirname + '/../index.html').pipe(res);
}).listen(2229,'127.0.0.1');

module.exports = server;