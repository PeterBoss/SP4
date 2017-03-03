document.getElementById("svg2").addEventListener("click", function (evt) {

    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + evt.target.id;

    fetch(url, {method: "get"})
            .then(function (response) {
                return response.text();
            }).then(function (text) {
//                for (var prop in JSON.parse(text)[0]) {
//                    console.log(prop);
//                }
        var obj = JSON.parse(text)[0];
        document.getElementById("name-div").innerText = "Country: " + obj.name;
        document.getElementById("population-div").innerText = "Population: " + obj.population;
        document.getElementById("area-div").innerText = "Area: " + obj.area;
        document.getElementById("borders-div").innerText = "Borders: " + obj.borders;
    });

    document.getElementById(evt.target.id).style.fill = "ff0000";  //they stay red, but whatevs
});