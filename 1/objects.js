//1
var person = {name: "Peter", birthday: "1988-08-26", hobby: "Video games", email: "cph-pt75@cphbusiness.dk"};

for (var prop in person) {
    console.log(prop, person[prop]);
}

delete person.name;

for (var prop in person) {
    console.log(prop, person[prop]);
}

person.height = "190";

console.log(person.height);
//2
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = age;
    this.getDetails = function () {
        return "That's private, buddeh";
    };
}

var peter = new Person("Peter", "Thomsen", 28);
console.log(peter.getDetails());