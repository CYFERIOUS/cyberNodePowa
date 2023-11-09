var Greet = function(callback, data){
    console.log("hello callback");
    callback(data);
}

module.exports = Greet;