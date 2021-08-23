import React from 'react';
import Preview from './Preview';
 
 
const Pokemonlist = ({pokemonList}) => {
   return (
       <div class="grid grid-cols-3 m-3">
           {pokemonList.map(pokemon => {
               return (
                   <Preview pokemon={pokemon} />
               )
           })}
       </div>
   );
};
 
export default Pokemonlist;