let btn_anterior = document.getElementById("regresar")
let btn_siguiente = document.getElementById("siguiente")
var url_pokemonApi = "https://pokeapi.co/api/v2/pokemon"


btn_siguiente.addEventListener("click", function(){
    let lista_nombre_pokemones = document.getElementById("lista_pokemon");
    lista_nombre_pokemones.innerHTML = "";
    let dataAPI = fetch(url_pokemonApi) 

    dataAPI.then(resouesta => resouesta.json())
        .then(informacion_json =>{
            url_pokemonApi = informacion_json.next
            informacion_json.results.forEach(pokemon => {
                var url_img = pokemon.url
                let info_pokemon = fetch(url_img)
                info_pokemon.then(respuestaImg => respuestaImg.json())
                    .then(imagenes => {
                        lista_nombre_pokemones.innerHTML += `
                            <div class="col">
                                <div class="card">
                                    <img src="${imagenes.sprites.front_default}" alt="">
                                    <div class="cad-body">
                                        <h5 class="card-title">Nombre: ${pokemon.name}</h5>
                                        <spam>Move: ${imagenes.moves[1].move.name}</spam>
                                        <ul>
                                            <li class="d-flex justify-content-around align-items-center">
                                                <div id="lista_pokemon"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        `
                    }
                )
            })
        }
    )
})


btn_anterior.addEventListener("click", function(){
    let lista_nombre_pokemones = document.getElementById("lista_pokemon")
    lista_nombre_pokemones.innerHTML = "";
    let dataAPI = fetch(url_pokemonApi)
    dataAPI.then(resouesta => resouesta.json())
        .then(informacion_json =>{
            url_pokemonApi = informacion_json.previous
            informacion_json.results.forEach(pokemon => {
                lista_nombre_pokemones.innerHTML += `
                <div class="col">
                    <div class="card">
                        <img src="" alt="">
                        <div class="cad-body">
                            <h5 class="card-title">${pokemon.name}</h5>
                            <ul>
                                <li class="d-flex justify-content-around align-items-center">
                                    <div id="lista_pokemon"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
            })
        })
})

//18:55 => 19:11 => 19:24 => 19:40 => 19:48 => 20:00 => 21:07 => 21:11 => 21:26