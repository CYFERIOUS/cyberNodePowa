var EventEmitter = require('events');
var util = require('util');

function Greeter(){
    EventEmitter.call(this);
    this.greeting ='inherit world';
}

util.inherits(Greeter,EventEmitter);

Greeter.prototype.greet = function(){
    console.log(this.greeting);
    this.emit('greet');
}

module.exports = Greeter;