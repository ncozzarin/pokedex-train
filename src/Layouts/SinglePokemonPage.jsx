import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectPokemonById } from '../features/pokemons/pokemonsSlice'

export const SinglePokemonPage = ({ match }) => {
  const { pokemonId } = match.params
  const pokemon = useSelector(state => {
    console.log(state)
    selectPokemonById(state,pokemonId)})

/*   const pokemon = useSelector(state =>
    state.pokemons.results.find(pokemon => pokemon.id === pokemonId)
  )
 */


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
        <p>{pokemon.id}</p>
      </article>
    </section>
  )
}