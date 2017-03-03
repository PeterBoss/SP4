//1
function Person(name) { //capitalized starting because constructor
    this.name = name;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + this.name);  //Explain this  ->   different scope. (function scope?)
    }, 2000);
}
Person("Kurt Wonnegut");
console.log("I'm global: " + name);  //Explain this  ->  because it's a global scope variable

//2
var p = new Person("Kurt Wonnegut");
console.log("I'm global: " + name);  //What’s different ?  -> nothing in the output. but p.name is now set as Kurt Wonnegut

//3   three functions with the same name... but it works? javascript is weird (the one at the bottom gets used)
function Person(name) {
    this.name = name;
    var self = this;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + self.name);
    }, 2000);
}

function Person(name) {
    this.name = name;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + this.name);
    }.bind(this), 2000);
}

//4
var greeter = function () {
    console.log(this.message);
};
var comp1 = {message: "Hello World"};
var comp2 = {message: "Hi"};

var g1 = greeter.bind(comp1);//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2);//And here another “this”
setTimeout(g1, 500);
setTimeout(g2, 1000);

greeter();