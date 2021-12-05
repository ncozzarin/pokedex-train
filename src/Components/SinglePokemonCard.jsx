import React from 'react'; 
import { Link } from 'react-router-dom';
import "../styles/output.css";
import PokemonThumbnail from './PokemonThumbnail';

const SinglePokemonCard = ({pokemon}) => {
    if(!pokemon){
        return(      <section>
            <h2>pokemon not found!</h2>
          </section>)
    }
    return (
    <div className={`justify-center align-center container mx-auto bg-origin-border h-screen border-4 border-opacity-100 box-border border-2 rounded-xl border-${pokemon.color}-400`}>
        <div className={`h-2/6 bg-${pokemon.color}-400`}>
            <div className="flex justify-between text-white py-4 mx-4">
                <Link to={`/`}><svg width="10" height="20" viewBox="0 0 20 20" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z"/></svg>                </Link>
                <h1 className={`text-white`}>{pokemon.name}</h1>
                <h3>{`#0${pokemon.id}`}</h3>
            </div>
            <div className={`flex justify-between`}>
            <img src={pokemon.sprites.front_default}></img>
            </div>
        </div>
        <div className={`h-2/3 bg-white rounded-xl -my-2`}>hola</div>
    </div>
   );
}
 
export default SinglePokemonCard;