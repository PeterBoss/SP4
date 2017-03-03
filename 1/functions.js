//1
function add(n1, n2) {
    return n1 + n2;
}
var sub = function (n1, n2) {
    return n1 - n2;
};
var cb = function (n1, n2, callback) {
//3
    if (typeof n1 === "number" && typeof n2 === "number" && typeof callback === "function") {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    } else {
        try {
            throw new Error('Whoops!');
        } catch (e) {
            console.log(e.name + ': ' + e.message);
        }
    }
};

//2
console.log(add(1, 2));         // 3
console.log(add);               // "function"
console.log(add(1, 2, 3));      // 3, ignoring the third parameter?
console.log(add(1));            // 1 + nothing = ?
console.log(cb(3, 3, add));     // the correct answer
console.log(cb(4, 3, sub));     // "4 + 3 = 1" 
console.log(cb(3, 3, add()));   // an exception, "add()" would be the returned value when you call "add"? 
console.log(cb(3, "hh", add));  // concatenating 3 and hh

//4
var mul = function (n1, n2) {
    return n1 * n2;
};

console.log(cb(3, 4, mul));
//5
console.log(cb(9, 3, function (n1, n2) {
    return n1 / n2;
}));