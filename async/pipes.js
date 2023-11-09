var fs = require("fs");
var zlib = require('zlib');

var readablePipe = fs.createReadStream(__dirname + "/../salute.txt");
var writablePipe = fs.createWriteStream(__dirname + "/../saluteCopy.txt");
var gzip = zlib.createGzip();
var compressedPipe = fs.createWriteStream(__dirname + "/../salutePipe.txt.gz");

module.exports = {
  readablePipe:readablePipe,
  writablePipe:writablePipe,
  compressedPipe:compressedPipe,
  gzip:gzip
}

