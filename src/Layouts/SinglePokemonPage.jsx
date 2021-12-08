import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SinglePokemonCard from '../Components/SinglePokemonCard'
import { getPokemonColor, getPokemonDescription, getPokemonsData } from '../utils/fetchService'

export const SinglePokemonPage = ({ match }) => {
  const { name } = match.params
  const [pokemon, setPokemon] = useState({});
  const pokemonRef = useSelector(state => state.pokemons.pokemons.results && state.pokemons.pokemons.results.find(pokemon => pokemon.name === name));
  
  function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }
  const getDataSingle = async (url) => {
    let response = await getPokemonsData(url);
    const color = await getPokemonColor(response.species.url);
    response.color = color;
    const description = await getPokemonDescription(response.id)
    response.description = description;
    response.name = capitalize(response.name) 
    setPokemon(response);
    }
    
  useEffect(() => {
    if(pokemonRef !== undefined){
    getDataSingle(pokemonRef.url);}
}, [pokemonRef]);

  if (!pokemon) {
    return (
      <section>
        <h2>pokemon not found!</h2>
      </section>
    );
  }

  return (
    <SinglePokemonCard pokemon={pokemon}></SinglePokemonCard>
  );

}
