import React from 'react'; 
import "../styles/output.css";


const PokemonListItem = ({pokemon}) => {
    return (
            <div key={pokemon.id}>
                <li key={pokemon.id}>{pokemon.name}</li>
            </div>
   );
}
 
export default PokemonListItem;