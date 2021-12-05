import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SinglePokemonCard from '../Components/SinglePokemonCard'
import { getPokemonColor, getPokemonsData } from '../utils/fetchService'

export const SinglePokemonPage = ({ match }) => {
  const { name } = match.params
  const [pokemon, setPokemon] = useState({});
  const pokemonRef = useSelector(state => state.pokemons.pokemons.results && state.pokemons.pokemons.results.find(pokemon => pokemon.name === name));
  
  const getDataSingle = async (url) => {
    let response = await getPokemonsData(url);
    const color = await getPokemonColor(response.species.url);
    response.color = color;
    setPokemon(response);
    }
    
  useEffect(() => {
    if(pokemonRef !== undefined){
    getDataSingle(pokemonRef.url);}
}, [pokemonRef]);

const renderedPokemon = () => (
  <SinglePokemonCard pokemon={pokemon} ></SinglePokemonCard>
)  


  if (!pokemon) {
    return (
      <section>
        <h2>pokemon not found!</h2>
      </section>
    )
  }

  return (
    <SinglePokemonCard pokemon={pokemon}></SinglePokemonCard>
    
  )

}
