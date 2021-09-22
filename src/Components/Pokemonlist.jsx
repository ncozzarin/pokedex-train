import React, { useState, useEffect } from 'react';
import {getPokemonsData, getPokemonColor} from '../utils/fetchService';



export default function Pokemonlist ({ pokemonsJSON }) {
    const [pokemons, setPokemons] = useState([]);


    useEffect(() => {
        const getData = async (url) => {
            let response = await getPokemonsData(url);
            response.results.color = await getPokemonColor(response.results.name);
            setPokemons([...pokemons, response.results]);
        };
        
    },[]);

    return (
        <div className="grid grid-cols-3 m-3">
        <h2>Pokemon Name</h2>
            {pokemonsJSON &&
              pokemonsJSON.map((pokemon) => {
                getData(pokemon.url);
                   return (
                       <h1>{pokemons.name}</h1>
              )})}
        </div>
    );
}
