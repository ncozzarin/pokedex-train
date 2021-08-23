import React from 'react';
import Preview from './Preview';
 
 
const Pokemonlist = ({pokemonList}) => {
   return (
       <div>
           {pokemonList.map(pokemon => {
               return (
                   <Preview pokemon={pokemon} />
               )
           })}
       </div>
   );
};
 
export default Pokemonlist;