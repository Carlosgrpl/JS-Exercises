const RickAndMortyCharacters = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

RickAndMortyCharacters.pop();
/* Elimina el último elemento del array, no necesita ningún parametro, directamente lo elimina */

let lastIndex = RickAndMortyCharacters.length - 1;

console.log(RickAndMortyCharacters[0], RickAndMortyCharacters[lastIndex]);

/* Or */

let RickAndMortyCharacters = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

RickAndMortyCharacters.pop();

console.log(RickAndMortyCharacters[0], RickAndMortyCharacters[4]);
