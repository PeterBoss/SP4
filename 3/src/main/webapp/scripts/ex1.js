document.getElementById("btn").addEventListener("click", function(evt) {
    fetch("./QuoteServlet", {method: "get"})
            .then(function (response) {
                return response.text();
            }).then(function (text) {
                document.getElementById("d1").innerText = text;
            });
});
(function(){
    setInterval(function () {
        var url = "./QuoteServlet";
        fetch(url, {method: 'get'})
            .then(function (response) {
                return response.text();
            })
            .then(function(text){
                document.getElementById("d1").innerHTML = text;
            });
    }, 2000);  //set it to 2 seconds instead of 1 hour
})();