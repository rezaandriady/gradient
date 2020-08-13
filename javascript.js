var colorcode1 = document.getElementById("colorcode1");
var colorcode2 = document.getElementById("colorcode2");

returnCondition = function() {
    if (color1.value === "#0d0863") {
        colorcode1.innerText = "LHO OIYA INI TANGGAL LAHIR PEL!";
        if (color2.value === "#0e0862") {
            colorcode2.innerText = "LHO INI TANGGAL LAHIR RZ!";
            hbdButton();
        }
        else if(color2.value === "#0d0863") {
            colorcode2.innerText = "KENAPA KAMU EGOIS BAYIK???";
        }
        else {
        }
    }
    else if(color1.value === "#0e0862") {
        colorcode1.innerText = "ASIK TANGGALNYA RZ DULUANNN!";
        if (color2.value === "#0d0863") {
            colorcode2.innerText = "YANG INI TANGGALNYA PELANGIIIIII!"
            hbdButton();
        }
        else if(color2.value === "#0e0862") {
            colorcode2.innerText = "LHO KOK RZ LAGI? ASIKKK"
        }
        else {
        }
    }
}

var body = document.querySelector("body");
changeColor = function() {
    body.style.background = "linear-gradient(to right," 
    + color1.value + "," 
    + color2.value + ")"

    colorcode1.innerText = color1.value;
    colorcode2.innerText = color2.value;
    returnCondition();
};

var h1 = document.querySelector("h1");
hbdButton = function() {
    var hbdbuttonz = document.createElement("button");
    hbdbuttonz.innerHTML = "Secret Button!";
    hbdbuttonz.onclick = hbdPel;
    hbdbuttonz.className = "hbd"
    h1.appendChild(hbdbuttonz);
}

hbdPel = function() {
    var secret = document.querySelector(".secret");
    secret.classList.add("wrapper");
    var container = document.querySelector(".container");
    container.parentNode.removeChild(container);
    h1.innerText = "SELAMAT ULANG TAUN BAYIKKK BESARRRRRRRR!!!";
    var tersembunyi = document.querySelector(".tersembunyi");
    tersembunyi.classList.toggle("hidden")
};

var span1 = document.querySelector(".span1");
span1.onclick = function(event) {
    span1.style.textDecoration = "line-through";
    var ramai = document.querySelector(".ramai");
    ramai.classList.toggle("hidden");
    checkCoret();
}

var span2 = document.querySelector(".span2")
span2.onclick = function(event) {
    span2.style.textDecoration = "line-through";
    var banner = document.querySelector(".banner");
    banner.classList.toggle("hidden");
    checkCoret();
}

var span3 = document.querySelector(".span3");
span3.onclick = function(event) {
    span3.style.textDecoration = "line-through";
    var pel1 = document.querySelector(".pel1");
    pel1.classList.toggle("hidden");
    checkCoret();
}

var span4 = document.querySelector(".span4");
span4.onclick = function(event) {
    span4.style.textDecoration = "line-through";
    var baloon = document.querySelector(".baloon");
    baloon.classList.toggle("hidden");
    checkCoret();
}

var span5 = document.querySelector(".span5");
span5.onclick = function(event) {
    span5.style.textDecoration = "line-through";
    var pel2 = document.querySelector(".pel2");
    pel2.classList.toggle("hidden");
    checkCoret();
}

var span6 = document.querySelector(".span6");
span6.onclick = function(event) {
    span6.style.textDecoration = "line-through";
    var tumpeng = document.querySelector(".tumpeng");
    tumpeng.classList.toggle("hidden");
    checkCoret();
}

var span7 = document.querySelector(".span7");
span7.onclick = function(event) {
    span7.style.textDecoration = "line-through";
    var pel3 = document.querySelector(".pel3");
    pel3.classList.toggle("hidden");
    checkCoret();
}

var span8 = document.querySelector(".span8");
span8.onclick = function(event) {
    span8.style.textDecoration = "line-through";
    var kaya = document.querySelector(".kaya");
    kaya.classList.toggle("hidden");
    checkCoret();
}

grantCoret = function() {
    console.log("reached")
    var makacibuttonz = document.createElement("button");
    console.log("reached1")
    makacibuttonz.innerHTML = "Secreter Button!";
    console.log("reached2")
    makacibuttonz.onclick = makaciPel;
    console.log("reached3")
    makacibuttonz.className = "makaci"
    console.log("reached4")
    tersembunyi.appendChild(makacibuttonz);
    console.log("reached5")
}

makaciPel = function() {

}

var color1 = document.getElementById("color1");
color1.addEventListener("input", changeColor);

var color2 = document.getElementById("color2");
color2.addEventListener("input", changeColor);
