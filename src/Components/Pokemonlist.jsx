import React, { useState, useEffect } from 'react';



export default function Pokemonlist ({ pokemonsJSON }) {
    const [pokemons, setPokemons] = useState();

    useEffect(() => {

        const getPokemonsDetails = async (url) => {
            const response = await fetch(
                `${url}`,
            );
            const data = await response.json();
            setPokemons(data.results);
            
        };
    },[])

    return (
        <div className="grid grid-cols-3 m-3">
        <h2>Pokemon Name</h2>
            {pokemonsJSON &&
              pokemonsJSON.map((pokemon) => {

                   return (
                       <h1>{pokemon.name}</h1>
              )})}
        </div>
    );
}
