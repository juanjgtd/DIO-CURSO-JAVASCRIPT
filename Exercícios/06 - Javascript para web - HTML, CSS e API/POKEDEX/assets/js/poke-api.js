const pokeApi = {};

function loadStats(pokeDetail, stat) {
    return pokeDetail.stats.filter(typeSlot => (typeSlot.stat.name===stat))[0].base_stat
}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    const abilities = pokeDetail.abilities.map((typeSlot) => typeSlot.ability.name)
    const [ability] = abilities
    pokemon.abilities = abilities
    pokemon.ability = ability

    pokemon.species = pokeDetail.species.name
    pokemon.height = (pokeDetail.height * 10)
    pokemon.weight = (pokeDetail.weight / 10)
    pokemon.hp = loadStats(pokeDetail, 'hp')
    pokemon.attack = loadStats(pokeDetail, 'attack')
    pokemon.defense = loadStats(pokeDetail, 'defense')
    pokemon.spatk = loadStats(pokeDetail, 'special-attack')
    pokemon.spdef = loadStats(pokeDetail, 'special-defense')
    pokemon.speed = loadStats(pokeDetail, 'speed')


    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    
    return fetch(url) 
        .then((response) => response.json()) 
        .then((jsonBody) => jsonBody.results) 
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
}