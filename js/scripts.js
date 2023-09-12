// Pokemon Objects Array
let pokemonList = [
    {
        name: 'Bulbasaur',
        type: ['Grass', 'Poison'],
        height: 0.7,
        weight: 6.9
    },
    {
        name: 'Pikachu',
        type: 'Electric',
        height: 0.4,
        weight: 6
    },
    {
        name: 'Abra',
        type: 'Psychic',
        height: 0.9,
        weight: 19.5
    }
]

for (let i=0; i < pokemonList.length; i++){
    let pokemonName = pokemonList[i].name;
    let pokemonHeight = pokemonList[i].height;

    document.write(pokemonName);
}
