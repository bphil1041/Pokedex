let pokemonRepository = (function () {

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        if (typeof pokemon === "object" &&
            "name" in pokemon) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("pokemon-button");
        listpokemon.appendChild(button); 
        pokemonList.appendChild(listpokemon);
        button.addEventListener("click", function(event){
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
            });
        }).catch(function(e){
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function(response){
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function(e) {
            console.error(e);
        });
    }
    
    //modal
   function showDetails(pokemon) {
        loadDetails(pokemon).then(() => {
            let modal = document.getElementById('modal');
            let modalName = document.getElementById('modal-name');
            let modalHeight = document.getElementById('modal-height');
            let modalImage = document.getElementById('modal-image');
            
            

            modalName.textContent = pokemon.name;
            modalHeight.textContent = 'Height: ' + pokemon.height + ' meters';
            modalImage.src = pokemon.imageUrl;
            

            modal.style.display = 'block';

            let closeButton = document.querySelector('.close');
            closeButton.addEventListener('click', function () {
                modal.style.display = 'none';
            });

            window.addEventListener('click', function (event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });

            window.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    modal.style.display = 'none';
                }
            });
        });   
   }

   return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
   };
})();

document.addEventListener("DOMContentLoaded", function () {
    pokemonRepository.loadList().then(function () {
        pokemonRepository.getAll().forEach(function (pokemon) {
            pokemonRepository.addListItem(pokemon);
                console.log(pokemon.imageUrl);
        });
    });
});