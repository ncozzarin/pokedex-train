import React from 'react'; 
 
const Preview = ({pokemon}) => {
   return (
       <div>
        <div>
            <span>{pokemon.name}</span>
        </div>
            <img src={`/img/${pokemon.img}.png`} alt={pokemon.name}/>
       </div>
   );
};
 
export default Preview;