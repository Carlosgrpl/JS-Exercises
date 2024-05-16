/* Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter() y usa .reduce() para conseguir la media de sus .score. La función .find() también podría ayudarte para el contrar el genero 'RPG' en el array .gender. */

const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  {
    name: "Assassins Creed Valhalla",
    genders: ["Aventura", "RPG"],
    score: 4.5,
  },
  { name: "The Last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Legend of Zelda: Breath of the Wild",
    genders: ["RPG", "La cosa más puto bonita que he visto nunca"],
    score: 10,
  },
];

const RPGVideogames = videogames.filter((videogame) => {
  return videogame.genders.includes("RPG");
});

console.log("====================================");
console.log(RPGVideogames);
console.log("====================================");

const RPGvideogamesAverage =
  RPGVideogames.reduce((acc, currentValue) => {
    return acc + currentValue.score;
  }, 0) / RPGVideogames.length;

console.log("Average RPG Score:", RPGvideogamesAverage);
