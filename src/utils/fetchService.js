
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

const getPokemonsColor = async (pokemonId) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-color/${pokemonId}`);
    const data = await response.json();
    return data;
}
export {getPokemonsColor}