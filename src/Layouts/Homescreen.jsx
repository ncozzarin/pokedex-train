import React, { useState, useEffect } from 'react';
import Pokemonlist from '../Components/Pokemonlist';
import {getPokemons} from '../utils/fetchService';
import Header from '../Components/Header';
import Search from '../Components/search';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons, selectAllPokemnons } from '../features/pokemons/pokemonsSlice';

export default function HomeScreen() {
    const [pokemonsJSON, setPokemons] = useState();
    const dispatch = useDispatch();
    const pokemons = useSelector(selectAllPokemnons);
    const pokemonsStatus = useSelector(state => state.pokemons.status);
    /* Use efect will check everytime a diff in the context */
    useEffect(() => {
        if (pokemonsStatus === 'idle'){
            dispatch(fetchPokemons(20,10))
        }
    }, [pokemonsStatus, dispatch]);

    return (
        <div>
            <Header></Header>
            <Search></Search>
            {pokemonsJSON ? <Pokemonlist pokemonsJSON={pokemonsJSON}></Pokemonlist> : <h1>Error</h1>}
        </div>
    )    
}