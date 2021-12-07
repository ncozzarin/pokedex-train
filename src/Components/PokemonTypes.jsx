import React from 'react';
import "../styles/output.css";



const PokemonTypes = ({types}) => {
    types && types.map(type => {
    console.log(type.name)
    return (
        <div>hello</div>
   )})
}
 
export default PokemonTypes;