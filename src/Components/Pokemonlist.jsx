import React, { useState, useEffect } from 'react';
import {getPokemonsData, getPokemonColor} from '../utils/fetchService';
import PokemonListItem from '../Components/PokemonListItemComponent';


export default function Pokemonlist ({ pokemonsJSON }) {
    const [pokemons, setPokemons] = useState([]);

    const getData = async url => {
        let response = await getPokemonsData(url);
        console.log(response.species.url);
        const color = await getPokemonColor(response.species.url);
        console.log(color);
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
        <div>
        <h2>Pokemon Name</h2>
        <div>
        {pokemons && pokemons.map((pokemon) => {
                   return (
                    <div>
                        <PokemonListItem key={pokemon.id} pokemon={pokemon}></PokemonListItem>
                    </div>
              )})}
        </div>
        </div>
    );
}
