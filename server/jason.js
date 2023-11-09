var http = require('http');
var fs = require('fs');

//var read = fs.readFile(__dirname + '/../data.json', 'utf-8');

var serverJSON = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type' : 'application/json'});
    var json = [
        {
            "name": "popo",
            "lastname":"chichi"
        },
        {
            "name": "ok",
            "lastname":"mijo"
        }
    ];
    res.end(JSON.stringify(json));


}).listen(2227,'127.0.0.1');

module.exports = serverJSON;