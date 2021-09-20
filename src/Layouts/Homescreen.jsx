import React, { useState, useEffect } from 'react';
import Pokemonlist from '../Components/Pokemonlist';

export default function HomeScreen() {
    const [pokemonsJSON, setPokemons] = useState();

    /* Use efect will check everytime a diff in the context */
    useEffect(() => {
        const getPokemons = async (limitNumber, offsetNumber) => {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=${limitNumber}&offset=${offsetNumber}`,
            );
            const data = await response.json();
            setPokemons(data.results);
            
        };

        getPokemons(20, 10);
    }, []);

    return pokemonsJSON ? <Pokemonlist pokemonsJSON={pokemonsJSON}></Pokemonlist> : <h1>Error</h1>;
}