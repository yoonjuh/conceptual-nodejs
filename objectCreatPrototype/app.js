/** This person variable is a prototype that can be a base of other 
 * Objects. the objects connected with this prototype can be accessible 
 * to all propertise of this prototype
 */

var person = {
    firstname: "",
    lastname: "",
    greet: function() {
        return this.firstname + " " + this.lastname;
    }
}
/** Let's say john is object1 and jane is object2,
 * by doing Object.create(person), now object1 can access to thoes all 
 * properties of person(prototpe), Also thess objects could set their own propertise
 * by using prototype's properties
 */
var john = Object.create(person);
john.firstname = "John";
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = "Jane";
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());
console.log(person.greet()); // this line 