var greeting = "Hello world!!!";

function greet() {
    console.log(greeting);
}

module.exports = { 
    greet: greet
}

/** Revealing module pattern:
 *     
 *  Exposing only the properties and methods you want via an returned object
 * 
 * THis is very common and clean way to structure and protect 
 * code within modules.
 */