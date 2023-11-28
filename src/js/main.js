function showPokemon(section) {
    section.classList.add("animate-wiggle-more")
    setTimeout(() => {
        const poke = section.querySelector('.poke');
        poke.classList.remove("hidden");
        poke.classList.add("flex");
    }, 2500)
}

function cantidadPokes() {
    const container = document.getElementById("container");
    container.innerHTML = "";
    const cantidad = document.getElementById("mostrarPokes").value || 0;
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${cantidad}&offset=0`).then(function (response) {
        return response.json()
    }).then(function (data) {
        getPokemons(data.results)
    });

    function getPokemons(pokemons) {
        pokemons.forEach(pokemon => {
            container.innerHTML = `${container.innerHTML}
                    <section onclick="showPokemon(this)"
                 class="relative flex w-96 cursor-pointer animate-thrice animate-duration-[800ms] animate-ease-in-out animate-fill-backwards h-96 ">
            <article
                     class="absolute drop-shadow-2xl flex justify-center items-center shadow-red-700 top-0 rounded-tl-full rounded-tr-full bg-gradient-to-r z-10 from-red-600 via-red-800 to-red-600 w-full h-1/2 ">

            </article>
            <article
                     class="absolute bottom-0 rounded-bl-full z-10 rounded-br-full bg-gradient-to-br from-white to-gray-400 w-full h-1/2 ">
            </article>

            <article class="absolute self-center z-20 bg-black w-full h-5 flex items-center justify-center">
                <div class="w-24 flex justify-center items-center h-24 rounded-full bg-black">
                    <div
                         class=" flex justify-center items-center h-[80%] w-[80%] rounded-full bg-gradient-to-br from-gray-300 to-gray-500">
                        <div
                             class=" h-[80%] w-[80%] rounded-full bg-gradient-to-br from-gray-300 via-white to-gray-300">
                        </div>
                    </div>

                </div>
            </article>
            <article
                     class="w-full poke h-full animate-jump-in  absolute z-50 -top-[3.2rem] hidden gap-5  animate-once animate-duration-[400ms] animate-ease-out flex-col justify-center  ">
                <section
                         class="self-start shadow-2xl rounded-md shadow-yellow-600 font-pixel border-b-8 flex justify-center items-center border-blue-800 text-white font-semibold text-2xl bg-gradient-to-br from-yellow-600 to-yellow-300 w-full h-1/6">
                    <span>${pokemon.name}</span> - Pokémon Nro ${getPokeId(pokemon.url)}

                </section>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokeId(pokemon.url)}.png"
                     class=" self-center w-1/2 h-1/2 drop-shadow-[3px_3px_2px_rgb(255,0,0)] shadow-red-800" alt="">
            </article>
        </section>

`
        });
    }

}

function getPokeId(url) {
    return url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")
}