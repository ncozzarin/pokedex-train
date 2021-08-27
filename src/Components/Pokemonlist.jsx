import React from 'react';
import Preview from './Preview';
 
 
const Pokemonlist = ({pokemons}) => {

    const getPokemonsData = async () => {
        const response = await fetch({pokemon.url});
        const data = await response.json();
        console.log(data); 
    }
    
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