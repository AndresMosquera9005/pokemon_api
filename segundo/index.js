var divPokemones = document.getElementById("pokemones");
let btn_anterior = document.getElementById("previous")
let btn_siguiente = document.getElementById("next")

async function fetchByUrl(url) {
    let dataAPI = await fetch(url);
    let infoJson = await dataAPI.json();
    return infoJson;
}

async function fetchAndDisplayPokemons(url) {

    const pokemonData = await fetchByUrl(url);
    pokemonPromises = pokemonData.results.map(async pokemon => {
    const infoByPokemon = await fetchByUrl(pokemon.url);
    const pokemonImage = infoByPokemon.sprites.front_default;
    const pokemonAbility = infoByPokemon.abilities[0].ability.name;
    const pokemonExperience = infoByPokemon.base_experience;
    const indiceGame =infoByPokemon.game_indices[0].game_index
    return `
    <div class="card col-lg-4" style="width: 18rem;margin: 1%;">
        <img src="${pokemonImage}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center text-color">${pokemon.name}</h5>
            <strong class="text-center text-color">Habilidad: ${pokemonAbility}</strong>
            <br>
            <strong class="text-color">Experiencia: ${pokemonExperience}</strong>
            <br>
            <strong class="text-color">Indice: ${indiceGame}</strong>
        </div>
    </div>
    `
    });
    
    const pokemonHTML = await Promise.all(pokemonPromises);
    divPokemones.innerHTML = pokemonHTML.join(''); 


}

fetchAndDisplayPokemons("https://pokeapi.co/api/v2/pokemon");
