var fs = require('fs');

var read = fs.readFileSync(__dirname + '/../salute.txt', 'utf-8');
var read2 = fs.readFile(__dirname + '/../salute.txt', 'utf-8', (err,data)=>{
    console.log("async"+data);
});

module.exports = {
    read,
    read2
}