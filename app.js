var greet = require('./greet');
var emgreet = require('./events');
var EventEmitter = require('events');
var config = require('./config').events;
var People = require('./prototype/person');
var Asyncro = require('./async');
var serveror = require('./server');


greet.german();
greet.italian();
greet.spanish();
greet.english.greeting = "whatsup pal";
greet.english.greet();

var Language = greet.esperanto;
var salute = new Language();
salute.greet();
var salute2 = new Language();
salute2.greeting = "saluton, amiko";
salute2.greet();

greet.japanese.greet();
greet.russian.greet();

emgreet.props('say');

var emegret = new emgreet.emiter();
emegret.on(config.GREET,()=>{
    console.log("saludando desde emisor 1");
});
emegret.on(config.GREET,()=>{
    console.log("saludando desde emisor 2");
});

emegret.emit(config.GREET);


var nodeEvent = new EventEmitter();
nodeEvent.on(config.GREET,()=>{
    console.log("saludando desde emisor de node nativo 1");
});
nodeEvent.on(config.GREET,()=>{
    console.log("saludando desde emisor de node nativo 2");
});

nodeEvent.emit(config.GREET);


var male = Object.create(People);
male.firstName = 'jhon';
male.lastName = 'jimenez';

var female = Object.create(People);
female.firstName = 'jane';
female.lastName = 'fonda';



console.log(male.greet());
console.log(female.greet());


var inheritGreeter = new emgreet.inheritous();

function heirListenerA(){
    console.log("A");
}

function heirListenerB(){
    console.log("B");
}


inheritGreeter.on('greet',heirListenerA);
inheritGreeter.on('greet',heirListenerB);

inheritGreeter.removeListener('greet',heirListenerA);

inheritGreeter.greet();

var templateLiteral = "popo";
var salutePopo = `hello ${templateLiteral}`;
console.log(salutePopo);

console.log(male.greet.call({firstName:'humberto',lastName:'popo'}));
console.log(female.greet.apply({firstName:'tatiana',lastName:'popo'}));

console.log(Asyncro.buffy);
console.log(Asyncro.buffy.toString());
console.log(Asyncro.buffy.toJSON());


var dataEst = {
    name: 'callbackData'
}

Asyncro.callback((dataEst)=>{
    console.log(dataEst.name);
},dataEst);

console.log(Asyncro.readFile);
console.log(Asyncro.readFile2);

Asyncro.streamer.readable.on('data',(chunk)=>{
    console.log(chunk.length);
    Asyncro.streamer.writable.write(chunk);
});

//Asyncro.pipes.readablePipe.pipe(Asyncro.pipes.gzip).pipe(Asyncro.pipes.compressedPipe);

//serveror.serverNormal;
//serveror.serverPerformance;
//serveror.jasonArgonaut;
serveror.routes;




