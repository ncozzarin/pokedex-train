import React, { useState, useEffect } from 'react';
import Pokemonlist from '../Components/Pokemonlist';
import {getPokemons} from '../utils/fetchService';

export default function HomeScreen() {
    const [pokemonsJSON, setPokemons] = useState();

    const getData = async () => await getPokemons(10,20);
    console.log(pokemonsJSON);

    /* Use efect will check everytime a diff in the context */
    useEffect(() => {
      setPokemons(getData());
      }, []);
  
      return (

         <Pokemonlist pokemonList={pokemonsJSON} ></Pokemonlist>
    );
  }