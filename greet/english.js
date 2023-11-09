var greetings = require('./greetings.json');
function Greet(){
    this.greeting = greetings.eng,
    this.greet = function(){
            console.log(this.greeting);
    }
}

module.exports = new Greet();