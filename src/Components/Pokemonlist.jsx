import React, { useState, useEffect } from 'react';
import {getPokemonsData, getPokemonColor} from '../utils/fetchService';



export default function Pokemonlist ({ pokemonsJSON }) {
    const [pokemons, setPokemons] = useState();

    let pokemonDetails;
    let pokemonColor;

    useEffect(() => {
        let pokemonsDetails = [];
        const getData = async (pokemonsJSON) => {
            pokemonsJSON && pokemonsJSON.map(pokemon) => {
                
            }
            pokemonDetails = await getPokemonsData(url);
            pokemonColor = await getPokemonColor(pokemonDetails.name)
            setPokemons(response.results);
        };
        
        getData(pokemonsJSON);
    },[]);

    return (
        <div className="grid grid-cols-3 m-3">
        <h2>Pokemon Name</h2>
            {pokemonsJSON &&
              pokemonsJSON.map((pokemon) => {
                getData(pokemon.url);
                pokemonColor = getPokemonColor(pokemonDetails.name);
                console.log(pokemonColor);
                console.log(pokemonDetails);
                   return (
                       <h1>{pokemon.url}</h1>
              )})}
        </div>
    );
}
