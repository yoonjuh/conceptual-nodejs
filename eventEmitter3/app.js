var Greetr = require("./greetr");

// "use strict";

// var EventEmitter = require("events");
// // var util = require("util");

// class Greetr extends EventEmitter {
//     constructor() {
//         super();
//         this.greeting = "Hello world!";
//     }

//     greet(data) {
//         console.log(`${this.greeting}: ${data}`);
//         this.emit("greet", data);
//     }
// }

// // // extends EventEmitter, super() == EventEmitter.call(this)

// function Greetr() {
//     EventEmitter.call(this);
//     this.greeting = "Hello world!";
// }
// util.inherits(Greetr, EventEmitter);

// Greetr.prototype.greet = function(data) {
//     console.log(this.greeting + ": " + data);
//     this.emit("greet", data);
// }

var greeter1 = new Greetr();

greeter1.on("greet", function(data) {
    console.log("Someone greeted!: " + data)
});

greeter1.greet("Tony");