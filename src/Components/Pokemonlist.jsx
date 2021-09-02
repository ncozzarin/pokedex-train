import React from 'react';
import Preview from './Preview';
import {getPokemonsData} from '../utils/fetchService';
 

const Pokemonlist = ({dataJseon}) => {

    const [pokemons, setPokemons] = useState();

    const getData = async () => await getPokemons(10,20);
    
    useEffect(() => {
      setPokemons(getData());
      }, []);
       
   return (

       <div className="grid grid-cols-3 m-3">
           {pokemons && pokemons.map(pokemon => {
               return (

                   <Preview pokemon={pokemon} />
               )
           })}
       </div>
   );
};
 
export default Pokemonlist;