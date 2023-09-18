// Pokemon Objects Array

let pokemonRepository = (function (){
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
    }];
    return {
        getAll: function() {
            return pokemonList;
        },
        add: function(item){
            if (typeof item === 'object' && 'name' in item) {
                pokemonList.push(item);
            } else {
                console.error('Invalid Pokemon object');
            }
        }
    };
})();

//forEach loop
pokemonRepository.getAll().forEach(function(pokemon) {
    console.log(pokemon.name + ' is ' + pokemon.height + ' meters tall and ' + pokemon.weight + ' kilograms');
    



// //forEach loop
// pokemonList.forEach(function(pokemon) {
//     console.log(pokemon.name + ' is ' + pokemon.height + ' meters tall and ' + pokemon.weight + ' kilograms');
//     document.write(pokemon.name + ' is ' + pokemon.height + ' meters tall and ' + pokemon.weight + ' kilograms')
// });

// //Iterate the pokemon objects in the array
// for (let i=0; i < pokemonList.length; i++){
//     //Define pokemonName and pokemonHeight
//     let pokemonName = pokemonList[i].name;
//     let pokemonHeight = pokemonList[i].height;
//     let thresholdHeight = 1.0;
//     let label = '';
    
//     //Is pokemon height above threshold?
//     if (pokemonHeight > thresholdHeight){
//         label = " That's a big pokemon!";
//     }

//     //Print pokemon name and height to the Dom
//     document.write(`${pokemonName} (height: ${pokemonHeight}${label})<br>`);
// }

// function divide(dividend, divisor){
//     if(divisor === 0){
//         return ("You're trying to divide by Zero")
//     }else {
//             let result = dividend / divisor;
//             return result; 
//         }
    

// }