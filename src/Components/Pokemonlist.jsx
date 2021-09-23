import React, { useState, useEffect } from 'react';
import {getPokemonsData, getPokemonColor} from '../utils/fetchService';



export default function Pokemonlist ({ pokemonsJSON }) {
    const [pokemons, setPokemons] = useState([]);

    const getData = async url => {
        let response = await getPokemonsData(url);
        console.log(response);
        const color = await getPokemonColor(response.id);
        response.color = color;
        setPokemons([...pokemons, response]);
    };

    useEffect(() => {
        console.log(pokemonsJSON);
        console.log(pokemonsJSON[1].url);
        pokemonsJSON && pokemonsJSON.map((pokemon) => {
            getData(pokemon.url);
        });

    },[pokemonsJSON]);

    return (
        <div className="grid grid-cols-3 m-3">
        <h2>Pokemon Name</h2>
        <div>
        {pokemons && pokemons.map((pokemon) => {
                   return (
                       <div>
                        <h1>{pokemon.name}</h1>
                        <h2>{pokemon.color}</h2>
                    </div>
              )})}
        </div>
        </div>
    );
}
