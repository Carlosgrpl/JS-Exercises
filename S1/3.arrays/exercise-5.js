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

const lastIndex = RickAndMortyCharacters.length - 1;
console.log(RickAndMortyCharacters[0], RickAndMortyCharacters[lastIndex]);
