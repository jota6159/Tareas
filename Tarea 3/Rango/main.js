var btn = document.getElementById("btn");

var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");
var resultado = document.getElementById("resultado")
btn.addEventListener("click", function() {
    /* Obtenemos el valor de cada input accediendo a su atributo "value" */
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    /* Llamamos a una función que permite realizar la suma de los números y los
    mostramos al usuario" */
    resultado.innerHTML = Math.round(Math.random() * (n1, n2) + n1);
});