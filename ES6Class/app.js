"use strict";
// this is the new way of ES6
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname; 
    }

    greet() {
        console.log("Hello, " + this.firstname + " " + this.lastname);
    }
}

/* //this is the way originally in javascript 
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log("Hello, " + this.firstname + " " + this.lastname);
};
*/
var john = new Person("John", "Doe");
john.greet();

var jane = new Person("Jane","Doe");
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);