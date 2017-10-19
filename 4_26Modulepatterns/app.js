// var greet = require("./greet1");
// greet();
var greet = require("./greet1");

// var greet2 = require("./greet2").greet;
// greet2();
// // greet2.greet();

var greet2 = require("./greet2").greet;
/** Because I want to call method of require object that greet is 
 * an property of require object
   */

var greet3 =require("./greet3");

greet3.greet();
/** the Greetr() function is defined as a object by the and of the codes on 
 * greet3.js file so we can simply call is greet3.greet()
 */
greet3.greeting = "Changed hello world!!";

var greet3b = require("./greet3");
greet3b.greet();

var Greet4 = require("./greet4");
var grtr = new Greet4();
grtr.greet();
/** THis pattern4 needs to be declared as a new object (Greet4()) becuase 
 * by the end of greet4.js file  we wrote module.exports = Greetr; 
 * that means we passen the Greetr sturucture itself
 * and I pulled thr greet4.js by require object, and than to invoke this 
 * we need to make it as a object
 */

var greet5 = require("./greet5").greet;
greet();
