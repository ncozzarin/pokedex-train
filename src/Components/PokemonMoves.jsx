import React from 'react';
import "../styles/output.css";



const PokemonMoves = ({moves}) => {

  function capitalize(str) {
    const lower = str.toLowerCase();
    return str.toString().charAt(0).toUpperCase() + lower.slice(1);
    } 
    const slicedMovesArray = moves.slice(0, 2);
    return( 
    slicedMovesArray && slicedMovesArray.map(move => {
    
    move.move.name = capitalize(move.move.name);
    return(<h3 className={` rounded-xl text-black text-sm`}>{move.move.name}</h3>);
  }
    ))
}
 
export default PokemonMoves;