import React, { useState, useEffect } from 'react';
import Pokemonlist from '../Components/Pokemonlist';
import {getPokemons} from '../utils/fetchService';

export default function HomeScreen() {
    const [pokemons, setPokemons] = useState();

    const getData = async () => await getPokemons(10,20);
    

    /* Use efect will check everytime a diff in the context */
    useEffect(() => {
      setPokemons(getData());
      }, []);
  
      return (

         <Pokemonlist pokemonList={pokemons} ></Pokemonlist>
    );
  }