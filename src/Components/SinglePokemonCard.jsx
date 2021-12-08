import React from 'react'; 
import { Link } from 'react-router-dom';
import "../styles/output.css";
import PokemonFront from './PokemonFront';
import backArrow from '../Images/Vector.svg'
import BackgroundPokeball from '../Images/BackgroundPokeball.svg'
import PokemonTypes from './PokemonTypes';

const SinglePokemonCard = ({pokemon}) => {
    if(Object.keys(pokemon).length === 0){
        return(
        <section>
            <h2>pokemon not found!</h2>
        </section>);
    }

    return (
    <div className="h-screen border-8 border-white rounded-xl">
    <div className={`justify-center align-center container bg-origin-border h-full border-4 border-opacity-100 box-border border-2 rounded-xl border-${pokemon.color}-400`}>
        <div className={`h-2/6 bg-${pokemon.color}-400`}>
            <div className="flex justify-between items-center text-white py-4 mx-4">
                <Link to={`/`}><img src={backArrow}></img></Link>
                <h1 className={`text-white text-xl font-bold`}>{pokemon.name}</h1>
                <h3>{`#0${pokemon.id}`}</h3>
            </div>
            <div className="hero container mx-auto my-6">
                <img className="mx-auto transform scale-200	" src={pokemon.sprites.front_default}></img>
            </div>
        </div>
        <div className={`h-2/3 bg-white rounded-xl block -my-2 `}>
            <div className="block -my-8">
                <PokemonTypes types={pokemon.types}></PokemonTypes>
                <div>
                    weight
                </div>
                <div>
                    <p>{pokemon.description}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
   );
}
 
export default SinglePokemonCard;