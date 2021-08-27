import React from 'react';
import Preview from './Preview';
 
 
const Pokemonlist = ({pokemons}) => {

    
   return (

       <div className="grid grid-cols-3 m-3">
           {pokemons && pokemons.map(pokemon => {
               return (

                   <Preview pokemon={pokemon} />
               )
           })}
       </div>
   );
};
 
export default Pokemonlist;