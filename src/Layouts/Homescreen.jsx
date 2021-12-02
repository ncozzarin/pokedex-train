import React from 'react';
import Pokemonlist from '../Components/Pokemonlist';
import Header from '../Components/Header';
import Search from '../Components/search';


export default function HomeScreen() {
    return (
        <div>
            <Header></Header>
            <Search></Search>
            <Pokemonlist></Pokemonlist>
        </div>
    )    
}