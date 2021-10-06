import React from 'react'; 
import "../styles/output.css";
import PokemonThumbnail from '../Components/PokemonThumbnail';


const PokemonListItem = ({pokemon}) => {
    return (
            <div className="flex  justify-center align-center">
                <div className={`w-24 h-28 bg-white box-border border-2 rounded-xl border-${pokemon.color}-400 mb-2`}>
                    <div className={`flex justify-end mx-1 text-${pokemon.color}-400  text-xs`}>
                        <h3>{`#0${pokemon.id}`}</h3>
                    </div>
                    <div className="flex justify-center align-center -my-4">
                        <PokemonThumbnail key={pokemon.id} imgUrl={pokemon.sprites.front_default}></PokemonThumbnail>
                    </div>
                    <div className={`w-23 bg-${pokemon.color}-400 rounded-l flex justify-center text-white my-2 `}>
                        <h3>{pokemon.name}</h3>
                    </div>
                </div>
            </div>
   );
}
 
export default PokemonListItem;