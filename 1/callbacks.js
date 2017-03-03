//1
var names = ["Lars", "Peter", "Bo", "Frederik"];
var shortNames = names.filter(function (name) {
    if (name.length <= 3) {
        return name;
    }
});
names.forEach(function (name) {
    console.log(name);
});
shortNames.forEach(function (name) {
    console.log(name);
});

//2
var upperCaseNames = names.map(function (name) {
    return name.toUpperCase();
});
//3 //
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];
var newCars = cars.filter(function (car) {
    if (car.year > 1999) {
        return car;
    }
});
var volvos = cars.filter(function (car) {
    if (car.make === 'Volvo') {
        return car;
    }
});
var cheapCars = cars.filter(function (car) {
    if (car.price < 5000) {
        return car;
    }
});

function carsAgeFilter(year) {
    var newerCars = cars.filter(function (car) {
        if (car.year > year) {
            return car;
        }
    });
    return newerCars;
}
function carsMakeFilter(make) {
    var makeCars = cars.filter(function (car) {
        if (car.make === make) {
            return car;
        }
    });
    return makeCars;
}
function carsPriceFilter(price) {
    var cheaperCars = cars.filter(function (car) {
        if (car.price < price) {
            return car;
        }
    });
    return cheaperCars;
}

function filterCars(filter, arg) {
    return filter(arg);
}

//4
function getArrayAsHTML(arr) {
    var res = arr.map(function(value) {
       return "<li>" + value + "</li>";  
    });
    return "<ul>" + res.join("") + "</ul>";
}
console.log(getArrayAsHTML(names));

// Asynchronous Callbacks

// expecting a -> d -> f -> e -> b.
var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");