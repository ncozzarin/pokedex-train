import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectPokemonById } from '../features/pokemons/pokemonsSlice'
import { getPokemonColor, getPokemonsData } from '../utils/fetchService'

export const SinglePokemonPage = ({ match }) => {
  const { name } = match.params
  const pokemon = useSelector(state => state.pokemons.pokemons.results && state.pokemons.pokemons.results.find(pokemon => pokemon.name === name));

  const getData = async (url) => {
    let response = await getPokemonsData(url);
    const color = await getPokemonColor(response.species.url);
    response.color = color;

    return response;
    }

  if (!pokemon) {
    return (
      <section>
        <h2>pokemon not found!</h2>
      </section>
    )
  }

  useEffect(() => {
    if(pokemon){
      getData(pokemon);
        }
}, [pokemon]);

  return (
    <section>
      <article>
        <h2>{pokemon.name}</h2>
        <p></p>
      </article>
    </section>
  )
}
