var greetings = require('./greetings.json');
var greeting =  greetings.jap;

function greet(){
    console.log(greeting);
}

module.exports = {
    greet: greet
}