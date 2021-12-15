import React from 'react';
import Pokemonlist from './Pokemonlist';
import Header from '../Components/Header';
import Search from '../Components/search';
import "../styles/output.css";


export default function HomeScreen() {
    return (
        <div>
            <Header></Header>
            <Search ></Search>
            <Pokemonlist></Pokemonlist>
        </div>
    )    
}