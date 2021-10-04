import React from 'react'; 
import "../styles/output.css";
import PokemonThumbnail from '../Components/PokemonThumbnail';


const PokemonListItem = ({pokemon}) => {
    return (
        <div className={`box-border h-32 w-32 m-2 border-4 rounded-xl border-${pokemon.color}-400 block`}>
        <div className="flex justify-end p-1">
            <span>{pokemon.id}</span>
        </div>
        <PokemonThumbnail imgUrl={pokemon.sprites.front_default}></PokemonThumbnail>
        <div className={`bg-${pokemon.color}-400 w-32 rounded-xl flex justify-center -mx-1 my-9 p-1`}>
            <span>{pokemon.name}</span>
        </div>
    </div>
   );
}
 
export default PokemonListItem;