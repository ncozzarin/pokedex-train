
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

const getPokemonImage = async (pokemonImgUrl) => {
    const response = await fetch(`${pokemonImgUrl}`);
    const data = await response.json();
    return ;
}
export {getPokemonColor}