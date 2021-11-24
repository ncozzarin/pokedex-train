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

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts')
  return response.data
})

export const selectAllPokemnons = state => state.pokemons

export const selectPokemonById = (state, pokemonId) =>
  state.posts.find(pokemon => pokemon.id === pokemonId)

export default pokemonsSlice.reducer