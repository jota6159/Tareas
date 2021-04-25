var autor = document.getElementById("autor");
var contenido = document.getElementById("contenido");
var boton = document.getElementById("enviar");
var comentario1 = document.getElementById("arriba");
var comentario2 = document.getElementById("medio1");
var comentario3 = document.getElementById("medio2");
var comentario4 = document.getElementById("abajo");
var display1 = document.getElementById("display1");
var display2 = document.getElementById("display2");
var display3 = document.getElementById("display3");
var display4 = document.getElementById("display4");
let comentarios = [];
let autores = [];
let displays = [document.getElementById("display1"), document.getElementById("display2"), document.getElementById("display3"), document.getElementById("display4")]
boton.onclick = function() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    console.log(display1.innerHTML);
    if (autor.value.toString().length > 2 && contenido.value.toString().length != 0) {
        if (comentarios.length < 4) {
            autores.unshift(autor.value);
            comentarios.unshift(contenido.value);
            comentarios.forEach((com, index) => {
                (displays[index]).innerHTML =  `<div class="display"><div><h2>${autores[index]}</h2><span class="fecha">${hoy.toLocaleDateString()}</span></div><div class="comentario">${com}</div>  </div> `;
            });
        } else {
            autores.unshift(autor.value);
            comentarios.unshift(contenido.value);
            autores.pop();
            comentarios.pop();
            console.log(" =====");
            comentarios.forEach((com, index) => {
                (displays[index]).innerHTML =  `<div class="display"><div><h4>${autores[index]}</h4></div>${com}<div></div>  </div> `;
                console.log(index + 1, com);
            });
        }
    } else if (autor.value.toString().length <= 2) {
        alert("Cantidad mínima de caracteres de autor es 3");
    } else if (contenido.value.toString().length == 0) {
        alert("El comentario no puede ser vacío");
    }



}