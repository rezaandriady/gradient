var body = document.querySelector("body");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var colorcode1 = document.getElementById("colorcode1");
var colorcode2 = document.getElementById("colorcode2");

changeColor = function() {
    body.style.background = "linear-gradient(to right," 
    + color1.value + "," 
    + color2.value + ")"
    colorcode1

    colorcode1.innerHTML = color1.value;
    colorcode2.innerHTML = color2.value;
};

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
