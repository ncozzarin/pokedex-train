
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import belongsToTheList from '../../utils/stringFuntions';

const initialState = {
    pokemons: [],
    status: 'idle',
    error: null,
    filter: null,
};

export const fetchPokemons = createAsyncThunk(
    'pokemons/fetchPokemons',
    async (limitNumber) => {
        //Aca hardcodee el offsetNumber
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=500&offset=0`,
        );
        const data = await response.json();
        return data;
    },
);

export const fetchPokemonsData = createAsyncThunk(
    'pokemons/getPokemonsData',
    async (pokemonUrl = '') => {
        console.log({ pokemonUrl });
        const response = await fetch(`${pokemonUrl}`);
        return response.json();
    },
);

export const fetchPokemonsColor = async (pokemonSpeciesUrl) => {
    const response = await fetch(`${pokemonSpeciesUrl}`);
    const data = await response.json();
    return data.color.name;
};

export const selectAllPokemons = (state) => state.pokemons;

export const selectPokemonById = (state, name) =>{
    return state && state.pokemons.pokemons.results && state.pokemons.pokemons.results.find(pokemon => pokemon.name == name);
}
const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        addPokemons: (state, action) => {
            state.pokemons.push(action.payload);
        },
        projectFilter: (state, action) => {
            state.filter = action.payload;
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Add any fetched pokemons to the array
                console.log(state.pokemons)
                state.pokemons = action.payload;
                console.log(state.pokemons)
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { projectFilter } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;













