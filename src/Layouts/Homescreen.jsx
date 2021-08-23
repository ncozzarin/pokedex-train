import React, { useState } from 'react';
import Pokemonlist from '../Components/Pokemonlist';
import data from "../pokemons.json";

export default function HomeScreen() {
    const [ pokemonList, setPokemonList ] = useState(data);
    console.log(data);
  
      return (
          
         <Pokemonlist pokemonList={pokemonList} ></Pokemonlist>
    );
  }