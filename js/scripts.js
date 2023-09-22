let pokemonRepository = (function () {

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

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
pokemonRepository.add({ name: "Ninetales", type: "Fire", height: 1.1, weight: 19.9 });

console.log(pokemonRepository.getAll());

let ulElement = document.querySelector('.pokemon-list');
//forEach loop
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
