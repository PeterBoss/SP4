var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var all = boys.concat(girls);

var commaString = all.join(",");
var hyphenString = all.join("-");

all.push("Lone", "Gitte");
all.unshift("Hans", "Kurt");

all.shift();
all.pop();

all.splice(all.indexOf("Ole"), 1);
all.splice(all.indexOf("Janne"), 1);

//if (all.length % 2 === 0) {
//    all.splice(all.length / 2 - 1, 2);
//} else {
//    all.splice(all.length / 2, 2);
//}

//all.splice(3, 2);

all.reverse();

console.log(all);
all.sort();
console.log(all);

function ignoreCase(a, b) {
    var nameA = a.toUpperCase();
    var nameB = b.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}
all.sort(ignoreCase);
console.log(all);

var capsAll = all.map(function(name) {
    return name.toUpperCase();
});

console.log(capsAll);

var filteredAll = all.filter(function(name) {
    if (name[0] === "L" || name[0] === "l") {  //haha!
        return name;
    }
});

console.log(filteredAll);

