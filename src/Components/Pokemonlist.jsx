import React, { useState } from 'react';
import Preview from './Preview';
import {getPokemonsData} from '../utils/fetchService';
 

const Pokemonlist = ({pokemonsJSON}) => {

    const [pokemons, setPokemons] = useState();
    
    setPokemons(pokemonsJSON);
   return (

       <div className="grid grid-cols-3 m-3">
           {pokemons && pokemons.map(pokemon => {
               let data = getPokemonsData(pokemon.url);
               return (

                   <Preview pokemon={data} />
               )
           })}
       </div>
   );
};
 
export default Pokemonlist;