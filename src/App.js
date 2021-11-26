import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./styles/output.css";
import "./Components/Pokemonlist";
import HomeScreen from '../src/Layouts/Homescreen';
import Detailscreen from '../src/Layouts/Detailscreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SinglePokemonPage } from './Layouts/SinglePokemonPage';
import { fetchPokemons } from './features/pokemons/pokemonsSlice';



function App(props) {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    if (pokemons.length === 0){
      dispatch(fetchPokemons(20,10));
      setPokemons([{},{}]);
    }
  })
  
  return (
    <Router>
      <Route path="/" component={HomeScreen}/>
      <Route exact path="/posts/:pokemonId" component={SinglePokemonPage}/>
    </Router>
    );
}

export default App;
