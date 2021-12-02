import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectPokemonById } from '../features/pokemons/pokemonsSlice'

export const SinglePokemonPage = ({ match }) => {
  const { name } = match.params
  const pokemon = useSelector(state => state.pokemons.pokemons.results && state.pokemons.pokemons.results.find(pokemon => pokemon.name === name));
  console.log(pokemon)
  if (!pokemon) {
    return (
      <section>
        <h2>pokemon not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article>
        <h2>{pokemon.name}</h2>
        <p></p>
      </article>
    </section>
  )
}