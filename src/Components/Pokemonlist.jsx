import React, { useState, useEffect } from 'react';
import {getPokemonsData} from '../utils/fetchService';



export default function Pokemonlist ({ pokemonsJSON }) {
    const [pokemons, setPokemons] = useState();

    useEffect(() => {


            
        
    },[]);

    return (
        <div className="grid grid-cols-3 m-3">
        <h2>Pokemon Name</h2>
            {pokemonsJSON &&
              pokemonsJSON.map((pokemon) => {
                const pokemonDetails = getPokemonsData(pokemon.url);
                console.log(pokemonDetails)
                   return (
                       <h1>{pokemon.url}</h1>
              )})}
        </div>
    );
}
