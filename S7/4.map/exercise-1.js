/* Es un array de objetos, el más habitual */

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const usersName = users.map((user) => {
  return user.name;
});

console.log(usersName);

/* Map nos devuelve  un nuevo array con la misma longitud que el original y con los mismos valores. Pero podemos decidir que informacióno queremos que devuelva */

/* Map recibe un call back: () => { }*/
