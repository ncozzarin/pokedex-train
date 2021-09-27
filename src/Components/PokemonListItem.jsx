import React from 'react'; 
import "../styles/output.css";


const PokemonListItem = ({pokemons}) => {
    console.log(pokemons);
    return (
        pokemons && pokemons.map((pokemon) => 
            <div key={pokemon.id}>
                <li>{pokemon.name}</li>
            </div>
        )   
   );
}
 
export default PokemonListItem;