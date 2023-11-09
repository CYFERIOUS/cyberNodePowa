var obj = {
    greet: 'hello',
    say: 'goodbye'
}
//two ways of access a property of a method
function dinamicProp(prop){
    if(!prop){
        console.log(obj.greet)
        console.log(obj['greet']);
    }else{
        console.log(obj[prop]);
    }
   
}

module.exports = dinamicProp;

