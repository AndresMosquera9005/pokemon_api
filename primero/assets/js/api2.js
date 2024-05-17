let btn_anterior = document.getElementById("regresar")
let btn_siguiente = document.getElementById("siguiente")
var url_pokemonApi = "https://pokeapi.co/api/v2/pokemon"


btn_siguiente.addEventListener("click", function(){
    let lista_nombre_pokemones = document.getElementById("lista_pokemon");
    lista_nombre_pokemones.innerHTML = "";
    let dataAPI = fetch(url_pokemonApi) 

    dataAPI.then(respuesta => respuesta.json())
        .then (informacion_json.next )
})