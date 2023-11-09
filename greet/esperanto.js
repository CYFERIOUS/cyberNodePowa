var greetings = require('./greetings.json');

function Greet(){
    this.greeting = greetings.esp,
    this.greet = function(){
            console.log(this.greeting);
    }
}

module.exports = Greet;

