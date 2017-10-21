var obj = {
    name: "John Doe",
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();
obj.greet.call({ name: "Jane Doe"});
obj.greet.apply({ name: "Jane Doe"});

/** call() will invoke the function like the parenthesis do
 * and we can pass a variable to it and whatever I pass to call is 
 * what the "this" keyword will point to 
 * so we can overwrite what the "this" keyword points to. 
 * It's powerful patterns 
 * so let's say, I wrote " obj.greet.call({ name: "Jane Doe"});
 * then the object that I passed to call() method will become what the 
 * "this" key word points
 * 
 * apply() does exact same things what the call does 
 * The only difference is that when the function has parameter or parameters
 * at that time, if you use call() then you need to seperate the parameters by comma
 * and if you use apply() then you can put the parameters on an array then 
 * pass it 
 */