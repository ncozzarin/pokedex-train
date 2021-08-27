import React, { useState, useEffect } from 'react';
import Pokemonlist from '../Components/Pokemonlist';
import {getPokemons} from '../utils/fetchService'

export default function HomeScreen() {
    const [pokemons, setPokemons] = useState();

    const getData = async () => await getPokemons(10,20);
    
    useEffect(() => {
      setPokemons(getData());
      }, []);

    
    console.log(pokemons);
  
      return (

         <Pokemonlist pokemonList={pokemons} ></Pokemonlist>
    );
  }