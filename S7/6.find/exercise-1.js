/* Dado el siguiente array, usa .find() para econtrar el número 100.
 */

/* FIND: Muy util para buscar un elemento dentro de un array de objetos */

const numbers = [32, 21, 63, 95, 100, 67, 43];

const hundred = numbers.find((number) => {
  return number === 100;
});

console.log("====================================");
console.log(hundred);
console.log("====================================");
