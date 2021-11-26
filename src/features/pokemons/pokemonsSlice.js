import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = [
  {}
]

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {}
})

export const fetchPokemons = createAsyncThunk('pokemons/getPokemons', async () => async (limitNumber, offsetNumber) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limitNumber}&offset=${offsetNumber}`);
  // const data = await response.json();
  console.log(response.data)
  return response.data;
})

export const fetchPokemonsData = createAsyncThunk('pokemons/getPokemonsData', async (pokemonUrl) => {
  const response = await fetch(`${pokemonUrl}`);
  const data = await response.json();
  return data;
})

export const fetchPokemonsColor = async (pokemonSpeciesUrl) => {
  const response = await fetch(`${pokemonSpeciesUrl}`);
  const data = await response.json();
  return data.color.name;
}

export const selectAllPokemnons = state => state.pokemons

export const selectPokemonById = (state, pokemonId) =>
  state.pokemons.find(pokemon => pokemon.id === pokemonId)

export default pokemonsSlice.reducer