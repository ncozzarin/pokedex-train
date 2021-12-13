import React from 'react'; 
import { Link } from 'react-router-dom';
import "../styles/output.css";
import backArrow from '../Images/Vector.svg';
import scaleIcon from '../Images/weight.svg';
import rulerIcon from '../Images/rulerIcon.svg';
import PokemonTypes from './PokemonTypes';
import PokemonMoves from './PokemonMoves';
import ProgressBar from './ProgressBar'; 

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
                <img className="mx-auto transform scale-150	" src={pokemon.sprites.front_default}></img>
            </div>
        </div>
        <div className={`h-2/3 bg-white rounded-xl block -my-2 justify-center align-center container`}>
            <div className="block  -my-8 w-auto">
                <br></br>
                <br></br>
                <div className="flex w-auto justify-center align-center">
                <PokemonTypes types={pokemon.types} color={pokemon.color}></PokemonTypes>
                </div>
                <div className="flex w-auto justify-center align-center">
                    <h3 className={`text-${pokemon.color}-500 text-l font-bold`}>About</h3>
                </div>
                <div className="flex justify-between justify-center align-center container mx-4 divide-x divide-gray-400">
                    <div className="container block justify-center align-center">
                        <div className="flex">
                            <img src={scaleIcon}></img>
                            <p className="ml-1">{pokemon.weight} kg</p>
                        </div>
                        <p className="text-gray-600 text-sm my-4">Weight</p>
                    </div>

                    <div className="container block justify-center align-center px-2 -mx-2">
                        <div className="flex">
                            <img src={rulerIcon}></img>
                            <p className="ml-1">{pokemon.height} m</p>
                        </div>
                        <p className="text-gray-600 text-sm my-4">Height</p>
                    </div>

                    <div className="container block justify-center align-center px-4">
                        <div className="block">
                            <PokemonMoves moves={pokemon.moves}></PokemonMoves>
                        </div>
                        <p className="text-gray-600 text-sm">Moves</p>
                    </div>
                    

                </div>
                <div className="flex items-center text-m mx-2">
                    <p className="text-justify w-full">{pokemon.description}</p>
                </div>

                <div className="flex w-auto justify-center align-center my-4">
                    <h3 className={`text-${pokemon.color}-500 text-l font-bold`}>Base Stats</h3>
                </div>
                <div className="flex container align-center items-center">
                    <h3 className={`text-${pokemon.color}-500 text-l font-bold ml-2`}>HP</h3>
                    <p className="ml-10 mr-2">{pokemon.stats[0].base_stat}</p>
                    <ProgressBar stat={pokemon.stats[0].base_stat} color={pokemon.color} className="w-4/5"></ProgressBar>
                </div>
                <div className="flex container align-center items-center">
                    <h3 className={`text-${pokemon.color}-500 text-l font-bold ml-2`}>ATK</h3>
                    <p className="ml-8 mr-2">{pokemon.stats[1].base_stat}</p>
                    <ProgressBar stat={pokemon.stats[1].base_stat} color={pokemon.color} className="w-4/5"></ProgressBar>
                </div>
                <div className="flex container align-center items-center">
                    <h3 className={`text-${pokemon.color}-500 text-l font-bold ml-2`}>DEF</h3>
                    <p className="ml-8 mr-2">{pokemon.stats[2].base_stat}</p>
                    <ProgressBar stat={pokemon.stats[2].base_stat} color={pokemon.color} className="w-4/5"></ProgressBar>
                </div>
                <div className="flex container align-center items-center">
                    <h3 className={`text-${pokemon.color}-500 text-l font-bold ml-2`}>SATK</h3>
                    <p className="ml-6 mr-2">{pokemon.stats[3].base_stat}</p>
                    <ProgressBar stat={pokemon.stats[3].base_stat} color={pokemon.color} className="w-4/5"></ProgressBar>
                </div>
                <div className="flex container align-center items-center">
                    <h3 className={`text-${pokemon.color}-500 text-l font-bold ml-2`}>SDEF</h3>
                    <p className="ml-6 mr-2">{pokemon.stats[4].base_stat}</p>
                    <ProgressBar stat={pokemon.stats[4].base_stat} color={pokemon.color} className="w-4/5"></ProgressBar>
                </div>
                <div className="flex container align-center items-center">
                    <h3 className={`text-${pokemon.color}-500 text-l font-bold ml-2`}>SPD</h3>
                    <p className="ml-8 mr-2">{pokemon.stats[5].base_stat}</p>
                    <ProgressBar stat={pokemon.stats[5].base_stat} color={pokemon.color} className="w-4/5"></ProgressBar>
                </div>              
            </div>
        </div>
    </div>
    </div>
   );
}
 
export default SinglePokemonCard;