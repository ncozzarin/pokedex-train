

            import React from 'react'; 
import "../styles/output.css";


const PokemonListItem = ({pokemon}) => {
   return (
    <div>
        <span>{pokemon.name}</span>
        <div className={`box-border h-32 w-32 m-2 border-4 rounded-xl border-${pokemon.color} block`}>
        <div className="flex justify-end p-1">
            <span>{pokemon.id}</span>
        </div>
    {/*<img src={`./src/Images/${pokemon.img}`} alt={pokemon.name}/>*/}
        <div className={`bg-${pokemon.color} w-32 rounded-xl flex justify-center -mx-1 my-9 p-1`}>
            <span>{pokemon.name}</span>
        </div>
        
    </div>
        {/*<img src={`../Images/${pokemon.img}`} alt={pokemon.name}/>*/}
   </div>
   
   );
};
 
export default PokemonListItem;