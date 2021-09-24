import React, { useState, useEffect } from 'react';
import {getPokemonsData, getPokemonColor} from '../utils/fetchService';
import PokemonListItem from '../Components/PokemonListItemComponent';


export default function Pokemonlist ({ pokemonsJSON }) {
    const [pokemons, setPokemons] = useState([]);

    const getData = async url => {
        let response = await getPokemonsData(url);
        const color = await getPokemonColor(response.species.url);
        response.color = color;
        setPokemons([...pokemons, response]);
    };

    useEffect(() => {
        pokemonsJSON && pokemonsJSON.map((pokemon) => {
            getData(pokemon.url);
        });

    },[pokemonsJSON]);

    return (
        pokemons && pokemons.map((pokemon) => {
            <h1>{pokemon.id}</h1>        
        }));
}
