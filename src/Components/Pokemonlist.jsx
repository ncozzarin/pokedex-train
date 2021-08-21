import React from 'react';
import Preview from './Preview';
 
 
const Pokemonlist = ({Pokemonlist}) => {
   return (
       <div>
           {Pokemonlist.map(pokemon => {
               return (
                   <Preview pokemon={pokemon} />
               )
           })}
       </div>
   );
};
 
export default ToDoList;