import React, { useState, useEffect } from 'react';
import Pokemonlist from '../Components/Pokemonlist';
import Header from '../Components/Header';
import Search from '../Components/search';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons, selectAllPokemnons } from '../features/pokemons/pokemonsSlice';

export default function HomeScreen() {
    const [pokemonsJSON, setPokemons] = useState();


    return (
        <div>
            <Header></Header>
            <Search></Search>
            {pokemonsJSON ? <Pokemonlist pokemonsJSON={pokemonsJSON}></Pokemonlist> : <h1>Error</h1>}
        </div>
    )    
}