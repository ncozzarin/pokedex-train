import React, { useState } from 'react';
import Preview from './Preview';
import {getPokemonsData} from '../utils/fetchService';
 

// eslint-disable-next-line react/prop-types
const Pokemonlist = ({pokemonsJSON}) => {
    const [pokemons, setPokemons] = useState();
    
    setPokemons(pokemonsJSON);
    console.log(pokemons);
   return (
    <div>hola</div>
/*        <div className="grid grid-cols-3 m-3">
           {pokemons && pokemons.map(pokemon => {
               let data = getPokemonsData(pokemon.url);
               return (

                   <Preview key={pokemonsJSON} pokemon={data}/>
               )
           })}
       </div>
   );
}; */
   );

   export default Pokemonlist;