import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = [
  {}
]

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {}
})

export const fetchPosts = createAsyncThunk('pokemons/getPokemons', async () => async (limitNumber, offsetNumber) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limitNumber}&offset=${offsetNumber}`);
  const data = await response.json();
  return data;
})

export const selectAllPokemnons = state => state.pokemons

export const selectPokemonById = (state, pokemonId) =>
  state.pokemons.find(pokemon => pokemon.id === pokemonId)

export default pokemonsSlice.reducer