import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./styles/output.css";
import "./Components/Pokemonlist";
import HomeScreen from '../src/Layouts/Homescreen';
import Detailscreen from '../src/Layouts/Detailscreen';
import { fetchPokemons } from './redux/actions/pokemons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    if (pokemons.length === 0){
      dispatch(fetchPokemons());
      setPokemons([{},{}]);
    }
  })
  
  return (
    <Router>
      <Route path="/" component={HomeScreen}/>
      <Route exact path="/posts/:pokemonID" component={SinglePokemonPage}/>
    </Router>
    );
}

export default App;
