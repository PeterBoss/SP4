document.getElementById("btn").addEventListener("click", function () {
    fetch("./PersonServlet", {method: "get"})
            .then(function (response) {
                return response.text();
            }).then(function (text) {
        alert(text);
    });
});
var form = document.getElementById("person-form");
form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var name = document.getElementById("name").innerText;
    var age = document.getElementById("age").innerText;
    console.log(name);

    var promise = fetch("./PersonServlet", {
        method: "post",
        body: JSON.stringify({
            name: name,
            age: age
        })
    });
    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        alert(text);
    });
});
