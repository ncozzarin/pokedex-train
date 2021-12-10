import React from 'react';
import "../styles/output.css";



const PokemonTypes = ({types, color}) => {

  function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
    } 

    
  types && types.map(type => {
    type = capitalize(type);
    return(<h3 className={`bg-${color}-400 rounded-xl p-1 m-2 h-auto text-white text-l font-bold`}>{type.type.name} </h3>);
  }
    );
}
 
export default PokemonTypes;