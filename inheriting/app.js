var EventEmitter = require("events");
var util = require("util");

function Greetr() {
    this.greeting = "Helllo world";
}

util.inherits(Greetr, EventEmitter); /** Step3, by doing utill.inherites, 
Greetr constructor can access to EventEmitter which has that emit method on it   */

Greetr.prototype.greet = function() { /** Step2, here is greet method  
    after we invoke it then it will log this.greeting which is Greetr's own 
    property then it will emit, but the emit method is not on Greetr  or it's 
    prototype, then it will find emit from the EventEmitter
    */
    console.log(this.greeting);
    this.emit("greet");
};

var greeter1 = new Greetr();

greeter1.on("greet", function() {
    console.log("Someone Greeted!");
});

greeter1.greet();
/** Step 1,  
 * Wehn I invoke this greeter1.greet(),  
 * it will look for the greet method but it is not on greeter1 object, 
 * then it will be on the prototype
 * 
 * conclusion, 
 *  So what I've done here is that 
 * I wanted to add the features on EventEmitter.prototype to my 
 * greeter1 constructor, for that i need to set a Prototype Chain here
 * 
 * Firstly, by the first two line of this file i brough those two modules 
 * then made a Greetr function constructor. 
 * 
 * Secondly, by write util.inherits(Greetr, EventEmitter);
 * I've said I will use all of those features which are on EventEmitter, 
 * on my Greetr function constructor
 * but what I'm really doing is to use those features on my greeter1 function constructor
 * 
 * Thirdly, by doing  var greeter1 = new Greetr();, connect Greetr() to my greeter1 
 * this means now, the greeter1 is on the top of Prototype Chain 
 * Thus, greeter1 can access to any of thoes prototypes
 * ex) greeter1.on(), greeter1.emit(), greeter.greet()
*/