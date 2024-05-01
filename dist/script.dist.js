let pokemonRepository=function(){let t=[];function e(e){"object"==typeof e&&"name"in e?t.push(e):console.log("Pokemon data is not correct")}function n(){return t}function o(t){return fetch(t.detailsUrl).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.types=e.types}).catch(function(t){console.error(t)})}function i(t){o(t).then(()=>{let e=$("#modal-name"),n=$(".modal-body");e.text(t.name),n.html(`<img src="${t.imageUrl}" alt="${t.name}" class="img-fluid"><p><strong>height:</strong> ${t.height} decimeters</p><p><strong>type(s):</strong></p><ul>${t.types.map(t=>`<li>${t.type.name}</li>`).join("")}</ul>`),$("#pokemonModal").modal("show")})}return document.getElementById("searchButton").addEventListener("click",function(){var t;let e=document.getElementById("searchInput").value.trim(),n=(t=e,pokemonRepository.getAll().find(e=>e.name.toLowerCase()===t.toLowerCase()));n?pokemonRepository.showDetails(n):alert("Must be exact match to show result.")}),{add:e,getAll:n,addListItem:function t(e){let n=document.querySelector(".pokemon-list"),o=document.createElement("li"),r=document.createElement("button");r.innerText=e.name,r.classList.add("pokemon-button"),o.appendChild(r),n.appendChild(o),r.addEventListener("click",function(){i(e)})},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){e({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:o,showDetails:i}}();document.addEventListener("DOMContentLoaded",function(){pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})})});