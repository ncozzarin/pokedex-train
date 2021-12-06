
const getPokemons = async (limitNumber, offsetNumber) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limitNumber}&offset=${offsetNumber}`);
    const data = await response.json();
    return data;
}
export {getPokemons}

const getPokemonsData = async (pokemonUrl) => {
    const response = await fetch(`${pokemonUrl}`);
    const data = await response.json();
    return data;
}
export {getPokemonsData}

const getPokemonColor = async (pokemonSpeciesUrl) => {
    const response = await fetch(`${pokemonSpeciesUrl}`);
    const data = await response.json();
    return data.color.name;
}
export {getPokemonColor}

const getPokemonDescription = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/characteristic/${id}`);
    const data = await response.json();
    //1 FOR SPANISH
    return data.descriptions[1].description;
}
export {getPokemonDescription}