var divs = document.getElementsByTagName("div");  //global variable
for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "red";
}
var btn = document.getElementById("btn1");
btn.addEventListener("click", clickHandler);
function clickHandler(evt) {
    divs[0].style.backgroundColor = "yellow";
    divs[1].style.backgroundColor = "blue";
    divs[2].style.backgroundColor = "green";
}