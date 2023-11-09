var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/../salute.txt", {
  encoding: "utf-8",
  highWaterMark: 16 * 1024,
});
var writable = fs.createWriteStream(__dirname + "/../saluteCopy.txt");

module.exports = {
  readable:readable,
  writable:writable
}

