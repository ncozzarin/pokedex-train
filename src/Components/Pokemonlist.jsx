import React, { useState } from 'react';


const Pokemonlist = ({ pokemonsJSON }) => {

    return (
        <div className="grid grid-cols-3 m-3">
        <h2>Pokemon Name</h2>
            {pokemonsJSON &&
              pokemonsJSON.map((pokemon) => {

                   return <h1>{pokemon.name}</h1>
                })}
        </div>
    );
};
export default Pokemonlist;