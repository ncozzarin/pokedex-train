import React, { useState, useEffect } from 'react';
import Pokemonlist from '../Components/Pokemonlist';
import data from "../pokemons.json";
const fetchURL = "https://pokeapi.co/api/v2/";
export default function HomeScreen() {
    const [hasError, setErrors] = useState(false);
    const [pokemons, setPokemons] = useState();
    
    const getPokemons = () =>
    fetch(`${fetchURL}/pokemon?limit=10&offset=200`)
      .then((res) => res.json())
    
    useEffect(() => {
        getPokemons().then((pokemons) => setPokemons(pokemons))
      }, [])
    
    
    console.log(pokemons);
  
      return (

         <Pokemonlist pokemonList={pokemons} ></Pokemonlist>
    );
  }