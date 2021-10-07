import React, { useState, useEffect } from 'react';
import Pokemonlist from '../Components/Pokemonlist';
import {getPokemons} from '../utils/fetchService';
import Header from '../Components/Header';
import Search from '../Components/Search';

export default function HomeScreen() {
    const [pokemonsJSON, setPokemons] = useState();

    /* Use efect will check everytime a diff in the context */
    useEffect(() => {
        const getData = async () => {
            const response = await getPokemons(20,10);
            setPokemons(response.results);
        };

        getData();
    }, []);

    return (
        <div>
            <Header></Header>
            <Search></Search>
            {pokemonsJSON ? <Pokemonlist pokemonsJSON={pokemonsJSON}></Pokemonlist> : <h1>Error</h1>}
        </div>
    )    
}