/* Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
 */

const movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

const movie2010 = movies.find((movie) => {
  return movie.date === 2010;
});

/* === Operador de estricta igualdad */

console.log(movie2010);
