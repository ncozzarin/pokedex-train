import React from 'react';
import Preview from './Preview';
import {getPokemonsData} from '../utils/fetchService';
 

const Pokemonlist = ({pokemons}) => {

    const [pokemons, setPokemons] = useState();

    const getData = async () => await getPokemons(10,20);
    
    useEffect(() => {
      setPokemons(getData());
      }, []);
       
   return (

       <div className="grid grid-cols-3 m-3">
           {pokemons && pokemons.map(pokemon => {
               let data = getPokemonsData(pokemon.url);
               return (

                   <Preview pokemon={data} />
               )
           })}
       </div>
   );
};
 
export default Pokemonlist;