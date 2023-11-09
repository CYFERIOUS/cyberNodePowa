var Person = {
    firstName: '',
    lastName:'',
    greet:function(){
        return this.firstName + ' ' + this.lastName;
    }
}

module.exports = Person;