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
        name: 'Gengar',
        type: ['Ghost', 'Poison'],
        height: 1.5,
        weight: 40.5
    }
]

for (let i=0; i < pokemonList.length; i++){
    //Define pokemonName and pokemonHeight
    let pokemonName = pokemonList[i].name;
    let pokemonHeight = pokemonList[i].height;


    //Print pokemon name and height to the Dom
    document.write(pokemonName, pokemonHeight);
}
