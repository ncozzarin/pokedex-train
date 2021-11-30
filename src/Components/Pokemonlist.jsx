import React, { useState, useEffect } from 'react';
import { getPokemonsData, getPokemonColor } from '../utils/fetchService';
import PokemonListItem from '../Components/PokemonListItem';
import { selectAllPokemons } from '../features/pokemons/pokemonsSlice'
import { useDispatch, useSelector } from 'react-redux';
//Redux logic to consume pokemons frm store with useSelector
export const Pokemonlist = () => {
    const [pokemons, setPokemons] = useState([]);
    let pokemonsArray = [];
    const pokemons = useSelector(state => state.pokemons);
    console.log(pokemons)
    const dispatch = useDispatch();

    const getData = async (url, i) => {
        let response = await dispatch(url);
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
        });
    }, [pokemonsJSON]);

    const renderedPokemons = pokemons.pokemons && pokemons.pokemons.map(pokemon => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon}></PokemonListItem>
    ))
    return(<h1>hola</h1>)
}

export default Pokemonlist;