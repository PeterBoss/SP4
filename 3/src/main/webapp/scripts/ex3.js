(function(){
    setInterval(function () {
        var url = "./TimeServlet";
        fetch(url, {method: 'get'})
            .then(function (response) {
                return response.text();
            })
            .then(function(text){
                document.getElementById("time").innerHTML = text;
            });
    }, 1000);
})();