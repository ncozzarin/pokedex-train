import React, { useState, useEffect } from 'react';
import {getPokemonsData, getPokemonColor} from '../utils/fetchService';
import PokemonListItem from '../Components/PokemonListItem';


const Pokemonlist = ({ pokemonsJSON }) => {
    const [pokemons, setPokemons] = useState([]);
    let pokemonsArray = [];

    const getData = async url => {
        let response = await getPokemonsData(url);
        const color = await getPokemonColor(response.species.url);
        response.color = color;
        pokemonsArray.push(response);
        setPokemons(pokemonsArray);
        return response;
    };

    useEffect(() => {
        pokemonsJSON && pokemonsJSON.map((pokemon) => {
            getData(pokemon.url);
            return pokemon.url;
        });
        return pokemonsJSON;
    },[pokemonsJSON]);

    
    return(
            pokemons && pokemons.map((pokemon) => { 
            console.log(pokemon);
            return <PokemonListItem key={pokemon.id} pokemon={pokemon}></PokemonListItem>;
            }));  
}

export default Pokemonlist;