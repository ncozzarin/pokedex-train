import React, { useState, useEffect } from 'react';
import { getPokemonsData, getPokemonColor } from '../utils/fetchService';
import PokemonListItem from '../Components/PokemonListItem';
import { useSelector } from 'react-redux';
//Redux logic to consume pokemons frm store with useSelector
export const Pokemonlist = () => {
    const [pokemons, setPokemons] = useState([]);
    let pokemonsArray = [];
    const pokemonsJSON = useSelector(
        (state) =>{ 
            const all = state.pokemons;
            const filterRef = state.pokemons.filter;
            console.log(all)
            if(filterRef === null){
                return all;
            }
            else{
                return all.pokemons.results.filter(
                    (all) => {
                        if(filterRef == ""){
                            return all;
                        } else if(all.name.includes(filterRef)) {
                            return all.pokemons.results.name.includes(filterRef);
                        }
                    }
                )
            }
            state.pokemons})
    
    const getData = async (url, i) => {
        let response = await getPokemonsData(url);
        const color = await getPokemonColor(response.species.url);
        response.color = color;
        pokemonsArray.push(response);
        if (i === pokemonsJSON.pokemons.results.length - 1){
            setPokemons(pokemonsArray);
        }
        return response;
    };

    useEffect(() => {
        if(pokemonsJSON.status === "succeeded"){
            pokemonsJSON.pokemons.results && pokemonsJSON.pokemons.results.map((pokemon, i) => {
                getData(pokemon.url, i);
            });
        }
    }, [pokemonsJSON]);

    const renderedPokemons = pokemons && pokemons.map(pokemon => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon}></PokemonListItem>
    ))
    
    return (
        <div className="grid grid-cols-3 m-3">
        {renderedPokemons}
        </div>
    )
}

export default Pokemonlist;