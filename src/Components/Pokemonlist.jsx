import React, { useState, useEffect, useSelector } from 'react';
import { getPokemonsData, getPokemonColor } from '../utils/fetchService';
import PokemonListItem from '../Components/PokemonListItem';
//Redux logic to consume pokemons frm store with useSelector
export const PokemonsList = () => {
    const pokemons = useSelector(state => state.pokemons)
    console.log(pokemons)
    //  
    const renderedPokemons = pokemons.map(pokemon => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon}></PokemonListItem>
    ))
}

const Pokemonlist = ({ pokemonsJSON }) => {
    const [pokemons, setPokemons] = useState([]);
    let pokemonsArray = [];

    const getData = async (url, i) => {
        let response = await getPokemonsData(url);
        const color = await getPokemonColor(response.species.url);
        response.color = color;
        pokemonsArray.push(response);
        if (i === pokemonsJSON.length - 1)
            setPokemons(pokemonsArray);
        return response;
    };

    useEffect(() => {
        pokemonsJSON && pokemonsJSON.map((pokemon, i) => {
            getData(pokemon.url, i);
            return pokemon.url;
        });
        return pokemonsJSON;
    }, [pokemonsJSON]);

    console.log(pokemons);
    return (
        
        <div className="grid gap-1 grid-cols-3 mx-3">
            {

            }
        </div>
    )


}

export default Pokemonlist;