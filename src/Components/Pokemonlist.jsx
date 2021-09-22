import React, { useState, useEffect } from 'react';
import {getPokemonsData, getPokemonColor} from '../utils/fetchService';



export default function Pokemonlist ({ pokemonsJSON }) {
    const [pokemons, setPokemons] = useState([]);

    const getData = async (url) => {
        let response = await getPokemonsData(url);
        response.results.color = await getPokemonColor(response.results.name);
        setPokemons([...pokemons, response.results]);
    };

    useEffect(() => {
        getData(pokemon.url);
        
    },[pokemons]);

    return (
        <div className="grid grid-cols-3 m-3">
        <h2>Pokemon Name</h2>
            {pokemonsJSON &&
              pokemonsJSON.map((pokemon) => {
                   return (
                       <div>
                        <h1>{pokemons.name}</h1>
                        <h2>{pokemons.color}</h2>
                    </div>
              )})}
        </div>
    );
}
