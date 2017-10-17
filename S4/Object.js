var person = {
    firstname: "John",
    lastname: "Doe",
    greet: function() {
        console.log("Hello," + this.firstName + " " +
        this.lastname);
    }
};
person.greet();

console.log(person["firstname"]); 