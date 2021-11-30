import React, { useState, useEffect } from 'react';
import { getPokemonsData, getPokemonColor } from '../utils/fetchService';
import PokemonListItem from '../Components/PokemonListItem';
import { selectAllPokemons } from '../features/pokemons/pokemonsSlice'
import { useDispatch, useSelector } from 'react-redux';
//Redux logic to consume pokemons frm store with useSelector
export const Pokemonlist = () => {
    const [pokemons, setPokemons] = useState([]);
    let pokemonsArray = [];
    const pokemonsJSON = useSelector(state => state.pokemons);
    
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
        if(pokemonsJSON.status === "succeeded"){
            pokemonsJSON.pokemons.results && pokemonsJSON.pokemons.results.map((pokemon, i) => {
                getData(pokemon.url, i);
                console.log(pokemon)
            });
        }
    }, [pokemonsJSON]);

    const renderedPokemons = pokemons.pokemons && pokemons.pokemons.map(pokemon => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon}></PokemonListItem>
    ))
    return({renderedPokemons})
}

export default Pokemonlist;