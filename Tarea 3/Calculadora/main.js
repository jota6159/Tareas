// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var btns = document.getElementById("btn suma");
var btnr = document.getElementById("btn resta");
var btnm = document.getElementById("btn multi");
var btnd = document.getElementById("btn div");
/* Obtenemos el div que muestra el resultado y lo
almacenamos en una variable llamada "resultado" */
var resultado = document.getElementById("resultado")
    /* Obtenemos los dos input y los almacenamos en variables "inputUno" y "inputDos" */
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");
var valido;
// Añadimos el evento click a la variable "btn"
btns.addEventListener("click", function() {
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    validar(n1, n2);

    if (valido) {
        /* Obtenemos el valor de cada input accediendo a su atributo "value" */

        /* Llamamos a una función que permite realizar la suma de los números y los
        mostramos al usuario" */
        resultado.innerHTML = suma(n1, n2);
    } else {
        alert("no son numeros enteros");
    }
});
btnr.addEventListener("click", function() {
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    validar(n1, n2);
    if (valido) {
        /* Obtenemos el valor de cada input accediendo a su atributo "value" */

        /* Llamamos a una función que permite realizar la suma de los números y los
        mostramos al usuario" */
        resultado.innerHTML = resta(n1, n2);
    } else {
        alert("no son numeros enteros");
    }
});
btnm.addEventListener("click", function() {
    /* Obtenemos el valor de cada input accediendo a su atributo "value" */
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    validar(n1, n2);
    if (valido) {

        /* Llamamos a una función que permite realizar la suma de los números y los
        mostramos al usuario" */
        resultado.innerHTML = multi(n1, n2);
    } else {
        alert("no son numeros enteros");
    }
});
btnd.addEventListener("click", function() {
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    validar(n1, n2);
    if (valido) {
        /* Obtenemos el valor de cada input accediendo a su atributo "value" */

        /* Llamamos a una función que permite realizar la suma de los números y los
        mostramos al usuario" */
        if (n2 != 0) {
            resultado.innerHTML = div(n1, n2);
        } else {
            alert("división por 0 no esta definida");
        }
    } else {
        alert("no son numeros enteros");
    }
});

/* Función que retorna la suma de dos números */
function suma(n1, n2) {
    // Es necesario aplicar parseInt a cada número
    return parseInt(n1) + parseInt(n2);
}

function resta(n1, n2) {
    // Es necesario aplicar parseInt a cada número
    return parseInt(n1) - parseInt(n2);
}

function multi(n1, n2) {
    // Es necesario aplicar parseInt a cada número
    return parseInt(n1) * parseInt(n2);
}

function div(n1, n2) {
    // Es necesario aplicar parseInt a cada número
    return parseInt(n1) / parseInt(n2);
}

function validar(n1, n2) {
    if (n1 % 1 == 0) {
        valido = true;
    } else {
        valido = false;
    }
}