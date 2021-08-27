import { data } from 'autoprefixer';
import React, { useState, useEffect } from 'react';
import Pokemonlist from '../Components/Pokemonlist';

export default function HomeScreen() {
    const [pokemons, setPokemons] = useState();

    useEffect(() => {
        getPokemons();
      }, []);
    
    const getPokemons = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=200");
        const data = await response.json();
        setPokemons(data);
    }
    
    console.log(pokemons);
  
      return (

         <Pokemonlist pokemonList={pokemons} ></Pokemonlist>
    );
  }