import React from 'react';
import "../styles/output.css";



const PokemonFront = ({Url}) => {
    console.log(Url)
    return (
        <img src={Url.front_default}></img>
   );
}
 
export default PokemonFront;