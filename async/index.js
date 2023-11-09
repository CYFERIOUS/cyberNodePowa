var buffy = require('./buffer');
var callback = require('./callback');
var readFile = require('./files').read;
var readFile2 = require('./files').read2;
var streamer = require('./streaming');
var pipes = require('./pipes');

module.exports = {
    buffy:buffy,
    callback:callback,
    readFile:readFile,
    readFile2:readFile2,
    streamer:streamer, 
    pipes:pipes
}