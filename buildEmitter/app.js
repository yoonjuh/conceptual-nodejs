// var Emitter = require("/emitter");

// var emtr = new Emitter();

// emtr.on("greet", function() {
//     console.log("Somewhere, someone said hello.");
// });

// emtr.on("greet", function() {
//     console.log("A greeting occurred!");
// });

// console.log("Hello!");
// emtr.emit("greet");
//===========================================================================
var whatTheHeck = require('./emitter');

var wth = new whatTheHeck();

wth.heck("Coolest",function() {
    console.log('the 3rd Nov will be amaizng');
});

wth.heck("Coolest", function() {
    console.log("A CHellenging occurred!");
});

console.log("Hello");
wth.cool("Coolest");

//=============================================================================

// var Emitter = require('./emitter');

// var emtr = new Emitter();

// emtr.on("greet",function() {
//     console.log("Somebody asked me, that do you understand this?");
// });

// emtr.on("greet",function() {
//     console.log("A questioning is occurred!!");
// }); 
// console.log("Do you understand this?");
// emtr.emit("greet");