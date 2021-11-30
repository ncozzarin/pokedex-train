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
    console.log(pokemonsJSON)
    const dispatch = useDispatch();
    
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
        console.log(pokemonsJSON.status)
        if(pokemonsJSON.status === "succeeded"){
            console.log(pokemonsJSON.pokemons.results)
            pokemonsJSON.pokemons.results && pokemonsJSON.pokemons.results.map((pokemon, i) => {
                getData(pokemon.url, i);
                console.log(pokemon)
            });
        }
    }, [pokemonsJSON]);

    const renderedPokemons = pokemons.pokemons && pokemons.pokemons.map(pokemon => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon}></PokemonListItem>
    ))
    return(<h1>HOLA</h1>)
}

export default Pokemonlist;