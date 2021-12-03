import React from 'react'; 
import "../styles/output.css";

const SinglePokemonCard = ({pokemon}) => {
    return (
            <div className="flex  justify-center align-center container mx-auto bg-origin-border h-screen border-4 border-opacity-100 border-blue-600	">
            <h1>{pokemon.name}</h1>
            <h2>{pokemon.color}</h2>

            </div>
   );
}
 
export default SinglePokemonCard;