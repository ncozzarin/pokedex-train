import React from 'react'; 
import { Link } from 'react-router-dom';
import "../styles/output.css";
import PokemonThumbnail from './PokemonThumbnail';

const SinglePokemonCard = ({pokemon}) => {
    return (
    <div className={`justify-center align-center container mx-auto bg-origin-border h-screen border-4 border-opacity-100 border-blue-600 box-border border-2 rounded-xl border-${pokemon.color}-400`}>
        <div className={`h-2/6 bg-${pokemon.color}-400`}>
            <div className={`flex justify-between`}>
                <Link to={`/`}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded-full"></button></Link>
                <h1 className={`   text-white`}>{pokemon.name}</h1>
                <h3>{`#0${pokemon.id}`}</h3>
            </div>
            <div className={`flex justify-between`}>
            <PokemonThumbnail src={pokemon.sprites.front_shiny}></PokemonThumbnail>
            </div>
        </div>
        
        

    </div>
   );
}
 
export default SinglePokemonCard;