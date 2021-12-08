import React from 'react';
import "../styles/output.css";

const PokemonTypes = ({types}) => {
    types && types.map(type => <h3>{type.type.name}</h3>);
}
 
export default PokemonTypes;