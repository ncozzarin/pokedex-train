import React, { useState, useEffect } from 'react';
import {getPokemonsData, getPokemonColor} from '../utils/fetchService';
import PokemonListItem from '../Components/PokemonListItem';


export default function Pokemonlist ({ pokemonsJSON }) {
    const [pokemons, setPokemons] = useState([]);
    let pokemonsArray = [];

    const getData = async url => {
        let response = await getPokemonsData(url);
        const color = await getPokemonColor(response.species.url);
        response.color = color;
        pokemonsArray.push(response);
        setPokemons(pokemonsArray);
    };

    useEffect(() => {
        pokemonsJSON && pokemonsJSON.map((pokemon) => {
            getData(pokemon.url);
        });

    },[pokemonsJSON]);

    return (
        pokemons && pokemons.map((pokemon) => {
            <ul>
                <PokemonListItem pokemon={pokemon}></PokemonListItem>        
            </ul>
        }));
}
