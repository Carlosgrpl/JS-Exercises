/* Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript. */

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

/* Donde empieza donde acaba y lo que hace */
for (let i = 0; i > products.length; i++) {
  console.log(products.includes("Camiseta"));
}
