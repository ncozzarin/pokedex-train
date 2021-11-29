import React, { useState, useEffect } from 'react';
import Pokemonlist from '../Components/Pokemonlist';
import Header from '../Components/Header';
import Search from '../Components/search';
import { useSelector } from 'react-redux';
import { selectAllPokemons } from '../features/pokemons/pokemonsSlice';

export default function HomeScreen() {
    const [pokemonsJSON, setPokemons] = useState();
    setPokemons(useSelector(state => state.pokemons));
    console.log(pokemonsJSON);

    return (
        <div>
            <Header></Header>
            <Search></Search>
            
        </div>
    )    
}