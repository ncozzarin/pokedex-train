import React from 'react'; 
 
const Preview = ({pokemon}) => {
   return (
       <div>
        <div>
            <span>{pokemon.name}</span>
        </div>
            <img src={`../Images/${pokemon.img}`} alt={pokemon.name}/>
       </div>
   );
};
 
export default Preview;