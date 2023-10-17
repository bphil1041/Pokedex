// Create a pokemonRepository object using IIFE
let pokemonRepository = (function () {
    // Initialize an empty array to store Pokémon data.
    let pokemonList = [];
    // Define the URL for the Pokémon API.
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // Function to add a Pokémon to the pokemonList array.
    function add(pokemon) {
        if (typeof pokemon === 'object' && 'name' in pokemon) {
            pokemonList.push(pokemon);
        } else {
            console.log('Pokemon data is not correct');
        }
    }

    // Function to retrieve all Pokémon from the pokemonList array.
    function getAll() {
        return pokemonList;
    }

    // Function to add a list item for a Pokémon to the HTML.
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        // Add a click event listener to display Pokémon details in a modal.
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
    }

    // Function to search for a Pokemon by name in the repository
    function searchPokemonByName(name) {
        return pokemonRepository.getAll().find((pokemon) => pokemon.name.toLowerCase() === name.toLowerCase());
    }

    // Event listener for the search button
    document.getElementById('searchButton').addEventListener('click', function () {
        const searchInput = document.getElementById('searchInput').value.trim();

        // Find the Pokemon in the repository
        const foundPokemon = searchPokemonByName(searchInput);

        if (foundPokemon) {
            // Display modal content for the found Pokemon
            pokemonRepository.showDetails(foundPokemon);
        } else {
            // Display an error message or handle not found scenario
            alert('Pokemon not found.');
        }
    });

    // Function to fetch a list of Pokémon from the API and populate the pokemonList array.
    function loadList() {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                // Iterate through the API response and create Pokémon objects.
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url,
                    };
                    add(pokemon);
                });
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    // Function to fetch details for a specific Pokémon.
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (details) {
                // Add details to the Pokémon object.
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types;
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    // Function to display Pokémon details in a Bootstrap modal.
    function showDetails(pokemon) {
        loadDetails(pokemon).then(() => {
            let modalTitle = $('#modal-name');
            let modalBody = $('.modal-body');

            // Set modal content using Bootstrap classes.
            modalTitle.text(pokemon.name);
            modalBody.html(`
            <img src="${pokemon.imageUrl}" alt="${pokemon.name}" class="img-fluid">
            <p><strong>height:</strong> ${pokemon.height} decimeters</p>
            <p><strong>type(s):</strong></p>
            <ul>
              ${pokemon.types.map(type => `<li>${type.type.name}</li>`).join('')}
            </ul>
          `);

            // Show the Bootstrap modal.
            $('#pokemonModal').modal('show');
        });
    }

    // Return public methods and properties.
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
    };
})();

// Event listener to ensure the DOM is fully loaded before executing the code.
document.addEventListener('DOMContentLoaded', function () {
    // Load Pokémon data from the API and create Pokémon buttons in the HTML.
    pokemonRepository.loadList().then(function () {
        pokemonRepository.getAll().forEach(function (pokemon) {
            pokemonRepository.addListItem(pokemon);
        });
    });
});
