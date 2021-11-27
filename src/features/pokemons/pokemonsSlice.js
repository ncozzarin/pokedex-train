import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const initialState = {
  pokemons:[],
  status: 'idle',
  error: null
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    addPokemons: state => {
        state.pokemons.push(action.payload)
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPokemons.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched pokemons to the array
        state.pokemons = state.pokemons.concat(action.payload)
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const fetchPokemons = createAsyncThunk('pokemons/fetchPokemons', async () => async (limitNumber, offsetNumber) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limitNumber}&offset=${offsetNumber}`);
  // const data = await response.json();
  console.log(response.data)
  useDispatch(addPokemons());
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

// codigo de mati

