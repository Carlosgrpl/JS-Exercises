/* Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.

Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35. */

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamersLegends = streamers.filter((streamersLegends) => {
  return (
    streamersLegends.gameMorePlayed.includes("Legends") &&
    streamersLegends.age > 35
  );
});

const newStreamersLegends = streamersLegends.map((streamersLegends) => {
  streamersLegends.gameMorePlayed =
    streamersLegends.gameMorePlayed.toUpperCase();
});

console.log(streamersLegends);
console.log(newStreamersLegends);
