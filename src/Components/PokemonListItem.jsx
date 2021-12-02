import React from 'react'; 
import "../styles/output.css";
import PokemonThumbnail from '../Components/PokemonThumbnail';
import { Link } from 'react-router-dom'


const PokemonListItem = ({pokemon}) => {
    return (
            <div className="flex  justify-center align-center">
            <Link to={`/pokemons/${pokemon.name}`}>
                <div className={`group w-auto h-28 bg-white box-border border-2 rounded-xl border-${pokemon.color}-400 hover:shadow-lg cursor-pointer mb-2`}>
                    <div className={`flex justify-end mx-1 text-${pokemon.color}-400   text-xs`}>
                        <h3>{`#0${pokemon.id}`}</h3>
                    </div>
                    <div className="flex justify-center align-center -my-3">
                        <PokemonThumbnail key={pokemon.id} imgUrl={pokemon.sprites.front_default}></PokemonThumbnail>
                    </div>
                    <div className={`w-auto thumbnail-base-shape bg-${pokemon.color}-400 -my-5 flex justify-center text-white `}>
                        <h3>{pokemon.name}</h3>
                    </div>
                </div>
                </Link>
            </div>
   );
}
 
export default PokemonListItem;