var EventEmiter = require("events");
var util = require("util");

function Greetr() {
    EventEmitter.call(this);
    this.greeting = "Hello world!";
}

util.inherits(Greetr, EventEmiter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ": " + data);
    this.emit("greet", data);
}

var greeter1 = new Greetr();

gretter1.on("greet", function(data) {
    console.log("Someone greeted!: " + data);
});

greeter1.greet("Tony");  