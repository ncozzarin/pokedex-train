import React, { useState, useEffect } from 'react';
import Pokemonlist from '../Components/Pokemonlist';
import data from "../pokemons.json";

export default function HomeScreen() {
    const [hasError, setErrors] = useState(false);
    const [pokemons, setPokemons] = useState();
    
    useEffect(() =>
    fetch("https://swapi.co/api/planets/4/")
      .then(res => res.json())
      .then(res => this.setState({ planets: res }))
      .catch(() => this.setState({ hasErrors: true }))
  );
    
    
    console.log(data);
  
      return (

         <Pokemonlist pokemonList={pokemonList} ></Pokemonlist>
    );
  }