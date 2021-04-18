var cero = document.getElementById("0");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var dividir = document.getElementById("div");
var signo = document.getElementById("signo");
var multiplicar = document.getElementById("mult");
var borrar = document.getElementById("borrar");
var restar = document.getElementById("resta");
var igual = document.getElementById("igual");
var limpiar = document.getElementById("limpiar");
var punto = document.getElementById("punto");
var sumar = document.getElementById("suma");
var display1 = document.getElementById('arriba');
var display2 = document.getElementById('medio');
var display3 = document.getElementById('abajo');


cero.onclick = function() {
    display3.textContent = display3.textContent + "0";
}

uno.onclick = function() {
    display3.textContent = display3.textContent + "1";
}
dos.onclick = function() {
    display3.textContent = display3.textContent + "2";
}
tres.onclick = function() {
    display3.textContent = display3.textContent + "3";
}
cuatro.onclick = function() {
    display3.textContent = display3.textContent + "4";
}
cinco.onclick = function() {
    display3.textContent = display3.textContent + "5";
}
seis.onclick = function() {
    display3.textContent = display3.textContent + "6";
}
siete.onclick = function() {
    display3.textContent = display3.textContent + "7";
}
ocho.onclick = function() {
    display3.textContent = display3.textContent + "8";
}
nueve.onclick = function() {
    display3.textContent = display3.textContent + "9";
}

dividir.onclick = function() {
    display2.textContent = "/";

    display1.textContent = display3.textContent;
    display3.textContent = "";
}
signo.onclick = function() {


    display3.textContent = parseFloat(display3.textContent) * -1;
}
multiplicar.onclick = function() {
    display2.textContent = "X";
    display1.textContent = display3.textContent;
    display3.textContent = "";
}
borrar.onclick = function() {
    display3.textContent = display3.textContent.slice(0, -1);


}
restar.onclick = function() {
    display2.textContent = "-";
    display1.textContent = display3.textContent;
    display3.textContent = "";
}

limpiar.onclick = function() {
    display1.textContent = "";
    display2.textContent = "";
    display3.textContent = "";
    console.log(activo + "al borrar");
    display1.textContent = display3.textContent;
}
punto.onclick = function() {
    display3.textContent = display3.textContent + ".";

}
sumar.onclick = function() {
    display2.textContent = "+";
    display1.textContent = display3.textContent;
    display3.textContent = "";

}
igual.onclick = function() {

    switch (display2.textContent) {
        case "+":
            console.log(parseFloat(display1.textContent) + parseFloat(display3.textContent));
            display3.textContent = (parseFloat(display1.textContent) + parseFloat(display3.textContent));
            display1.textContent = "";
            display2.textContent = "";
            break;
        case "-":

            display3.textContent = parseFloat(display1.textContent) - parseFloat(display3.textContent);
            display1.textContent = "";
            display2.textContent = "";
            console.log(parseFloat(display1.textContent) - parseFloat(display3.textContent) + " kie " + parseInt(display1.textContent) - parseInt(display3.textContent));
            break;
        case "X":
            display3.textContent = (parseFloat(display1.textContent) * parseFloat(display3.textContent));
            display1.textContent = "";
            display2.textContent = "";
            break;
        case "/":
            display3.textContent = (parseFloat(display1.textContent) / parseFloat(display3.textContent));
            display1.textContent = "";
            display2.textContent = "";


            break;

    }
}