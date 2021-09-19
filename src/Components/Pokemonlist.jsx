import React, { useState } from 'react';
import Preview from './preview.jsx';
import {getPokemonsData} from '../utils/fetchService';
 

const Pokemonlist = ({pokemonsJSON}) => {
    const [pokemons, setPokemons] = useState([]);

    setPokemons(JSON.parse(pokemonsJSON));
   return (
        <div className="grid grid-cols-3 m-3">
           {pokemons && pokemons.map(pokemon => {
               let data = getPokemonsData(pokemon.url);
               return (
                   console.log(data)
               );
           })}
       </div>
   );
}; 
   export default Pokemonlist;