import React from 'react'; 
import "../styles/output.css";
import PokemonThumbnail from '../Components/PokemonThumbnail';


const PokemonListItem = ({pokemon}) => {
    return (
            <div className="flex  justify-center align-center">
                <div className={`w-auto h-28 bg-white box-border border-2 rounded-xl border-${pokemon.color}-400 mb-2`}>
                    <div className={`flex justify-end mx-1 text-${pokemon.color}-400   text-xs`}>
                        <h3>{`#0${pokemon.id}`}</h3>
                    </div>
                    <div className="flex justify-center align-center -my-3">
                        <PokemonThumbnail key={pokemon.id} imgUrl={pokemon.sprites.front_default}></PokemonThumbnail>
                    </div>
                    <div className={`w-auto bg-${pokemon.color}-400 -my-5 flex justify-center text-white `}>
                        <h3>{pokemon.name}</h3>
                    </div>
                    <div className={`w-full bg-${pokemon.color}-400 h-3 my-4 sm:h-2 sm:my-4 bg-red-400 rounded-xl`}></div>

                </div>
            </div>
   );
}
 
export default PokemonListItem;