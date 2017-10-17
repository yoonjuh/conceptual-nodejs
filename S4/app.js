// //function statement 
// function greet() {
//     console.log("hi");
// }
// greet();

// // functions are first-class
// function logGreeting(fn) {
//     fn();
// }
// logGreeting(greet);

// //function expression
// var greetMe = function() {
//     console.log("Hi Tony");
// }
// /*the variable greetMe is the same thing with 
// var grretMe = "Hi Tony"; 
// This is very powerful and no languages have this kind of feature but javascript does  */
// greetMe();

// // it;s first = class 
// logGreeting(greetMe);

// // use a function expression on the fly
// logGreeting(function() {
//     console.log("Hello Tony!");
// });
// ===========================================================================
// require("/.gret.js");
var greet = require('./greet' );

greet();