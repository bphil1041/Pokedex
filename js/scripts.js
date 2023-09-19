let pokemonRepository = (function () {

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

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    function addListItem(pokemon) {
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
        listItem.appendChild(button);
        ulElement.appendChild(listItem);
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }


    return {
        getAll: function () {
            return pokemonList;
        },
        add: function (item) {
            if (typeof item === 'object' && 'name' in item) {
                pokemonList.push(item);
            } else {
                console.error('Invalid Pokemon object');
            }
        },
        addListItem: addListItem
    };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pikachu", type: ["Electric"], height: 0.3, weight: 13 });

console.log(pokemonRepository.getAll());

let ulElement = document.querySelector('.pokemon-list');
//forEach loop
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
