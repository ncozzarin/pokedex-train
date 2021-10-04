import React from 'react';
import "../styles/output.css";



const PokemonThumbnail = ({imgUrl}) => {
    return (
        <img src={imgUrl}></img>
   );
}
 
export default PokemonThumbnail;