import React from 'react'; 
import "../styles/output.css";
import PokemonThumbnail from '../Components/PokemonThumbnail';


const PokemonListItem = ({pokemon}) => {
    return (
            <div className={`w-24 h-28 bg-white box-border border-4 rounded-xl border-${pokemon.color}-400 `}>
                <div className="flex justify-end p-1">
                    <h3>{pokemon.id}</h3>
                </div>
                <div>
                    <PokemonThumbnail key={pokemon.id} imgUrl={pokemon.sprites.front_default}></PokemonThumbnail>
                </div>
                <div className={`bg-${pokemon.color}-400 w-24 rounded-l`}>
                    <h3>{pokemon.name}</h3>
                </div>
            </div>
   );
}
 
export default PokemonListItem;