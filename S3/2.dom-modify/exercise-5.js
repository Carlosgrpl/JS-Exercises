/* Basandote en el siguiente html, inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */

console.log("Exercise 5");
/* para añadir algo en h2 primero lo seleccionamos con query selector */

const h2 = document.queryselector(".fn-insert-here");

/* Luego utilizamos inner HTML para crear el texto */
h2.innerHTML = "Wubba Lubba dub dub";
