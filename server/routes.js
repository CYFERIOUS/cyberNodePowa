var http = require('http');
var fs = require('fs');

var serverJSON = http.createServer((req, res)=>{
    if(req.url === '/'){
        fs.createReadStream(__dirname + '/../index.html').pipe(res);
    }
    else if(req.url === '/api'){
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
    }else{
        res.writeHead(404);
        res.end();
    }
}).listen(5047,'127.0.0.1');

module.exports = serverJSON;